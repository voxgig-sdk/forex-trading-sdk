# ForexTrading SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "ForexTrading",
            "slug": "forex-trading",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api.swissquote.com/v1",
            "auth": {
                "prefix": "",
                "name": "X-API-Key",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "market_data": {},
            },
        },
        "entity": {
      "market_data": {
        "fields": [
          {
            "name": "ask",
            "title": "Ask",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Current ask price",
            "format": "double",
          },
          {
            "name": "baseCurrency",
            "title": "Base Currency",
            "type": "`$STRING`",
            "short": "Base currency code",
          },
          {
            "name": "bid",
            "title": "Bid",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Current bid price",
            "format": "double",
          },
          {
            "name": "category",
            "title": "Category",
            "type": "`$STRING`",
            "req": True,
            "short": "Instrument category",
          },
          {
            "name": "change",
            "title": "Change",
            "type": "`$NUMBER`",
            "short": "Price change from previous close",
            "format": "double",
          },
          {
            "name": "changePercent",
            "title": "Change Percent",
            "type": "`$NUMBER`",
            "short": "Percentage change from previous close",
            "format": "double",
          },
          {
            "name": "currency",
            "title": "Currency",
            "type": "`$STRING`",
            "req": True,
            "short": "Quote currency",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "short": "Additional information about the instrument",
          },
          {
            "name": "lastUpdated",
            "title": "Last Updated",
            "type": "`$STRING`",
            "short": "Last update timestamp",
            "format": "date-time",
          },
          {
            "name": "leverage",
            "title": "Leverage",
            "type": "`$OBJECT`",
          },
          {
            "name": "lotSizes",
            "title": "Lot Sizes",
            "type": "`$ARRAY`",
            "short": "Available lot sizes",
          },
          {
            "name": "marginRequirement",
            "title": "Margin Requirement",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Margin requirement percentage",
            "format": "double",
          },
          {
            "name": "minSpread",
            "title": "Min Spread",
            "type": "`$OBJECT`",
            "short": "Minimum spreads by account type (in pips or points)",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Full name of the instrument",
          },
          {
            "name": "quoteCurrency",
            "title": "Quote Currency",
            "type": "`$STRING`",
            "short": "Quote currency code",
          },
          {
            "name": "spread",
            "title": "Spread",
            "type": "`$NUMBER`",
            "short": "Spread in pips or points",
            "format": "double",
          },
          {
            "name": "symbol",
            "title": "Symbol",
            "type": "`$STRING`",
            "req": True,
            "short": "Trading symbol",
          },
          {
            "name": "tradingHours",
            "title": "Trading Hours",
            "type": "`$STRING`",
            "short": "Trading hours availability",
          },
        ],
        "name": "market_data",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/instruments",
                "segments": [
                  {
                    "lit": "instruments",
                  },
                ],
                "parts": [
                  "instruments",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.instruments`",
                },
                "args": {
                  "query": [
                    {
                      "name": "account_type",
                      "orig": "account_type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "Standard",
                    },
                    {
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "all",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_type",
                    "category",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/quotes",
                "segments": [
                  {
                    "lit": "quotes",
                  },
                ],
                "parts": [
                  "quotes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.quotes`",
                },
                "args": {
                  "query": [
                    {
                      "name": "account_type",
                      "orig": "account_type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "Standard",
                    },
                    {
                      "name": "symbol",
                      "orig": "symbol",
                      "type": "`$STRING`",
                      "kind": "query",
                      "reqd": True,
                      "example": "EUR/USD,GBP/USD,XAU/USD",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "account_type",
                    "symbol",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
