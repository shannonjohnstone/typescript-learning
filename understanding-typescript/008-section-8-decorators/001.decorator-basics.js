"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(logString) {
    return function (_) {
        console.log(logString);
    };
}
function WithTemplate(template, hookId) {
    return function (constructor) {
        const el = document.getElementById(hookId);
        if (el) {
            const person1 = new constructor();
            el.innerHTML = template + ' : ' + person1.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log(`Creating person: ${this.name}`);
    }
};
Person = __decorate([
    Logger('Logging Person .....'),
    WithTemplate('This is from the WithTemplate Decorator', 'app')
], Person);
const person = new Person();
person.name;
