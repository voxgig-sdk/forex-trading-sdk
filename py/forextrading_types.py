# Typed models for the ForexTrading SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class MarketData:
    ask: float
    bid: float
    category: str
    currency: str
    margin_requirement: float
    name: str
    symbol: str
    base_currency: Optional[str] = None
    change: Optional[float] = None
    change_percent: Optional[float] = None
    description: Optional[str] = None
    last_updated: Optional[str] = None
    leverage: Optional[dict] = None
    lot_size: Optional[list] = None
    min_spread: Optional[dict] = None
    quote_currency: Optional[str] = None
    spread: Optional[float] = None
    trading_hour: Optional[str] = None


@dataclass
class MarketDataListMatch:
    ask: Optional[float] = None
    base_currency: Optional[str] = None
    bid: Optional[float] = None
    category: Optional[str] = None
    change: Optional[float] = None
    change_percent: Optional[float] = None
    currency: Optional[str] = None
    description: Optional[str] = None
    last_updated: Optional[str] = None
    leverage: Optional[dict] = None
    lot_size: Optional[list] = None
    margin_requirement: Optional[float] = None
    min_spread: Optional[dict] = None
    name: Optional[str] = None
    quote_currency: Optional[str] = None
    spread: Optional[float] = None
    symbol: Optional[str] = None
    trading_hour: Optional[str] = None

