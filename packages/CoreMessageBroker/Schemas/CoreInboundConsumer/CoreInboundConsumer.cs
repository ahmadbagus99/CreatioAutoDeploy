using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using Terrasoft.Core;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public class InboundConsumer : IDisposable
    {
        private readonly IModel          _channel;
        private readonly UserConnection  _userConnection;

        private static readonly List<InboundMessageHandler> _handlers =
            new List<InboundMessageHandler>();

        // Daftarkan handler dari AppEventListener sebelum Start() dipanggil
        public static void RegisterHandler(InboundMessageHandler handler)
        {
            if (handler != null) _handlers.Add(handler);
        }

        public InboundConsumer(UserConnection userConnection = null)
        {
            _userConnection = userConnection;
            _channel        = RabbitMQConnectionManager.Instance.CreateChannel();
            _channel.BasicQos(0, 1, false);
        }

        public void Start()
        {
            QueueSetup.EnsureTopology(_channel);

            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += OnReceived;
            _channel.BasicConsume(RabbitMQConfig.InboundQueue, autoAck: false, consumer: consumer);

            IntegrationLogger.Info($"[InboundConsumer] Started on queue={RabbitMQConfig.InboundQueue}, handlers={_handlers.Count}");
        }

        private void OnReceived(object sender, BasicDeliverEventArgs args)
        {
            string messageId  = args.BasicProperties?.MessageId ?? Guid.NewGuid().ToString();
            int    retryCount = RetryHandler.GetRetryCount(args);
            string json       = string.Empty;

            try
            {
                json = Encoding.UTF8.GetString(args.Body.ToArray());
                var message = JsonConvert.DeserializeObject<IntegrationMessage>(json);

                IntegrationLogger.LogConsume(messageId, RabbitMQConfig.InboundQueue, "Processing", json);

                Dispatch(message);

                _channel.BasicAck(args.DeliveryTag, false);
                IntegrationLogger.LogConsume(messageId, RabbitMQConfig.InboundQueue, "Success", json, "ACK");
            }
            catch (Exception ex)
            {
                if (RetryHandler.ShouldMoveToDlq(retryCount))
                {
                    IntegrationLogger.Error($"[InboundConsumer] Max retries reached id={messageId}", ex);
                    RetryHandler.MoveToDlq(_channel, args, "dlq.in", messageId, ex.Message, json);
                }
                else
                {
                    IntegrationLogger.LogRetry(messageId, retryCount + 1, ex.Message, json);
                    _channel.BasicNack(args.DeliveryTag, false, requeue: false);
                }
            }
        }

        private void Dispatch(IntegrationMessage message)
        {
            var handler = _handlers.FirstOrDefault(h => Matches(h, message));

            if (handler == null)
            {
                IntegrationLogger.Info(
                    $"[InboundConsumer] No handler registered for " +
                    $"source={message.Source} entity={message.EntityName} operation={message.Operation}");
                return;
            }

            handler.Handle(message, _userConnection);
        }

        private static bool Matches(InboundMessageHandler h, IntegrationMessage m)
        {
            return (h.Source     == "*" || string.Equals(h.Source,     m.Source,     StringComparison.OrdinalIgnoreCase))
                && (h.EntityName == "*" || string.Equals(h.EntityName, m.EntityName, StringComparison.OrdinalIgnoreCase))
                && (h.Operation  == "*" || string.Equals(h.Operation,  m.Operation,  StringComparison.OrdinalIgnoreCase));
        }

        public void Dispose() => _channel?.Dispose();
    }
}
