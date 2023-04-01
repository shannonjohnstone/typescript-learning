export class NumbersCollection {
  constructor(public data: number[]) { }

  swap(index: number): number[] {
    const itemToBeSwappedToRight = this.data[index];
    const itemToBeSwappedToLeft = this.data[index + 1];

    this.data[index] = itemToBeSwappedToLeft;
    this.data[index + 1] = itemToBeSwappedToRight;

    return this.data;
  }

  compare(index: number): boolean {
    return this.data[index] > this.data[index + 1];
  }

  length(): number {
    console.log(this, 'this....');
    return this.data.length;
  }

  get(): number[] {
    return this.data;
  }
}
