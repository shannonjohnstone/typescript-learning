import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

describe('Sorter', () => {
  test('should sort numbers', () => {
    const collection = new NumbersCollection([10, 3, -5, 0]);
    const sorted = new Sorter(collection).sort();

    expect(sorted).toEqual([-5, 0, 3, 10]);
  });

  // test('should sort characters', () => {
  //   expect(new Sorter('Xaba').sort()).toEqual('aabX');
  // });
});
