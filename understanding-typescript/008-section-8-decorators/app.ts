function Logger(logString: string) {
  return function (_: any) {
    console.log(logString);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log('WithTemplate 1');
  return function <T extends { new(...args: any[]): { name: string } }>(
    constructor: T
  ) {
    console.log('WithTemplate 2');
    return class extends constructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template!');
        const el = document.getElementById(hookId);

        if (el) {
          const person1 = new constructor();
          el.innerHTML = template + ' : ' + person1.name;
        }
      }
    };
  };
}

@Logger('Logging Person .....')
@WithTemplate('This is from the WithTemplate Decorator', 'app')
class Person {
  name = 'Max';

  constructor() {
    console.log(`Creating person: ${this.name}`);
  }
}

const person = new Person();
person.name;
