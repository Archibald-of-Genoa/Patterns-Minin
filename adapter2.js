// Old calculator class
var OldCalc = /** @class */ (function () {
    function OldCalc() {
    }
    OldCalc.prototype.operations = function (t1, t2, operation) {
        switch (operation) {
            case "add":
                return t1 + t2;
            case "sub":
                return t1 - t2;
            default:
                return NaN;
        }
    };
    return OldCalc;
}());
// New calculator class
var NewCalc = /** @class */ (function () {
    function NewCalc() {
    }
    NewCalc.prototype.add = function (t1, t2) {
        return t1 + t2;
    };
    NewCalc.prototype.sub = function (t1, t2) {
        return t1 - t2;
    };
    return NewCalc;
}());
// Calculator adapter class
var CalcAdapter = /** @class */ (function () {
    function CalcAdapter() {
        this.calc = new NewCalc();
    }
    CalcAdapter.prototype.add = function (t1, t2) {
        return this.calc.add(t1, t2);
    };
    CalcAdapter.prototype.sub = function (t1, t2) {
        return this.calc.sub(t1, t2);
    };
    return CalcAdapter;
}());
// Test the calculators
var oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, "add"));
var newCalc = new NewCalc();
console.log(newCalc.add(10, 5));
var adapter = new CalcAdapter();
console.log(adapter.add(10, 5));
