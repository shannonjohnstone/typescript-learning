import axios from 'axios';
import { User } from './User';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
      expect(user.events.events).toEqual({ click: [clickFunction] });
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

  describe.skip('Given a valid user is fetched', () => {
    test('Then return that user data', async () => {
      const userData = { name: 'TestUser' };

      const user = new User(userData);
      const fetchedData = await user.fetch();
      expect(fetchedData).toEqual(userData);
    });
  });

  describe('Given valid user data is used to save', () => {
    test('Then it should save successfully', async () => {
      mockedAxios.get = jest.fn();
      mockedAxios.post = jest.fn();

      const userData = { name: 'TestUser' };
      const user = new User(userData);
      await user.save();

      expect(mockedAxios.post).toHaveBeenCalled();

      // const userWithId = new User({ ...userData, id: 1 });
      // expect(await userWithId.save()).toEqual({
      //   code: 'SUCCESSFUL_SAVE',
      //   message: 'Successfully updated a user',
      // });
    });
  });
});
