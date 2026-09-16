"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('MarketDataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FOREX_TRADING_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FOREX_TRADING_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ForexTradingSDK.test();
        const ent = testsdk.MarketData();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FOREX_TRADING_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'market_data.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "double", "name": "ask", "req": true, "short": "Current ask price", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "baseCurrency", "req": false, "short": "Base currency code", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "double", "name": "bid", "req": true, "short": "Current bid price", "type": "`$NUMBER`", "index$": 2 }, { "active": true, "name": "category", "req": true, "short": "Instrument category", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "double", "name": "change", "req": false, "short": "Price change from previous close", "type": "`$NUMBER`", "index$": 4 }, { "active": true, "format": "double", "name": "changePercent", "req": false, "short": "Percentage change from previous close", "type": "`$NUMBER`", "index$": 5 }, { "active": true, "name": "currency", "req": true, "short": "Quote currency", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "description", "req": false, "short": "Additional information about the instrument", "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "date-time", "name": "lastUpdated", "req": false, "short": "Last update timestamp", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "leverage", "req": false, "type": "`$OBJECT`", "index$": 9 }, { "active": true, "name": "lotSizes", "req": false, "short": "Available lot sizes", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "format": "double", "name": "marginRequirement", "req": true, "short": "Margin requirement percentage", "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "minSpread", "req": false, "short": "Minimum spreads by account type (in pips or points)", "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "name", "req": true, "short": "Full name of the instrument", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "quoteCurrency", "req": false, "short": "Quote currency code", "type": "`$STRING`", "index$": 14 }, { "active": true, "format": "double", "name": "spread", "req": false, "short": "Spread in pips or points", "type": "`$NUMBER`", "index$": 15 }, { "active": true, "name": "symbol", "req": true, "short": "Trading symbol", "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "tradingHours", "req": false, "short": "Trading hours availability", "type": "`$STRING`", "index$": 17 }], "name": "market_data", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "Standard", "kind": "query", "name": "account_type", "orig": "account_type", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "all", "kind": "query", "name": "category", "orig": "category", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /instruments", "json": "{\"operationId\":\"getInstruments\",\"parameters\":[{\"description\":\"Filter instruments by category\",\"in\":\"query\",\"name\":\"category\",\"required\":false,\"schema\":{\"default\":\"all\",\"enum\":[\"majors\",\"minors\",\"exotics\",\"precious_metals\",\"all\"],\"type\":\"string\"}},{\"description\":\"Account type for pricing tier\",\"in\":\"query\",\"name\":\"accountType\",\"required\":false,\"schema\":{\"default\":\"Standard\",\"enum\":[\"Standard\",\"Premium\",\"Prime\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"count\":2,\"instruments\":[{\"baseCurrency\":\"EUR\",\"category\":\"majors\",\"leverage\":{\"max\":100},\"lotSizes\":[\"micro\",\"mini\",\"standard\"],\"marginRequirement\":1,\"minSpread\":{\"Premium\":1.4,\"Prime\":1.1,\"Standard\":1.7},\"name\":\"Euro vs US Dollar\",\"quoteCurrency\":\"USD\",\"symbol\":\"EUR/USD\",\"tradingHours\":\"24/5\"},{\"baseCurrency\":\"XAU\",\"category\":\"precious_metals\",\"leverage\":{\"max\":50},\"lotSizes\":[\"micro\",\"mini\",\"standard\"],\"marginRequirement\":2,\"minSpread\":{\"Premium\":0.43,\"Prime\":0.41,\"Standard\":0.46},\"name\":\"Gold\",\"quoteCurrency\":\"USD\",\"symbol\":\"XAU/USD\",\"tradingHours\":\"24/5\"}]},\"schema\":{\"properties\":{\"count\":{\"description\":\"Total number of instruments returned\",\"type\":\"integer\"},\"instruments\":{\"items\":{\"properties\":{\"baseCurrency\":{\"description\":\"Base currency code\",\"example\":\"EUR\",\"type\":\"string\"},\"category\":{\"description\":\"Instrument category\",\"enum\":[\"majors\",\"minors\",\"exotics\",\"precious_metals\"],\"type\":\"string\"},\"description\":{\"description\":\"Additional information about the instrument\",\"type\":\"string\"},\"leverage\":{\"properties\":{\"max\":{\"description\":\"Maximum leverage ratio\",\"example\":100,\"type\":\"integer\"}},\"type\":\"object\"},\"lotSizes\":{\"description\":\"Available lot sizes\",\"items\":{\"enum\":[\"micro\",\"mini\",\"standard\"],\"type\":\"string\"},\"type\":\"array\"},\"marginRequirement\":{\"description\":\"Margin requirement percentage\",\"example\":1,\"format\":\"double\",\"type\":\"number\"},\"minSpread\":{\"description\":\"Minimum spreads by account type (in pips or points)\",\"properties\":{\"Premium\":{\"format\":\"double\",\"type\":\"number\"},\"Prime\":{\"format\":\"double\",\"type\":\"number\"},\"Standard\":{\"format\":\"double\",\"type\":\"number\"}},\"type\":\"object\"},\"name\":{\"description\":\"Full name of the instrument\",\"example\":\"Euro vs US Dollar\",\"type\":\"string\"},\"quoteCurrency\":{\"description\":\"Quote currency code\",\"example\":\"USD\",\"type\":\"string\"},\"symbol\":{\"description\":\"Trading symbol\",\"example\":\"EUR/USD\",\"type\":\"string\"},\"tradingHours\":{\"description\":\"Trading hours availability\",\"example\":\"24/5\",\"type\":\"string\"}},\"required\":[\"symbol\",\"name\",\"category\",\"marginRequirement\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with trading instruments\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Invalid request parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - Invalid or missing API key\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"oauth2\":{\"description\":\"OAuth2 authentication for trading operations\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://auth.swissquote.com/oauth/authorize\",\"scopes\":{\"read\":\"Read market data and account information\",\"trade\":\"Execute trades and manage positions\"},\"tokenUrl\":\"https://auth.swissquote.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/instruments", "segments": [{ "lit": "instruments" }], "select": { "exist": ["account_type", "category"] }, "transform": { "req": "`reqdata`", "res": "`body.instruments`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "example": "Standard", "kind": "query", "name": "account_type", "orig": "account_type", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "EUR/USD,GBP/USD,XAU/USD", "kind": "query", "name": "symbol", "orig": "symbol", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /quotes", "json": "{\"operationId\":\"getQuotes\",\"parameters\":[{\"description\":\"Comma-separated list of trading symbols (e.g., EUR/USD, GBP/USD, XAU/USD)\",\"in\":\"query\",\"name\":\"symbols\",\"required\":true,\"schema\":{\"example\":\"EUR/USD,GBP/USD,XAU/USD\",\"type\":\"string\"}},{\"description\":\"Account type for pricing tier\",\"in\":\"query\",\"name\":\"accountType\",\"required\":false,\"schema\":{\"default\":\"Standard\",\"enum\":[\"Standard\",\"Premium\",\"Prime\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"quotes\":[{\"ask\":1.0867,\"bid\":1.085,\"change\":0.15,\"changePercent\":0.14,\"currency\":\"USD\",\"name\":\"Euro vs US Dollar\",\"spread\":1.7,\"symbol\":\"EUR/USD\"},{\"ask\":2046.06,\"bid\":2045.6,\"change\":12.3,\"changePercent\":0.6,\"currency\":\"USD\",\"name\":\"Gold CFDs\",\"spread\":0.46,\"symbol\":\"XAU/USD\"}],\"timestamp\":\"2024-01-15T14:30:00Z\"},\"schema\":{\"properties\":{\"quotes\":{\"items\":{\"properties\":{\"ask\":{\"description\":\"Current ask price\",\"example\":1.0867,\"format\":\"double\",\"type\":\"number\"},\"bid\":{\"description\":\"Current bid price\",\"example\":1.085,\"format\":\"double\",\"type\":\"number\"},\"change\":{\"description\":\"Price change from previous close\",\"example\":0.0015,\"format\":\"double\",\"type\":\"number\"},\"changePercent\":{\"description\":\"Percentage change from previous close\",\"example\":0.14,\"format\":\"double\",\"type\":\"number\"},\"currency\":{\"description\":\"Quote currency\",\"example\":\"USD\",\"type\":\"string\"},\"lastUpdated\":{\"description\":\"Last update timestamp\",\"format\":\"date-time\",\"type\":\"string\"},\"name\":{\"description\":\"Full name of the trading pair\",\"example\":\"Euro vs US Dollar\",\"type\":\"string\"},\"spread\":{\"description\":\"Spread in pips or points\",\"example\":1.7,\"format\":\"double\",\"type\":\"number\"},\"symbol\":{\"description\":\"Trading symbol\",\"example\":\"EUR/USD\",\"type\":\"string\"}},\"required\":[\"symbol\",\"name\",\"bid\",\"ask\",\"currency\"],\"type\":\"object\"},\"type\":\"array\"},\"timestamp\":{\"description\":\"Time of quote generation\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with market quotes\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Invalid request parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - Invalid or missing API key\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"example\":\"INVALID_SYMBOL\",\"type\":\"string\"},\"details\":{\"description\":\"Additional error details\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable error message\",\"example\":\"The specified trading symbol is not valid\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"apiKey\":[]}],\"securitySchemes\":{\"apiKey\":{\"description\":\"API key for authentication\",\"in\":\"header\",\"name\":\"X-API-Key\",\"type\":\"apiKey\"},\"oauth2\":{\"description\":\"OAuth2 authentication for trading operations\",\"flows\":{\"authorizationCode\":{\"authorizationUrl\":\"https://auth.swissquote.com/oauth/authorize\",\"scopes\":{\"read\":\"Read market data and account information\",\"trade\":\"Execute trades and manage positions\"},\"tokenUrl\":\"https://auth.swissquote.com/oauth/token\"}},\"type\":\"oauth2\"}},\"securitySource\":\"operation\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/quotes", "segments": [{ "lit": "quotes" }], "select": { "exist": ["account_type", "symbol"] }, "transform": { "req": "`reqdata`", "res": "`body.quotes`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "market_data", "name__orig": "market_data", "Name": "MarketData", "name_": "market_data", "name-": "market-data", "NAME": "MARKET_DATA", "index$": 0 }, { "active": true, "entity": "market_data", "key$": "BasicMarketDataFlow", "kind": "basic", "name": "BasicMarketDataFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "market_data_ref01" } }], "index$": 0 }] }, 'MarketData');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let market_data_ref01_data = Object.values(setup.data.existing.market_data)[0];
        // LIST
        const market_data_ref01_ent = client.MarketData();
        const market_data_ref01_match = {};
        const market_data_ref01_list = (await market_data_ref01_ent.list(market_data_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/market_data/MarketDataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ForexTradingSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['market_data01', 'market_data02', 'market_data03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FOREX_TRADING_TEST_MARKET_DATA_ENTID': idmap,
        'FOREX_TRADING_TEST_LIVE': 'FALSE',
        'FOREX_TRADING_TEST_EXPLAIN': 'FALSE',
        'FOREX_TRADING_APIKEY': '',
    });
    idmap = env['FOREX_TRADING_TEST_MARKET_DATA_ENTID'];
    const live = 'TRUE' === env.FOREX_TRADING_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FOREX_TRADING_TEST_MARKET_DATA_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ForexTradingSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.FOREX_TRADING_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FOREX_TRADING_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=MarketDataEntity.test.js.map