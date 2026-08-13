// Typed models for the ForexTrading SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface MarketData {
  ask: number
  baseCurrency?: string
  bid: number
  category: string
  change?: number
  changePercent?: number
  currency: string
  description?: string
  lastUpdated?: string
  leverage?: Record<string, any>
  lotSizes?: any[]
  marginRequirement: number
  minSpread?: Record<string, any>
  name: string
  quoteCurrency?: string
  spread?: number
  symbol: string
  tradingHours?: string
}

export interface MarketDataListMatch {
  ask?: number
  baseCurrency?: string
  bid?: number
  category?: string
  change?: number
  changePercent?: number
  currency?: string
  description?: string
  lastUpdated?: string
  leverage?: Record<string, any>
  lotSizes?: any[]
  marginRequirement?: number
  minSpread?: Record<string, any>
  name?: string
  quoteCurrency?: string
  spread?: number
  symbol?: string
  tradingHours?: string
}

