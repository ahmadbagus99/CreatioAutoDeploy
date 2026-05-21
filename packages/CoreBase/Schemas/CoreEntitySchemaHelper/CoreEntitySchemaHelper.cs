using System;
using System.IO;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Configuration;
using Newtonsoft.Json;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Process;
using Terrasoft.Core.Entities;
using Terrasoft.Common;
using Terrasoft.Web.Common;
using Terrasoft.Web.Http.Abstractions;
using System.Reflection;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Globalization;
using SysSettings = Terrasoft.Core.Configuration.SysSettings;

namespace CoreBase.CoreEntitySchemaHelper
{
    public class EntitySchemaHelper
    {
        private UserConnection userConnection;

        private UserConnection UserConnection {
            get {
                return userConnection 
                    ?? (UserConnection)HttpContext.Current.Session["UserConnection"];
            }
        }

        public EntitySchemaHelper(UserConnection userConnection) {
            this.userConnection = userConnection;
        }

		// ===========================
        //   CACHE KEY BUILDER
        // ===========================
        private string BuildCacheKey(string prefix, string schemaName, Dictionary<string, object> filterColumns)
        {
            var parts = filterColumns
                .OrderBy(x => x.Key, StringComparer.OrdinalIgnoreCase)
                .Select(x => $"{x.Key}={x.Value}".Trim());

            return $"{prefix}:{schemaName}:{string.Join("|", parts)}".ToUpperInvariant();
        }

	    // ===========================
        //   GET DATA (CACHED, REQUEST)
        // ===========================
        public Guid GetDataCached(string schemaName, Dictionary<string, object> filterColumns, DBExecutor dbExecutor = null)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(schemaName))
                    throw new ArgumentException("schemaName is required.", nameof(schemaName));
                if (filterColumns == null || filterColumns.Count == 0)
                    throw new ArgumentException("filterColumns is required.", nameof(filterColumns));

                var key = BuildCacheKey("GETDATA", schemaName, filterColumns);
                var store = UserConnection.RequestData; 

                if (store[key] is Guid cached && cached != Guid.Empty)
                    return cached;

                var id = GetData(schemaName, filterColumns, dbExecutor);
                store[key] = id;
                return id;
            }
            catch (Exception e)
            {
                throw new Exception($"[EntitySchemaHelper.GetDataCached] {e.Message}", e);
            }
        }

		// ===========================
        //   GET DATA (NO CACHE)
        // ===========================
        public Guid GetData(string schemaName, Dictionary<string, object> filterColumns)
        {
            using (var dbExecutor = UserConnection.EnsureDBConnection())
            {
                return GetData(schemaName, filterColumns, dbExecutor);
            }
        }

		public Guid GetData(string schemaName, Dictionary<string, object> filterColumns, DBExecutor dbExecutor = null)
		{
			if (string.IsNullOrWhiteSpace(schemaName))
				throw new ArgumentException("schemaName is required.");
			if (filterColumns == null || filterColumns.Count == 0)
				throw new ArgumentException("filterColumns is required.");
		
			try
			{
				var select = new Select(UserConnection)
					.Column("Id")
					.From(schemaName) as Select;
		
				bool isFirst = true;
				foreach (var kvp in filterColumns)
				{
					if (kvp.Value == null)
						throw new ArgumentException($"Filter value is null for column '{kvp.Key}'.");
		
					if (isFirst)
					{
						select.Where(Func.Upper(kvp.Key))
							.IsEqual(Func.Upper(Column.Parameter(kvp.Value)));
						isFirst = false;
					}
					else
					{
						select.And(Func.Upper(kvp.Key))
							.IsEqual(Func.Upper(Column.Parameter(kvp.Value)));
					}
				}
		
				if (dbExecutor != null)
				{
					using (IDataReader dataReader = select.ExecuteReader(dbExecutor))
					{
						if (dataReader.Read())
						{
							var idObj = dataReader.GetColumnValue("Id");
							if (idObj != null) return Guid.Parse(idObj.ToString());
						}
					}
				}
				else
				{
					using (DBExecutor exec = UserConnection.EnsureDBConnection())
					using (IDataReader dataReader = select.ExecuteReader(exec))
					{
						if (dataReader.Read())
						{
							var idObj = dataReader.GetColumnValue("Id");
							if (idObj != null) return Guid.Parse(idObj.ToString());
						}
					}
				}
		
				var filterInfo = string.Join(", ", filterColumns.Select(x => $"{x.Key} = {x.Value}"));
				throw new Exception($"Data not found with: {schemaName} where {filterInfo}");
			}
			catch (Exception ex)
			{
				throw new Exception($"[EntitySchemaHelper.GetData] {ex.Message}", ex);
			}
		}

        // ===========================
        //   GET OR CREATE DATA
        // ===========================
        public Guid GetOrCreateData(string schemaName, Dictionary<string, object> filterColumns, Dictionary<string, object> insertValues, bool useEntitySchema, DBExecutor dbExecutor)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(schemaName))
                    throw new ArgumentException("schemaName is required.", nameof(schemaName));
                if (filterColumns == null || filterColumns.Count == 0)
                    throw new ArgumentException("filterColumns is required.", nameof(filterColumns));
                if (insertValues == null) insertValues = new Dictionary<string, object>();
                if (dbExecutor == null)
                    throw new ArgumentNullException(nameof(dbExecutor));

                // SELECT
                var select = new Select(UserConnection)
                    .Column("Id")
                    .From(schemaName) as Select;

                bool isFirst = true;
                foreach (var kvp in filterColumns)
                {
                    if (isFirst)
                    {
                        select.Where(kvp.Key).IsEqual(Column.Parameter(kvp.Value));
                        isFirst = false;
                    }
                    else
                    {
                        select.And(kvp.Key).IsEqual(Column.Parameter(kvp.Value));
                    }
                }

                Guid recordId = Guid.Empty;
                using (IDataReader dr = select.ExecuteReader(dbExecutor))
                {
                    if (dr.Read())
                    {
                        var idObj = dr.GetColumnValue("Id");
                        if (idObj != null)
                            recordId = Guid.Parse(idObj.ToString());
                    }
                }

                if (recordId != Guid.Empty)
                    return recordId;

                // INSERT
                recordId = Guid.NewGuid();
                var allColumns = new Dictionary<string, object>(filterColumns);
                foreach (var kvp in insertValues)
                    allColumns[kvp.Key] = kvp.Value;

                if (!useEntitySchema)
                {
                    var insert = new Insert(UserConnection)
                        .Into(schemaName)
                        .Set("Id", Column.Parameter(recordId))
                        .Set("CreatedById", Column.Parameter(UserConnection.CurrentUser.ContactId))
                        .Set("ModifiedById", Column.Parameter(UserConnection.CurrentUser.ContactId));

                    foreach (var kvp in allColumns)
                        insert.Set(kvp.Key, Column.Parameter(kvp.Value));

                    insert.Execute(dbExecutor);
                    return recordId;
                }

                // Entity insert (lebih berat, tapi kadang perlu)
                var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(schemaName);
                var entity = entitySchema.CreateEntity(UserConnection);

                entity.SetDefColumnValues();
                entity.SetColumnValue("Id", recordId);
                entity.SetColumnValue("CreatedById", UserConnection.CurrentUser.ContactId);
                entity.SetColumnValue("ModifiedById", UserConnection.CurrentUser.ContactId);

                foreach (var kvp in allColumns)
                    entity.SetColumnValue(kvp.Key, kvp.Value);

                entity.Save();
                return entity.PrimaryColumnValue;
            }
            catch (Exception e)
            {
                throw new Exception($"[EntitySchemaHelper.GetOrCreateData] {e.Message}", e);
            }
        }

        // ===========================
        //   CREATE DATA
        // ===========================
        public Guid CreateData(string schemaName, Dictionary<string, object> insertValues, bool useEntitySchema = false)
        {
            using (var dbExecutor = UserConnection.EnsureDBConnection())
            {
                return CreateData(schemaName, insertValues, useEntitySchema, dbExecutor);
            }
        }

        public Guid CreateData(string schemaName, Dictionary<string, object> insertValues, bool useEntitySchema, DBExecutor dbExecutor)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(schemaName))
                    throw new ArgumentException("schemaName is required.", nameof(schemaName));
                if (insertValues == null)
                    throw new ArgumentNullException(nameof(insertValues));
                if (dbExecutor == null)
                    throw new ArgumentNullException(nameof(dbExecutor));

                var recordId = Guid.NewGuid();
                var allColumns = new Dictionary<string, object>(insertValues);

                if (!useEntitySchema)
                {
                    var insert = new Insert(UserConnection)
                        .Into(schemaName)
                        .Set("Id", Column.Parameter(recordId))
                        .Set("CreatedById", Column.Parameter(UserConnection.CurrentUser.ContactId))
                        .Set("ModifiedById", Column.Parameter(UserConnection.CurrentUser.ContactId));

                    foreach (var kvp in allColumns)
                        insert.Set(kvp.Key, Column.Parameter(kvp.Value));

                    insert.Execute(dbExecutor);
                    return recordId;
                }

                var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(schemaName);
                var entity = entitySchema.CreateEntity(UserConnection);

                entity.SetDefColumnValues();
                entity.SetColumnValue("Id", recordId);
                entity.SetColumnValue("CreatedById", UserConnection.CurrentUser.ContactId);
                entity.SetColumnValue("ModifiedById", UserConnection.CurrentUser.ContactId);

                foreach (var kvp in allColumns)
                    entity.SetColumnValue(kvp.Key, kvp.Value);

                entity.Save();
                return entity.PrimaryColumnValue;
            }
            catch (Exception e)
            {
                throw new Exception($"[EntitySchemaHelper.CreateData] {e.Message}", e);
            }
        }

        // ===========================
        //   UPDATE ENTITY
        // ===========================
        public void UpdateEntity(string schemaName, Guid id, Dictionary<string, object> values, bool useEntitySchema = false)
        {
            using (var dbExecutor = UserConnection.EnsureDBConnection())
            {
                UpdateEntity(schemaName, id, values, useEntitySchema, dbExecutor);
            }
        }

        public void UpdateEntity(string schemaName, Guid id, Dictionary<string, object> values, bool useEntitySchema, DBExecutor dbExecutor)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(schemaName))
                    throw new ArgumentException("schemaName is required.", nameof(schemaName));
                if (id == Guid.Empty)
                    throw new ArgumentException("id is required.", nameof(id));
                if (values == null || values.Count == 0)
                    throw new ArgumentException("values is required.", nameof(values));
                if (dbExecutor == null)
                    throw new ArgumentNullException(nameof(dbExecutor));

                // ===============================
                // DIRECT UPDATE (FASTEST)
                // ===============================
                if (!useEntitySchema)
                {
                    var update = new Update(UserConnection, schemaName);

                    foreach (var kvp in values)
                    {
                        update.Set(kvp.Key, Column.Parameter(kvp.Value));
                    }

                    // Update system columns
                    update
                        .Set("ModifiedById", Column.Parameter(UserConnection.CurrentUser.ContactId))
                        .Set("ModifiedOn", Column.Parameter(DateTime.UtcNow))
                        .Where("Id").IsEqual(Column.Parameter(id));

                    update.Execute(dbExecutor);
                    return;
                }

                // ===============================
                // ENTITY UPDATE (WITH EVENTS)
                // ===============================
                var entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(schemaName);
                var entity = entitySchema.CreateEntity(UserConnection);

                if (!entity.FetchFromDB(id))
                    throw new Exception($"Record with Id {id} not found in {schemaName}");

                foreach (var kvp in values)
                {
                    entity.SetColumnValue(kvp.Key, kvp.Value);
                }

                entity.SetColumnValue("ModifiedById", UserConnection.CurrentUser.ContactId);
                entity.Save();
            }
            catch (Exception e)
            {
                throw new Exception($"[EntitySchemaHelper.UpdateEntity] {e.Message}", e);
            }
        }
    }
}
