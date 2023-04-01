import { CharactorCollection } from './CharactorCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

describe('Sorter', () => {
  test('should sort numbers', () => {
    const collection = new NumbersCollection([10, 3, -5, 0]);
    const sorted = new Sorter(collection).sort();

    expect(sorted).toEqual([-5, 0, 3, 10]);
  });

  test('should sort characters', () => {
    const collection = new CharactorCollection('Xaba');
    const sorted = new Sorter(collection).sort();

    expect(sorted).toEqual('aabX');
  });

  test('should sort linked list', () => {
    const linkedList = new LinkedList();
    linkedList.add(-10);
    linkedList.add(500);
    linkedList.add(-3);

    const sorted = new Sorter(linkedList).sort();

    expect(sorted).toEqual([-10, -3, 500]);
  });
});
