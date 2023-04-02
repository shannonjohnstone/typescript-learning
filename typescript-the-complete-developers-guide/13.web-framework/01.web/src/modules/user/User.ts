interface UserProps {
  name?: string;
  age?: number;
}

type PropsNameUnion = 'name' | 'age';

export class User {
  constructor(private data: UserProps) { }

  get(propName: PropsNameUnion): string | number | undefined {
    return this.data?.[propName];
  }

  set(update: UserProps = {}): void {
    Object.assign(this.data, update);
  }
}
