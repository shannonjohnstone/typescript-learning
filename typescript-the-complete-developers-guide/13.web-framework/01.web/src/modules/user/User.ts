import axios, { AxiosResponse } from 'axios';
interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;
type PropsNameUnion = 'name' | 'age' | 'id';

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) { }

  get(propName: PropsNameUnion): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps = {}): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    this.events[eventName] = [...handlers, callback];
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => {
      callback();
    });
  }

  async fetch(): Promise<UserProps> {
    const userId = this.get('id');

    const { data }: AxiosResponse = await axios.get(`http://localhost:3000/users/${userId}`);
    return data;
  }

  async save(): Promise<{ code: string; message: string } | never> {
    const userId = this.get('id');

    try {
      if (userId) {
        await axios.put(`http://localhost:3000/users/${userId}`, this.data);
        return { code: 'SUCCESSFUL_SAVE', message: `Successfully updated a user` };
      } else {
        await axios.post(`http://localhost:3000/users`, this.data);
        return { code: 'SUCCESSFUL_SAVE', message: `Successfully created a user` };
      }
    } catch (error) {
      throw new Error('Error saving data');
    }
  }
}
