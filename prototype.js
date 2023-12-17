var car = {
    wheels: 4,
    init: function () {
        console.log("\u0423 \u043C\u0435\u043D\u044F \u0435\u0441\u0442\u044C ".concat(this.wheels, " \u043A\u043E\u043B\u0435\u0441\u0430. \u041C\u043E\u0439 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 ").concat(this.owner));
    }
};
var carWithOwner = Object.create(car, {
    owner: {
        value: 'Гржыгош'
    }
});
carWithOwner.init();
