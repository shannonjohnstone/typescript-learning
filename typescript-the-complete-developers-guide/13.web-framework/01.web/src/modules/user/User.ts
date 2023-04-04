import { Attributes } from '../attributes/Attributes';
import { Eventing } from '../eventing/Eventing';
import { Sync } from '../sync/Sync';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users/');
  public attributues: Attributes<UserProps>;

  constructor(private data: UserProps) {
    this.attributues = new Attributes<UserProps>(data);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributues.get;
  }

  set(update: UserProps): void {
    this.attributues.set(update);
    this.events.trigger('change');
  }

  async save(): Promise<void> {
    this.sync.save(this.attributues.getAll());
  }

  async fetch(): Promise<void> {
    const id = this.attributues.get('id');

    // TODO: uncomment this after fixing the test
    if (!id) throw new Error('Cannont fetch without an id');

    const result = await this.sync.fetch(id);

    this.attributues.set(result.data);
  }
}
