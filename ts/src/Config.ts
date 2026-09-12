
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'ForexTrading',
        slug: "forex-trading",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.swissquote.com/v1",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      market_data: {
      },

    }
  }


  entity = {
    "market_data": {
      "fields": [
        {
          "format": "double",
          "name": "ask",
          "req": true,
          "short": "Current ask price",
          "type": "`$NUMBER`"
        },
        {
          "name": "baseCurrency",
          "short": "Base currency code",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "bid",
          "req": true,
          "short": "Current bid price",
          "type": "`$NUMBER`"
        },
        {
          "name": "category",
          "req": true,
          "short": "Instrument category",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "change",
          "short": "Price change from previous close",
          "type": "`$NUMBER`"
        },
        {
          "format": "double",
          "name": "changePercent",
          "short": "Percentage change from previous close",
          "type": "`$NUMBER`"
        },
        {
          "name": "currency",
          "req": true,
          "short": "Quote currency",
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "short": "Additional information about the instrument",
          "type": "`$STRING`"
        },
        {
          "format": "date-time",
          "name": "lastUpdated",
          "short": "Last update timestamp",
          "type": "`$STRING`"
        },
        {
          "name": "leverage",
          "type": "`$OBJECT`"
        },
        {
          "name": "lotSizes",
          "short": "Available lot sizes",
          "type": "`$ARRAY`"
        },
        {
          "format": "double",
          "name": "marginRequirement",
          "req": true,
          "short": "Margin requirement percentage",
          "type": "`$NUMBER`"
        },
        {
          "name": "minSpread",
          "short": "Minimum spreads by account type (in pips or points)",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "short": "Full name of the instrument",
          "type": "`$STRING`"
        },
        {
          "name": "quoteCurrency",
          "short": "Quote currency code",
          "type": "`$STRING`"
        },
        {
          "format": "double",
          "name": "spread",
          "short": "Spread in pips or points",
          "type": "`$NUMBER`"
        },
        {
          "name": "symbol",
          "req": true,
          "short": "Trading symbol",
          "type": "`$STRING`"
        },
        {
          "name": "tradingHours",
          "short": "Trading hours availability",
          "type": "`$STRING`"
        }
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "all",
                    "kind": "query",
                    "name": "category",
                    "orig": "category",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/instruments",
              "segments": [
                {
                  "lit": "instruments"
                }
              ],
              "select": {
                "exist": [
                  "account_type",
                  "category"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.instruments`"
              },
              "parts": [
                "instruments"
              ]
            },
            {
              "args": {
                "query": [
                  {
                    "example": "Standard",
                    "kind": "query",
                    "name": "account_type",
                    "orig": "account_type",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "EUR/USD,GBP/USD,XAU/USD",
                    "kind": "query",
                    "name": "symbol",
                    "orig": "symbol",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/quotes",
              "segments": [
                {
                  "lit": "quotes"
                }
              ],
              "select": {
                "exist": [
                  "account_type",
                  "symbol"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.quotes`"
              },
              "parts": [
                "quotes"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

