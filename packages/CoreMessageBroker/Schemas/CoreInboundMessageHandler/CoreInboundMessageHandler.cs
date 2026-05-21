using Terrasoft.Core;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    // Base class untuk handle pesan masuk dari Mitra Portal / FMS.
    // Buat subclass di package fitur (misal CorePenjaminan), daftarkan di AppEventListener.
    //
    // Contoh subclass:
    //
    //   public class ApprovalFromMitraPortalHandler : InboundMessageHandler
    //   {
    //       public override string Source     => "MitraPortal";
    //       public override string EntityName => "Penjaminan";
    //       public override string Operation  => "Approval";
    //
    //       public override void Handle(IntegrationMessage message, UserConnection uc)
    //       {
    //           // update record Penjaminan di Creatio
    //           var payload = message.PayloadAs<ApprovalPayload>();
    //           new Update(uc).Into("Penjaminan")
    //               .Set("StatusId", Column.Parameter(ApprovedStatusId))
    //               .Where("NomorPolis").IsEqual(Column.Parameter(payload.NomorPolis))
    //               .Execute();
    //       }
    //   }
    //
    // Daftarkan di AppEventListener.OnAppStart():
    //   InboundConsumer.RegisterHandler(new ApprovalFromMitraPortalHandler());
    //
    // Gunakan "*" untuk match semua nilai:
    //   public override string Operation => "*";  // handle semua operation dari source ini

    public abstract class InboundMessageHandler
    {
        // "MitraPortal" | "FMS" | "*" (wildcard)
        public abstract string Source { get; }

        // Nama entity Creatio, misal "Penjaminan", "Klaim", "Pembayaran" | "*"
        public abstract string EntityName { get; }

        // "Create" | "Update" | "Delete" | "Approval" | "Custom" | "*"
        public abstract string Operation { get; }

        public abstract void Handle(IntegrationMessage message, UserConnection userConnection);
    }
}
