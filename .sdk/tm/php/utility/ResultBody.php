<?php
declare(strict_types=1);

// ForexTrading SDK utility: result_body

class ForexTradingResultBody
{
    public static function call(ForexTradingContext $ctx): ?ForexTradingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
