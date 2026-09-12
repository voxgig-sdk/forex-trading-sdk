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
            "test": {
        "options": {
          "active": False,
        },
        "transport": "base",
      },
        },
        "options": {
            "base": "https://api.swissquote.com/v1",
            "auth": {
                "prefix": "",
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
            "format": "double",
            "name": "ask",
            "req": True,
            "short": "Current ask price",
            "type": "`$NUMBER`",
          },
          {
            "name": "baseCurrency",
            "short": "Base currency code",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "bid",
            "req": True,
            "short": "Current bid price",
            "type": "`$NUMBER`",
          },
          {
            "name": "category",
            "req": True,
            "short": "Instrument category",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "change",
            "short": "Price change from previous close",
            "type": "`$NUMBER`",
          },
          {
            "format": "double",
            "name": "changePercent",
            "short": "Percentage change from previous close",
            "type": "`$NUMBER`",
          },
          {
            "name": "currency",
            "req": True,
            "short": "Quote currency",
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "short": "Additional information about the instrument",
            "type": "`$STRING`",
          },
          {
            "format": "date-time",
            "name": "lastUpdated",
            "short": "Last update timestamp",
            "type": "`$STRING`",
          },
          {
            "name": "leverage",
            "type": "`$OBJECT`",
          },
          {
            "name": "lotSizes",
            "short": "Available lot sizes",
            "type": "`$ARRAY`",
          },
          {
            "format": "double",
            "name": "marginRequirement",
            "req": True,
            "short": "Margin requirement percentage",
            "type": "`$NUMBER`",
          },
          {
            "name": "minSpread",
            "short": "Minimum spreads by account type (in pips or points)",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "req": True,
            "short": "Full name of the instrument",
            "type": "`$STRING`",
          },
          {
            "name": "quoteCurrency",
            "short": "Quote currency code",
            "type": "`$STRING`",
          },
          {
            "format": "double",
            "name": "spread",
            "short": "Spread in pips or points",
            "type": "`$NUMBER`",
          },
          {
            "name": "symbol",
            "req": True,
            "short": "Trading symbol",
            "type": "`$STRING`",
          },
          {
            "name": "tradingHours",
            "short": "Trading hours availability",
            "type": "`$STRING`",
          },
        ],
        "name": "market_data",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "Standard",
                      "kind": "query",
                      "name": "account_type",
                      "orig": "account_type",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "all",
                      "kind": "query",
                      "name": "category",
                      "orig": "category",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/instruments",
                "segments": [
                  {
                    "lit": "instruments",
                  },
                ],
                "select": {
                  "exist": [
                    "account_type",
                    "category",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.instruments`",
                },
                "parts": [
                  "instruments",
                ],
              },
              {
                "args": {
                  "query": [
                    {
                      "example": "Standard",
                      "kind": "query",
                      "name": "account_type",
                      "orig": "account_type",
                      "type": "`$STRING`",
                    },
                    {
                      "example": "EUR/USD,GBP/USD,XAU/USD",
                      "kind": "query",
                      "name": "symbol",
                      "orig": "symbol",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/quotes",
                "segments": [
                  {
                    "lit": "quotes",
                  },
                ],
                "select": {
                  "exist": [
                    "account_type",
                    "symbol",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.quotes`",
                },
                "parts": [
                  "quotes",
                ],
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
