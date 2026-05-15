<?php
declare(strict_types=1);

// ForexTrading SDK exists test

require_once __DIR__ . '/../forextrading_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ForexTradingSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
