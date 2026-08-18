# ForexTrading SDK configuration


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
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
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
            "name": "ask",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "baseCurrency",
            "type": "`$STRING`",
          },
          {
            "name": "bid",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "category",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "change",
            "type": "`$NUMBER`",
          },
          {
            "name": "changePercent",
            "type": "`$NUMBER`",
          },
          {
            "name": "currency",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "description",
            "type": "`$STRING`",
          },
          {
            "name": "lastUpdated",
            "type": "`$STRING`",
          },
          {
            "name": "leverage",
            "type": "`$OBJECT`",
          },
          {
            "name": "lotSizes",
            "type": "`$ARRAY`",
          },
          {
            "name": "marginRequirement",
            "req": True,
            "type": "`$NUMBER`",
          },
          {
            "name": "minSpread",
            "type": "`$OBJECT`",
          },
          {
            "name": "name",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "quoteCurrency",
            "type": "`$STRING`",
          },
          {
            "name": "spread",
            "type": "`$NUMBER`",
          },
          {
            "name": "symbol",
            "req": True,
            "type": "`$STRING`",
          },
          {
            "name": "tradingHours",
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
                "parts": [
                  "instruments",
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
                "parts": [
                  "quotes",
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
