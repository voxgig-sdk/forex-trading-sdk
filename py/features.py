# ForexTrading SDK feature factory

from feature.base_feature import ForexTradingBaseFeature
from feature.test_feature import ForexTradingTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ForexTradingBaseFeature(),
        "test": lambda: ForexTradingTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
