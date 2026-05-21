using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using Newtonsoft.Json;
using Terrasoft.Core;
using Terrasoft.Core.DB;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    public class ExternalApiClient : IDisposable
    {
        private readonly HttpClient             _client;
        private readonly UserConnection         _userConnection;
        private readonly SystemEndpointConfig   _config;

        // Cache OAuth2 token
        private string   _oauthToken;
        private DateTime _oauthExpiry = DateTime.MinValue;

        public ExternalApiClient(SystemEndpointConfig config, UserConnection userConnection)
        {
            _config         = config;
            _userConnection = userConnection;
            _client         = new HttpClient();
        }

        public T GetJson<T>(string endpoint, string endpointName = null)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, BuildUrl(endpoint));
            ApplyAuth(request);

            HttpResponseMessage response = null;
            string responseBody = string.Empty;
            try
            {
                response     = _client.SendAsync(request).GetAwaiter().GetResult();
                responseBody = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (!response.IsSuccessStatusCode)
                    throw new Exception($"HTTP {(int)response.StatusCode}: {responseBody}");

                return JsonConvert.DeserializeObject<T>(responseBody);
            }
            finally
            {
                if (_userConnection != null && response != null)
                    LogToWebRequestLog(request, response, string.Empty, responseBody, endpointName ?? endpoint);
            }
        }

        public void SendJson(string endpoint, object payload, string endpointName = null)
        {
            var body    = JsonConvert.SerializeObject(payload);
            var request = new HttpRequestMessage(HttpMethod.Post, BuildUrl(endpoint))
            {
                Content = new StringContent(body, Encoding.UTF8, "application/json")
            };
            ApplyAuth(request);
            SendAndLog(request, body, endpointName ?? endpoint);
        }

        public void SendFile(string endpoint, string fileName, byte[] fileContent,
            object metadata = null, string endpointName = null)
        {
            var form = new MultipartFormDataContent();
            if (metadata != null)
                form.Add(new StringContent(JsonConvert.SerializeObject(metadata),
                    Encoding.UTF8, "application/json"), "metadata");
            form.Add(new ByteArrayContent(fileContent), "file", fileName);

            var request = new HttpRequestMessage(HttpMethod.Post, BuildUrl(endpoint))
                { Content = form };
            ApplyAuth(request);
            SendAndLog(request, $"[file:{fileName}]", endpointName ?? endpoint);
        }

        private void ApplyAuth(HttpRequestMessage request)
        {
            switch (_config.AuthType)
            {
                case AuthType.Basic:
                    var cred = Convert.ToBase64String(
                        Encoding.ASCII.GetBytes($"{_config.Username}:{_config.Password}"));
                    request.Headers.Authorization =
                        new AuthenticationHeaderValue("Basic", cred);
                    break;

                case AuthType.ApiKey:
                    request.Headers.TryAddWithoutValidation(
                        _config.ApiKeyHeader, _config.ApiKeyValue);
                    break;

                case AuthType.Bearer:
                    request.Headers.Authorization =
                        new AuthenticationHeaderValue("Bearer", _config.BearerToken);
                    break;

                case AuthType.OAuth2:
                    var token = GetOAuthToken();
                    request.Headers.Authorization =
                        new AuthenticationHeaderValue("Bearer", token);
                    break;
            }
        }

        private string GetOAuthToken()
        {
            if (!string.IsNullOrEmpty(_oauthToken) && DateTime.UtcNow < _oauthExpiry)
                return _oauthToken;

            var body = new FormUrlEncodedContent(new[]
            {
                new KeyValuePair<string, string>("grant_type",    "client_credentials"),
                new KeyValuePair<string, string>("client_id",     _config.ClientId),
                new KeyValuePair<string, string>("client_secret", _config.ClientSecret)
            });

            var response = _client.PostAsync(_config.TokenUrl, body).GetAwaiter().GetResult();
            var json     = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

            if (!response.IsSuccessStatusCode)
                throw new Exception($"OAuth2 token request failed: {json}");

            var parsed = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
            _oauthToken = parsed.TryGetValue("access_token", out var t) ? t
                : throw new Exception("OAuth2 response missing access_token");
            int expiresIn = parsed.TryGetValue("expires_in", out var exp) && int.TryParse(exp, out var ei) ? ei : 3600;
            _oauthExpiry = DateTime.UtcNow.AddSeconds(expiresIn - 60);

            return _oauthToken;
        }

        private void SendAndLog(HttpRequestMessage request, string requestBody, string endpointName)
        {
            HttpResponseMessage response = null;
            string responseBody = string.Empty;
            try
            {
                response     = _client.SendAsync(request).GetAwaiter().GetResult();
                responseBody = response.Content.ReadAsStringAsync().GetAwaiter().GetResult();

                if (!response.IsSuccessStatusCode)
                    throw new Exception($"HTTP {(int)response.StatusCode}: {responseBody}");
            }
            finally
            {
                if (_userConnection != null && response != null)
                    LogToWebRequestLog(request, response, requestBody, responseBody, endpointName);
            }
        }

        private void LogToWebRequestLog(HttpRequestMessage request, HttpResponseMessage response,
            string requestBody, string responseBody, string endpointName)
        {
            try
            {
                string contentType = request.Content?.Headers?.ContentType?.MediaType?.ToLower() ?? string.Empty;
                string type        = contentType.Contains("xml") || contentType.Contains("soap") ? "SOAP" : "REST";

                new Insert(_userConnection)
                    .Into("WebRequestLog")
                    .Set("CreatedById", Column.Parameter(_userConnection.CurrentUser.ContactId))
                    .Set("ModifiedById", Column.Parameter(_userConnection.CurrentUser.ContactId))
                    .Set("Name",           Column.Parameter(endpointName))
                    .Set("URL",            Column.Parameter(request.RequestUri?.ToString() ?? string.Empty))
                    .Set("Method",         Column.Parameter(request.Method?.Method ?? string.Empty))
                    .Set("RequestHeader",  Column.Parameter(FormatHeaders(request.Headers)))
                    .Set("RequestBody",    Column.Parameter(requestBody))
                    .Set("ResponseHeader", Column.Parameter(FormatHeaders(response.Headers)))
                    .Set("ResponseBody",   Column.Parameter(responseBody))
                    .Set("StatusCode",     Column.Parameter(((int)response.StatusCode).ToString()))
                    .Set("Type",           Column.Parameter(type))
                    .Execute();
            }
            catch (Exception ex)
            {
                IntegrationLogger.Error("[ExternalApiClient] Failed to write WebRequestLog", ex);
            }
        }

        private static string FormatHeaders(
            IEnumerable<KeyValuePair<string, IEnumerable<string>>> headers)
        {
            var dict = new Dictionary<string, string>();
            foreach (var h in headers)
                dict[h.Key] = string.Join("; ", h.Value);
            try   { return JsonConvert.SerializeObject(dict); }
            catch { return string.Empty; }
        }

        private string BuildUrl(string endpoint) =>
            $"{_config.BaseUrl.TrimEnd('/')}/{endpoint.TrimStart('/')}";

        public void Dispose() => _client?.Dispose();
    }
}
