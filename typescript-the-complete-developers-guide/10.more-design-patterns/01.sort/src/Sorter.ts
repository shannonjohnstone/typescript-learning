interface ISort {
  length: () => number;
  compare: (index: number) => boolean;
  swap: (index: number) => unknown;
  get: () => unknown;
}

export class Sorter {
  constructor(public collection: ISort) { }
  sort() {
    const length = this.collection.length();
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
        }
      }
    }

    return this.collection.get();
  }
}
