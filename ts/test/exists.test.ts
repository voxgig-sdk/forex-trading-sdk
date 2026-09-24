
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ForexTradingSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ForexTradingSDK.test()
    equal(testsdk instanceof ForexTradingSDK, true,
      'ForexTradingSDK.test() must return a client synchronously')
  })

})
