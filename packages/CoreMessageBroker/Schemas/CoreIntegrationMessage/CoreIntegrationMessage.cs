using System;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    [DataContract]
    public class IntegrationMessage
    {
        [DataMember(Name = "messageId")]
        public string MessageId { get; set; } = Guid.NewGuid().ToString();

        // "MitraPortal" | "FMS"
        [DataMember(Name = "target")]
        public string Target { get; set; }

        [DataMember(Name = "entityName")]
        public string EntityName { get; set; }

        // Create | Update | Delete | FileUpload | Custom
        [DataMember(Name = "operation")]
        public string Operation { get; set; }

        // RecordSave | ButtonClick | Scheduled | InboundWebService
        [DataMember(Name = "triggerType")]
        public string TriggerType { get; set; }

        [DataMember(Name = "payload")]
        public object Payload { get; set; }

        [DataMember(Name = "fileName")]
        public string FileName { get; set; }

        [DataMember(Name = "fileContentBase64")]
        public string FileContentBase64 { get; set; }

        [DataMember(Name = "timestamp")]
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;

        // "Creatio" | "MitraPortal" | "FMS"
        [DataMember(Name = "source")]
        public string Source { get; set; } = "Creatio";

        // Deserialize Payload ke tipe tertentu — gunakan di dalam InboundMessageHandler
        public T PayloadAs<T>()
        {
            if (Payload == null) return default;
            var json = Payload is string s ? s : JsonConvert.SerializeObject(Payload);
            return JsonConvert.DeserializeObject<T>(json);
        }
    }
}
