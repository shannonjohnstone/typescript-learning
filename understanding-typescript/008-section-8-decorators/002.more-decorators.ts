function Logger(target: any, name: string) {
  console.log('Property decorator', target, name);
}

function Logger2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Property decorator 2', target);
  console.log('Property decorator 2', name);
  console.log('Property decorator 2', descriptor);
}

class Product {
  @Logger
  private _title: string;
  private _price: number;

  @Logger2
  set price(val: number) {
    if (val > 0) this._price = val;
    else throw new Error('Invalid Price');
  }

  get title() {
    return this._title;
  }

  constructor(title: string, price: number) {
    this._title = title;
    this._price = price;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}

const product1 = new Product('Product 1', 10.99);
product1.title;

export { };
