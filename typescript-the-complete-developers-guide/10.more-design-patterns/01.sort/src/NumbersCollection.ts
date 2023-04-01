import { AbstractSorter } from './Sorter.abstract';

type Data = number[];

export class NumbersCollection extends AbstractSorter<Data> {
  constructor(public data: Data) {
    super();
  }

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
