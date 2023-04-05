import { Attributes } from '../attributes/Attributes';
import { Eventing } from '../eventing/Eventing';
import { SyncApi } from '../sync/SyncApi';
import { Model } from './Model';
import { Collection } from './Collection';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrlForUsers = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static create(attrs: UserProps) {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new SyncApi<UserProps>(rootUrlForUsers),
    );
  }

  static createCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrlForUsers, User.create);
  }

  setRandomAge = (): void => {
    const age = Math.floor(Math.random() * 100);

    this.set({ age });
  };
}
