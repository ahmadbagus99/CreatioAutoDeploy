 {
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"rootSchemaName": "Account"
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
				"title": "$PDS_Name",
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
				"PDS_Name": {
					"modelConfig": {
						"path": "PDS.Name"
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
				"entitySchemaName": "Account"
			}
		}
	]
}
 