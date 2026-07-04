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
    margin_requirement: float
    name: str
    symbol: str


class MarketData(MarketDataRequired, total=False):
    base_currency: str
    change: float
    change_percent: float
    description: str
    last_updated: str
    leverage: dict
    lot_size: list
    min_spread: dict
    quote_currency: str
    spread: float
    trading_hour: str


class MarketDataListMatch(TypedDict, total=False):
    ask: float
    base_currency: str
    bid: float
    category: str
    change: float
    change_percent: float
    currency: str
    description: str
    last_updated: str
    leverage: dict
    lot_size: list
    margin_requirement: float
    min_spread: dict
    name: str
    quote_currency: str
    spread: float
    symbol: str
    trading_hour: str
