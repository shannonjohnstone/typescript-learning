"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function Logger(target, name) {
    console.log('Property decorator', target, name);
}
function Logger2(target, name, descriptor) {
    console.log('Property decorator 2', target);
    console.log('Property decorator 2', name);
    console.log('Property decorator 2', descriptor);
}
class Product {
    constructor(title, price) {
        this._title = title;
        this._price = price;
    }
    set price(val) {
        if (val > 0)
            this._price = val;
        else
            throw new Error('Invalid Price');
    }
    get title() {
        return this._title;
    }
    getPriceWithTax(tax) {
        return this._price * (1 + tax);
    }
}
__decorate([
    Logger
], Product.prototype, "_title", void 0);
__decorate([
    Logger2
], Product.prototype, "price", null);
const product1 = new Product('Product 1', 10.99);
product1.title;
