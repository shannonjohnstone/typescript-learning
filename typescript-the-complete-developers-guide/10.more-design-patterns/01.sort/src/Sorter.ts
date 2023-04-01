export interface ISort<R> {
  length: number;
  compare: (index: number) => boolean;
  swap: (index: number) => void;
  data: R;
}

export class Sorter<R> {
  constructor(public collection: ISort<R>) { }

  sort(): R {
    const length = this.collection.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j)) {
          this.collection.swap(j);
        }
      }
    }

    return this.collection.data;
  }
}
