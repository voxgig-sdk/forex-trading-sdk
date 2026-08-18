
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'ForexTrading',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "name": "ask",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "baseCurrency",
          "type": "`$STRING`"
        },
        {
          "name": "bid",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "category",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "change",
          "type": "`$NUMBER`"
        },
        {
          "name": "changePercent",
          "type": "`$NUMBER`"
        },
        {
          "name": "currency",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "description",
          "type": "`$STRING`"
        },
        {
          "name": "lastUpdated",
          "type": "`$STRING`"
        },
        {
          "name": "leverage",
          "type": "`$OBJECT`"
        },
        {
          "name": "lotSizes",
          "type": "`$ARRAY`"
        },
        {
          "name": "marginRequirement",
          "req": true,
          "type": "`$NUMBER`"
        },
        {
          "name": "minSpread",
          "type": "`$OBJECT`"
        },
        {
          "name": "name",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "quoteCurrency",
          "type": "`$STRING`"
        },
        {
          "name": "spread",
          "type": "`$NUMBER`"
        },
        {
          "name": "symbol",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "tradingHours",
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
              "parts": [
                "instruments"
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
              }
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
              "parts": [
                "quotes"
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
              }
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
  config
}

