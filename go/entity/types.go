// Typed models for the ForexTrading SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/forex-trading-sdk/go/core"
)

// MarketData is the typed data model for the market_data entity.
type MarketData struct {
	Ask float64 `json:"ask"`
	BaseCurrency *string `json:"baseCurrency,omitempty"`
	Bid float64 `json:"bid"`
	Category string `json:"category"`
	Change *float64 `json:"change,omitempty"`
	ChangePercent *float64 `json:"changePercent,omitempty"`
	Currency string `json:"currency"`
	Description *string `json:"description,omitempty"`
	LastUpdated *string `json:"lastUpdated,omitempty"`
	Leverage *map[string]any `json:"leverage,omitempty"`
	LotSizes *[]any `json:"lotSizes,omitempty"`
	MarginRequirement float64 `json:"marginRequirement"`
	MinSpread *map[string]any `json:"minSpread,omitempty"`
	Name string `json:"name"`
	QuoteCurrency *string `json:"quoteCurrency,omitempty"`
	Spread *float64 `json:"spread,omitempty"`
	Symbol string `json:"symbol"`
	TradingHours *string `json:"tradingHours,omitempty"`
}

// MarketDataListMatch is the typed request payload for MarketData.ListTyped.
type MarketDataListMatch struct {
	Ask *float64 `json:"ask,omitempty"`
	BaseCurrency *string `json:"baseCurrency,omitempty"`
	Bid *float64 `json:"bid,omitempty"`
	Category *string `json:"category,omitempty"`
	Change *float64 `json:"change,omitempty"`
	ChangePercent *float64 `json:"changePercent,omitempty"`
	Currency *string `json:"currency,omitempty"`
	Description *string `json:"description,omitempty"`
	LastUpdated *string `json:"lastUpdated,omitempty"`
	Leverage *map[string]any `json:"leverage,omitempty"`
	LotSizes *[]any `json:"lotSizes,omitempty"`
	MarginRequirement *float64 `json:"marginRequirement,omitempty"`
	MinSpread *map[string]any `json:"minSpread,omitempty"`
	Name *string `json:"name,omitempty"`
	QuoteCurrency *string `json:"quoteCurrency,omitempty"`
	Spread *float64 `json:"spread,omitempty"`
	Symbol *string `json:"symbol,omitempty"`
	TradingHours *string `json:"tradingHours,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
