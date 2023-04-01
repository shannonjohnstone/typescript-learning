export interface ISortable<R> {
  length: number;
  compare: (index: number) => boolean;
  swap: (index: number) => void;
  data: R;
}

export abstract class AbstractSorter<R> {
  abstract compare(index: number): boolean;
  abstract swap(index: number): void;
  abstract length: number;
  abstract data: R;

  sort(): R {
    const length = this.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j)) {
          this.swap(j);
        }
      }
    }

    return this.data;
  }
}
