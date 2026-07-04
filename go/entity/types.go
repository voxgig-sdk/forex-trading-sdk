// Typed models for the ForexTrading SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// MarketData is the typed data model for the market_data entity.
type MarketData struct {
	Ask float64 `json:"ask"`
	BaseCurrency *string `json:"base_currency,omitempty"`
	Bid float64 `json:"bid"`
	Category string `json:"category"`
	Change *float64 `json:"change,omitempty"`
	ChangePercent *float64 `json:"change_percent,omitempty"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Leverage *map[string]any `json:"leverage,omitempty"`
	LotSize *[]any `json:"lot_size,omitempty"`
	MarginRequirement float64 `json:"margin_requirement"`
	MinSpread *map[string]any `json:"min_spread,omitempty"`
	Name string `json:"name"`
	QuoteCurrency *string `json:"quote_currency,omitempty"`
	Spread *float64 `json:"spread,omitempty"`
	Symbol string `json:"symbol"`
	TradingHour *string `json:"trading_hour,omitempty"`
}

// MarketDataListMatch mirrors the market_data fields as an all-optional match
// filter (Go analog of Partial<MarketData>).
type MarketDataListMatch struct {
	Ask *float64 `json:"ask,omitempty"`
	BaseCurrency *string `json:"base_currency,omitempty"`
	Bid *float64 `json:"bid,omitempty"`
	Category *string `json:"category,omitempty"`
	Change *float64 `json:"change,omitempty"`
	ChangePercent *float64 `json:"change_percent,omitempty"`
	Currency *string `json:"currency,omitempty"`
	Description *string `json:"description,omitempty"`
	LastUpdated *string `json:"last_updated,omitempty"`
	Leverage *map[string]any `json:"leverage,omitempty"`
	LotSize *[]any `json:"lot_size,omitempty"`
	MarginRequirement *float64 `json:"margin_requirement,omitempty"`
	MinSpread *map[string]any `json:"min_spread,omitempty"`
	Name *string `json:"name,omitempty"`
	QuoteCurrency *string `json:"quote_currency,omitempty"`
	Spread *float64 `json:"spread,omitempty"`
	Symbol *string `json:"symbol,omitempty"`
	TradingHour *string `json:"trading_hour,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
