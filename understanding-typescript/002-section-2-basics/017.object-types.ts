const user: { name: string; age: number } = {
  name: 'Shannon',
  age: 30,
};

// Incorrect, "nickname" does not exist on the object type
console.log(user.nickname);

// Correct
console.log(user.name);

export { };
