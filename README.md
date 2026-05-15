# ForexTrading SDK



Available for [Golang](go/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **MarketData** |  | `/instruments` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/forex-trading-sdk"

client := sdk.NewForexTradingSDK(map[string]any{
    "apikey": os.Getenv("FOREX-TRADING_APIKEY"),
})

// List all marketdatas
marketdatas, err := client.MarketData(nil).List(nil, nil)
```

### Lua

```lua
local sdk = require("forex-trading_sdk")

local client = sdk.new({
  apikey = os.getenv("FOREX-TRADING_APIKEY"),
})

-- List all marketdatas
local marketdatas, err = client:MarketData(nil):list(nil, nil)
```

### PHP

```php
<?php
require_once 'forextrading_sdk.php';

$client = new ForexTradingSDK([
    "apikey" => getenv("FOREX-TRADING_APIKEY"),
]);

// List all marketdatas
[$marketdatas, $err] = $client->MarketData(null)->list(null, null);
```

### Python

```python
import os
from forextrading_sdk import ForexTradingSDK

client = ForexTradingSDK({
    "apikey": os.environ.get("FOREX-TRADING_APIKEY"),
})

# List all marketdatas
marketdatas, err = client.MarketData(None).list(None, None)
```

### Ruby

```ruby
require_relative "ForexTrading_sdk"

client = ForexTradingSDK.new({
  "apikey" => ENV["FOREX-TRADING_APIKEY"],
})

# List all marketdatas
marketdatas, err = client.MarketData(nil).list(nil, nil)
```

### TypeScript

```ts
import { ForexTradingSDK } from 'forex-trading'

const client = new ForexTradingSDK({
  apikey: process.env.FOREX-TRADING_APIKEY,
})

// List all marketdatas
const marketdatas = await client.MarketData().list()
```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.MarketData(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:MarketData(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = ForexTradingSDK::test(null, null);
[$result, $err] = $client->MarketData(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = ForexTradingSDK.test(None, None)
result, err = client.MarketData(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = ForexTradingSDK.test(nil, nil)
result, err = client.MarketData(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = ForexTradingSDK.test()
const result = await client.MarketData().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

