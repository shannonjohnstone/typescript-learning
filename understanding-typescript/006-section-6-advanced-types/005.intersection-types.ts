interface Admin {
  name: string;
  privileges: string[];
}

interface Employee {
  name: string;
  startDate: string;
}

type ElavatedEmployee = Admin & Employee;

const employee1: ElavatedEmployee = {
  name: 'Dustin',
  privileges: ['ADMIN'],
  startDate: '01/01/2020',
};

console.log(employee1);

type Combineable = string | number;
type Numeric = number | boolean | string;

type Universal = Combineable & Numeric;

const item: Universal = '1';
const item2: Universal = true;

console.log(item);
console.log(item2);
