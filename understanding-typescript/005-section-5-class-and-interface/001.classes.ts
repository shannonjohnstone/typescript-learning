class Department {
  private employeesArray: string[] = [];

  constructor(readonly area: string) {
    this.area = area;
  }

  addEmployee(employee: string) {
    this.employeesArray = [...this.employeesArray, employee];
  }

  get employees(): string[] {
    return this.employeesArray;
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Dustin');
accounting.addEmployee('Zag');

console.log(accounting.area);
console.log(accounting.employees);

class ITDeparment extends Department {
  constructor() {
    super('IT');
  }

  getMachineRolePerEmployee() {
    return this.employees.map((employee) => [employee, 'STANDARD_USER']);
  }
}

const itDepartment = new ITDeparment();

console.log(itDepartment.area);
itDepartment.addEmployee('Tom');

itDepartment.addEmployee('Kate');
console.log(itDepartment.getMachineRolePerEmployee());
console.log(itDepartment.employees);
