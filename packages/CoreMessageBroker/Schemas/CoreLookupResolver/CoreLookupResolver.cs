using System;
using System.Collections.Concurrent;
using Terrasoft.Core;
using Terrasoft.Core.DB;

namespace Terrasoft.Configuration.Integration.RabbitMQ
{
    // Resolve nama lookup → Guid dengan cache in-memory.
    // Query DB hanya terjadi sekali per nama — selanjutnya langsung dari cache.
    //
    // Cocok untuk: lookup statis (produk, status, jenis, kategori).
    // Cache hidup selama aplikasi berjalan — iisreset untuk refresh.
    //
    // ── Contoh penggunaan ────────────────────────────────────────────────────────
    //
    //   // Payload: { "produk": "Penjaminan Multiguna", "jenisBond": "Surety Bond" }
    //
    //   var produkId    = LookupResolver.Resolve(uc, "CoreProduk",    data.Produk);
    //   var jenisBondId = LookupResolver.Resolve(uc, "CoreJenisBond", data.JenisBond);
    //
    //   // Dengan kolom pencarian selain Name:
    //   var kontakId = LookupResolver.Resolve(uc, "Contact", data.KodeKontak, searchColumn: "Code");
    //
    //   // Optional — kembalikan Guid.Empty kalau nama tidak ada (tidak throw):
    //   var opsionalId = LookupResolver.ResolveOrEmpty(uc, "CoreProduk", data.Produk);

    public static class LookupResolver
    {
        // key: "TableName::SearchColumn::Value"
        private static readonly ConcurrentDictionary<string, Guid> _cache =
            new ConcurrentDictionary<string, Guid>(StringComparer.OrdinalIgnoreCase);

        // Resolve nama → Guid. Throw jika tidak ditemukan.
        public static Guid Resolve(UserConnection uc, string tableName, string value,
            string searchColumn = "Name")
        {
            if (string.IsNullOrEmpty(value))
                throw new ArgumentException($"Lookup value kosong untuk tabel '{tableName}'");

            var cacheKey = $"{tableName}::{searchColumn}::{value}";

            if (_cache.TryGetValue(cacheKey, out var cached))
                return cached;

            var id = QueryDb(uc, tableName, searchColumn, value);

            if (id == Guid.Empty)
                throw new Exception(
                    $"Lookup '{value}' tidak ditemukan di tabel '{tableName}' kolom '{searchColumn}'");

            _cache[cacheKey] = id;
            return id;
        }

        // Resolve nama → Guid. Kembalikan Guid.Empty jika tidak ditemukan (tidak throw).
        public static Guid ResolveOrEmpty(UserConnection uc, string tableName, string value,
            string searchColumn = "Name")
        {
            if (string.IsNullOrEmpty(value)) return Guid.Empty;

            var cacheKey = $"{tableName}::{searchColumn}::{value}";

            if (_cache.TryGetValue(cacheKey, out var cached))
                return cached;

            var id = QueryDb(uc, tableName, searchColumn, value);
            if (id != Guid.Empty) _cache[cacheKey] = id;
            return id;
        }

        // Cari berdasarkan Name — kalau tidak ada, insert baru dan return Guid-nya.
        // Gunakan untuk entity dinamis: Nasabah, Mitra, dsb.
        // JANGAN gunakan untuk reference statis (CaraBayar, Produk, JenisBond).
        public static Guid GetOrCreate(UserConnection uc, string tableName, string value,
            string searchColumn = "Name")
        {
            if (string.IsNullOrEmpty(value))
                throw new ArgumentException($"Value kosong untuk tabel '{tableName}'");

            var cacheKey = $"{tableName}::{searchColumn}::{value}";

            if (_cache.TryGetValue(cacheKey, out var cached))
                return cached;

            var id = QueryDb(uc, tableName, searchColumn, value);

            if (id == Guid.Empty)
            {
                id = Guid.NewGuid();
                new Insert(uc)
                    .Into(tableName)
                    .Set("Id",           Column.Parameter(id))
                    .Set("CreatedById",  Column.Parameter(uc.CurrentUser.ContactId))
                    .Set("ModifiedById", Column.Parameter(uc.CurrentUser.ContactId))
                    .Set(searchColumn,   Column.Parameter(value))
                    .Execute();
            }

            _cache[cacheKey] = id;
            return id;
        }

        // Hapus satu entry dari cache (misal setelah data lookup diupdate).
        public static void Invalidate(string tableName, string value, string searchColumn = "Name")
        {
            _cache.TryRemove($"{tableName}::{searchColumn}::{value}", out _);
        }

        // Hapus seluruh cache.
        public static void InvalidateAll() => _cache.Clear();

        private static Guid QueryDb(UserConnection uc, string tableName,
            string searchColumn, string value)
        {
            var select = (Select) new Select(uc)
                .Column("Id")
                .From(tableName)
                .Where(searchColumn).IsEqual(Column.Parameter(value));

            return select.ExecuteScalar<Guid>();
        }
    }
}
