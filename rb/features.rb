# ForexTrading SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ForexTradingFeatures
  def self.make_feature(name)
    case name
    when "base"
      ForexTradingBaseFeature.new
    when "ratelimit"
      ForexTradingRatelimitFeature.new
    when "retry"
      ForexTradingRetryFeature.new
    when "test"
      ForexTradingTestFeature.new
    when "timeout"
      ForexTradingTimeoutFeature.new
    else
      ForexTradingBaseFeature.new
    end
  end
end
