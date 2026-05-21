define("CorePage_FormPenjaminanCustomBond", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"allowToggleClose": true
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_bpxfm4a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CreatedOn_qqa7o6e",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$CorePenjaminanCustomBondDS_CreatedOn_qqa7o6e"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_s5gdps0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CreatedBy_pts76ah",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CreatedBy_pts76ah"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_eh3cgx5",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_eh3cgx5_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_s5gdps0",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_qq4di39",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_ModifiedOn_hkeubgv",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "auto",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$CorePenjaminanCustomBondDS_ModifiedOn_hkeubgv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_k8hhtwo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_ModifiedBy_9fn9jl8",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_ModifiedBy_9fn9jl8"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_etkbszf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_etkbszf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_k8hhtwo",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_n017szj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreJenisPenjaminan_tzkmelr",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreJenisPenjaminan_tzkmelr"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_70ra4m6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_70ra4m6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_n017szj",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_DataBond",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_DataBond_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_fvxizjm",
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
				"parentName": "ExpansionPanel_DataBond",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2tplbfm",
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
				"parentName": "GridContainer_fvxizjm",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_8r0zaow",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_DataBond",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_2xjpo7y",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreJenisBond_j5zcfto",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreJenisBond_j5zcfto",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_8r0zaow",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_uado4mo",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_uado4mo_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_2xjpo7y",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_rti3d0c",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreJenisPersyaratan_ajho455",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreJenisPersyaratan_ajho455",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_8r0zaow",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_t3m7amh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_t3m7amh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_rti3d0c",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_4bq584r",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreSkemaPenalty_0nxd66z",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreSkemaPenalty_0nxd66z",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_8r0zaow",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_fc6374r",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_fc6374r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4bq584r",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_lhnlspn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreSektor_gkynvrj",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreSektor_gkynvrj",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_8r0zaow",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_6egl3jn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_6egl3jn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_lhnlspn",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Principal",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_Principal_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_e6fmwba",
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
				"parentName": "ExpansionPanel_Principal",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_m1x4s8c",
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
				"parentName": "GridContainer_e6fmwba",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_z1s23bv",
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
				"parentName": "ExpansionPanel_Principal",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_55uen3z",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNamaPrincipal_c3rvj10",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreNamaPrincipal_c3rvj10",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_z1s23bv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_63rv1go",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_63rv1go_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_55uen3z",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Obligee",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_Obligee_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_pqedk4f",
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
				"parentName": "ExpansionPanel_Obligee",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_97zo3bv",
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
				"parentName": "GridContainer_pqedk4f",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_fh26d7n",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_Obligee",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_9p86010",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNamaObligee_xx125bq",
					"control": "$CorePenjaminanCustomBondDS_CoreNamaObligee_xx125bq",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_fh26d7n",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_DataAdministrasiProyek",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_DataAdministrasiProyek_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_t7qbcb4",
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
				"parentName": "ExpansionPanel_DataAdministrasiProyek",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_4nsbdjm",
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
				"parentName": "GridContainer_t7qbcb4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_0swy6om",
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
				"parentName": "ExpansionPanel_DataAdministrasiProyek",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_u91e5y1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNomorPermohonan_q722hwq",
					"control": "$CorePenjaminanCustomBondDS_CoreNomorPermohonan_q722hwq",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_l64eg4o",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreTanggalSuratPermohonan_ruegypn",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreTanggalSuratPermohonan_ruegypn",
					"pickerType": "date",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ass3d5e",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreJenisSuratPerjanjian_jkf5w3y",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreJenisSuratPerjanjian_jkf5w3y",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_i0x0zgc",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_i0x0zgc_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ass3d5e",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_oevjnnc",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNoSuratPerjanjian_hppwbfp",
					"control": "$CorePenjaminanCustomBondDS_CoreNoSuratPerjanjian_hppwbfp",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_pw30h5o",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreTanggalSuratPerjanjian_sppodt2",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreTanggalSuratPerjanjian_sppodt2",
					"pickerType": "date",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Checkbox_lmgabze",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreIsBAST_x8vnv3r",
					"ariaLabel": "",
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreIsBAST_x8vnv3r",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Input_l3vh91q",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNoSuratBAST_dwe4b51",
					"control": "$CorePenjaminanCustomBondDS_CoreNoSuratBAST_dwe4b51",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_74p7pil",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreTanggalSuratBAST_5rclv30",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreTanggalSuratBAST_5rclv30",
					"pickerType": "datetime",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "Input_8sagtq0",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNamaJenisDokumen_qp40u0e",
					"control": "$CorePenjaminanCustomBondDS_CoreNamaJenisDokumen_qp40u0e",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Input_ix9xp08",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNomorJenisDokumen_rjh1vfu",
					"control": "$CorePenjaminanCustomBondDS_CoreNomorJenisDokumen_rjh1vfu",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_9orx7li",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 6,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreTanggalSuratJenisDokumen_ifm2adf",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreTanggalSuratJenisDokumen_ifm2adf",
					"pickerType": "date",
					"visible": true
				},
				"parentName": "GridContainer_0swy6om",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_DataProyek",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_DataProyek_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_xzdpagt",
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
				"parentName": "ExpansionPanel_DataProyek",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bg0uteb",
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
				"parentName": "GridContainer_xzdpagt",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_94zw3wq",
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
				"parentName": "ExpansionPanel_DataProyek",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_q97xmt2",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNamaProyek_fj1htqp",
					"control": "$CorePenjaminanCustomBondDS_CoreNamaProyek_fj1htqp",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_jhg6ma7",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreProvinsiProyek_bbeai7b",
					"control": "$CorePenjaminanCustomBondDS_CoreProvinsiProyek_bbeai7b",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_xegde8t",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNilaiProyek_g3ecz31",
					"control": "$CorePenjaminanCustomBondDS_CoreNilaiProyek_g3ecz31",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_epty5kd",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CorePersentase_7cekt35",
					"control": "$CorePenjaminanCustomBondDS_CorePersentase_7cekt35",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_8is42kp",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNilaiPenjamin_mwouokw",
					"control": "$CorePenjaminanCustomBondDS_CoreNilaiPenjamin_mwouokw",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_xzxas5o",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreJangkaWaktu_q08cwu5",
					"control": "$CorePenjaminanCustomBondDS_CoreJangkaWaktu_q08cwu5",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_1h3pbfn",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CorePeriodeAkhirBerlaku_ajgikgp",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$CorePenjaminanCustomBondDS_CorePeriodeAkhirBerlaku_ajgikgp",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_syy7ttd",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CorePeriodeAwalBerlaku_2623guj",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "date",
					"control": "$CorePenjaminanCustomBondDS_CorePeriodeAwalBerlaku_2623guj",
					"visible": true
				},
				"parentName": "GridContainer_94zw3wq",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_TarifdanBiaya",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_TarifdanBiaya_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_w9i2qox",
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
				"parentName": "ExpansionPanel_TarifdanBiaya",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d9evpfw",
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
				"parentName": "GridContainer_w9i2qox",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_q0c8ig1",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_TarifdanBiaya",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_fwrwb9j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreTarif_5hi3arn",
					"control": "$CorePenjaminanCustomBondDS_CoreTarif_5hi3arn",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_q0c8ig1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_gv8ueyn",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreNilaiIJP_vh6afgl",
					"control": "$CorePenjaminanCustomBondDS_CoreNilaiIJP_vh6afgl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_q0c8ig1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_f8rniqb",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreBiayaAdministrasi_w0u6wbc",
					"control": "$CorePenjaminanCustomBondDS_CoreBiayaAdministrasi_w0u6wbc",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_q0c8ig1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_1migpum",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreBiayaMaterai_81rpmir",
					"control": "$CorePenjaminanCustomBondDS_CoreBiayaMaterai_81rpmir",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": "",
					"visible": true
				},
				"parentName": "GridContainer_q0c8ig1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Pembayaran",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_Pembayaran_title)#",
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
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "GridContainer_9qpdfsv",
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
				"parentName": "ExpansionPanel_Pembayaran",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_bzonels",
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
				"parentName": "GridContainer_9qpdfsv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_5n9xgov",
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
				"parentName": "ExpansionPanel_Pembayaran",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_5e5jyzx",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreCaraBayar_mtpen0q",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreCaraBayar_mtpen0q",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GridContainer_5n9xgov",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_5cbszmf",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_5cbszmf_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_5e5jyzx",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Checkbox_vxw4g8k",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreIsDeposit_ej8prvi",
					"ariaLabel": "",
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreIsDeposit_ej8prvi",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_5n9xgov",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Checkbox_wctwsc4",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.CorePenjaminanCustomBondDS_CoreIsDepositManual_hwqy5pf",
					"ariaLabel": "",
					"labelPosition": "above",
					"tooltip": "",
					"control": "$CorePenjaminanCustomBondDS_CoreIsDepositManual_hwqy5pf",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GridContainer_5n9xgov",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_PenjaminanRiskSharing",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_PenjaminanRiskSharing_title)#",
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
				"index": 7
			},
			{
				"operation": "insert",
				"name": "GridContainer_2qnajmd",
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
				"parentName": "ExpansionPanel_PenjaminanRiskSharing",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_9ino1j9",
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
				"parentName": "GridContainer_2qnajmd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_91zzxv8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_91zzxv8_caption)#",
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
									"attributeName": "CorePenjaminanCustomBond",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_9ino1j9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_qyueday",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_qyueday_caption)#",
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
							"dataSourceName": "GridDetail_uv743zgDS"
						}
					}
				},
				"parentName": "FlexContainer_9ino1j9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ze2x5jb",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ze2x5jb_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_9ino1j9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_tjc2rbx",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_tjc2rbx_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_uv743zg"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ze2x5jb",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_s4aoedw",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_s4aoedw_caption)#",
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
				"parentName": "GridDetailSettingsBtn_ze2x5jb",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0lr70i9",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0lr70i9_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_0lr70i9_GridDetail_uv743zg",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_uv743zg"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_0lr70i9_SearchValue",
							"GridDetailSearchFilter_0lr70i9_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_9ino1j9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_j0c157h",
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
				"parentName": "ExpansionPanel_PenjaminanRiskSharing",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_uv743zg",
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
					"items": "$GridDetail_uv743zg",
					"primaryColumnName": "GridDetail_uv743zgDS_Id",
					"columns": [
						{
							"id": "249f54f5-b735-0df3-33e2-2823b82b0ab9",
							"code": "GridDetail_uv743zgDS_CoreName",
							"caption": "#ResourceString(GridDetail_uv743zgDS_CoreName)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_j0c157h",
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
					"CorePenjaminanCustomBondDS_CreatedOn_qqa7o6e": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CreatedOn"
						}
					},
					"CorePenjaminanCustomBondDS_CreatedBy_pts76ah": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CreatedBy"
						}
					},
					"CorePenjaminanCustomBondDS_CreatedBy_pts76ah_List": {
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
					"CorePenjaminanCustomBondDS_ModifiedOn_hkeubgv": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.ModifiedOn"
						}
					},
					"CorePenjaminanCustomBondDS_ModifiedBy_9fn9jl8": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.ModifiedBy"
						}
					},
					"CorePenjaminanCustomBondDS_ModifiedBy_9fn9jl8_List": {
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
					"CorePenjaminanCustomBondDS_CoreNomorPermohonan_q722hwq": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNomorPermohonan"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJenisBond_j5zcfto": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreJenisBond"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJenisBond_j5zcfto_List": {
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
					"CorePenjaminanCustomBondDS_CoreJenisPenjaminan_tzkmelr": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreJenisPenjaminan"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJenisPenjaminan_tzkmelr_List": {
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
					"CorePenjaminanCustomBondDS_CoreJenisPersyaratan_ajho455": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreJenisPersyaratan"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJenisPersyaratan_ajho455_List": {
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
					"CorePenjaminanCustomBondDS_CoreNamaPrincipal_c3rvj10": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNamaPrincipal"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNamaPrincipal_c3rvj10_List": {
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
					"CorePenjaminanCustomBondDS_CorePeriodeAkhirBerlaku_ajgikgp": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CorePeriodeAkhirBerlaku"
						}
					},
					"CorePenjaminanCustomBondDS_CoreSektor_gkynvrj": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreSektor"
						}
					},
					"CorePenjaminanCustomBondDS_CoreSektor_gkynvrj_List": {
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
					"CorePenjaminanCustomBondDS_CoreSkemaPenalty_0nxd66z": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreSkemaPenalty"
						}
					},
					"CorePenjaminanCustomBondDS_CoreSkemaPenalty_0nxd66z_List": {
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
					"CorePenjaminanCustomBondDS_CorePeriodeAwalBerlaku_2623guj": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CorePeriodeAwalBerlaku"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNamaObligee_xx125bq": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNamaObligee"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJenisSuratPerjanjian_jkf5w3y": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreJenisSuratPerjanjian"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJenisSuratPerjanjian_jkf5w3y_List": {
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
					"CorePenjaminanCustomBondDS_CoreTanggalSuratPerjanjian_sppodt2": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreTanggalSuratPerjanjian"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNoSuratBAST_dwe4b51": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNoSuratBAST"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNamaJenisDokumen_qp40u0e": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNamaJenisDokumen"
						}
					},
					"CorePenjaminanCustomBondDS_CoreTanggalSuratJenisDokumen_ifm2adf": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreTanggalSuratJenisDokumen"
						}
					},
					"CorePenjaminanCustomBondDS_CoreTanggalSuratPermohonan_ruegypn": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreTanggalSuratPermohonan"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNoSuratPerjanjian_hppwbfp": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNoSuratPerjanjian"
						}
					},
					"CorePenjaminanCustomBondDS_CoreIsBAST_x8vnv3r": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreIsBAST"
						}
					},
					"CorePenjaminanCustomBondDS_CoreTanggalSuratBAST_5rclv30": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreTanggalSuratBAST"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNomorJenisDokumen_rjh1vfu": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNomorJenisDokumen"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNamaProyek_fj1htqp": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNamaProyek"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNilaiProyek_g3ecz31": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNilaiProyek"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNilaiPenjamin_mwouokw": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNilaiPenjamin"
						}
					},
					"CorePenjaminanCustomBondDS_CoreProvinsiProyek_bbeai7b": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreProvinsiProyek"
						}
					},
					"CorePenjaminanCustomBondDS_CorePersentase_7cekt35": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CorePersentase"
						}
					},
					"CorePenjaminanCustomBondDS_CoreJangkaWaktu_q08cwu5": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreJangkaWaktu"
						}
					},
					"CorePenjaminanCustomBondDS_CoreTarif_5hi3arn": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreTarif"
						}
					},
					"CorePenjaminanCustomBondDS_CoreBiayaAdministrasi_w0u6wbc": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreBiayaAdministrasi"
						}
					},
					"CorePenjaminanCustomBondDS_CoreNilaiIJP_vh6afgl": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreNilaiIJP"
						}
					},
					"CorePenjaminanCustomBondDS_CoreBiayaMaterai_81rpmir": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreBiayaMaterai"
						}
					},
					"CorePenjaminanCustomBondDS_CoreCaraBayar_mtpen0q": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreCaraBayar"
						}
					},
					"CorePenjaminanCustomBondDS_CoreCaraBayar_mtpen0q_List": {
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
					"CorePenjaminanCustomBondDS_CoreIsDeposit_ej8prvi": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreIsDeposit"
						}
					},
					"CorePenjaminanCustomBondDS_CoreIsDepositManual_hwqy5pf": {
						"modelConfig": {
							"path": "CorePenjaminanCustomBondDS.CoreIsDepositManual"
						}
					},
					"GridDetail_uv743zg": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_uv743zgDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_0lr70i9_GridDetail_uv743zg",
									"loadOnChange": true
								},
								{
									"loadOnChange": true,
									"name": "GridDetail_uv743zg_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_uv743zgDS_CoreName": {
									"modelConfig": {
										"path": "GridDetail_uv743zgDS.CoreName"
									}
								},
								"GridDetail_uv743zgDS_Id": {
									"modelConfig": {
										"path": "GridDetail_uv743zgDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_uv743zg_PredefinedFilter": {
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
					"primaryDataSourceName": "CorePenjaminanCustomBondDS",
					"dependencies": {
						"GridDetail_uv743zgDS": [
							{
								"attributePath": "CorePenjaminanCustomBond",
								"relationPath": "CorePenjaminanCustomBondDS.Id"
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
					"CorePenjaminanCustomBondDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "CorePenjaminanCustomBond",
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
					"GridDetail_uv743zgDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "CorePenjaminanRiskSharing",
							"attributes": {
								"CoreName": {
									"path": "CoreName"
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