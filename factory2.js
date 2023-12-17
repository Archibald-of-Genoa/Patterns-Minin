var SimpleMembership = /** @class */ (function () {
    function SimpleMembership(name) {
        this.cost = 50;
        this.name = name;
    }
    SimpleMembership.prototype.define = function () {
        console.log("".concat(this.name).concat(this.type ? " (".concat(this.type, ")") : '', ": ").concat(this.cost));
    };
    return SimpleMembership;
}());
var StandardMembership = /** @class */ (function () {
    function StandardMembership(name) {
        this.cost = 150;
        this.name = name;
    }
    StandardMembership.prototype.define = function () {
        console.log("".concat(this.name).concat(this.type ? " (".concat(this.type, ")") : '', ": ").concat(this.cost));
    };
    return StandardMembership;
}());
var PremiumMembership = /** @class */ (function () {
    function PremiumMembership(name) {
        this.cost = 500;
        this.name = name;
    }
    PremiumMembership.prototype.define = function () {
        console.log("".concat(this.name).concat(this.type ? " (".concat(this.type, ")") : '', ": ").concat(this.cost));
    };
    return PremiumMembership;
}());
var MemberFactory = /** @class */ (function () {
    function MemberFactory() {
    }
    MemberFactory.create = function (name, type) {
        if (type === void 0) { type = 'simple'; }
        var MembershipClass = this.list[type] || this.list.simple;
        var member = new MembershipClass(name);
        member.type = type;
        return member;
    };
    MemberFactory.list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    };
    return MemberFactory;
}());
var factory = new MemberFactory();
var members = [
    MemberFactory.create('Tom', 'simple'),
    MemberFactory.create('Olga', 'premium'),
    MemberFactory.create('Ivan', 'standard'),
];
members.forEach(function (m) { return m.define(); });
