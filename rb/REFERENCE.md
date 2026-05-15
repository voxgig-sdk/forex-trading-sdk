# ForexTrading Ruby SDK Reference

Complete API reference for the ForexTrading Ruby SDK.


## ForexTradingSDK

### Constructor

```ruby
require_relative 'forex-trading_sdk'

client = ForexTradingSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ForexTradingSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ForexTradingSDK.test
```


### Instance Methods

#### `MarketData(data = nil)`

Create a new `MarketData` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## MarketDataEntity

```ruby
market_data = client.MarketData
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ask` | ``$NUMBER`` | Yes |  |
| `base_currency` | ``$STRING`` | No |  |
| `bid` | ``$NUMBER`` | Yes |  |
| `category` | ``$STRING`` | Yes |  |
| `change` | ``$NUMBER`` | No |  |
| `change_percent` | ``$NUMBER`` | No |  |
| `currency` | ``$STRING`` | Yes |  |
| `description` | ``$STRING`` | No |  |
| `last_updated` | ``$STRING`` | No |  |
| `leverage` | ``$OBJECT`` | No |  |
| `lot_siz` | ``$ARRAY`` | No |  |
| `margin_requirement` | ``$NUMBER`` | Yes |  |
| `min_spread` | ``$OBJECT`` | No |  |
| `name` | ``$STRING`` | Yes |  |
| `quote_currency` | ``$STRING`` | No |  |
| `spread` | ``$NUMBER`` | No |  |
| `symbol` | ``$STRING`` | Yes |  |
| `trading_hour` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.MarketData.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MarketDataEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ForexTradingSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

