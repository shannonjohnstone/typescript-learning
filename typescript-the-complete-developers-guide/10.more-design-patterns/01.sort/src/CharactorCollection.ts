import { AbstractSorter } from './Sorter.abstract';

type Data = string;

export class CharactorCollection extends AbstractSorter<Data> {
  constructor(public data: Data) {
    super();
  }

  swap(index: number): void {
    const arrayOfCharaters = [...this.data];
    const itemToBeSwappedToRight = arrayOfCharaters[index];
    const itemToBeSwappedToLeft = arrayOfCharaters[index + 1];

    arrayOfCharaters[index] = itemToBeSwappedToLeft;
    arrayOfCharaters[index + 1] = itemToBeSwappedToRight;

    this.data = arrayOfCharaters.join('');
  }

  compare(index: number): boolean {
    return this.data[index].toLocaleLowerCase() > this.data[index + 1].toLocaleLowerCase();
  }

  get length(): number {
    return this.data.length;
  }
}
