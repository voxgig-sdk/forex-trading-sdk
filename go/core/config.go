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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.swissquote.com/v1",
			"auth": map[string]any{
				"prefix": "",
				"name": "X-API-Key",
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
						"title": "Ask",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Current ask price",
						"format": "double",
					},
					map[string]any{
						"name": "baseCurrency",
						"title": "Base Currency",
						"type": "`$STRING`",
						"short": "Base currency code",
					},
					map[string]any{
						"name": "bid",
						"title": "Bid",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Current bid price",
						"format": "double",
					},
					map[string]any{
						"name": "category",
						"title": "Category",
						"type": "`$STRING`",
						"req": true,
						"short": "Instrument category",
					},
					map[string]any{
						"name": "change",
						"title": "Change",
						"type": "`$NUMBER`",
						"short": "Price change from previous close",
						"format": "double",
					},
					map[string]any{
						"name": "changePercent",
						"title": "Change Percent",
						"type": "`$NUMBER`",
						"short": "Percentage change from previous close",
						"format": "double",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"req": true,
						"short": "Quote currency",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"short": "Additional information about the instrument",
					},
					map[string]any{
						"name": "lastUpdated",
						"title": "Last Updated",
						"type": "`$STRING`",
						"short": "Last update timestamp",
						"format": "date-time",
					},
					map[string]any{
						"name": "leverage",
						"title": "Leverage",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "lotSizes",
						"title": "Lot Sizes",
						"type": "`$ARRAY`",
						"short": "Available lot sizes",
					},
					map[string]any{
						"name": "marginRequirement",
						"title": "Margin Requirement",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Margin requirement percentage",
						"format": "double",
					},
					map[string]any{
						"name": "minSpread",
						"title": "Min Spread",
						"type": "`$OBJECT`",
						"short": "Minimum spreads by account type (in pips or points)",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Full name of the instrument",
					},
					map[string]any{
						"name": "quoteCurrency",
						"title": "Quote Currency",
						"type": "`$STRING`",
						"short": "Quote currency code",
					},
					map[string]any{
						"name": "spread",
						"title": "Spread",
						"type": "`$NUMBER`",
						"short": "Spread in pips or points",
						"format": "double",
					},
					map[string]any{
						"name": "symbol",
						"title": "Symbol",
						"type": "`$STRING`",
						"req": true,
						"short": "Trading symbol",
					},
					map[string]any{
						"name": "tradingHours",
						"title": "Trading Hours",
						"type": "`$STRING`",
						"short": "Trading hours availability",
					},
				},
				"name": "market_data",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/instruments",
								"segments": []any{
									map[string]any{
										"lit": "instruments",
									},
								},
								"parts": []any{
									"instruments",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.instruments`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_type",
											"orig": "account_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Standard",
										},
										map[string]any{
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
											"kind": "query",
											"example": "all",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_type",
										"category",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/quotes",
								"segments": []any{
									map[string]any{
										"lit": "quotes",
									},
								},
								"parts": []any{
									"quotes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.quotes`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "account_type",
											"orig": "account_type",
											"type": "`$STRING`",
											"kind": "query",
											"example": "Standard",
										},
										map[string]any{
											"name": "symbol",
											"orig": "symbol",
											"type": "`$STRING`",
											"kind": "query",
											"reqd": true,
											"example": "EUR/USD,GBP/USD,XAU/USD",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"account_type",
										"symbol",
									},
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
