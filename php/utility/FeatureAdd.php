<?php
declare(strict_types=1);

// ForexTrading SDK utility: feature_add

class ForexTradingFeatureAdd
{
    public static function call(ForexTradingContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
