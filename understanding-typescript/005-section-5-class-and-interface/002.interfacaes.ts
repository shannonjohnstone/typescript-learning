enum GenderEnum {
  M = 'M',
  F = 'F',
  NA = 'N/A',
}
interface Gender {
  readonly gender?: GenderEnum;
}

interface Person extends Gender {
  readonly name: string;
  readonly age: number;

  greet(phrase: string): void;
}

const dustin: Person = {
  name: 'dustin',
  age: 9,
  greet(catchPhrase) {
    console.log(`Hi ${catchPhrase}`);
  },
};

class Dustin implements Person {
  name: string;
  age: number;
  gender: GenderEnum;

  constructor() {
    this.name = 'dustin2';
    this.gender = GenderEnum.M;
    this.age = 9;
  }

  greet(phrase: string): void {
    console.log(`Hi ${phrase}, my name is ${this.name}`);
  }

  get details() {
    return this;
  }
}

dustin.greet('all!');
const dustin2 = new Dustin();
dustin2.greet('everybody');
console.log(dustin2.details);
