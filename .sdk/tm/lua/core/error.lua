-- ForexTrading SDK error

local ForexTradingError = {}
ForexTradingError.__index = ForexTradingError


function ForexTradingError.new(code, msg, ctx)
  local self = setmetatable({}, ForexTradingError)
  self.is_sdk_error = true
  self.sdk = "ForexTrading"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ForexTradingError:error()
  return self.msg
end


function ForexTradingError:__tostring()
  return self.msg
end


return ForexTradingError
