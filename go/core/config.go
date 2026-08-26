package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "ForexTrading",
			"slug": "forex-trading",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
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
						"name": "ask",
						"req": true,
						"short": "Current ask price",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "baseCurrency",
						"short": "Base currency code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "bid",
						"req": true,
						"short": "Current bid price",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "category",
						"req": true,
						"short": "Instrument category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "change",
						"short": "Price change from previous close",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "changePercent",
						"short": "Percentage change from previous close",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "currency",
						"req": true,
						"short": "Quote currency",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Additional information about the instrument",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lastUpdated",
						"short": "Last update timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "leverage",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lotSizes",
						"short": "Available lot sizes",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "marginRequirement",
						"req": true,
						"short": "Margin requirement percentage",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "minSpread",
						"short": "Minimum spreads by account type (in pips or points)",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Full name of the instrument",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quoteCurrency",
						"short": "Quote currency code",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spread",
						"short": "Spread in pips or points",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "symbol",
						"req": true,
						"short": "Trading symbol",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "tradingHours",
						"short": "Trading hours availability",
						"type": "`$STRING`",
					},
				},
				"name": "market_data",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "Standard",
											"kind": "query",
											"name": "account_type",
											"orig": "account_type",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "all",
											"kind": "query",
											"name": "category",
											"orig": "category",
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
							},
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "Standard",
											"kind": "query",
											"name": "account_type",
											"orig": "account_type",
											"type": "`$STRING`",
										},
										map[string]any{
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

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
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
