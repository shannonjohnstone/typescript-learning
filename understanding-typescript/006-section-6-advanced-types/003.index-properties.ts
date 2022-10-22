interface ErrorContainer {
  [key: string]: string;
}

const error1: ErrorContainer = {
  email: 'Not a valid email',
};

console.log(error1.email);

export { };
