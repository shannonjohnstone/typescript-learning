import { ISortable } from './Sorter';

type Data = number[];

export class NumbersCollection implements ISortable<Data> {
  constructor(public data: Data) { }

  swap(index: number): void {
    const itemToBeSwappedToRight = this.data[index];
    const itemToBeSwappedToLeft = this.data[index + 1];

    this.data[index] = itemToBeSwappedToLeft;
    this.data[index + 1] = itemToBeSwappedToRight;
  }

  compare(index: number): boolean {
    return this.data[index] > this.data[index + 1];
  }

  get length(): number {
    return this.data.length;
  }
}
