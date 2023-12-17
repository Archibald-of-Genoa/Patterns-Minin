interface Car {
    wheels: number;
    owner?: string;
    init(): void;
}

const car: Car = {
    wheels: 4,

    init() {
        console.log(`У меня есть ${this.wheels} колеса. Мой владелец ${this.owner}`);
    }
}

const carWithOwner: Car = Object.create(car, {
    owner: {
        value: 'Гржыгош'
    }
});

carWithOwner.init();
