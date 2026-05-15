package = "voxgig-sdk-forex-trading"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/forex-trading-sdk.git"
}
description = {
  summary = "ForexTrading SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["forex-trading_sdk"] = "forex-trading_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
