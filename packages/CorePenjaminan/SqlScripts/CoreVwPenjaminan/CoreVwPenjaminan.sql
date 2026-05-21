drop view if exists "CoreVwPenjaminan";
 
create view "CoreVwPenjaminan"
as
	select
	    p."Id",
	    p."CreatedOn",
	    p."CreatedById",
	    p."ModifiedOn",
	    p."ModifiedById",
	    0 as "ProcessListeners",
	    p."CoreNomorPermohonan",
	    p."CoreJenisPenjaminanId",
	    p."CoreProdukId",
	    p."CorePeriodeAwalBerlaku",
	    p."CorePeriodeAkhirBerlaku"
	from (
	    select
	        "Id",
	        "CreatedOn",
	        "CreatedById",
	        "ModifiedOn",
	        "ModifiedById",
	        "CoreNomorPermohonan",
	        "CoreJenisPenjaminanId",
	        "CoreProdukId",
	        "CorePeriodeAwalBerlaku",
	        "CorePeriodeAkhirBerlaku"
	    from "CorePenjaminanMultiguna"
	
	    union all
	
	    select
	        "Id",
	        "CreatedOn",
	        "CreatedById",
	        "ModifiedOn",
	        "ModifiedById",
	        "CoreNomorPermohonan",
	        "CoreJenisPenjaminanId",
	        "CoreProdukId",
	        "CorePeriodeAwalBerlaku",
	        "CorePeriodeAkhirBerlaku"
	    from "CorePenjaminanCustomBond"
	) p;