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
          "name" => "X-API-Key",
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
              "name" => "ask",
              "title" => "Ask",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "Current ask price",
              "format" => "double",
            },
            {
              "name" => "baseCurrency",
              "title" => "Base Currency",
              "type" => "`$STRING`",
              "short" => "Base currency code",
            },
            {
              "name" => "bid",
              "title" => "Bid",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "Current bid price",
              "format" => "double",
            },
            {
              "name" => "category",
              "title" => "Category",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Instrument category",
            },
            {
              "name" => "change",
              "title" => "Change",
              "type" => "`$NUMBER`",
              "short" => "Price change from previous close",
              "format" => "double",
            },
            {
              "name" => "changePercent",
              "title" => "Change Percent",
              "type" => "`$NUMBER`",
              "short" => "Percentage change from previous close",
              "format" => "double",
            },
            {
              "name" => "currency",
              "title" => "Currency",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Quote currency",
            },
            {
              "name" => "description",
              "title" => "Description",
              "type" => "`$STRING`",
              "short" => "Additional information about the instrument",
            },
            {
              "name" => "lastUpdated",
              "title" => "Last Updated",
              "type" => "`$STRING`",
              "short" => "Last update timestamp",
              "format" => "date-time",
            },
            {
              "name" => "leverage",
              "title" => "Leverage",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "lotSizes",
              "title" => "Lot Sizes",
              "type" => "`$ARRAY`",
              "short" => "Available lot sizes",
            },
            {
              "name" => "marginRequirement",
              "title" => "Margin Requirement",
              "type" => "`$NUMBER`",
              "req" => true,
              "short" => "Margin requirement percentage",
              "format" => "double",
            },
            {
              "name" => "minSpread",
              "title" => "Min Spread",
              "type" => "`$OBJECT`",
              "short" => "Minimum spreads by account type (in pips or points)",
            },
            {
              "name" => "name",
              "title" => "Name",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Full name of the instrument",
            },
            {
              "name" => "quoteCurrency",
              "title" => "Quote Currency",
              "type" => "`$STRING`",
              "short" => "Quote currency code",
            },
            {
              "name" => "spread",
              "title" => "Spread",
              "type" => "`$NUMBER`",
              "short" => "Spread in pips or points",
              "format" => "double",
            },
            {
              "name" => "symbol",
              "title" => "Symbol",
              "type" => "`$STRING`",
              "req" => true,
              "short" => "Trading symbol",
            },
            {
              "name" => "tradingHours",
              "title" => "Trading Hours",
              "type" => "`$STRING`",
              "short" => "Trading hours availability",
            },
          ],
          "name" => "market_data",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/instruments",
                  "segments" => [
                    {
                      "lit" => "instruments",
                    },
                  ],
                  "parts" => [
                    "instruments",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.instruments`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "account_type",
                        "orig" => "account_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "Standard",
                      },
                      {
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "all",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_type",
                      "category",
                    ],
                  },
                },
                {
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/quotes",
                  "segments" => [
                    {
                      "lit" => "quotes",
                    },
                  ],
                  "parts" => [
                    "quotes",
                  ],
                  "rename" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.quotes`",
                  },
                  "args" => {
                    "query" => [
                      {
                        "name" => "account_type",
                        "orig" => "account_type",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "example" => "Standard",
                      },
                      {
                        "name" => "symbol",
                        "orig" => "symbol",
                        "type" => "`$STRING`",
                        "kind" => "query",
                        "reqd" => true,
                        "example" => "EUR/USD,GBP/USD,XAU/USD",
                      },
                    ],
                  },
                  "select" => {
                    "exist" => [
                      "account_type",
                      "symbol",
                    ],
                  },
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
