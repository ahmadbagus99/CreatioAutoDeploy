define("CorePage_DefaultPagePenjaminan", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "GridContainer_zda8b5s",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "medium",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_qt0gsjw",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 10
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_zda8b5s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Dashboards_4g5twzn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Dashboards",
					"_designOptions": {
						"entitySchemaName": "CorePenjaminan",
						"dependencies": [],
						"filters": []
					}
				},
				"parentName": "GridContainer_qt0gsjw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Timer_6xj702i",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 11,
						"rowSpan": 1
					},
					"type": "crt.Timer",
					"caption": "#ResourceString(Timer_6xj702i_caption)#",
					"labelType": "body",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "#0B8500",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"timerType": "countdown-to-specific-date",
					"showNegativeCountDownValue": true,
					"negativeTextColor": "#D2310D",
					"positiveTextColor": "#0B8500",
					"positiveTextValue": "",
					"negativeTextValue": "",
					"label": "#ResourceString(Timer_6xj702i_label)#",
					"visible": true,
					"readonly": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"headingLevel": null,
					"control": "$CorePenjaminanDS_CreatedOn_9gla2gq"
				},
				"parentName": "GridContainer_zda8b5s",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_ynmqlk7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 12,
						"rowSpan": 1
					},
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_ynmqlk7_caption)#)#",
					"labelType": "large-1",
					"labelThickness": "default",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "center",
					"headingLevel": "label",
					"visible": true
				},
				"parentName": "GridContainer_zda8b5s",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_rpi9j2u",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 13,
						"rowSpan": 21
					},
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"bottom": "medium",
						"right": "medium",
						"left": "medium"
					},
					"color": "primary",
					"borderRadius": "none",
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_zda8b5s",
				"propertyName": "items",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"attributes": {
						"Id_b9e3di9": {
							"modelConfig": {
								"path": "#PrimaryDataSourceName()#.Id"
							}
						},
						"CorePenjaminanDS_CreatedOn_9gla2gq": {
							"modelConfig": {
								"path": "CorePenjaminanDS.CreatedOn"
							}
						},
						"Id_ouewsti": {
							"modelConfig": {
								"path": "CorePenjaminanDS.Id"
							}
						},
						"Playbook_KnowledgeBase": {
							"isCollection": true,
							"modelConfig": {
								"path": "Playbook_KnowledgeBaseDS",
								"filterAttributes": [
									{
										"name": "Filter_by_DCM",
										"loadOnChange": true
									}
								]
							},
							"viewModelConfig": {
								"attributes": {
									"Playbook_KnowledgeBaseDS_Id": {
										"modelConfig": {
											"path": "Playbook_KnowledgeBaseDS.Id"
										}
									},
									"Playbook_KnowledgeBaseDS_Name": {
										"modelConfig": {
											"path": "Playbook_KnowledgeBaseDS.Name"
										}
									},
									"Playbook_KnowledgeBaseDS_Notes": {
										"modelConfig": {
											"path": "Playbook_KnowledgeBaseDS.Notes"
										}
									},
									"Playbook_KnowledgeBaseDS_CreatedBy": {
										"modelConfig": {
											"path": "Playbook_KnowledgeBaseDS.CreatedBy"
										}
									},
									"Playbook_KnowledgeBaseDS_ModifiedOn": {
										"modelConfig": {
											"path": "Playbook_KnowledgeBaseDS.ModifiedOn"
										}
									},
									"Playbook_KnowledgeBaseDS_Type": {
										"modelConfig": {
											"path": "Playbook_KnowledgeBaseDS.Type"
										}
									}
								}
							}
						},
						"Filter_by_DCM": {}
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
						"CorePenjaminanDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "CorePenjaminan",
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
						},
						"Playbook_KnowledgeBaseDS": {
							"type": "crt.EntityDataSource",
							"scope": "viewElement",
							"config": {
								"entitySchemaName": "KnowledgeBase",
								"attributes": [
									{
										"Id": {
											"path": "Id"
										}
									},
									{
										"Name": {
											"path": "Name"
										}
									},
									{
										"Notes": {
											"path": "Notes"
										}
									},
									{
										"Type": {
											"path": "Type"
										}
									},
									{
										"ModifiedOn": {
											"path": "ModifiedOn"
										}
									},
									{
										"CreatedBy": {
											"path": "CreatedBy"
										}
									}
								]
							}
						}
					},
					"primaryDataSourceName": "CorePenjaminanDS",
					"dependencies": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});