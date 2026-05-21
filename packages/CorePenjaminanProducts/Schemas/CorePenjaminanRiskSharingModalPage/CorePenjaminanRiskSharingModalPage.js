define("CorePenjaminanRiskSharingModalPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_bhyicc7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanRiskSharingDS_CoreName_q9n6xen",
					"control": "$CorePenjaminanRiskSharingDS_CoreName_q9n6xen",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_d5utpgp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanRiskSharingDS_CoreTipeRiskSharing_qhmi2ez",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanRiskSharingDS_CoreTipeRiskSharing_qhmi2ez"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_xo3rz31",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_xo3rz31_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_d5utpgp",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_k63o0h9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanRiskSharingDS_CoreJenisRiskSharing_njy5ydv",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanRiskSharingDS_CoreJenisRiskSharing_njy5ydv"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_9blu4al",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_9blu4al_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_k63o0h9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_5izjegd",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanRiskSharingDS_CorePercentage_00connr",
					"control": "$CorePenjaminanRiskSharingDS_CorePercentage_00connr",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_jaumc7a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanRiskSharingDS_CoreAmount_oj1tjwc",
					"control": "$CorePenjaminanRiskSharingDS_CoreAmount_oj1tjwc",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_lpq4rz7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanRiskSharingDS_CoreManagementFee_s7rpl7y",
					"control": "$CorePenjaminanRiskSharingDS_CoreManagementFee_s7rpl7y",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"CorePenjaminanRiskSharingDS_CorePercentage_00connr": {
						"modelConfig": {
							"path": "CorePenjaminanRiskSharingDS.CorePercentage"
						}
					},
					"CorePenjaminanRiskSharingDS_CoreAmount_oj1tjwc": {
						"modelConfig": {
							"path": "CorePenjaminanRiskSharingDS.CoreAmount"
						}
					},
					"CorePenjaminanRiskSharingDS_CoreManagementFee_s7rpl7y": {
						"modelConfig": {
							"path": "CorePenjaminanRiskSharingDS.CoreManagementFee"
						}
					},
					"CorePenjaminanRiskSharingDS_CoreName_q9n6xen": {
						"modelConfig": {
							"path": "CorePenjaminanRiskSharingDS.CoreName"
						}
					},
					"CorePenjaminanRiskSharingDS_CoreTipeRiskSharing_qhmi2ez": {
						"modelConfig": {
							"path": "CorePenjaminanRiskSharingDS.CoreTipeRiskSharing"
						}
					},
					"CorePenjaminanRiskSharingDS_CoreTipeRiskSharing_qhmi2ez_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"CorePenjaminanRiskSharingDS_CoreJenisRiskSharing_njy5ydv": {
						"modelConfig": {
							"path": "CorePenjaminanRiskSharingDS.CoreJenisRiskSharing"
						}
					},
					"CorePenjaminanRiskSharingDS_CoreJenisRiskSharing_njy5ydv_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"CorePenjaminanRiskSharingDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "CorePenjaminanRiskSharing",
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
					"primaryDataSourceName": "CorePenjaminanRiskSharingDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});