interface Membership {
    name: string;
    cost: number;
    type?: string;
    define(): void;
}

class SimpleMembership implements Membership {
    name: string;
    cost: number = 50;
    type?: string;

    constructor(name: string) {
        this.name = name;
    }

    define() {
        console.log(`${this.name}${this.type ? ` (${this.type})` : ''}: ${this.cost}`);
    }
}

class StandardMembership implements Membership {
    name: string;
    cost: number = 150;
    type?: string;

    constructor(name: string) {
        this.name = name;
    }

    define() {
        console.log(`${this.name}${this.type ? ` (${this.type})` : ''}: ${this.cost}`);
    }
}

class PremiumMembership implements Membership {
    name: string;
    cost: number = 500;
    type?: string;

    constructor(name: string) {
        this.name = name;
    }

    define() {
        console.log(`${this.name}${this.type ? ` (${this.type})` : ''}: ${this.cost}`);
    }
}

class MemberFactory {
    static list: { [key: string]: new (name: string) => Membership } = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    };

    static create(name: string, type: string = 'simple'): Membership {
        const MembershipClass = this.list[type] || this.list.simple;
        const member = new MembershipClass(name);
        member.type = type;

        return member;
    }
}

const factory = new MemberFactory();

const members: Membership[] = [
    MemberFactory.create('Tom', 'simple'),
    MemberFactory.create('Olga', 'premium'),
    MemberFactory.create('Ivan', 'standard'),
];

members.forEach((m) => m.define());
