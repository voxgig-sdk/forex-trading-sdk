package core

type ForexTradingError struct {
	IsForexTradingError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewForexTradingError(code string, msg string, ctx *Context) *ForexTradingError {
	return &ForexTradingError{
		IsForexTradingError: true,
		Sdk:              "ForexTrading",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ForexTradingError) Error() string {
	return e.Msg
}
