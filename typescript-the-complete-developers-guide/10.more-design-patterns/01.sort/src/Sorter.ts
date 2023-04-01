export class Sorter {
  constructor(public collection: number[]) { }
  private swap(j: number) {
    const itemToBeSwappedToRight = this.collection[j];
    const itemToBeSwappedToLeft = this.collection[j + 1];

    this.collection[j] = itemToBeSwappedToLeft;
    this.collection[j + 1] = itemToBeSwappedToRight;
  }

  sort(): number[] {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          this.swap(j);
        }
      }
    }

    return this.collection;
  }
}
