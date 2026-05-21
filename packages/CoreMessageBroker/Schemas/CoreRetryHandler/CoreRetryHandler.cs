using System.Collections.Generic;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public static class RetryHandler
    {
        public static int GetRetryCount(BasicDeliverEventArgs args)
        {
            if (args.BasicProperties?.Headers == null) return 0;
            if (!args.BasicProperties.Headers.TryGetValue("x-death", out var xDeath)) return 0;

            var deathList = xDeath as List<object>;
            if (deathList == null || deathList.Count == 0) return 0;

            var firstDeath = deathList[0] as Dictionary<string, object>;
            if (firstDeath == null) return 0;

            return firstDeath.TryGetValue("count", out var count) ? (int)(long)count : 0;
        }

        public static bool ShouldMoveToDlq(int retryCount) =>
            retryCount >= RabbitMQConfig.MaxRetryCount;

        public static void MoveToDlq(IModel channel, BasicDeliverEventArgs args,
            string dlqRoutingKey, string messageId, string reason, string body = null)
        {
            var props = channel.CreateBasicProperties();
            props.Persistent = true;
            props.Headers = new Dictionary<string, object>
            {
                ["x-original-routing-key"] = args.RoutingKey,
                ["x-fail-reason"]          = reason,
                ["x-message-id"]           = messageId
            };

            channel.BasicPublish(RabbitMQConfig.DlxExchange, dlqRoutingKey, props, args.Body);
            channel.BasicAck(args.DeliveryTag, false);

            IntegrationLogger.LogDlq(messageId, dlqRoutingKey, reason, body);
        }
    }
}
