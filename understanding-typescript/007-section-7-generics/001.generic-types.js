"use strict";
const items = ['hi', '1'];
console.log(items);
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then((data) => data.toFixed());
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const merged1 = merge({ name: 'dustin', hobbies: ['Sports'] }, { age: 9 });
merged1.hobbies;
function countAndDescribe(element) {
    let descriptionText = 'Got no value';
    if (element.length === 1) {
        descriptionText = 'Got 1 element';
    }
    else if (element.length > 1) {
        descriptionText = `Got ${element.length} element`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi there!'));
function extractAndConvert(obj, key) {
    return `Value: ${obj === null || obj === void 0 ? void 0 : obj[key]}`;
}
console.log(extractAndConvert({ dog: 'Dustin' }, 'dog'));
class DataStorage {
    constructor(removeCondition = (item, id) => item !== id) {
        this.data = [];
        this.removeCondition = removeCondition;
    }
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return [...this.data];
    }
    removeItem(id) {
        const newItems = this.data.filter((item) => this.removeCondition(item, id));
        this.data = [...newItems];
    }
}
const db = new DataStorage();
db.addItem('dog');
db.addItem('cat');
db.addItem('lizard');
db.removeItem('cat');
const storageItems = db.getItems();
const formattedItems = storageItems.map((item) => item.toUpperCase());
console.log(formattedItems);
const removeById = (item, id) => item.name !== id;
const db2 = new DataStorage(removeById);
db2.addItem({ name: 'Dustin' });
db2.addItem({ name: 'Zek' });
db2.addItem({ name: 'Zag' });
db2.removeItem('Zek');
console.log(db2.getItems());
