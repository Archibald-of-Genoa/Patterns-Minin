// Define the interface for the calculator
interface Calculator {
  add(t1: number, t2: number): number;
  sub(t1: number, t2: number): number;
}

// Old calculator class
class OldCalc {
  operations(t1: number, t2: number, operation: string): number {
    switch (operation) {
      case "add":
        return t1 + t2;
      case "sub":
        return t1 - t2;
      default:
        return NaN;
    }
  }
}

// New calculator class
class NewCalc implements Calculator {
  add(t1: number, t2: number): number {
    return t1 + t2;
  }

  sub(t1: number, t2: number): number {
    return t1 - t2;
  }
}

// Calculator adapter class
class CalcAdapter implements Calculator {
  private calc: NewCalc;

  constructor() {
    this.calc = new NewCalc();
  }

  add(t1: number, t2: number): number {
    return this.calc.add(t1, t2);
  }

  sub(t1: number, t2: number): number {
    return this.calc.sub(t1, t2);
  }
}

// Test the calculators
const oldCalc = new OldCalc();
console.log(oldCalc.operations(10, 5, "add"));

const newCalc = new NewCalc();
console.log(newCalc.add(10, 5));

const adapter = new CalcAdapter();
console.log(adapter.add(10, 5));
