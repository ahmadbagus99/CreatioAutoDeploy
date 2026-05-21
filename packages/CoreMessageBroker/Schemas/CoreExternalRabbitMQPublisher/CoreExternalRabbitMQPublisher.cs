using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text;
using Newtonsoft.Json;
using RabbitMQ.Client;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    // Config untuk koneksi ke RabbitMQ eksternal (Mitra Portal / FMS).
    // Format ConnectionStrings.config:
    //
    //   <add name="integration.mitraportal.mq"
    //        connectionString="host=116.x.x.x;port=5672;vhost=mp_vhost;
    //                          username=mp_user;password=mp_pass;
    //                          exchange=mp.exchange;routingKey=creatio.inbound" />

    public class ExternalRabbitMQConfig
    {
        public string Host       { get; private set; }
        public int    Port       { get; private set; }
        public string VirtualHost { get; private set; }
        public string Username   { get; private set; }
        public string Password   { get; private set; }
        public string Exchange   { get; private set; }
        public string RoutingKey { get; private set; }

        // Return null kalau connection string tidak ada (RabbitMQ opsional per target)
        public static ExternalRabbitMQConfig TryParse(string connectionStringName)
        {
            var raw = ConfigurationManager.ConnectionStrings[connectionStringName]?.ConnectionString;
            if (string.IsNullOrEmpty(raw)) return null;

            var kv = ParseKv(raw);
            return new ExternalRabbitMQConfig
            {
                Host        = Get(kv, "host")        ?? throw new InvalidOperationException($"'host' missing in '{connectionStringName}'"),
                Port        = int.TryParse(Get(kv, "port", "5672"), out var p) ? p : 5672,
                VirtualHost = Get(kv, "vhost",    "/"),
                Username    = Get(kv, "username",  "guest"),
                Password    = Get(kv, "password",  "guest"),
                Exchange    = Get(kv, "exchange")   ?? throw new InvalidOperationException($"'exchange' missing in '{connectionStringName}'"),
                RoutingKey  = Get(kv, "routingKey") ?? throw new InvalidOperationException($"'routingKey' missing in '{connectionStringName}'")
            };
        }

        private static Dictionary<string, string> ParseKv(string raw)
        {
            var dict = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase);
            foreach (var part in raw.Split(';'))
            {
                var idx = part.IndexOf('=');
                if (idx > 0)
                    dict[part.Substring(0, idx).Trim()] = part.Substring(idx + 1).Trim();
            }
            return dict;
        }

        private static string Get(Dictionary<string, string> kv, string key, string def = null) =>
            kv.TryGetValue(key, out var val) ? val : def;
    }

    // Publisher ke RabbitMQ eksternal — buat koneksi terpisah ke broker target.
    // Dipakai oleh OutboundConsumer kalau target dikonfigurasi pakai RabbitMQ
    // (bukan REST API).

    public class ExternalRabbitMQPublisher : IDisposable
    {
        private readonly IConnection            _connection;
        private readonly IModel                 _channel;
        private readonly ExternalRabbitMQConfig _config;

        public ExternalRabbitMQPublisher(ExternalRabbitMQConfig config)
        {
            _config = config;

            var factory = new ConnectionFactory
            {
                HostName    = config.Host,
                Port        = config.Port,
                VirtualHost = config.VirtualHost,
                UserName    = config.Username,
                Password    = config.Password
            };

            _connection = factory.CreateConnection("Creatio-Outbound");
            _channel    = _connection.CreateModel();
        }

        public void Publish(IntegrationMessage message)
        {
            var body  = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));
            var props = _channel.CreateBasicProperties();
            props.Persistent   = true;
            props.MessageId    = message.MessageId;
            props.ContentType  = "application/json";
            props.Timestamp    = new AmqpTimestamp(DateTimeOffset.UtcNow.ToUnixTimeSeconds());
            props.Headers      = new Dictionary<string, object>
            {
                ["x-source"]    = "Creatio",
                ["x-target"]    = message.Target ?? string.Empty,
                ["x-entity"]    = message.EntityName ?? string.Empty,
                ["x-operation"] = message.Operation ?? string.Empty
            };

            _channel.BasicPublish(_config.Exchange, _config.RoutingKey, props, body);

            IntegrationLogger.Info(
                $"[ExternalRabbitMQPublisher] Published to {_config.Host}/{_config.Exchange} " +
                $"rk={_config.RoutingKey} entity={message.EntityName} op={message.Operation}");
        }

        public void Dispose()
        {
            _channel?.Dispose();
            _connection?.Dispose();
        }
    }
}
