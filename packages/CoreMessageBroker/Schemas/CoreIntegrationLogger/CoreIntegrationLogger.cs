using System;
using Common.Logging;
using System.Text;
using Terrasoft.Core;
using Terrasoft.Core.DB;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public static class IntegrationLogger
    {
        private static readonly ILog _log = LogManager.GetLogger("RabbitMQIntegration");
        private static UserConnection _userConnection;

        public static void Initialize(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

        public static void Info(string message) => _log.Info(message);
        public static void Warn(string message) => _log.Warn(message);

        public static void Error(string message, Exception ex = null)
        {
            if (ex != null) _log.Error(message, ex);
            else            _log.Error(message);
        }

        public static void LogPublish(string messageId, string queue, string entityName, string body = null)
        {
            _log.Info($"[PUBLISH] id={messageId} queue={queue} entity={entityName}");
            WriteToDb("PUBLISH", messageId, queue, body ?? string.Empty, string.Empty, "200");
        }

        public static void LogConsume(string messageId, string queue, string status,
            string body = null, string response = null)
        {
            _log.Info($"[CONSUME] id={messageId} queue={queue} status={status}");
            WriteToDb("CONSUME", messageId, queue,
                body     ?? string.Empty,
                response ?? string.Empty,
                status);
        }

        public static void LogRetry(string messageId, int attempt, string error, string body = null)
        {
            _log.Warn($"[RETRY] id={messageId} attempt={attempt}/{RabbitMQConfig.MaxRetryCount} error={error}");
            WriteToDb("RETRY", messageId, string.Empty,
                body  ?? string.Empty,
                error,
                $"RETRY {attempt}/{RabbitMQConfig.MaxRetryCount}");
        }

        public static void LogDlq(string messageId, string queue, string reason, string body = null)
        {
            _log.Error($"[DLQ] id={messageId} queue={queue} reason={reason}");
            WriteToDb("DLQ", messageId, queue,
                body   ?? string.Empty,
                reason,
                "DLQ");
        }

        private static void WriteToDb(string eventType, string messageId, string queue,
            string requestBody, string responseBody, string statusCode)
        {
            if (_userConnection == null) return;
            try
            {
                new Insert(_userConnection)
                    .Into("WebRequestLog")
                    .Set("CreatedById",    Column.Parameter(_userConnection.CurrentUser.ContactId))
                    .Set("ModifiedById",   Column.Parameter(_userConnection.CurrentUser.ContactId))
                    .Set("Name",           Column.Parameter($"[{eventType}] {messageId}"))
                    .Set("URL",            Column.Parameter(queue))
                    .Set("Method",         Column.Parameter(eventType))
                    .Set("RequestHeader",  Column.Parameter(string.Empty))
                    .Set("RequestBody",    Column.Parameter(Truncate(FormatJson(requestBody), 4000)))
                    .Set("ResponseHeader", Column.Parameter(string.Empty))
                    .Set("ResponseBody",   Column.Parameter(Truncate(FormatJson(responseBody), 4000)))
                    .Set("StatusCode",     Column.Parameter(statusCode))
                    .Set("Type",           Column.Parameter("RabbitMQ"))
                    .Execute();
            }
            catch (Exception ex)
            {
                _log.Error($"[IntegrationLogger] Failed to write to WebRequestLog: {ex.Message}");
            }
        }

        private static string FormatJson(string value)
        {
            if (string.IsNullOrEmpty(value)) return value;
            try
            {
                var sb      = new StringBuilder();
                var indent  = 0;
                var inStr   = false;
                var escaped = false;

                foreach (var c in value)
                {
                    if (escaped) { sb.Append(c); escaped = false; continue; }
                    if (c == '\\' && inStr) { sb.Append(c); escaped = true; continue; }
                    if (c == '"') { inStr = !inStr; sb.Append(c); continue; }
                    if (inStr) { sb.Append(c); continue; }

                    switch (c)
                    {
                        case '{':
                        case '[':
                            sb.Append(c);
                            sb.Append('\n');
                            sb.Append(new string(' ', ++indent * 2));
                            break;
                        case '}':
                        case ']':
                            sb.Append('\n');
                            sb.Append(new string(' ', --indent * 2));
                            sb.Append(c);
                            break;
                        case ',':
                            sb.Append(c);
                            sb.Append('\n');
                            sb.Append(new string(' ', indent * 2));
                            break;
                        case ':':
                            sb.Append(": ");
                            break;
                        default:
                            if (!char.IsWhiteSpace(c)) sb.Append(c);
                            break;
                    }
                }
                return sb.ToString();
            }
            catch
            {
                return value;
            }
        }

        private static string Truncate(string value, int maxLength) =>
            string.IsNullOrEmpty(value) || value.Length <= maxLength
                ? value
                : value.Substring(0, maxLength);
    }
}
