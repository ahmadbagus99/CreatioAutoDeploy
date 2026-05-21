using System;
using System.Runtime.Serialization;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Configuration.Integration.RabbitMQ;

namespace CoreIntegration.CorePenjaminanMultigunaService
{
    // ── DTO payload dari Mitra Portal ────────────────────────────────────────────

    [DataContract]
    public class PenjaminanMultigunaPayload
    {
        // Plain fields
        [DataMember(Name = "NomorPermohonan")]     public string   NomorPermohonan     { get; set; }
        [DataMember(Name = "BookingNomorSP")]      public string   BookingNomorSP      { get; set; }
        [DataMember(Name = "NomorSP")]             public string   NomorSP             { get; set; }
        [DataMember(Name = "PeriodeAwalBerlaku")]  public DateTime PeriodeAwalBerlaku  { get; set; }
        [DataMember(Name = "PeriodeAkhirBerlaku")] public DateTime PeriodeAkhirBerlaku { get; set; }
        [DataMember(Name = "CoveragePercentage")]  public decimal  CoveragePercentage  { get; set; }
        [DataMember(Name = "NominalPermohonan")]   public decimal  NominalPermohonan   { get; set; }
        [DataMember(Name = "NilaiIJP")]            public decimal  NilaiIJP            { get; set; }
        [DataMember(Name = "FeeBasePercentage")]   public decimal  FeeBasePercentage   { get; set; }
        [DataMember(Name = "NilaiAgunan")]         public decimal  NilaiAgunan         { get; set; }

        // Lookup fields — kirim NAME, di-resolve ke Guid oleh LookupResolver
        [DataMember(Name = "CaraBayar")]       public string CaraBayar       { get; set; }
        [DataMember(Name = "Produk")]          public string Produk          { get; set; }
        [DataMember(Name = "JenisBond")]       public string JenisBond       { get; set; }
        [DataMember(Name = "Nasabah")]         public string Nasabah         { get; set; }
        [DataMember(Name = "Mitra")]           public string Mitra           { get; set; }
        [DataMember(Name = "Bank")]            public string Bank            { get; set; }
        [DataMember(Name = "JenisPenjaminan")] public string JenisPenjaminan { get; set; }
    }

    // ── Mapper: resolve lookup + insert — satu tempat, dipakai processor & handler

    internal static class PenjaminanMultigunaMapper
    {
        public static Guid Insert(PenjaminanMultigunaPayload data, UserConnection uc)
        {
            // Reference statis — throw jika tidak ditemukan
            var caraBayarId       = LookupResolver.GetOrCreate(uc, "CoreCaraBayar",       data.CaraBayar);
            var produkId          = LookupResolver.GetOrCreate(uc, "Product",             data.Produk);
            var jenisBondId       = LookupResolver.GetOrCreate(uc, "CoreJenisBond",       data.JenisBond);
            var jenisPenjaminanId = LookupResolver.GetOrCreate(uc, "CoreJenisPenjaminan", data.JenisPenjaminan);

            // Opsional — Guid.Empty jika kosong
            var bankId = LookupResolver.GetOrCreate(uc, "CoreBank", data.Bank, searchColumn: "CoreName");

            // Entity dinamis — auto-create jika belum ada
            var nasabahId = LookupResolver.GetOrCreate(uc, "CoreNasabah", data.Nasabah, searchColumn: "CoreNama");
            var mitraId   = LookupResolver.GetOrCreate(uc, "Account",   data.Mitra);

            var newId = Guid.NewGuid();

            var insert = new Insert(uc)
                .Into("CorePenjaminanMultiguna")
                .Set("Id",                      Column.Parameter(newId))
                .Set("CreatedById",             Column.Parameter(uc.CurrentUser.ContactId))
                .Set("ModifiedById",            Column.Parameter(uc.CurrentUser.ContactId))
                .Set("CoreNomorPermohonan",     Column.Parameter(data.NomorPermohonan ?? string.Empty))
                .Set("CoreBookingNomorSP",      Column.Parameter(data.BookingNomorSP ?? string.Empty))
                .Set("CoreNomorSP",             Column.Parameter(data.NomorSP ?? string.Empty))
                .Set("CorePeriodeAwalBerlaku",  Column.Parameter(data.PeriodeAwalBerlaku))
                .Set("CorePeriodeAkhirBerlaku", Column.Parameter(data.PeriodeAkhirBerlaku))
                .Set("CoreCoveragePercentage",  Column.Parameter(data.CoveragePercentage))
                .Set("CoreNominalPermohonan",   Column.Parameter(data.NominalPermohonan))
                .Set("CoreNilaiIJP",            Column.Parameter(data.NilaiIJP))
                .Set("CoreFeeBasePercentage",   Column.Parameter(data.FeeBasePercentage))
                .Set("CoreNilaiAgunan",         Column.Parameter(data.NilaiAgunan))
                .Set("CoreCaraBayarId",         Column.Parameter(caraBayarId))
                .Set("CoreProdukId",            Column.Parameter(produkId))
                .Set("CoreJenisBondId",         Column.Parameter(jenisBondId))
                .Set("CoreNasabahId",           Column.Parameter(nasabahId))
                .Set("CoreMitraId",             Column.Parameter(mitraId))
                .Set("CoreJenisPenjaminanId",   Column.Parameter(jenisPenjaminanId));

            if (bankId != Guid.Empty)
                insert.Set("CoreBankId", Column.Parameter(bankId));

            insert.Execute();
            return newId;
        }
    }

    // ── Direct processor (withMessageBroker = false → sync) ──────────────────────
    // Daftarkan di AppEventListener:
    //   CoreIntegrationWebService.RegisterProcessor(new PenjaminanMultigunaDirectProcessor())

    public class PenjaminanMultigunaDirectProcessor : IDirectProcessor
    {
        public string EntityName => "PenjaminanMultiguna";

        public object Process(IntegrationWebRequest request, UserConnection uc)
        {
            var data = new IntegrationMessage { Payload = request.Payload }
                .PayloadAs<PenjaminanMultigunaPayload>()
                ?? throw new Exception("Payload tidak valid atau kosong");

            var newId = PenjaminanMultigunaMapper.Insert(data, uc);

            IntegrationLogger.Info(
                $"[PenjaminanMultigunaDirectProcessor] Inserted Id={newId} Permohonan={data.NomorPermohonan}");

            return new { creatioId = newId.ToString(), nomorPermohonan = data.NomorPermohonan };
        }
    }

    // ── Inbound handler (withMessageBroker = true → async via RabbitMQ) ──────────
    // Daftarkan di AppEventListener:
    //   InboundConsumer.RegisterHandler(new PenjaminanMultigunaHandler())

    public class PenjaminanMultigunaHandler : InboundMessageHandler
    {
        public override string Source     => "MitraPortal";
        public override string EntityName => "PenjaminanMultiguna";
        public override string Operation  => "Create";

        public override void Handle(IntegrationMessage message, UserConnection uc)
        {
            var data = message.PayloadAs<PenjaminanMultigunaPayload>()
                ?? throw new Exception("Payload tidak valid atau kosong");

            var newId = PenjaminanMultigunaMapper.Insert(data, uc);

            IntegrationLogger.Info(
                $"[PenjaminanMultigunaHandler] Inserted Id={newId} Permohonan={data.NomorPermohonan}");
        }
    }
}
