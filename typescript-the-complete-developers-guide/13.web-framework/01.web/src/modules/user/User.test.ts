import { User } from './User';

describe('User', () => {
  describe('Given a user is created', () => {
    test('Then use get to retrived valid user data', () => {
      const user = new User({ name: 'Dustin', age: 30 });

      expect(user.get('name')).toEqual('Dustin');
      expect(user.get('age')).toEqual(30);
      // @ts-ignore
      expect(user.get('cake')).toEqual(undefined);
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

  describe('Given an event is added', () => {
    test('Then the event should be added', () => {
      const user = new User({});
      const clickFunction = () => 'yes';
      user.on('click', clickFunction);
      expect(user.events).toEqual({ click: [clickFunction] });
    });
  });

  describe('Given an event is added', () => {
    test('Then the event should trigger', () => {
      const user = new User({});
      const mockEvent = jest.fn();

      user.trigger('click');

      user.on('click', mockEvent);
      user.trigger('click');

      expect(mockEvent).toHaveBeenCalled();
    });
  });
});
