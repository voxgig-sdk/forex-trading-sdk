-- Typed models for the ForexTrading SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class MarketData
---@field ask number
---@field base_currency? string
---@field bid number
---@field category string
---@field change? number
---@field change_percent? number
---@field currency string
---@field description? string
---@field last_updated? string
---@field leverage? table
---@field lot_size? table
---@field margin_requirement number
---@field min_spread? table
---@field name string
---@field quote_currency? string
---@field spread? number
---@field symbol string
---@field trading_hour? string

---@class MarketDataListMatch

local M = {}

return M
