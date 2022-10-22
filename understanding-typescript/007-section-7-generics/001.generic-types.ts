const items: Array<string> = ['hi', '1'];

console.log(items);

const promise: Promise<number> = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => data.toFixed());

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const merged1 = merge({ name: 'dustin', hobbies: ['Sports'] }, { age: 9 });
merged1.hobbies;

// This errros due to 30 not matching the correct type
// const merged2 = merge({ name: 'dustin', hobbies: ['Sports'] }, 30);
// merged2.age;

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';

  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} element`;
  }

  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));

function extractAndConvert<T, U extends keyof T>(obj: T, key: U) {
  return `Value: ${obj?.[key]}`;
}

console.log(extractAndConvert({ dog: 'Dustin' }, 'dog'));

class DataStorage<T> {
  private data: T[] = [];
  protected removeCondition: (item: T, id: string) => boolean;

  constructor(
    removeCondition: (item: T, id: string) => boolean = (
      item: T,
      id: string
    ): boolean => item !== id
  ) {
    this.removeCondition = removeCondition;
  }

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return [...this.data];
  }

  removeItem(id: string) {
    const newItems = this.data.filter((item) => this.removeCondition(item, id));

    this.data = [...newItems];
  }
}

const db = new DataStorage<string>();

db.addItem('dog');
db.addItem('cat');
db.addItem('lizard');
db.removeItem('cat');

const storageItems = db.getItems();

const formattedItems = storageItems.map((item) => item.toUpperCase());

console.log(formattedItems);

interface DBItem {
  name: string;
}

const removeById = (item: DBItem, id: string): boolean => item.name !== id;

const db2 = new DataStorage<DBItem>(removeById);
db2.addItem({ name: 'Dustin' });
db2.addItem({ name: 'Zek' });
db2.addItem({ name: 'Zag' });
db2.removeItem('Zek');
console.log(db2.getItems());
