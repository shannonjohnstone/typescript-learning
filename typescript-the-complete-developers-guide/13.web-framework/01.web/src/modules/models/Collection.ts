import axios from 'axios';
import { Eventing } from '../eventing/Eventing';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing;

  constructor(
    private rootUrl: string,
    private create: (data: K) => T,
    { eventing }: { eventing?: Eventing } = {},
  ) {
    this.events = eventing ? eventing : new Eventing();
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.on;
  }

  async fetch(): Promise<void> {
    const { data } = await axios.get(this.rootUrl);

    data.forEach((item: K) => {
      this.models.push(this.create(item));
    });
  }
}
