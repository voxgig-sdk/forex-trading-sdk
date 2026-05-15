
import { Context } from './Context'


class ForexTradingError extends Error {

  isForexTradingError = true

  sdk = 'ForexTrading'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  ForexTradingError
}

