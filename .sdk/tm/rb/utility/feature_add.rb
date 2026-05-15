# ForexTrading SDK utility: feature_add
module ForexTradingUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
