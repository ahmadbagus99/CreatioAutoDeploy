using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using Terrasoft.Core;
using Terrasoft.Web.Common;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    // ── Request / Response DTOs ───────────────────────────────────────────────

    [DataContract]
    public class IntegrationWebRequest
    {
        [DataMember(Name = "source")]            public string Source            { get; set; }
        [DataMember(Name = "entityName")]        public string EntityName        { get; set; }
        [DataMember(Name = "operation")]         public string Operation         { get; set; }
        [DataMember(Name = "withMessageBroker")] public bool   WithMessageBroker { get; set; }
        [DataMember(Name = "payload")]           public object Payload           { get; set; }
    }

    [DataContract]
    public class IntegrationWebResponse
    {
        [DataMember(Name = "success")]   public bool   Success   { get; set; }
        [DataMember(Name = "messageId")] public string MessageId { get; set; }
        [DataMember(Name = "message")]   public string Message   { get; set; }
        [DataMember(Name = "data")]      public object Data      { get; set; }
    }

    // ── Direct processor interface ────────────────────────────────────────────
    // Implementasi untuk withMessageBroker = false (sync).
    // Daftarkan di AppEventListener: CoreIntegrationWebService.RegisterProcessor(new XxxProcessor())

    public interface IDirectProcessor
    {
        string EntityName { get; }
        object Process(IntegrationWebRequest request, UserConnection userConnection);
    }

    // ── Web Service ───────────────────────────────────────────────────────────
    //
    // Endpoint: POST /0/ServiceModel/CoreIntegrationWebService.svc/receive
    //
    // withMessageBroker = true  → publish ke RabbitMQ (async)
    // withMessageBroker = false → IDirectProcessor.Process() (sync, routing by entityName)

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class CoreIntegrationWebService : BaseService
    {
        private static readonly Dictionary<string, IDirectProcessor> _processors =
            new Dictionary<string, IDirectProcessor>(StringComparer.OrdinalIgnoreCase);

        // Daftarkan processor dari AppEventListener sebelum request masuk
        public static void RegisterProcessor(IDirectProcessor processor)
        {
            if (processor != null)
                _processors[processor.EntityName] = processor;
        }

        [OperationContract]
        [WebInvoke(
            Method         = "POST",
            UriTemplate    = "receive",
            RequestFormat  = WebMessageFormat.Json,
            ResponseFormat = WebMessageFormat.Json)]
        public IntegrationWebResponse Receive(IntegrationWebRequest request)
        {
            try
            {
                if (request == null)
                    return Error("Request body is required");
                if (string.IsNullOrEmpty(request.Source))
                    return Error("'source' is required");
                if (string.IsNullOrEmpty(request.EntityName))
                    return Error("'entityName' is required");
                if (string.IsNullOrEmpty(request.Operation))
                    return Error("'operation' is required");

                return request.WithMessageBroker
                    ? HandleAsync(request)
                    : HandleDirect(request);
            }
            catch (Exception ex)
            {
                IntegrationLogger.Error("[CoreIntegrationWebService] Unhandled error", ex);
                return Error($"Internal error: {ex.Message}");
            }
        }

        private IntegrationWebResponse HandleAsync(IntegrationWebRequest request)
        {
            string messageId;
            using (var pub = new IntegrationPublisher())
                messageId = pub.PublishInbound(
                    request.Source, request.EntityName, request.Operation, request.Payload);

            return new IntegrationWebResponse
            {
                Success   = true,
                MessageId = messageId,
                Message   = $"Queued for async processing. MessageId={messageId}"
            };
        }

        private IntegrationWebResponse HandleDirect(IntegrationWebRequest request)
        {
            if (!_processors.TryGetValue(request.EntityName, out var processor))
                return Error(
                    $"No direct processor registered for entityName='{request.EntityName}'. " +
                    "Use withMessageBroker=true or register a processor.");

            var result = processor.Process(request, UserConnection);
            return new IntegrationWebResponse
            {
                Success = true,
                Message = "Processed directly",
                Data    = result
            };
        }

        private static IntegrationWebResponse Error(string message) =>
            new IntegrationWebResponse { Success = false, Message = message };
    }
}
