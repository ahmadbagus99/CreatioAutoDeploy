define("CorePage_FormPenjaminanMultiguna", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_0vbb5se",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CreatedOn_qjdzegd",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$CorePenjaminanMultigunaDS_CreatedOn_qjdzegd"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ilnlyd3",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CreatedBy_v8txe3w",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CreatedBy_v8txe3w"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_95vxuxu",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_95vxuxu_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ilnlyd3",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_zqa9kv4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_ModifiedOn_cs34g36",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$CorePenjaminanMultigunaDS_ModifiedOn_cs34g36"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_kp8177z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_ModifiedBy_nilmfct",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_ModifiedBy_nilmfct"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_6lg6sna",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6lg6sna_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_kp8177z",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_20813s4",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreNomorPermohonan_ycttgpq",
					"control": "$CorePenjaminanMultigunaDS_CoreNomorPermohonan_ycttgpq",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_yl3b21s",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreNasabah_g9ingzl",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreNasabah_g9ingzl",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_v0ix064",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_v0ix064_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_yl3b21s",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_v1h95qh",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreCaraBayar_39k5t42",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreCaraBayar_39k5t42",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_8rlaqwe",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8rlaqwe_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_v1h95qh",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_rmum5g7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreMitra_p8ef0sh",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreMitra_p8ef0sh",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_3l37n8h",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_3l37n8h_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rmum5g7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_ju6lpe7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreProduk_agaswt9",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreProduk_agaswt9",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_37nsrai",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_37nsrai_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ju6lpe7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2wfzb6m",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreBank_2e51fcd",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreBank_2e51fcd",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_2mswkdk",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_2mswkdk_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2wfzb6m",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_vkdlcwb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreJenisBond_7euy13v",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreJenisBond_7euy13v",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "addRecord_29mhldq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_29mhldq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_vkdlcwb",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2cd3pfu",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreJenisPenjaminan_r8z2bkd",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanMultigunaDS_CoreJenisPenjaminan_r8z2bkd",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_5s295is",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5s295is_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2cd3pfu",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_4ptw55v",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreBookingNomorSP_372a98m",
					"control": "$CorePenjaminanMultigunaDS_CoreBookingNomorSP_372a98m",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_mwhd33b",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreNomorSP_60o5zrd",
					"control": "$CorePenjaminanMultigunaDS_CoreNomorSP_60o5zrd",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_crpzbyg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CorePeriodeAkhirBerlaku_a9omxiz",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$CorePenjaminanMultigunaDS_CorePeriodeAkhirBerlaku_a9omxiz",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_2sp003i",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CorePeriodeAwalBerlaku_7ixifkx",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$CorePenjaminanMultigunaDS_CorePeriodeAwalBerlaku_7ixifkx",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "NumberInput_xplnbsi",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreCoveragePercentage_vw0lrxo",
					"control": "$CorePenjaminanMultigunaDS_CoreCoveragePercentage_vw0lrxo",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 12
			},
			{
				"operation": "insert",
				"name": "NumberInput_un3y48w",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 7,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreFeeBasePercentage_qpz3tld",
					"control": "$CorePenjaminanMultigunaDS_CoreFeeBasePercentage_qpz3tld",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 13
			},
			{
				"operation": "insert",
				"name": "NumberInput_9um3jmj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreNominalPermohonan_f8cg5rb",
					"control": "$CorePenjaminanMultigunaDS_CoreNominalPermohonan_f8cg5rb",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 14
			},
			{
				"operation": "insert",
				"name": "NumberInput_vb075b5",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 8,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreNilaiAgunan_yh33z3z",
					"control": "$CorePenjaminanMultigunaDS_CoreNilaiAgunan_yh33z3z",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 15
			},
			{
				"operation": "insert",
				"name": "NumberInput_4cc03be",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 9,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanMultigunaDS_CoreNilaiIJP_entmun4",
					"control": "$CorePenjaminanMultigunaDS_CoreNilaiIJP_entmun4",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 16
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_wknxfbv",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_wknxfbv_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_3sjuhkc",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_wknxfbv",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_oks81vp",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_3sjuhkc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_knuvj99",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_knuvj99_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CorePenjaminanDebitur"
						}
					},
					"visible": false,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_oks81vp",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_uecap70",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_uecap70_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_g1perz6DS"
						}
					}
				},
				"parentName": "FlexContainer_oks81vp",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_luu8ylk",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_luu8ylk_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_oks81vp",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_jyuttyk",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_jyuttyk_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_g1perz6"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_luu8ylk",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_erzk04h",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_erzk04h_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "CorePenjaminanDebitur"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_luu8ylk",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_i93igjr",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_i93igjr_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_i93igjr_GridDetail_g1perz6",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_g1perz6"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_i93igjr_SearchValue",
							"GridDetailSearchFilter_i93igjr_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_oks81vp",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_389s0hr",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_wknxfbv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_g1perz6",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_g1perz6",
					"primaryColumnName": "GridDetail_g1perz6DS_Id",
					"columns": [
						{
							"id": "00ba6fdc-45fb-49ea-7319-e1c061a5f22a",
							"code": "GridDetail_g1perz6DS_CoreName",
							"caption": "#ResourceString(GridDetail_g1perz6DS_CoreName)#",
							"dataValueType": 28
						},
						{
							"id": "932e84fe-2c1e-4c37-aad1-e807f7da8167",
							"code": "GridDetail_g1perz6DS_CoreNIK",
							"caption": "#ResourceString(GridDetail_g1perz6DS_CoreNIK)#",
							"dataValueType": 27
						},
						{
							"id": "2434b4bb-9eac-8c56-696f-b88664a59714",
							"code": "GridDetail_g1perz6DS_CoreJenisDebitur",
							"caption": "#ResourceString(GridDetail_g1perz6DS_CoreJenisDebitur)#",
							"dataValueType": 28
						},
						{
							"id": "2648783e-78db-1a93-cb22-8c78965f3edb",
							"code": "GridDetail_g1perz6DS_CoreTarifPenjaminanPercentage",
							"caption": "#ResourceString(GridDetail_g1perz6DS_CoreTarifPenjaminanPercentage)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_389s0hr",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_nv4c9uw",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_nv4c9uw_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_mtetcdv",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nv4c9uw",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_7auqtw4",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_mtetcdv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_489i4rp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_489i4rp_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "CorePenjaminanRiskSharing",
							"defaultValues": [
								{
									"attributeName": "CorePenjaminanMultiguna",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_7auqtw4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_juck52l",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_juck52l_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_tje9owqDS"
						}
					}
				},
				"parentName": "FlexContainer_7auqtw4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_pgaois7",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_pgaois7_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_7auqtw4",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_xc3iev6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_xc3iev6_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_tje9owq"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pgaois7",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_4g0qt6n",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_4g0qt6n_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "CorePenjaminanRiskSharing"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_pgaois7",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_m3c29ie",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_m3c29ie_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_m3c29ie_GridDetail_tje9owq",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_tje9owq"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_m3c29ie_SearchValue",
							"GridDetailSearchFilter_m3c29ie_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_7auqtw4",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_bdq6kom",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_nv4c9uw",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_tje9owq",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"items": "$GridDetail_tje9owq",
					"primaryColumnName": "GridDetail_tje9owqDS_Id",
					"columns": [
						{
							"id": "1f78145c-295e-107a-338f-0b5ced11ba9c",
							"code": "GridDetail_tje9owqDS_CoreName",
							"caption": "#ResourceString(GridDetail_tje9owqDS_CoreName)#",
							"dataValueType": 28
						},
						{
							"id": "3a5f4355-e621-12fe-5e8f-6ba5f8b6eec1",
							"code": "GridDetail_tje9owqDS_CoreJenisRiskSharing",
							"caption": "#ResourceString(GridDetail_tje9owqDS_CoreJenisRiskSharing)#",
							"dataValueType": 10
						},
						{
							"id": "061be4eb-312a-4149-6e83-04f26a5f4313",
							"code": "GridDetail_tje9owqDS_CoreAmount",
							"caption": "#ResourceString(GridDetail_tje9owqDS_CoreAmount)#",
							"dataValueType": 32
						},
						{
							"id": "990320a6-a83e-8213-3613-d7a8bfa41977",
							"code": "GridDetail_tje9owqDS_CoreManagementFee",
							"caption": "#ResourceString(GridDetail_tje9owqDS_CoreManagementFee)#",
							"dataValueType": 32
						},
						{
							"id": "c7d30dab-9420-6622-ed41-be88428fe842",
							"code": "GridDetail_tje9owqDS_CoreTipeRiskSharing",
							"caption": "#ResourceString(GridDetail_tje9owqDS_CoreTipeRiskSharing)#",
							"dataValueType": 10
						},
						{
							"id": "77c03656-11f1-cf5d-1116-e9793016e648",
							"code": "GridDetail_tje9owqDS_CorePercentage",
							"caption": "#ResourceString(GridDetail_tje9owqDS_CorePercentage)#",
							"dataValueType": 32
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_bdq6kom",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"CorePenjaminanMultigunaDS_CreatedOn_qjdzegd": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CreatedOn"
						}
					},
					"CorePenjaminanMultigunaDS_CreatedBy_v8txe3w": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CreatedBy"
						}
					},
					"CorePenjaminanMultigunaDS_CreatedBy_v8txe3w_List": {
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
					"CorePenjaminanMultigunaDS_ModifiedOn_cs34g36": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.ModifiedOn"
						}
					},
					"CorePenjaminanMultigunaDS_ModifiedBy_nilmfct": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.ModifiedBy"
						}
					},
					"CorePenjaminanMultigunaDS_ModifiedBy_nilmfct_List": {
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
					"CorePenjaminanMultigunaDS_CoreCaraBayar_39k5t42": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreCaraBayar"
						}
					},
					"CorePenjaminanMultigunaDS_CoreCaraBayar_39k5t42_List": {
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
					"CorePenjaminanMultigunaDS_CoreProduk_agaswt9": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreProduk"
						}
					},
					"CorePenjaminanMultigunaDS_CoreProduk_agaswt9_List": {
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
					"CorePenjaminanMultigunaDS_CoreJenisBond_7euy13v": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreJenisBond"
						}
					},
					"CorePenjaminanMultigunaDS_CoreJenisBond_7euy13v_List": {
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
					"CorePenjaminanMultigunaDS_CoreNasabah_g9ingzl": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreNasabah"
						}
					},
					"CorePenjaminanMultigunaDS_CoreNasabah_g9ingzl_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "CoreNama",
										"direction": "asc"
									}
								]
							}
						}
					},
					"CorePenjaminanMultigunaDS_CoreMitra_p8ef0sh": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreMitra"
						}
					},
					"CorePenjaminanMultigunaDS_CoreMitra_p8ef0sh_List": {
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
					"CorePenjaminanMultigunaDS_CoreBank_2e51fcd": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreBank"
						}
					},
					"CorePenjaminanMultigunaDS_CoreBank_2e51fcd_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "CoreName",
										"direction": "asc"
									}
								]
							}
						}
					},
					"CorePenjaminanMultigunaDS_CoreBookingNomorSP_372a98m": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreBookingNomorSP"
						}
					},
					"CorePenjaminanMultigunaDS_CoreCoveragePercentage_vw0lrxo": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreCoveragePercentage"
						}
					},
					"CorePenjaminanMultigunaDS_CoreFeeBasePercentage_qpz3tld": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreFeeBasePercentage"
						}
					},
					"CorePenjaminanMultigunaDS_CoreJenisPenjaminan_r8z2bkd": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreJenisPenjaminan"
						}
					},
					"CorePenjaminanMultigunaDS_CoreJenisPenjaminan_r8z2bkd_List": {
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
					"CorePenjaminanMultigunaDS_CoreNilaiAgunan_yh33z3z": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreNilaiAgunan"
						}
					},
					"CorePenjaminanMultigunaDS_CoreNilaiIJP_entmun4": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreNilaiIJP"
						}
					},
					"CorePenjaminanMultigunaDS_CoreNominalPermohonan_f8cg5rb": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreNominalPermohonan"
						}
					},
					"CorePenjaminanMultigunaDS_CoreNomorPermohonan_ycttgpq": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreNomorPermohonan"
						}
					},
					"CorePenjaminanMultigunaDS_CoreNomorSP_60o5zrd": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CoreNomorSP"
						}
					},
					"CorePenjaminanMultigunaDS_CorePeriodeAkhirBerlaku_a9omxiz": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CorePeriodeAkhirBerlaku"
						}
					},
					"CorePenjaminanMultigunaDS_CorePeriodeAwalBerlaku_7ixifkx": {
						"modelConfig": {
							"path": "CorePenjaminanMultigunaDS.CorePeriodeAwalBerlaku"
						}
					},
					"GridDetail_g1perz6": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_g1perz6DS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_i93igjr_GridDetail_g1perz6",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_g1perz6_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_g1perz6DS_CoreName": {
									"modelConfig": {
										"path": "GridDetail_g1perz6DS.CoreName"
									}
								},
								"GridDetail_g1perz6DS_CoreNIK": {
									"modelConfig": {
										"path": "GridDetail_g1perz6DS.CoreNIK"
									}
								},
								"GridDetail_g1perz6DS_CoreJenisDebitur": {
									"modelConfig": {
										"path": "GridDetail_g1perz6DS.CoreJenisDebitur"
									}
								},
								"GridDetail_g1perz6DS_CoreTarifPenjaminanPercentage": {
									"modelConfig": {
										"path": "GridDetail_g1perz6DS.CoreTarifPenjaminanPercentage"
									}
								},
								"GridDetail_g1perz6DS_Id": {
									"modelConfig": {
										"path": "GridDetail_g1perz6DS.Id"
									}
								}
							}
						}
					},
					"GridDetail_g1perz6_PredefinedFilter": {
						"value": null
					},
					"GridDetail_tje9owq": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_tje9owqDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_m3c29ie_GridDetail_tje9owq",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_tje9owq_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_tje9owqDS_CoreName": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.CoreName"
									}
								},
								"GridDetail_tje9owqDS_CoreJenisRiskSharing": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.CoreJenisRiskSharing"
									}
								},
								"GridDetail_tje9owqDS_CoreAmount": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.CoreAmount"
									}
								},
								"GridDetail_tje9owqDS_CoreManagementFee": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.CoreManagementFee"
									}
								},
								"GridDetail_tje9owqDS_CoreTipeRiskSharing": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.CoreTipeRiskSharing"
									}
								},
								"GridDetail_tje9owqDS_CorePercentage": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.CorePercentage"
									}
								},
								"GridDetail_tje9owqDS_Id": {
									"modelConfig": {
										"path": "GridDetail_tje9owqDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_tje9owq_PredefinedFilter": {
						"value": null
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "CorePenjaminanMultigunaDS",
					"dependencies": {
						"GridDetail_g1perz6DS": [
							{
								"attributePath": "CorePenjaminanMultiguna",
								"relationPath": "CorePenjaminanMultigunaDS.Id"
							}
						],
						"GridDetail_tje9owqDS": [
							{
								"attributePath": "CorePenjaminanMultiguna",
								"relationPath": "CorePenjaminanMultigunaDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"CorePenjaminanMultigunaDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "CorePenjaminanMultiguna",
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
					"GridDetail_g1perz6DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CorePenjaminanDebitur",
							"attributes": {
								"CoreName": {
									"path": "CoreName"
								},
								"CoreNIK": {
									"path": "CoreNIK"
								},
								"CoreJenisDebitur": {
									"path": "CoreJenisDebitur"
								},
								"CoreTarifPenjaminanPercentage": {
									"path": "CoreTarifPenjaminanPercentage"
								}
							}
						}
					},
					"GridDetail_tje9owqDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CorePenjaminanRiskSharing",
							"attributes": {
								"CoreName": {
									"path": "CoreName"
								},
								"CoreJenisRiskSharing": {
									"path": "CoreJenisRiskSharing"
								},
								"CoreAmount": {
									"path": "CoreAmount"
								},
								"CoreManagementFee": {
									"path": "CoreManagementFee"
								},
								"CoreTipeRiskSharing": {
									"path": "CoreTipeRiskSharing"
								},
								"CorePercentage": {
									"path": "CorePercentage"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});