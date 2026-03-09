define("TstRealEstateSection_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common", "TstUIConstants"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk, constants)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "TstRealEstate"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"recordColumnName": "TstRealEstateId",
					"columns": [
						{
							"id": "198e7afb-f21d-4772-a550-604e47a15abf",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_0f48k13",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_0f48k13_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "TstGetReportForRealEstate",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RecordId"
						}
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TstName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.TstName",
					"control": "$TstName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_oqd13k1",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_f0frsol",
					"labelPosition": "auto",
					"control": "$LookupAttribute_f0frsol",
					"listActions": [],
					"showValueAsLink": true
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_649cv39",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_649cv39_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_oqd13k1",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_y13tkwl",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_4nbphnu",
					"labelPosition": "auto",
					"control": "$LookupAttribute_4nbphnu",
					"listActions": [],
					"showValueAsLink": true,
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_21ujed9",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_21ujed9_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_y13tkwl",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_me7z68o",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_rl2urxu",
					"labelPosition": "auto",
					"control": "$NumberAttribute_rl2urxu",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_y26qq54",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_dprn0i2",
					"labelPosition": "auto",
					"control": "$NumberAttribute_dprn0i2"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_tehrrg9",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_pm9t1zj",
					"labelPosition": "auto",
					"control": "$NumberAttribute_pm9t1zj"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "RichTextEditor_9k6h18w",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 2,
						"rowSpan": 4
					},
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.StringAttribute_urixhtv",
					"labelPosition": "auto",
					"control": "$StringAttribute_urixhtv"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Button_AddPropertyViewings",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_qg2ucyw_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "tst.AddPropertyViewingsRequest"
					},
					"clickMode": "default",
					"icon": "add-button-icon"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DataGrid_hhoo1o1",
				"values": {
					"type": "crt.DataGrid",
					"selectedRows": "$DataGrid_hhoo1o1_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DataGrid_hhoo1o1_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$DataGrid_hhoo1o1",
					"primaryColumnName": "DataGrid_hhoo1o1DS_Id",
					"columns": [
						{
							"id": "4ab1feab-5cf1-7eaf-7257-73cfada7887e",
							"code": "DataGrid_hhoo1o1DS_TstPotentialClient",
							"path": "TstPotentialClient",
							"caption": "#ResourceString(DataGrid_hhoo1o1DS_TstPotentialClient)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "e812279d-830b-bc96-63f0-adbae9cee3ed",
							"code": "DataGrid_hhoo1o1DS_TstResponsible",
							"path": "TstResponsible",
							"caption": "#ResourceString(DataGrid_hhoo1o1DS_TstResponsible)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "2b436f80-83d5-f1d2-0336-f3e6c34186ad",
							"code": "DataGrid_hhoo1o1DS_TstComment",
							"caption": "#ResourceString(DataGrid_hhoo1o1DS_TstComment)#",
							"dataValueType": 43,
							"width": 562
						}
					]
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"TstCostForRequiredComment": {
					"value": 0
				},
				"TstRentPercent": {
					"value": 0
				},
				"TstTstSalePercent": {
					"value": 0
				},
				"TstName": {
					"modelConfig": {
						"path": "PDS.TstName"
					}
				},
				"LookupAttribute_f0frsol": {
					"modelConfig": {
						"path": "PDS.TstType"
					}
				},
				"LookupAttribute_4nbphnu": {
					"modelConfig": {
						"path": "PDS.TstOfferType"
					}
				},
				"CreatedBy": {
					"modelConfig": {
						"path": "PDS.CreatedBy"
					}
				},
				"NumberAttribute_dprn0i2": {
					"modelConfig": {
						"path": "PDS.TstArea"
					},
					"validators": {
						"ValidateFieldValue": {
							"type": "tst.ValidatorNeagiveValue",
							"params": {
								"message": "#ResourceString(ValidatorNeagiveValueMessage)#"
							}
						}
					}
				},
				"NumberAttribute_pm9t1zj": {
					"modelConfig": {
						"path": "PDS.TstCostUSD"
					},
					"validators": {
						"ValidateFieldValue": {
							"type": "tst.ValidatorNeagiveValue",
							"params": {
								"message": "#ResourceString(ValidatorNeagiveValueMessage)#"
							}
						}
					}
				},
				"StringAttribute_urixhtv": {
					"modelConfig": {
						"path": "PDS.TstComment"
					},
					"validators": {
						"required": {
							"type": "crt.Required"
						}
					}
				},
				"NumberAttribute_rl2urxu": {
					"modelConfig": {
						"path": "PDS.TstCommission"
					}
				},
				"DataGrid_hhoo1o1": {
					"isCollection": true,
					"modelConfig": {
						"path": "DataGrid_hhoo1o1DS",
						"sortingConfig": {
							"default": []
						}
					},
					"viewModelConfig": {
						"attributes": {
							"DataGrid_hhoo1o1DS_TstPotentialClient": {
								"modelConfig": {
									"path": "DataGrid_hhoo1o1DS.TstPotentialClient"
								}
							},
							"DataGrid_hhoo1o1DS_TstResponsible": {
								"modelConfig": {
									"path": "DataGrid_hhoo1o1DS.TstResponsible"
								}
							},
							"DataGrid_hhoo1o1DS_TstComment": {
								"modelConfig": {
									"path": "DataGrid_hhoo1o1DS.TstComment"
								}
							},
							"DataGrid_hhoo1o1DS_Id": {
								"modelConfig": {
									"path": "DataGrid_hhoo1o1DS.Id"
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"AttachmentListDS": {
					"config": {
						"entitySchemaName": "TstRealEstateFile"
					}
				},
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "TstRealEstate"
					},
					"scope": "page"
				},
				"DataGrid_hhoo1o1DS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "TstRealEstatePropertyViewings",
						"attributes": {
							"TstPotentialClient": {
								"path": "TstPotentialClient"
							},
							"TstResponsible": {
								"path": "TstResponsible"
							},
							"TstComment": {
								"path": "TstComment"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"DataGrid_hhoo1o1DS": [
					{
						"attributePath": "TstRealEstate",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				async handler (request, next) {
					await next?.handle(request);

					await this.initSysSettings(request);
					await this.initHandleMessage(request);

					await request.$context.executeRequest({
						type: "tst.SetRequiredCommentRequest",
						$context: request.$context
					});
					
					await request.$context.executeRequest({
						type: "tst.CalculateCommissionRequest",
						$context: request.$context
					})
				},

				initHandleMessage: async (request) => {
					const messageHandler = async (channel, message) => {
						if (message && message.Header.Sender === "ReloadPropertyViewingsListMessage") {
							const recordId = await request.$context.Id;
							const data = JSON.parse(message.Body);
							
							if (!data.IsSuccess) {
								await request.$context.executeRequest({
									type: "crt.NotificationRequest",
									message: data.ErrorMessage,
									$context: request.$context,
								});
							}

							if (recordId === data.RealEstateId) {
								await request.$context.executeRequest({
									type: "crt.LoadDataRequest",
									$context: request.$context,
									config: {
										loadType: "reload",
										useLastLoadParameters: true
									},
									dataSourceName: "DataGrid_hhoo1o1DS"
								});
							};
						}
					};

					request.$context.SocketHandler = messageHandler;
					Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, messageHandler, request.$context);
				},

				initSysSettings: async (request) => {
					const sysSettingsService = new sdk.SysSettingsService();

					const [salePercent, rentPercent, costForRequiredComment] = await Promise.all([
						sysSettingsService.getByCode("TstSalePercent"),
						sysSettingsService.getByCode("TstRentPercent"),
						sysSettingsService.getByCode("TstCostForRequiredComment")
					])

					request.$context.TstSalePercent = salePercent ? salePercent.value : 0;
					request.$context.TstRentPercent = rentPercent ? rentPercent.value : 0;
					request.$context.TstCostForRequiredComment = costForRequiredComment ? costForRequiredComment.value : 0;
				}
			},
			{
				request: "crt.HandleViewModelDestroyRequest",
				handler: async (request, next) => {
					const handler = request.$context.SocketHandler;
					if (handler) {
						Terrasoft.ServerChannel.un(Terrasoft.EventName.ON_MESSAGE, handler, request.$context);
					}
					return next.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				async handler (request, next) {
					var attrName = request.attributeName;

					if (attrName === "NumberAttribute_pm9t1zj") {
						await request.$context.executeRequest({
							type: "tst.SetRequiredCommentRequest",
							$context: request.$context
						})
					}

					if (this.isNeedRecalculateCommission(attrName)) {
						await request.$context.executeRequest({
							type: "tst.CalculateCommissionRequest",
							$context: request.$context
						})
					}

					await next?.handle(request);
				},

				isNeedRecalculateCommission(attrName) {
					return [
						"LookupAttribute_4nbphnu", 
						"NumberAttribute_pm9t1zj"
					].includes(attrName)
				}
			},
			{
				request: "tst.SetRequiredCommentRequest",
				handler: async (request, next) => {
					const costUSD = await request.$context.NumberAttribute_pm9t1zj;
					const costForRequiredComment = await request.$context.TstCostForRequiredComment;

					if (costUSD >= costForRequiredComment) {
						await request.$context.enableAttributeValidator("StringAttribute_urixhtv", "required");
					} else {
						await request.$context.disableAttributeValidator("StringAttribute_urixhtv", "required");
					}

					return await next?.handle(request);
				}
			},
			{
				request: "tst.AddPropertyViewingsRequest",
				handler: async (request, next) => {
					const handlerChain = sdk.HandlerChainService.instance;
					
					await handlerChain.process({
						type: "crt.RunBusinessProcessRequest",
						processName: "TstAddPropertyViewings",
						$context: request.$context,
						processParameters: {
							TstRealEstateId: await request.$context.Id,
							TstResponsibleId: (await request.$context.CreatedBy).value
						},
					})

					return next.handle(request);
				}
			},
			{
				request: "tst.CalculateCommissionRequest",
				async handler (request, next) {
					var commission = 0;
					const offerType = await request.$context.LookupAttribute_4nbphnu;
					const offerTypeValue = offerType && offerType.value;
					
					if (this.isSaleOrRent(offerTypeValue)) {
						const costUSD = await request.$context.NumberAttribute_pm9t1zj;
						const percent = await request.$context[`Tst${this.getKeyByOfferType(offerTypeValue)}Percent`];

						commission = costUSD * percent / 100;
					}

					request.$context.setValue({'NumberAttribute_rl2urxu': commission}, {
					    preventAttributeChangeRequest: true
					});

					return await next?.handle(request);
				},

				isSaleOrRent(offerTypeValue) {
					return [constants.OfferType.Sale, constants.OfferType.Rent].includes(offerTypeValue);
				},

				getKeyByOfferType(offerTypeValue) {
					const offerTypes = constants.OfferType;
					return Object.keys(offerTypes).find(k => offerTypes[k] === offerTypeValue);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"tst.ValidatorNeagiveValue": {
				"validator": function(config) {
					return function (control) {
						return control.value < 0 ? {
							"tst.ValidatorNeagiveValue": { message: config.message }
						} : null;
					}
				},
				"params": [
					{
						"name": "message"
					}
				],
				"async": false
			},
		}/**SCHEMA_VALIDATORS*/
	};
});