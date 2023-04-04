export class Attributes<T extends {}> {
  constructor(private data: T) { }

  getAll = (): T => {
    return this.data;
  };

  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set = (update: T): void => {
    Object.assign(this.data, update);
  };
}
