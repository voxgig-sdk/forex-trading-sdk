<?php
declare(strict_types=1);

// ForexTrading SDK configuration

class ForexTradingConfig
{
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "ForexTrading",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://api.swissquote.com/v1",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "market_data" => [],
                ],
            ],
            "entity" => [
        'market_data' => [
          'fields' => [
            [
              'name' => 'ask',
              'req' => true,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'base_currency',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'bid',
              'req' => true,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'change',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'change_percent',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'currency',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'last_updated',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'leverage',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'lot_siz',
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'margin_requirement',
              'req' => true,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'min_spread',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'quote_currency',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'spread',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'symbol',
              'req' => true,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 16,
            ],
            [
              'name' => 'trading_hour',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 17,
            ],
          ],
          'name' => 'market_data',
          'op' => [
            'list' => [
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'Standard',
                        'kind' => 'query',
                        'name' => 'account_type',
                        'orig' => 'account_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'all',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/instruments',
                  'parts' => [
                    'instruments',
                  ],
                  'select' => [
                    'exist' => [
                      'account_type',
                      'category',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 0,
                ],
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => 'Standard',
                        'kind' => 'query',
                        'name' => 'account_type',
                        'orig' => 'account_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'EUR/USD,GBP/USD,XAU/USD',
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'reqd' => true,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
                  'method' => 'GET',
                  'orig' => '/quotes',
                  'parts' => [
                    'quotes',
                  ],
                  'select' => [
                    'exist' => [
                      'account_type',
                      'symbol',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'index$' => 1,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ForexTradingFeatures::make_feature($name);
    }
}
