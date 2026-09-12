import { Context } from './Context';
declare class ForexTradingError extends Error {
    isForexTradingError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ForexTradingError };
