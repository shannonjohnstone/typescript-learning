import { Eventing } from '../eventing/Eventing';
import { Sync } from '../sync/Sync';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;
type PropsNameUnion = 'name' | 'age' | 'id';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users/');

  constructor(private data: UserProps) { }

  get(propName: PropsNameUnion): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps = {}): void {
    Object.assign(this.data, update);
  }
}
