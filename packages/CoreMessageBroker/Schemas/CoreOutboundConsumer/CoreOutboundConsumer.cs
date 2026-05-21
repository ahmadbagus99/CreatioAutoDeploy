using System;
using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using Terrasoft.Core;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public class OutboundConsumer : IDisposable
    {
        private readonly IModel         _channel;
        private readonly UserConnection _userConnection;

        // REST clients (Pilihan A — dipakai kalau tidak ada MQ config)
        private ExternalApiClient _mitraPortal;
        private ExternalApiClient _fms;

        // RabbitMQ publishers (Pilihan B — dipakai kalau integration.*.mq connection string ada)
        private ExternalRabbitMQPublisher _mitraPortalMQ;
        private ExternalRabbitMQPublisher _fmsMQ;

        public OutboundConsumer(UserConnection userConnection)
        {
            _userConnection = userConnection;
            _channel        = RabbitMQConnectionManager.Instance.CreateChannel();
            _channel.BasicQos(0, 1, false);
        }

        public void Start()
        {
            QueueSetup.EnsureTopology(_channel);

            // Pilihan B — external RabbitMQ (prioritas utama kalau ada config)
            var mpMQConfig  = RabbitMQConfig.MitraPortalMQ;
            var fmsMQConfig = RabbitMQConfig.FmsMQ;

            if (mpMQConfig != null)
            {
                try
                {
                    _mitraPortalMQ = new ExternalRabbitMQPublisher(mpMQConfig);
                    IntegrationLogger.Info($"[OutboundConsumer] MitraPortal → RabbitMQ ({mpMQConfig.Host}/{mpMQConfig.Exchange})");
                }
                catch (Exception ex) { IntegrationLogger.Error("[OutboundConsumer] MitraPortal MQ config error", ex); }
            }

            if (fmsMQConfig != null)
            {
                try
                {
                    _fmsMQ = new ExternalRabbitMQPublisher(fmsMQConfig);
                    IntegrationLogger.Info($"[OutboundConsumer] FMS → RabbitMQ ({fmsMQConfig.Host}/{fmsMQConfig.Exchange})");
                }
                catch (Exception ex) { IntegrationLogger.Error("[OutboundConsumer] FMS MQ config error", ex); }
            }

            // Pilihan A — REST fallback kalau tidak ada MQ publisher
            if (_mitraPortalMQ == null)
            {
                try { _mitraPortal = new ExternalApiClient(RabbitMQConfig.MitraPortal, _userConnection); }
                catch (Exception ex) { IntegrationLogger.Error("[OutboundConsumer] MitraPortal REST config error", ex); }
            }

            if (_fmsMQ == null)
            {
                try { _fms = new ExternalApiClient(RabbitMQConfig.Fms, _userConnection); }
                catch (Exception ex) { IntegrationLogger.Error("[OutboundConsumer] FMS REST config error", ex); }
            }

            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += OnReceived;
            _channel.BasicConsume(RabbitMQConfig.OutboundQueue, autoAck: false, consumer: consumer);

            IntegrationLogger.Info($"[OutboundConsumer] Started on queue={RabbitMQConfig.OutboundQueue}");
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

                IntegrationLogger.LogConsume(messageId, RabbitMQConfig.OutboundQueue, "Processing", json);

                var mqPublisher = ResolveMQPublisher(message.Target);
                if (mqPublisher != null)
                {
                    // Pilihan B — kirim ke external RabbitMQ
                    mqPublisher.Publish(message);
                }
                else
                {
                    // Pilihan A — kirim via REST
                    var client = ResolveRestClient(message.Target);
                    if (client == null)
                        throw new Exception($"Unknown target '{message.Target}'. Valid: MitraPortal, FMS");

                    if (message.Operation == "FileUpload" && !string.IsNullOrEmpty(message.FileContentBase64))
                    {
                        var fileBytes = Convert.FromBase64String(message.FileContentBase64);
                        client.SendFile("/api/documents", message.FileName, fileBytes,
                            message.Payload, $"{message.Target}/documents");
                    }
                    else
                    {
                        client.SendJson("/api/data", message,
                            $"{message.Target}/{message.EntityName}/{message.Operation}");
                    }
                }

                _channel.BasicAck(args.DeliveryTag, false);
                IntegrationLogger.LogConsume(messageId, RabbitMQConfig.OutboundQueue, "Success", json, "ACK");
            }
            catch (Exception ex)
            {
                if (RetryHandler.ShouldMoveToDlq(retryCount))
                {
                    IntegrationLogger.Error($"[OutboundConsumer] Max retries id={messageId}", ex);
                    RetryHandler.MoveToDlq(_channel, args, "dlq.out", messageId, ex.Message, json);
                }
                else
                {
                    IntegrationLogger.LogRetry(messageId, retryCount + 1, ex.Message, json);
                    _channel.BasicNack(args.DeliveryTag, false, requeue: false);
                }
            }
        }

        private ExternalRabbitMQPublisher ResolveMQPublisher(string target)
        {
            if (string.IsNullOrEmpty(target)) return null;
            switch (target.ToLower())
            {
                case "mitraportal": return _mitraPortalMQ;
                case "fms":         return _fmsMQ;
                default:            return null;
            }
        }

        private ExternalApiClient ResolveRestClient(string target)
        {
            if (string.IsNullOrEmpty(target)) return null;
            switch (target.ToLower())
            {
                case "mitraportal": return _mitraPortal;
                case "fms":         return _fms;
                default:            return null;
            }
        }

        public void Dispose()
        {
            _channel?.Dispose();
            _mitraPortalMQ?.Dispose();
            _fmsMQ?.Dispose();
            _mitraPortal?.Dispose();
            _fms?.Dispose();
        }
    }
}
