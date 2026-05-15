# ProjectName SDK exists test

import pytest
from forextrading_sdk import ForexTradingSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ForexTradingSDK.test(None, None)
        assert testsdk is not None
