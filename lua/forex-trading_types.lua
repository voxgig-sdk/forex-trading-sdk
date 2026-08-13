-- Typed models for the ForexTrading SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class MarketData
---@field ask number
---@field baseCurrency? string
---@field bid number
---@field category string
---@field change? number
---@field changePercent? number
---@field currency string
---@field description? string
---@field lastUpdated? string
---@field leverage? table
---@field lotSizes? table
---@field marginRequirement number
---@field minSpread? table
---@field name string
---@field quoteCurrency? string
---@field spread? number
---@field symbol string
---@field tradingHours? string

---@class MarketDataListMatch
---@field ask? number
---@field baseCurrency? string
---@field bid? number
---@field category? string
---@field change? number
---@field changePercent? number
---@field currency? string
---@field description? string
---@field lastUpdated? string
---@field leverage? table
---@field lotSizes? table
---@field marginRequirement? number
---@field minSpread? table
---@field name? string
---@field quoteCurrency? string
---@field spread? number
---@field symbol? string
---@field tradingHours? string

local M = {}

return M
