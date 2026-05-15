package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMarketDataEntityFunc func(client *ForexTradingSDK, entopts map[string]any) ForexTradingEntity

