using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text.RegularExpressions;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public static class RabbitMQConfig
    {
        private static readonly Lazy<ParsedAmqp> _parsed =
            new Lazy<ParsedAmqp>(ParseConnectionString);

        private static ParsedAmqp ParseConnectionString()
        {
            var cs = ConfigurationManager.ConnectionStrings["messageBroker"]?.ConnectionString
                ?? throw new InvalidOperationException("messageBroker connection string not found");

            var match = Regex.Match(cs, @"amqp://([^:]+):([^@]+)@([^:]+):(\d+)/(.+)");
            if (!match.Success)
                throw new FormatException($"Invalid messageBroker format: {cs}");

            return new ParsedAmqp
            {
                Host     = match.Groups[3].Value,
                Port     = int.Parse(match.Groups[4].Value),
                VHost    = match.Groups[5].Value,
                Username = match.Groups[1].Value,
                Password = match.Groups[2].Value
            };
        }

        public static string Host        => _parsed.Value.Host;
        public static int    Port        => _parsed.Value.Port;
        public static string VirtualHost => _parsed.Value.VHost;
        public static string Username    => _parsed.Value.Username;
        public static string Password    => _parsed.Value.Password;

        // Exchanges
        public static string MainExchange  => "integration.exchange";
        public static string DlxExchange   => "integration.dlx";
        public static string RetryExchange => "integration.retry.exchange";

        // Queues
        public static string OutboundQueue      => "integration.out";
        public static string InboundQueue       => "integration.in";
        public static string OutboundRetryQueue => "integration.out.retry";
        public static string InboundRetryQueue  => "integration.in.retry";
        public static string OutboundDlq        => "integration.out.dlq";
        public static string InboundDlq         => "integration.in.dlq";

        // Routing keys
        public static string OutboundRoutingKey => "out";
        public static string InboundRoutingKey  => "in";

        // Retry
        public static int MaxRetryCount => 3;
        public static int RetryDelayMs  => 30000;

        // Per-system REST endpoint config
        public static SystemEndpointConfig MitraPortal =>
            SystemEndpointConfig.Parse("integration.mitraportal");

        public static SystemEndpointConfig Fms =>
            SystemEndpointConfig.Parse("integration.fms");

        // Per-system external RabbitMQ config (Pilihan B — null jika tidak dikonfigurasi)
        public static ExternalRabbitMQConfig MitraPortalMQ =>
            ExternalRabbitMQConfig.TryParse("integration.mitraportal.mq");

        public static ExternalRabbitMQConfig FmsMQ =>
            ExternalRabbitMQConfig.TryParse("integration.fms.mq");

        private class ParsedAmqp
        {
            public string Host     { get; set; }
            public int    Port     { get; set; }
            public string VHost    { get; set; }
            public string Username { get; set; }
            public string Password { get; set; }
        }
    }

    // ── Auth types ────────────────────────────────────────────────────────────
    public enum AuthType { None, Basic, ApiKey, Bearer, OAuth2 }

    // ── Per-system config ─────────────────────────────────────────────────────
    // ConnectionStrings.config format per sistem:
    //
    // None:
    //   baseUrl=https://api.example.com
    //
    // Basic:
    //   baseUrl=https://api.example.com;authType=Basic;username=user;password=pass
    //
    // ApiKey:
    //   baseUrl=https://api.example.com;authType=ApiKey;apiKeyHeader=X-API-Key;apiKeyValue=abc123
    //
    // Bearer (static token):
    //   baseUrl=https://api.example.com;authType=Bearer;bearerToken=eyJ...
    //
    // OAuth2 (client credentials):
    //   baseUrl=https://api.example.com;authType=OAuth2;tokenUrl=https://auth.example.com/token;clientId=id;clientSecret=secret
    public class SystemEndpointConfig
    {
        public string   BaseUrl        { get; private set; }
        public AuthType AuthType       { get; private set; }
        public string   Username       { get; private set; }
        public string   Password       { get; private set; }
        public string   ApiKeyHeader   { get; private set; }
        public string   ApiKeyValue    { get; private set; }
        public string   BearerToken    { get; private set; }
        public string   TokenUrl       { get; private set; }
        public string   ClientId       { get; private set; }
        public string   ClientSecret   { get; private set; }

        public static SystemEndpointConfig Parse(string connectionStringName)
        {
            var raw = ConfigurationManager.ConnectionStrings[connectionStringName]?.ConnectionString
                ?? throw new InvalidOperationException(
                    $"Connection string '{connectionStringName}' not found in ConnectionStrings.config");

            var kv = ParseKv(raw);

            Enum.TryParse<AuthType>(Get(kv, "authType", "None"), true, out var authType);

            return new SystemEndpointConfig
            {
                BaseUrl      = Get(kv, "baseUrl")      ?? throw new InvalidOperationException($"baseUrl missing in '{connectionStringName}'"),
                AuthType     = authType,
                Username     = Get(kv, "username"),
                Password     = Get(kv, "password"),
                ApiKeyHeader = Get(kv, "apiKeyHeader"),
                ApiKeyValue  = Get(kv, "apiKeyValue"),
                BearerToken  = Get(kv, "bearerToken"),
                TokenUrl     = Get(kv, "tokenUrl"),
                ClientId     = Get(kv, "clientId"),
                ClientSecret = Get(kv, "clientSecret")
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
}
