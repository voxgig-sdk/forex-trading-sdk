<?php
declare(strict_types=1);

// ForexTrading SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ForexTradingMakeContext
{
    public static function call(array $ctxmap, ?ForexTradingContext $basectx): ForexTradingContext
    {
        return new ForexTradingContext($ctxmap, $basectx);
    }
}
