# ForexTrading SDK

Live foreign exchange quotes from Swissquote covering 80+ currency pairs and precious metals

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Forex Trading API

This SDK wraps Swissquote's forex market data feed. [Swissquote](https://www.swissquote.com/) is a Swiss online bank and broker that publishes live currency and precious-metal quotes alongside its retail trading platforms (CFXD, MetaTrader 4/5).

What you get from the API:

- Quotes for 80+ instruments, including FX majors (EUR/USD, USD/JPY, GBP/USD, USD/CHF, USD/CAD, AUD/USD, NZD/USD), minors (EUR/GBP, EUR/AUD, GBP/JPY, EUR/CHF, EUR/JPY), and exotics (USD/CNH, USD/TRY, USD/MXN, USD/NOK, USD/SEK, USD/ZAR).
- Precious-metal crosses against major currencies: gold (XAU), silver (XAG), platinum (XPT), and palladium (XPD).
- Example endpoints surfaced by the community catalogue include the XAU/USD and EUR/USD instrument feeds under `https://api.swissquote.com/v1`.

Operational notes: the public quote feed does not require authentication, while trading actions require a Swissquote account and the relevant platform credentials. CORS is disabled on the public feed, so browser clients should proxy requests. Observed response times sit around 120-205 ms with high reliability in third-party monitoring.

## Try it

**TypeScript**
```bash
npm install forex-trading
```

**Python**
```bash
pip install forex-trading-sdk
```

**PHP**
```bash
composer require voxgig/forex-trading-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/forex-trading-sdk/go
```

**Ruby**
```bash
gem install forex-trading-sdk
```

**Lua**
```bash
luarocks install forex-trading-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { ForexTradingSDK } from 'forex-trading'

const client = new ForexTradingSDK({})

// List all marketdatas
const marketdatas = await client.MarketData().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o forex-trading-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "forex-trading": {
      "command": "/abs/path/to/forex-trading-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **MarketData** | Live forex and precious-metal quote snapshots for a given instrument, served from the Swissquote public feed at `https://api.swissquote.com/v1` (e.g. EUR/USD, XAU/USD). | `/instruments` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from forextrading_sdk import ForexTradingSDK

client = ForexTradingSDK({})

# List all marketdatas
marketdatas, err = client.MarketData(None).list(None, None)
```

### PHP

```php
<?php
require_once 'forextrading_sdk.php';

$client = new ForexTradingSDK([]);

// List all marketdatas
[$marketdatas, $err] = $client->MarketData(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/forex-trading-sdk/go"

client := sdk.NewForexTradingSDK(map[string]any{})

// List all marketdatas
marketdatas, err := client.MarketData(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "ForexTrading_sdk"

client = ForexTradingSDK.new({})

# List all marketdatas
marketdatas, err = client.MarketData(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("forex-trading_sdk")

local client = sdk.new({})

-- List all marketdatas
local marketdatas, err = client:MarketData(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = ForexTradingSDK.test()
const result = await client.MarketData().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = ForexTradingSDK.test(None, None)
result, err = client.MarketData(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = ForexTradingSDK::test(null, null);
[$result, $err] = $client->MarketData(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.MarketData(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = ForexTradingSDK.test(nil, nil)
result, err = client.MarketData(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:MarketData(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Forex Trading API

- Upstream: [https://www.swissquote.com/en-ch/private/trade/products/forex](https://www.swissquote.com/en-ch/private/trade/products/forex)

- Quote data is published by [Swissquote Bank Ltd](https://www.swissquote.com/) under its standard website terms.
- Trading endpoints require an authenticated Swissquote account; the public quote feed is informational and not a contract for execution.
- Review Swissquote's Legal, Privacy Policy, and Terms of Service pages before redistributing or relying on the data.

---

Generated from the Forex Trading API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
