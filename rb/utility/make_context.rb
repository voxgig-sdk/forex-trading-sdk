# ForexTrading SDK utility: make_context
require_relative '../core/context'
module ForexTradingUtilities
  MakeContext = ->(ctxmap, basectx) {
    ForexTradingContext.new(ctxmap, basectx)
  }
end
