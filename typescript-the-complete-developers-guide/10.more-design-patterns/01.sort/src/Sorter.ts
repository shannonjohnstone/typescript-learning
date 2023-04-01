export class Sorter {
  constructor(public collection: number[] | string) { }

  private swapArray(collection: number[], index: number) {
    const itemToBeSwappedToRight = collection[index];
    const itemToBeSwappedToLeft = collection[index + 1];

    collection[index] = itemToBeSwappedToLeft;
    collection[index + 1] = itemToBeSwappedToRight;

    return collection;
  }

  private swapString(collection: string, index: number) {
    return collection;
  }

  sort(): number[] | string {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            this.collection = this.swapArray(this.collection, j);
          }
        }

        if (typeof this.collection === 'string') {
          this.collection = this.swapString(this.collection, j);
        }
      }
    }

    return this.collection;
  }
}
