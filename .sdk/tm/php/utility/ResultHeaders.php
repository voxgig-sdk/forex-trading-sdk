<?php
declare(strict_types=1);

// ForexTrading SDK utility: result_headers

class ForexTradingResultHeaders
{
    public static function call(ForexTradingContext $ctx): ?ForexTradingResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
