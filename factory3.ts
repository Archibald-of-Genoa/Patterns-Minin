interface Membership {
  name: string;
  cost: number;
  type?: string;
  define(): void;
}

class SimpleMembership implements Membership {
    name: string
    cost: number = 50
    type?: string

    constructor(name) {
        this.name = name
    }

    define() {
    }
}