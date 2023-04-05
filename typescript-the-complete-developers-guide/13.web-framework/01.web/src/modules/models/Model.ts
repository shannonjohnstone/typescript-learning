import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(value: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

type Callback = () => void;

interface Events {
  on(eventName: string, callBack: () => void): void;
  trigger(eventName: string): void;
  events: { [key: string]: Callback[] };
}

export class Model<T extends { id?: number }> {
  constructor(
    private attributes: ModelAttributes<T>,
    private eventing: Events,
    private sync: Sync<T>,
  ) { }

  get on() {
    return this.eventing.on;
  }

  get eventsList() {
    return this.eventing.events;
  }

  get trigger() {
    return this.eventing.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.eventing.trigger('change');
  }

  async save(): Promise<void> {
    this.sync.save(this.attributes.getAll());
  }

  async fetch(): Promise<void> {
    const id = this.attributes.get('id');

    // TODO: uncomment this after fixing the test
    if (!id) throw new Error('Cannont fetch without an id');

    const result = await this.sync.fetch(id);

    this.attributes.set(result.data);
  }
}
