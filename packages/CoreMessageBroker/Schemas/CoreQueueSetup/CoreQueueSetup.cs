using System.Collections.Generic;
using RabbitMQ.Client;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    // Dipanggil sekali saat startup — idempotent, aman dipanggil berulang kali
    public static class QueueSetup
    {
        public static void EnsureTopology(IModel channel)
        {
            // Exchanges
            channel.ExchangeDeclare(RabbitMQConfig.MainExchange,  ExchangeType.Direct, durable: true);
            channel.ExchangeDeclare(RabbitMQConfig.DlxExchange,   ExchangeType.Direct, durable: true);
            channel.ExchangeDeclare(RabbitMQConfig.RetryExchange,  ExchangeType.Direct, durable: true);

            // === OUTBOUND (Creatio → External) ===
            channel.QueueDeclare(RabbitMQConfig.OutboundQueue, durable: true, exclusive: false, autoDelete: false,
                arguments: new Dictionary<string, object> {
                    ["x-dead-letter-exchange"]    = RabbitMQConfig.RetryExchange,
                    ["x-dead-letter-routing-key"] = "retry.out"
                });
            channel.QueueBind(RabbitMQConfig.OutboundQueue, RabbitMQConfig.MainExchange, RabbitMQConfig.OutboundRoutingKey);

            channel.QueueDeclare(RabbitMQConfig.OutboundRetryQueue, durable: true, exclusive: false, autoDelete: false,
                arguments: new Dictionary<string, object> {
                    ["x-dead-letter-exchange"]    = RabbitMQConfig.MainExchange,
                    ["x-dead-letter-routing-key"] = RabbitMQConfig.OutboundRoutingKey,
                    ["x-message-ttl"]             = RabbitMQConfig.RetryDelayMs
                });
            channel.QueueBind(RabbitMQConfig.OutboundRetryQueue, RabbitMQConfig.RetryExchange, "retry.out");

            channel.QueueDeclare(RabbitMQConfig.OutboundDlq, durable: true, exclusive: false, autoDelete: false);
            channel.QueueBind(RabbitMQConfig.OutboundDlq, RabbitMQConfig.DlxExchange, "dlq.out");

            // === INBOUND (External → Creatio) ===
            channel.QueueDeclare(RabbitMQConfig.InboundQueue, durable: true, exclusive: false, autoDelete: false,
                arguments: new Dictionary<string, object> {
                    ["x-dead-letter-exchange"]    = RabbitMQConfig.RetryExchange,
                    ["x-dead-letter-routing-key"] = "retry.in"
                });
            channel.QueueBind(RabbitMQConfig.InboundQueue, RabbitMQConfig.MainExchange, RabbitMQConfig.InboundRoutingKey);

            channel.QueueDeclare(RabbitMQConfig.InboundRetryQueue, durable: true, exclusive: false, autoDelete: false,
                arguments: new Dictionary<string, object> {
                    ["x-dead-letter-exchange"]    = RabbitMQConfig.MainExchange,
                    ["x-dead-letter-routing-key"] = RabbitMQConfig.InboundRoutingKey,
                    ["x-message-ttl"]             = RabbitMQConfig.RetryDelayMs
                });
            channel.QueueBind(RabbitMQConfig.InboundRetryQueue, RabbitMQConfig.RetryExchange, "retry.in");

            channel.QueueDeclare(RabbitMQConfig.InboundDlq, durable: true, exclusive: false, autoDelete: false);
            channel.QueueBind(RabbitMQConfig.InboundDlq, RabbitMQConfig.DlxExchange, "dlq.in");
        }
    }
}
