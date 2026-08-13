package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ForexTrading",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://api.swissquote.com/v1",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"market_data": map[string]any{},
			},
		},
		"entity": map[string]any{
			"market_data": map[string]any{
				"fields": []any{
					map[string]any{
						"active": true,
						"name": "ask",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "baseCurrency",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "bid",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "category",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "change",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "changePercent",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "currency",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "lastUpdated",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "leverage",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "lotSizes",
						"req": false,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "marginRequirement",
						"req": true,
						"type": "`$NUMBER`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "minSpread",
						"req": false,
						"type": "`$OBJECT`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "quoteCurrency",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "spread",
						"req": false,
						"type": "`$NUMBER`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "symbol",
						"req": true,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "tradingHours",
						"req": false,
						"type": "`$STRING`",
						"index$": 17,
					},
				},
				"name": "market_data",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "Standard",
											"kind": "query",
											"name": "account_type",
											"orig": "account_type",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "all",
											"kind": "query",
											"name": "category",
											"orig": "category",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/instruments",
								"parts": []any{
									"instruments",
								},
								"select": map[string]any{
									"exist": []any{
										"account_type",
										"category",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.instruments`",
								},
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"active": true,
											"example": "Standard",
											"kind": "query",
											"name": "account_type",
											"orig": "account_type",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "EUR/USD,GBP/USD,XAU/USD",
											"kind": "query",
											"name": "symbol",
											"orig": "symbol",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/quotes",
								"parts": []any{
									"quotes",
								},
								"select": map[string]any{
									"exist": []any{
										"account_type",
										"symbol",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.quotes`",
								},
								"index$": 1,
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
