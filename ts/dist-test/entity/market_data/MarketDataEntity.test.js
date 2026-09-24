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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ask": { "a": true, "fo": "double", "h": "Ask", "n": "ask", "r": true, "sh": "Current ask price", "t": "`$NUMBER`", "key$": "ask", "index$": 0 }, "baseCurrency": { "a": true, "h": "Base Currency", "n": "baseCurrency", "r": false, "sh": "Base currency code", "t": "`$STRING`", "key$": "baseCurrency", "index$": 1 }, "bid": { "a": true, "fo": "double", "h": "Bid", "n": "bid", "r": true, "sh": "Current bid price", "t": "`$NUMBER`", "key$": "bid", "index$": 2 }, "category": { "a": true, "h": "Category", "n": "category", "r": true, "sh": "Instrument category", "t": "`$STRING`", "key$": "category", "index$": 3 }, "change": { "a": true, "fo": "double", "h": "Change", "n": "change", "r": false, "sh": "Price change from previous close", "t": "`$NUMBER`", "key$": "change", "index$": 4 }, "changePercent": { "a": true, "fo": "double", "h": "Change Percent", "n": "changePercent", "r": false, "sh": "Percentage change from previous close", "t": "`$NUMBER`", "key$": "changePercent", "index$": 5 }, "currency": { "a": true, "h": "Currency", "n": "currency", "r": true, "sh": "Quote currency", "t": "`$STRING`", "key$": "currency", "index$": 6 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "sh": "Additional information about the instrument", "t": "`$STRING`", "key$": "description", "index$": 7 }, "lastUpdated": { "a": true, "fo": "date-time", "h": "Last Updated", "n": "lastUpdated", "r": false, "sh": "Last update timestamp", "t": "`$STRING`", "key$": "lastUpdated", "index$": 8 }, "leverage": { "a": true, "h": "Leverage", "n": "leverage", "r": false, "t": "`$OBJECT`", "key$": "leverage", "index$": 9 }, "lotSizes": { "a": true, "h": "Lot Sizes", "n": "lotSizes", "r": false, "sh": "Available lot sizes", "t": "`$ARRAY`", "key$": "lotSizes", "index$": 10 }, "marginRequirement": { "a": true, "fo": "double", "h": "Margin Requirement", "n": "marginRequirement", "r": true, "sh": "Margin requirement percentage", "t": "`$NUMBER`", "key$": "marginRequirement", "index$": 11 }, "minSpread": { "a": true, "h": "Min Spread", "n": "minSpread", "r": false, "sh": "Minimum spreads by account type (in pips or points)", "t": "`$OBJECT`", "key$": "minSpread", "index$": 12 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Full name of the instrument", "t": "`$STRING`", "key$": "name", "index$": 13 }, "quoteCurrency": { "a": true, "h": "Quote Currency", "n": "quoteCurrency", "r": false, "sh": "Quote currency code", "t": "`$STRING`", "key$": "quoteCurrency", "index$": 14 }, "spread": { "a": true, "fo": "double", "h": "Spread", "n": "spread", "r": false, "sh": "Spread in pips or points", "t": "`$NUMBER`", "key$": "spread", "index$": 15 }, "symbol": { "a": true, "h": "Symbol", "n": "symbol", "r": true, "sh": "Trading symbol", "t": "`$STRING`", "key$": "symbol", "index$": 16 }, "tradingHours": { "a": true, "h": "Trading Hours", "n": "tradingHours", "r": false, "sh": "Trading hours availability", "t": "`$STRING`", "key$": "tradingHours", "index$": 17 } }, "name": "market_data", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /instruments", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "Standard", "k": "query", "n": "account_type", "or": "account_type", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "all", "k": "query", "n": "category", "or": "category", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/instruments", "q": { "exist": ["account_type", "category"] }, "r": {}, "s": [{ "lit": "instruments" }], "t": { "req": "`reqdata`", "res": "`body.instruments`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /quotes", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "Standard", "k": "query", "n": "account_type", "or": "account_type", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "EUR/USD,GBP/USD,XAU/USD", "k": "query", "n": "symbol", "or": "symbol", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/quotes", "q": { "exist": ["account_type", "symbol"] }, "r": {}, "s": [{ "lit": "quotes" }], "t": { "req": "`reqdata`", "res": "`body.quotes`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "market_data", "name__orig": "market_data", "Name": "MarketData", "name_": "market_data", "name-": "market-data", "NAME": "MARKET_DATA", "index$": 0 }, { "active": true, "entity": "market_data", "key$": "BasicMarketDataFlow", "kind": "basic", "name": "BasicMarketDataFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "market_data_ref01" } }], "index$": 0 }] }, 'MarketData', { "GET /instruments": { "protocol": "http", "operationId": "getInstruments", "responses": { "200": { "description": "Successful response with trading instruments", "content": { "application/json": { "schema": { "type": "object", "properties": { "instruments": { "items": { "properties": { "baseCurrency": { "description": "Base currency code", "example": "EUR", "type": "string", "key$": "baseCurrency" }, "category": { "description": "Instrument category", "enum": ["majors", "minors", "exotics", "precious_metals"], "type": "string", "key$": "category" }, "description": { "description": "Additional information about the instrument", "type": "string", "key$": "description" }, "leverage": { "properties": { "max": { "description": "Maximum leverage ratio", "example": 100, "type": "integer" } }, "type": "object", "key$": "leverage" }, "lotSizes": { "description": "Available lot sizes", "items": { "enum": ["micro", "mini", "standard"], "type": "string" }, "type": "array", "key$": "lotSizes" }, "marginRequirement": { "description": "Margin requirement percentage", "example": 1, "format": "double", "type": "number", "key$": "marginRequirement" }, "minSpread": { "description": "Minimum spreads by account type (in pips or points)", "properties": { "Premium": { "format": "double", "type": "number" }, "Prime": { "format": "double", "type": "number" }, "Standard": { "format": "double", "type": "number" } }, "type": "object", "key$": "minSpread" }, "name": { "description": "Full name of the instrument", "example": "Euro vs US Dollar", "type": "string", "key$": "name" }, "quoteCurrency": { "description": "Quote currency code", "example": "USD", "type": "string", "key$": "quoteCurrency" }, "symbol": { "description": "Trading symbol", "example": "EUR/USD", "type": "string", "key$": "symbol" }, "tradingHours": { "description": "Trading hours availability", "example": "24/5", "type": "string", "key$": "tradingHours" } }, "required": ["symbol", "name", "category", "marginRequirement"], "type": "object", "x-ref": "#/components/schemas/Instrument", "index$": 0 }, "key$": "instruments", "type": "array" }, "count": { "description": "Total number of instruments returned", "key$": "count", "type": "integer" } } }, "example": { "instruments": [{ "symbol": "EUR/USD", "name": "Euro vs US Dollar", "category": "majors", "baseCurrency": "EUR", "quoteCurrency": "USD", "minSpread": { "Standard": 1.7, "Premium": 1.4, "Prime": 1.1 }, "marginRequirement": 1, "lotSizes": ["micro", "mini", "standard"], "tradingHours": "24/5", "leverage": { "max": 100 } }, { "symbol": "XAU/USD", "name": "Gold", "category": "precious_metals", "baseCurrency": "XAU", "quoteCurrency": "USD", "minSpread": { "Standard": 0.46, "Premium": 0.43, "Prime": 0.41 }, "marginRequirement": 2, "lotSizes": ["micro", "mini", "standard"], "tradingHours": "24/5", "leverage": { "max": 50 } }], "count": 2 } } } }, "400": { "description": "Invalid request parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } }, "401": { "description": "Unauthorized - Invalid or missing API key", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "category", "in": "query", "description": "Filter instruments by category", "required": false, "schema": { "type": "string", "enum": ["majors", "minors", "exotics", "precious_metals", "all"], "default": "all" }, "index$": 0 }, { "name": "accountType", "in": "query", "description": "Account type for pricing tier", "required": false, "schema": { "type": "string", "enum": ["Standard", "Premium", "Prime"], "default": "Standard" }, "index$": 1 }], "security": [{ "apiKey": [] }], "securitySource": "operation", "securitySchemes": { "apiKey": { "type": "apiKey", "name": "X-API-Key", "in": "header", "description": "API key for authentication" }, "oauth2": { "type": "oauth2", "flows": { "authorizationCode": { "authorizationUrl": "https://auth.swissquote.com/oauth/authorize", "tokenUrl": "https://auth.swissquote.com/oauth/token", "scopes": { "read": "Read market data and account information", "trade": "Execute trades and manage positions" } } }, "description": "OAuth2 authentication for trading operations" } } }, "GET /quotes": { "protocol": "http", "operationId": "getQuotes", "responses": { "200": { "description": "Successful response with market quotes", "content": { "application/json": { "schema": { "type": "object", "properties": { "quotes": { "items": { "properties": { "ask": { "description": "Current ask price", "example": 1.0867, "format": "double", "type": "number", "key$": "ask" }, "bid": { "description": "Current bid price", "example": 1.085, "format": "double", "type": "number", "key$": "bid" }, "change": { "description": "Price change from previous close", "example": 0.0015, "format": "double", "type": "number", "key$": "change" }, "changePercent": { "description": "Percentage change from previous close", "example": 0.14, "format": "double", "type": "number", "key$": "changePercent" }, "currency": { "description": "Quote currency", "example": "USD", "type": "string", "key$": "currency" }, "lastUpdated": { "description": "Last update timestamp", "format": "date-time", "type": "string", "key$": "lastUpdated" }, "name": { "description": "Full name of the trading pair", "example": "Euro vs US Dollar", "type": "string", "key$": "name" }, "spread": { "description": "Spread in pips or points", "example": 1.7, "format": "double", "type": "number", "key$": "spread" }, "symbol": { "description": "Trading symbol", "example": "EUR/USD", "type": "string", "key$": "symbol" } }, "required": ["symbol", "name", "bid", "ask", "currency"], "type": "object", "x-ref": "#/components/schemas/Quote", "index$": 0 }, "key$": "quotes", "type": "array" }, "timestamp": { "description": "Time of quote generation", "format": "date-time", "key$": "timestamp", "type": "string" } } }, "example": { "quotes": [{ "symbol": "EUR/USD", "name": "Euro vs US Dollar", "bid": 1.085, "ask": 1.0867, "spread": 1.7, "change": 0.15, "changePercent": 0.14, "currency": "USD" }, { "symbol": "XAU/USD", "name": "Gold CFDs", "bid": 2045.6, "ask": 2046.06, "spread": 0.46, "change": 12.3, "changePercent": 0.6, "currency": "USD" }], "timestamp": "2024-01-15T14:30:00Z" } } } }, "400": { "description": "Invalid request parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } }, "401": { "description": "Unauthorized - Invalid or missing API key", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } }, "429": { "description": "Rate limit exceeded", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "object", "properties": { "code": { "type": "string", "description": "Error code", "example": "INVALID_SYMBOL" }, "message": { "type": "string", "description": "Human-readable error message", "example": "The specified trading symbol is not valid" }, "details": { "type": "string", "description": "Additional error details" } }, "required": ["code", "message"] } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "symbols", "in": "query", "description": "Comma-separated list of trading symbols (e.g., EUR/USD, GBP/USD, XAU/USD)", "required": true, "schema": { "type": "string", "example": "EUR/USD,GBP/USD,XAU/USD" }, "index$": 0 }, { "name": "accountType", "in": "query", "description": "Account type for pricing tier", "required": false, "schema": { "type": "string", "enum": ["Standard", "Premium", "Prime"], "default": "Standard" }, "index$": 1 }], "security": [{ "apiKey": [] }], "securitySource": "operation", "securitySchemes": { "apiKey": { "type": "apiKey", "name": "X-API-Key", "in": "header", "description": "API key for authentication" }, "oauth2": { "type": "oauth2", "flows": { "authorizationCode": { "authorizationUrl": "https://auth.swissquote.com/oauth/authorize", "tokenUrl": "https://auth.swissquote.com/oauth/token", "scopes": { "read": "Read market data and account information", "trade": "Execute trades and manage positions" } } }, "description": "OAuth2 authentication for trading operations" } } } });
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