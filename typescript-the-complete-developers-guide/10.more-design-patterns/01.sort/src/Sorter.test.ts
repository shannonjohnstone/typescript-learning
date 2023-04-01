import { Sorter } from './Sorter';

describe('Sorter', () => {
  test('should return void', () => {
    expect(new Sorter([10, 3, -5, 0]).sort()).toEqual([-5, 0, 3, 10]);
  });
});
