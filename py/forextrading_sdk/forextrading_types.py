# Typed models for the ForexTrading SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class MarketDataRequired(TypedDict):
    ask: float
    bid: float
    category: str
    currency: str
    marginRequirement: float
    name: str
    symbol: str


class MarketData(MarketDataRequired, total=False):
    baseCurrency: str
    change: float
    changePercent: float
    description: str
    lastUpdated: str
    leverage: dict
    lotSizes: list
    minSpread: dict
    quoteCurrency: str
    spread: float
    tradingHours: str


class MarketDataListMatch(TypedDict, total=False):
    ask: float
    baseCurrency: str
    bid: float
    category: str
    change: float
    changePercent: float
    currency: str
    description: str
    lastUpdated: str
    leverage: dict
    lotSizes: list
    marginRequirement: float
    minSpread: dict
    name: str
    quoteCurrency: str
    spread: float
    symbol: str
    tradingHours: str
