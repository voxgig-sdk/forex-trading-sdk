# frozen_string_literal: true

# Typed models for the ForexTrading SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# MarketData entity data model.
#
# @!attribute [rw] ask
#   @return [Float]
#
# @!attribute [rw] base_currency
#   @return [String, nil]
#
# @!attribute [rw] bid
#   @return [Float]
#
# @!attribute [rw] category
#   @return [String]
#
# @!attribute [rw] change
#   @return [Float, nil]
#
# @!attribute [rw] change_percent
#   @return [Float, nil]
#
# @!attribute [rw] currency
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] leverage
#   @return [Hash, nil]
#
# @!attribute [rw] lot_size
#   @return [Array, nil]
#
# @!attribute [rw] margin_requirement
#   @return [Float]
#
# @!attribute [rw] min_spread
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] quote_currency
#   @return [String, nil]
#
# @!attribute [rw] spread
#   @return [Float, nil]
#
# @!attribute [rw] symbol
#   @return [String]
#
# @!attribute [rw] trading_hour
#   @return [String, nil]
MarketData = Struct.new(
  :ask,
  :base_currency,
  :bid,
  :category,
  :change,
  :change_percent,
  :currency,
  :description,
  :last_updated,
  :leverage,
  :lot_size,
  :margin_requirement,
  :min_spread,
  :name,
  :quote_currency,
  :spread,
  :symbol,
  :trading_hour,
  keyword_init: true
)

# Request payload for MarketData#list.
#
# @!attribute [rw] ask
#   @return [Float, nil]
#
# @!attribute [rw] base_currency
#   @return [String, nil]
#
# @!attribute [rw] bid
#   @return [Float, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] change
#   @return [Float, nil]
#
# @!attribute [rw] change_percent
#   @return [Float, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] last_updated
#   @return [String, nil]
#
# @!attribute [rw] leverage
#   @return [Hash, nil]
#
# @!attribute [rw] lot_size
#   @return [Array, nil]
#
# @!attribute [rw] margin_requirement
#   @return [Float, nil]
#
# @!attribute [rw] min_spread
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] quote_currency
#   @return [String, nil]
#
# @!attribute [rw] spread
#   @return [Float, nil]
#
# @!attribute [rw] symbol
#   @return [String, nil]
#
# @!attribute [rw] trading_hour
#   @return [String, nil]
MarketDataListMatch = Struct.new(
  :ask,
  :base_currency,
  :bid,
  :category,
  :change,
  :change_percent,
  :currency,
  :description,
  :last_updated,
  :leverage,
  :lot_size,
  :margin_requirement,
  :min_spread,
  :name,
  :quote_currency,
  :spread,
  :symbol,
  :trading_hour,
  keyword_init: true
)

