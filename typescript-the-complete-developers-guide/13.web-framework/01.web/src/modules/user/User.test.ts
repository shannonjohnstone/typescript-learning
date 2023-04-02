import { User } from './User';

describe('User', () => {
  describe('Given a user is created', () => {
    test('Then use get to retrived valid user data', () => {
      const user = new User({ name: 'Dustin', age: 30 });

      expect(user.get('name')).toEqual('Dustin');
      expect(user.get('age')).toEqual(30);
    });
  });

  describe('Given a user is created', () => {
    describe('And user data is set', () => {
      test('Then use get to retrived valid user data', () => {
        const user = new User({ name: 'Dustin', age: 30 });
        user.set({ name: 'Zag' });

        expect(user.get('name')).toEqual('Zag');
        expect(user.get('age')).toEqual(30);
      });
    });
  });
});
