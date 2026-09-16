# ForexTrading SDK configuration

module ForexTradingConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "ForexTrading",
        "slug" => "forex-trading",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "ratelimit" => {
          "options" => {
            "active" => false,
            "burst" => 5,
            "rate" => 5,
          },
          "optspec" => {
            "now" => "`$FUNCTION`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "retry" => {
          "options" => {
            "active" => false,
            "factor" => 2,
            "maxDelay" => 2000,
            "minDelay" => 50,
            "retries" => 2,
            "statuses" => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          },
          "optspec" => {
            "jitter" => "`$BOOLEAN`",
            "sleep" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
        "test" => {
          "options" => {
            "active" => false,
          },
          "optspec" => {
            "entity" => "`$MAP`",
            "net" => "`$MAP`",
          },
          "strict" => false,
          "transport" => "base",
        },
        "timeout" => {
          "options" => {
            "active" => false,
            "ms" => 30000,
          },
          "optspec" => {
            "clearTimer" => "`$FUNCTION`",
            "setTimer" => "`$FUNCTION`",
          },
          "strict" => false,
          "transport" => "wrap",
        },
      },
      "options" => {
        "base" => "https://api.swissquote.com/v1",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "market_data" => {},
        },
      },
      "entity" => {
        "market_data" => {
          "fields" => [
            {
              "format" => "double",
              "name" => "ask",
              "req" => true,
              "short" => "Current ask price",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "baseCurrency",
              "short" => "Base currency code",
              "type" => "`$STRING`",
            },
            {
              "format" => "double",
              "name" => "bid",
              "req" => true,
              "short" => "Current bid price",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "category",
              "req" => true,
              "short" => "Instrument category",
              "type" => "`$STRING`",
            },
            {
              "format" => "double",
              "name" => "change",
              "short" => "Price change from previous close",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "double",
              "name" => "changePercent",
              "short" => "Percentage change from previous close",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "currency",
              "req" => true,
              "short" => "Quote currency",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Additional information about the instrument",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "lastUpdated",
              "short" => "Last update timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "leverage",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "lotSizes",
              "short" => "Available lot sizes",
              "type" => "`$ARRAY`",
            },
            {
              "format" => "double",
              "name" => "marginRequirement",
              "req" => true,
              "short" => "Margin requirement percentage",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "minSpread",
              "short" => "Minimum spreads by account type (in pips or points)",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "name",
              "req" => true,
              "short" => "Full name of the instrument",
              "type" => "`$STRING`",
            },
            {
              "name" => "quoteCurrency",
              "short" => "Quote currency code",
              "type" => "`$STRING`",
            },
            {
              "format" => "double",
              "name" => "spread",
              "short" => "Spread in pips or points",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "symbol",
              "req" => true,
              "short" => "Trading symbol",
              "type" => "`$STRING`",
            },
            {
              "name" => "tradingHours",
              "short" => "Trading hours availability",
              "type" => "`$STRING`",
            },
          ],
          "name" => "market_data",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "Standard",
                        "kind" => "query",
                        "name" => "account_type",
                        "orig" => "account_type",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "all",
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/instruments",
                  "segments" => [
                    {
                      "lit" => "instruments",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "account_type",
                      "category",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.instruments`",
                  },
                  "parts" => [
                    "instruments",
                  ],
                },
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "Standard",
                        "kind" => "query",
                        "name" => "account_type",
                        "orig" => "account_type",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "EUR/USD,GBP/USD,XAU/USD",
                        "kind" => "query",
                        "name" => "symbol",
                        "orig" => "symbol",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/quotes",
                  "segments" => [
                    {
                      "lit" => "quotes",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "account_type",
                      "symbol",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.quotes`",
                  },
                  "parts" => [
                    "quotes",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ForexTradingFeatures.make_feature(name)
  end
end
