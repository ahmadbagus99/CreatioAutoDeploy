namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CoreRabbitMQConnectionManagerSchema

	/// <exclude/>
	public class CoreRabbitMQConnectionManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CoreRabbitMQConnectionManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CoreRabbitMQConnectionManagerSchema(CoreRabbitMQConnectionManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("01e4c493-1768-429a-a311-99f36178b63e");
			Name = "CoreRabbitMQConnectionManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6e302868-513a-40b2-aaee-9bf26a16477e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,0,3,133,84,203,110,219,48,16,188,235,43,182,57,73,64,33,164,215,186,74,209,58,13,42,160,78,219,56,205,213,160,164,181,203,134,34,13,62,28,168,142,255,61,36,37,235,97,89,201,30,12,154,158,153,157,93,47,215,40,202,55,176,172,148,198,114,22,24,255,237,142,100,25,213,139,223,241,156,81,228,122,22,4,156,148,168,182,36,71,184,71,41,137,18,107,29,207,5,95,211,141,145,68,83,193,227,148,107,220,52,231,35,63,216,7,96,99,107,50,70,115,80,72,24,22,144,51,162,84,155,194,138,112,204,29,107,65,56,217,160,132,143,144,94,83,181,21,138,100,12,61,191,86,241,74,146,238,136,70,80,218,38,202,65,34,41,4,103,21,252,32,255,171,79,147,146,87,176,162,220,82,184,181,159,180,90,46,56,62,189,197,13,195,8,146,43,143,156,4,133,81,100,123,212,154,108,202,173,61,78,23,154,182,158,122,6,227,7,194,12,246,213,154,146,211,78,0,86,121,123,158,141,128,109,83,68,246,207,98,96,197,68,254,8,137,175,160,190,10,163,51,250,175,20,7,123,56,140,202,75,23,162,64,6,115,155,78,227,252,47,177,44,22,70,45,106,63,232,179,183,16,122,39,209,224,135,33,204,5,93,91,96,87,31,36,214,185,97,12,158,159,225,93,239,62,78,213,207,45,242,104,196,119,49,224,195,87,67,89,113,67,114,45,100,21,70,113,227,184,69,132,23,254,134,138,222,4,95,244,59,116,12,137,218,200,65,243,27,45,223,9,215,212,62,250,16,116,167,81,179,187,236,141,175,19,147,199,137,27,225,38,250,251,93,40,125,107,159,232,169,229,164,255,183,218,199,26,59,224,251,1,245,151,144,250,76,11,71,76,135,27,50,31,168,212,134,48,39,249,42,179,135,27,10,252,81,40,207,184,30,9,56,156,91,64,39,198,237,26,121,18,178,120,211,120,131,27,178,191,24,45,74,247,64,239,48,23,59,148,213,55,238,246,77,225,4,180,52,39,185,110,81,91,137,199,35,214,77,138,220,17,230,211,221,211,18,151,91,194,227,27,41,202,165,69,240,66,133,31,46,187,201,60,140,119,195,78,208,2,234,45,135,147,143,166,55,104,159,237,38,246,208,217,52,162,149,155,245,38,175,254,60,4,47,54,204,64,35,230,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("01e4c493-1768-429a-a311-99f36178b63e"));
		}

		#endregion

	}

	#endregion

}

