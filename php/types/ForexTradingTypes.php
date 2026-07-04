<?php
declare(strict_types=1);

// Typed models for the ForexTrading SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** MarketData entity data model. */
class MarketData
{
    public float $ask;
    public ?string $base_currency = null;
    public float $bid;
    public string $category;
    public ?float $change = null;
    public ?float $change_percent = null;
    public string $currency;
    public ?string $description = null;
    public ?string $last_updated = null;
    public ?array $leverage = null;
    public ?array $lot_size = null;
    public float $margin_requirement;
    public ?array $min_spread = null;
    public string $name;
    public ?string $quote_currency = null;
    public ?float $spread = null;
    public string $symbol;
    public ?string $trading_hour = null;
}

/** Match filter for MarketData#list (any subset of MarketData fields). */
class MarketDataListMatch
{
    public ?float $ask = null;
    public ?string $base_currency = null;
    public ?float $bid = null;
    public ?string $category = null;
    public ?float $change = null;
    public ?float $change_percent = null;
    public ?string $currency = null;
    public ?string $description = null;
    public ?string $last_updated = null;
    public ?array $leverage = null;
    public ?array $lot_size = null;
    public ?float $margin_requirement = null;
    public ?array $min_spread = null;
    public ?string $name = null;
    public ?string $quote_currency = null;
    public ?float $spread = null;
    public ?string $symbol = null;
    public ?string $trading_hour = null;
}

