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
    public ?string $baseCurrency = null;
    public float $bid;
    public string $category;
    public ?float $change = null;
    public ?float $changePercent = null;
    public string $currency;
    public ?string $description = null;
    public ?string $lastUpdated = null;
    public ?array $leverage = null;
    public ?array $lotSizes = null;
    public float $marginRequirement;
    public ?array $minSpread = null;
    public string $name;
    public ?string $quoteCurrency = null;
    public ?float $spread = null;
    public string $symbol;
    public ?string $tradingHours = null;
}

/** Request payload for MarketData#list. */
class MarketDataListMatch
{
    public ?float $ask = null;
    public ?string $baseCurrency = null;
    public ?float $bid = null;
    public ?string $category = null;
    public ?float $change = null;
    public ?float $changePercent = null;
    public ?string $currency = null;
    public ?string $description = null;
    public ?string $lastUpdated = null;
    public ?array $leverage = null;
    public ?array $lotSizes = null;
    public ?float $marginRequirement = null;
    public ?array $minSpread = null;
    public ?string $name = null;
    public ?string $quoteCurrency = null;
    public ?float $spread = null;
    public ?string $symbol = null;
    public ?string $tradingHours = null;
}

