enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
  AUTHOR = 'AUTHOR',
}

interface User {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
}

const user: User = {
  name: 'Shannon',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN,
};

console.log(user);
