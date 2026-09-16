# ForexTrading SDK feature factory

from forextrading_sdk.feature.base_feature import ForexTradingBaseFeature
from forextrading_sdk.feature.ratelimit_feature import ForexTradingRatelimitFeature
from forextrading_sdk.feature.retry_feature import ForexTradingRetryFeature
from forextrading_sdk.feature.test_feature import ForexTradingTestFeature
from forextrading_sdk.feature.timeout_feature import ForexTradingTimeoutFeature


_FEATURES = {
    "base": lambda: ForexTradingBaseFeature(),
    "ratelimit": lambda: ForexTradingRatelimitFeature(),
    "retry": lambda: ForexTradingRetryFeature(),
    "test": lambda: ForexTradingTestFeature(),
    "timeout": lambda: ForexTradingTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
