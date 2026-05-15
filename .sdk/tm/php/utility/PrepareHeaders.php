<?php
declare(strict_types=1);

// ForexTrading SDK utility: prepare_headers

class ForexTradingPrepareHeaders
{
    public static function call(ForexTradingContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
