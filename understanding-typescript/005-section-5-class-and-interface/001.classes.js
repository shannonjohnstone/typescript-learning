"use strict";
class Department {
    constructor(area) {
        this.area = area;
        this.employeesArray = [];
        this.area = area;
    }
    addEmployee(employee) {
        this.employeesArray = [...this.employeesArray, employee];
    }
    get employees() {
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
