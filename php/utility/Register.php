<?php
declare(strict_types=1);

// ForexTrading SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ForexTradingUtility::setRegistrar(function (ForexTradingUtility $u): void {
    $u->clean = [ForexTradingClean::class, 'call'];
    $u->done = [ForexTradingDone::class, 'call'];
    $u->make_error = [ForexTradingMakeError::class, 'call'];
    $u->feature_add = [ForexTradingFeatureAdd::class, 'call'];
    $u->feature_hook = [ForexTradingFeatureHook::class, 'call'];
    $u->feature_init = [ForexTradingFeatureInit::class, 'call'];
    $u->fetcher = [ForexTradingFetcher::class, 'call'];
    $u->make_fetch_def = [ForexTradingMakeFetchDef::class, 'call'];
    $u->make_context = [ForexTradingMakeContext::class, 'call'];
    $u->make_options = [ForexTradingMakeOptions::class, 'call'];
    $u->make_request = [ForexTradingMakeRequest::class, 'call'];
    $u->make_response = [ForexTradingMakeResponse::class, 'call'];
    $u->make_result = [ForexTradingMakeResult::class, 'call'];
    $u->make_point = [ForexTradingMakePoint::class, 'call'];
    $u->make_spec = [ForexTradingMakeSpec::class, 'call'];
    $u->make_url = [ForexTradingMakeUrl::class, 'call'];
    $u->param = [ForexTradingParam::class, 'call'];
    $u->prepare_auth = [ForexTradingPrepareAuth::class, 'call'];
    $u->prepare_body = [ForexTradingPrepareBody::class, 'call'];
    $u->prepare_headers = [ForexTradingPrepareHeaders::class, 'call'];
    $u->prepare_method = [ForexTradingPrepareMethod::class, 'call'];
    $u->prepare_params = [ForexTradingPrepareParams::class, 'call'];
    $u->prepare_path = [ForexTradingPreparePath::class, 'call'];
    $u->prepare_query = [ForexTradingPrepareQuery::class, 'call'];
    $u->result_basic = [ForexTradingResultBasic::class, 'call'];
    $u->result_body = [ForexTradingResultBody::class, 'call'];
    $u->result_headers = [ForexTradingResultHeaders::class, 'call'];
    $u->transform_request = [ForexTradingTransformRequest::class, 'call'];
    $u->transform_response = [ForexTradingTransformResponse::class, 'call'];
});
