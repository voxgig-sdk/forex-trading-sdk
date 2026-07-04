// Typed models for the ForexTrading SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface MarketData {
  ask: number
  base_currency?: string
  bid: number
  category: string
  change?: number
  change_percent?: number
  currency: string
  description?: string
  last_updated?: string
  leverage?: Record<string, any>
  lot_size?: any[]
  margin_requirement: number
  min_spread?: Record<string, any>
  name: string
  quote_currency?: string
  spread?: number
  symbol: string
  trading_hour?: string
}

export type MarketDataListMatch = Partial<MarketData>

