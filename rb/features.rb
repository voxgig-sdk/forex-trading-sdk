# ForexTrading SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ForexTradingFeatures
  def self.make_feature(name)
    case name
    when "base"
      ForexTradingBaseFeature.new
    when "test"
      ForexTradingTestFeature.new
    else
      ForexTradingBaseFeature.new
    end
  end
end
