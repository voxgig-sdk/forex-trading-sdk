export interface MarketData {
    ask: number;
    baseCurrency?: string;
    bid: number;
    category: string;
    change?: number;
    changePercent?: number;
    currency: string;
    description?: string;
    lastUpdated?: string;
    leverage?: Record<string, any>;
    lotSizes?: any[];
    marginRequirement: number;
    minSpread?: Record<string, any>;
    name: string;
    quoteCurrency?: string;
    spread?: number;
    symbol: string;
    tradingHours?: string;
}
export interface MarketDataListMatch {
    account_type?: string;
    category?: string;
}
