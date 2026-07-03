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
              'active' => true,
              'name' => 'ask',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 0,
            ],
            [
              'active' => true,
              'name' => 'base_currency',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 1,
            ],
            [
              'active' => true,
              'name' => 'bid',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 2,
            ],
            [
              'active' => true,
              'name' => 'category',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 3,
            ],
            [
              'active' => true,
              'name' => 'change',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 4,
            ],
            [
              'active' => true,
              'name' => 'change_percent',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 5,
            ],
            [
              'active' => true,
              'name' => 'currency',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 6,
            ],
            [
              'active' => true,
              'name' => 'description',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 7,
            ],
            [
              'active' => true,
              'name' => 'last_updated',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 8,
            ],
            [
              'active' => true,
              'name' => 'leverage',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 9,
            ],
            [
              'active' => true,
              'name' => 'lot_size',
              'req' => false,
              'type' => '`$ARRAY`',
              'index$' => 10,
            ],
            [
              'active' => true,
              'name' => 'margin_requirement',
              'req' => true,
              'type' => '`$NUMBER`',
              'index$' => 11,
            ],
            [
              'active' => true,
              'name' => 'min_spread',
              'req' => false,
              'type' => '`$OBJECT`',
              'index$' => 12,
            ],
            [
              'active' => true,
              'name' => 'name',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 13,
            ],
            [
              'active' => true,
              'name' => 'quote_currency',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 14,
            ],
            [
              'active' => true,
              'name' => 'spread',
              'req' => false,
              'type' => '`$NUMBER`',
              'index$' => 15,
            ],
            [
              'active' => true,
              'name' => 'symbol',
              'req' => true,
              'type' => '`$STRING`',
              'index$' => 16,
            ],
            [
              'active' => true,
              'name' => 'trading_hour',
              'req' => false,
              'type' => '`$STRING`',
              'index$' => 17,
            ],
          ],
          'name' => 'market_data',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'Standard',
                        'kind' => 'query',
                        'name' => 'account_type',
                        'orig' => 'account_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'all',
                        'kind' => 'query',
                        'name' => 'category',
                        'orig' => 'category',
                        'reqd' => false,
                        'type' => '`$STRING`',
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
                  'index$' => 0,
                ],
                [
                  'active' => true,
                  'args' => [
                    'query' => [
                      [
                        'active' => true,
                        'example' => 'Standard',
                        'kind' => 'query',
                        'name' => 'account_type',
                        'orig' => 'account_type',
                        'reqd' => false,
                        'type' => '`$STRING`',
                      ],
                      [
                        'active' => true,
                        'example' => 'EUR/USD,GBP/USD,XAU/USD',
                        'kind' => 'query',
                        'name' => 'symbol',
                        'orig' => 'symbol',
                        'reqd' => true,
                        'type' => '`$STRING`',
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
                  'index$' => 1,
                ],
              ],
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
