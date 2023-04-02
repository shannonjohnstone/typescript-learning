class ArrayOfNumbers {
  constructor(public collection: number[]) { }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) { }

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfCollection<T> {
  constructor(public collection: T[]) { }

  get(index: number): T {
    return this.collection[index];
  }
}

const result1 = new ArrayOfCollection([1, 2, 3]);
const result2 = new ArrayOfCollection(['s', 'c', 'z']);

function printStrings(array: string[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printNumbers(array: number[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function printCollectionDetails<T>(array: T[]): void {
  for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

printCollectionDetails(['a', 'b', 'c']);

class Car {
  print() {
    console.log('I am a Car');
  }
}

class House {
  print() {
    console.log('I am a House');
  }
}

interface Printable {
  print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHousesOrCars<House>([new Car(), new House()]);
