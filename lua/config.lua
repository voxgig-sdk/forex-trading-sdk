-- ForexTrading SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "ForexTrading",
      slug = "forex-trading",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.swissquote.com/v1",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["market_data"] = {},
      },
    },
    entity = {
      ["market_data"] = {
        ["fields"] = {
          {
            ["name"] = "ask",
            ["req"] = true,
            ["short"] = "Current ask price",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "baseCurrency",
            ["short"] = "Base currency code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "bid",
            ["req"] = true,
            ["short"] = "Current bid price",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "category",
            ["req"] = true,
            ["short"] = "Instrument category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "change",
            ["short"] = "Price change from previous close",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "changePercent",
            ["short"] = "Percentage change from previous close",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "currency",
            ["req"] = true,
            ["short"] = "Quote currency",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Additional information about the instrument",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "lastUpdated",
            ["short"] = "Last update timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "leverage",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "lotSizes",
            ["short"] = "Available lot sizes",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "marginRequirement",
            ["req"] = true,
            ["short"] = "Margin requirement percentage",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "minSpread",
            ["short"] = "Minimum spreads by account type (in pips or points)",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "name",
            ["req"] = true,
            ["short"] = "Full name of the instrument",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "quoteCurrency",
            ["short"] = "Quote currency code",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "spread",
            ["short"] = "Spread in pips or points",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "symbol",
            ["req"] = true,
            ["short"] = "Trading symbol",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "tradingHours",
            ["short"] = "Trading hours availability",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "market_data",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "Standard",
                      ["kind"] = "query",
                      ["name"] = "account_type",
                      ["orig"] = "account_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "all",
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/instruments",
                ["parts"] = {
                  "instruments",
                },
                ["select"] = {
                  ["exist"] = {
                    "account_type",
                    "category",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.instruments`",
                },
              },
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "Standard",
                      ["kind"] = "query",
                      ["name"] = "account_type",
                      ["orig"] = "account_type",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = "EUR/USD,GBP/USD,XAU/USD",
                      ["kind"] = "query",
                      ["name"] = "symbol",
                      ["orig"] = "symbol",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/quotes",
                ["parts"] = {
                  "quotes",
                },
                ["select"] = {
                  ["exist"] = {
                    "account_type",
                    "symbol",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.quotes`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
