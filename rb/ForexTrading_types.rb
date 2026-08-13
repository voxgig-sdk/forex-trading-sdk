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
# @!attribute [rw] baseCurrency
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
# @!attribute [rw] changePercent
#   @return [Float, nil]
#
# @!attribute [rw] currency
#   @return [String]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] leverage
#   @return [Hash, nil]
#
# @!attribute [rw] lotSizes
#   @return [Array, nil]
#
# @!attribute [rw] marginRequirement
#   @return [Float]
#
# @!attribute [rw] minSpread
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] quoteCurrency
#   @return [String, nil]
#
# @!attribute [rw] spread
#   @return [Float, nil]
#
# @!attribute [rw] symbol
#   @return [String]
#
# @!attribute [rw] tradingHours
#   @return [String, nil]
MarketData = Struct.new(
  :ask,
  :baseCurrency,
  :bid,
  :category,
  :change,
  :changePercent,
  :currency,
  :description,
  :lastUpdated,
  :leverage,
  :lotSizes,
  :marginRequirement,
  :minSpread,
  :name,
  :quoteCurrency,
  :spread,
  :symbol,
  :tradingHours,
  keyword_init: true
)

# Request payload for MarketData#list.
#
# @!attribute [rw] ask
#   @return [Float, nil]
#
# @!attribute [rw] baseCurrency
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
# @!attribute [rw] changePercent
#   @return [Float, nil]
#
# @!attribute [rw] currency
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] lastUpdated
#   @return [String, nil]
#
# @!attribute [rw] leverage
#   @return [Hash, nil]
#
# @!attribute [rw] lotSizes
#   @return [Array, nil]
#
# @!attribute [rw] marginRequirement
#   @return [Float, nil]
#
# @!attribute [rw] minSpread
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] quoteCurrency
#   @return [String, nil]
#
# @!attribute [rw] spread
#   @return [Float, nil]
#
# @!attribute [rw] symbol
#   @return [String, nil]
#
# @!attribute [rw] tradingHours
#   @return [String, nil]
MarketDataListMatch = Struct.new(
  :ask,
  :baseCurrency,
  :bid,
  :category,
  :change,
  :changePercent,
  :currency,
  :description,
  :lastUpdated,
  :leverage,
  :lotSizes,
  :marginRequirement,
  :minSpread,
  :name,
  :quoteCurrency,
  :spread,
  :symbol,
  :tradingHours,
  keyword_init: true
)

