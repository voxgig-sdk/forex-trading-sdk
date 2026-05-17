package voxgigforextradingsdk

import (
	"github.com/voxgig-sdk/forex-trading-sdk/go/core"
	"github.com/voxgig-sdk/forex-trading-sdk/go/entity"
	"github.com/voxgig-sdk/forex-trading-sdk/go/feature"
	_ "github.com/voxgig-sdk/forex-trading-sdk/go/utility"
)

// Type aliases preserve external API.
type ForexTradingSDK = core.ForexTradingSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ForexTradingEntity = core.ForexTradingEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ForexTradingError = core.ForexTradingError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMarketDataEntityFunc = func(client *core.ForexTradingSDK, entopts map[string]any) core.ForexTradingEntity {
		return entity.NewMarketDataEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewForexTradingSDK = core.NewForexTradingSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
