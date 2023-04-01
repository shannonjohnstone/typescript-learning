import { CharactorCollection } from './CharactorCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

describe('Sorter', () => {
  test('should sort numbers', () => {
    const collection = new NumbersCollection([10, 3, -5, 0]);

    expect(collection.sort()).toEqual([-5, 0, 3, 10]);
  });

  test('should sort characters', () => {
    const collection = new CharactorCollection('Xaba');
    expect(collection.sort()).toEqual('aabX');
  });

  test('should sort linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(-10);
    linkedList.add(500);
    linkedList.add(-3);
    expect(linkedList.sort()).toEqual([-10, -3, 500]);
  });
});
