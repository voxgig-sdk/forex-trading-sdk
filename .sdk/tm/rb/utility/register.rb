# ForexTrading SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ForexTradingUtility.registrar = ->(u) {
  u.clean = ForexTradingUtilities::Clean
  u.done = ForexTradingUtilities::Done
  u.make_error = ForexTradingUtilities::MakeError
  u.feature_add = ForexTradingUtilities::FeatureAdd
  u.feature_hook = ForexTradingUtilities::FeatureHook
  u.feature_init = ForexTradingUtilities::FeatureInit
  u.fetcher = ForexTradingUtilities::Fetcher
  u.make_fetch_def = ForexTradingUtilities::MakeFetchDef
  u.make_context = ForexTradingUtilities::MakeContext
  u.make_options = ForexTradingUtilities::MakeOptions
  u.make_request = ForexTradingUtilities::MakeRequest
  u.make_response = ForexTradingUtilities::MakeResponse
  u.make_result = ForexTradingUtilities::MakeResult
  u.make_point = ForexTradingUtilities::MakePoint
  u.make_spec = ForexTradingUtilities::MakeSpec
  u.make_url = ForexTradingUtilities::MakeUrl
  u.param = ForexTradingUtilities::Param
  u.prepare_auth = ForexTradingUtilities::PrepareAuth
  u.prepare_body = ForexTradingUtilities::PrepareBody
  u.prepare_headers = ForexTradingUtilities::PrepareHeaders
  u.prepare_method = ForexTradingUtilities::PrepareMethod
  u.prepare_params = ForexTradingUtilities::PrepareParams
  u.prepare_path = ForexTradingUtilities::PreparePath
  u.prepare_query = ForexTradingUtilities::PrepareQuery
  u.result_basic = ForexTradingUtilities::ResultBasic
  u.result_body = ForexTradingUtilities::ResultBody
  u.result_headers = ForexTradingUtilities::ResultHeaders
  u.transform_request = ForexTradingUtilities::TransformRequest
  u.transform_response = ForexTradingUtilities::TransformResponse
}
