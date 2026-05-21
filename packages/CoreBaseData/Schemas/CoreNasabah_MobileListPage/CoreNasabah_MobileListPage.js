 {
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"rootSchemaName": "CoreNasabah"
			}
		},
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"caption": "Folders"
			}
		},
		{
			"operation": "merge",
			"name": "ListItem",
			"values": {
				"title": "$PDS_CoreNama",
				"body": [
					{
						"value": "$PDS_CreatedOn"
					},
					{
						"value": "$PDS_CreatedBy"
					}
				]
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": ["attributes", "Items", "viewModelConfig", "attributes"],
			"values": {
				"PDS_Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"PDS_CoreNama": {
					"modelConfig": {
						"path": "PDS.CoreNama"
					}
				},
				"PDS_CreatedOn": {
					"modelConfig": {
						"path": "PDS.CreatedOn"
					}
				},
				"PDS_CreatedBy": {
					"modelConfig": {
						"path": "PDS.CreatedBy"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": ["dataSources", "PDS", "config"],
			"values": {
				"entitySchemaName": "CoreNasabah"
			}
		}
	]
}
 