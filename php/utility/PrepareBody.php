<?php
declare(strict_types=1);

// ForexTrading SDK utility: prepare_body

class ForexTradingPrepareBody
{
    public static function call(ForexTradingContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
