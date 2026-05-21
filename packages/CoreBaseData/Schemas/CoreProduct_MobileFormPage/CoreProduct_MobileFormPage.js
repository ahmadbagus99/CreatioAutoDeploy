{
	"viewConfigDiff": [
		{
			"operation": "insert",
			"name": "Name",
			"values": {
				"type": "crt.Input",
				"label": "$Resources.Strings.Name",
				"control": "$Name",
				"placeholder": "",
				"readonly": false,
				"multiline": false,
				"labelPosition": "above"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 0
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"Name": {
					"modelConfig": {
						"path": "PDS.Name"
					}
				},
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"dataSources": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "Product",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false
						}
					}
				},
				"primaryDataSourceName": "PDS"
			}
		}
	]
}