import { ForexTradingEntityBase } from '../ForexTradingEntityBase';
import type { ForexTradingSDK } from '../ForexTradingSDK';
import type { Control } from '../types';
import type { MarketData, MarketDataListMatch } from '../ForexTradingTypes';
declare class MarketDataEntity extends ForexTradingEntityBase<MarketData> {
    constructor(client: ForexTradingSDK, entopts: any);
    make(this: MarketDataEntity): MarketDataEntity;
    list(this: any, reqmatch?: MarketDataListMatch, ctrl?: Control): Promise<MarketDataEntity[]>;
}
export { MarketDataEntity };
