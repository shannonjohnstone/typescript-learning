import { Sorter } from './Sorter';

describe('Sorter', () => {
  test('should sort numbers', () => {
    expect(new Sorter([10, 3, -5, 0]).sort()).toEqual([-5, 0, 3, 10]);
  });

  test('should sort characters', () => {
    // expect(new Sorter('Xaba').sort()).toEqual(['a', 'a', 'b', 'X']);
    expect(new Sorter('Xaba').sort()).toEqual('Xaba');
  });
});
