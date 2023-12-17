var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Complaints = /** @class */ (function () {
    function Complaints() {
        this.complaints = [];
    }
    Complaints.prototype.add = function (complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    };
    return Complaints;
}());
var ProductComplaint = /** @class */ (function (_super) {
    __extends(ProductComplaint, _super);
    function ProductComplaint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductComplaint.prototype.reply = function (_a) {
        var id = _a.id, customer = _a.customer, details = _a.details;
        return "Product: ".concat(id, ": ").concat(customer, " (").concat(details, ")");
    };
    return ProductComplaint;
}(Complaints));
var ServiceComplaint = /** @class */ (function (_super) {
    __extends(ServiceComplaint, _super);
    function ServiceComplaint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceComplaint.prototype.reply = function (_a) {
        var id = _a.id, customer = _a.customer, details = _a.details;
        return "Service: ".concat(id, ": ").concat(customer, " (").concat(details, ")");
    };
    return ServiceComplaint;
}(Complaints));
var ComplaintRegistry = /** @class */ (function () {
    function ComplaintRegistry() {
    }
    ComplaintRegistry.prototype.register = function (customer, type, details) {
        var id = Date.now();
        var complaint;
        if (type === "service") {
            complaint = new ServiceComplaint();
        }
        else {
            complaint = new ProductComplaint();
        }
        return complaint.add({ id: id, customer: customer, details: details });
    };
    return ComplaintRegistry;
}());
var registry = new ComplaintRegistry();
console.log(registry.register('Tom', 'service', 'Йобанарот!!!'));
