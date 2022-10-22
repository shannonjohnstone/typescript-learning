"use strict";
var GenderEnum;
(function (GenderEnum) {
    GenderEnum["M"] = "M";
    GenderEnum["F"] = "F";
    GenderEnum["NA"] = "N/A";
})(GenderEnum || (GenderEnum = {}));
const dustin = {
    name: 'dustin',
    age: 9,
    greet(catchPhrase) {
        console.log(`Hi ${catchPhrase}`);
    },
};
class Dustin {
    constructor() {
        this.name = 'dustin2';
        this.gender = GenderEnum.M;
        this.age = 9;
    }
    greet(phrase) {
        console.log(`Hi ${phrase}, my name is ${this.name}`);
    }
    get details() {
        return this;
    }
}
dustin.greet('all!');
const dustin2 = new Dustin();
dustin2.greet('everybody');
console.log(dustin2.details);
