<?php
declare(strict_types=1);

// ForexTrading SDK base feature

class ForexTradingBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ForexTradingContext $ctx, array $options): void {}
    public function PostConstruct(ForexTradingContext $ctx): void {}
    public function PostConstructEntity(ForexTradingContext $ctx): void {}
    public function SetData(ForexTradingContext $ctx): void {}
    public function GetData(ForexTradingContext $ctx): void {}
    public function GetMatch(ForexTradingContext $ctx): void {}
    public function SetMatch(ForexTradingContext $ctx): void {}
    public function PrePoint(ForexTradingContext $ctx): void {}
    public function PreSpec(ForexTradingContext $ctx): void {}
    public function PreRequest(ForexTradingContext $ctx): void {}
    public function PreResponse(ForexTradingContext $ctx): void {}
    public function PreResult(ForexTradingContext $ctx): void {}
    public function PreDone(ForexTradingContext $ctx): void {}
    public function PreUnexpected(ForexTradingContext $ctx): void {}
}
