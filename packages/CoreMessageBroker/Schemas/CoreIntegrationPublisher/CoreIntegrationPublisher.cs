using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    // ── Outbound: Creatio → external system ──────────────────────────────────
    //
    //   using (var pub = new IntegrationPublisher())
    //       pub.PublishJson("MitraPortal", "Contact", "Update", "RecordSave", payload);
    //
    //   using (var pub = new IntegrationPublisher())
    //       pub.PublishFile("FMS", "Document", "report.pdf", fileBytes, metadata);
    //
    // ── Inbound: external system hit Creatio web service → queue → InboundConsumer ──
    //
    //   // Inside your Creatio web-service handler:
    //   using (var pub = new IntegrationPublisher())
    //       pub.PublishInbound("MitraPortal", "Order", "Create", payload);

    public class IntegrationPublisher : IDisposable
    {
        private readonly IModel _channel;

        public IntegrationPublisher()
        {
            _channel = RabbitMQConnectionManager.Instance.CreateChannel();
            QueueSetup.EnsureTopology(_channel);
        }

        // Outbound — Creatio → Mitra Portal / FMS
        public void PublishJson(string target, string entityName, string operation, string triggerType, object payload)
        {
            var message = new IntegrationMessage
            {
                Target      = target,
                EntityName  = entityName,
                Operation   = operation,
                TriggerType = triggerType,
                Payload     = payload,
                Source      = "Creatio"
            };
            Publish(message, RabbitMQConfig.OutboundRoutingKey);
        }

        public void PublishFile(string target, string entityName, string fileName, byte[] fileContent, object metadata = null)
        {
            var message = new IntegrationMessage
            {
                Target              = target,
                EntityName          = entityName,
                Operation           = "FileUpload",
                TriggerType         = "Manual",
                FileName            = fileName,
                FileContentBase64   = Convert.ToBase64String(fileContent),
                Payload             = metadata,
                Source              = "Creatio"
            };
            Publish(message, RabbitMQConfig.OutboundRoutingKey);
        }

        // Inbound — called from Creatio web-service handler when external system posts data
        // Returns the messageId so the caller can include it in the HTTP response
        public string PublishInbound(string source, string entityName, string operation, object payload)
        {
            var message = new IntegrationMessage
            {
                Target      = "Creatio",
                EntityName  = entityName,
                Operation   = operation,
                TriggerType = "InboundWebService",
                Payload     = payload,
                Source      = source
            };
            Publish(message, RabbitMQConfig.InboundRoutingKey);
            return message.MessageId;
        }

        private void Publish(IntegrationMessage message, string routingKey)
        {
            var bodyJson = JsonConvert.SerializeObject(message);
            var body     = Encoding.UTF8.GetBytes(bodyJson);
            var props    = _channel.CreateBasicProperties();
            props.Persistent  = true;
            props.MessageId   = message.MessageId;
            props.Timestamp   = new AmqpTimestamp(DateTimeOffset.UtcNow.ToUnixTimeSeconds());
            props.Headers     = new Dictionary<string, object>
            {
                ["x-target"]    = message.Target ?? string.Empty,
                ["x-entity"]    = message.EntityName ?? string.Empty,
                ["x-operation"] = message.Operation ?? string.Empty,
                ["x-source"]    = message.Source ?? string.Empty
            };

            var queue = routingKey == RabbitMQConfig.InboundRoutingKey
                ? RabbitMQConfig.InboundQueue
                : RabbitMQConfig.OutboundQueue;

            _channel.BasicPublish(
                exchange:        RabbitMQConfig.MainExchange,
                routingKey:      routingKey,
                basicProperties: props,
                body:            body);

            IntegrationLogger.LogPublish(message.MessageId, queue, message.EntityName, bodyJson);
        }

        public void Dispose() => _channel?.Dispose();
    }
}
