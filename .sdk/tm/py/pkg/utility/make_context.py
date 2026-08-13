# ForexTrading SDK utility: make_context

from projectname_sdk.core.context import ForexTradingContext


def make_context_util(ctxmap, basectx):
    return ForexTradingContext(ctxmap, basectx)
