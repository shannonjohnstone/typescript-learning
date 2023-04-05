import axios from 'axios';
import { Attributes } from '../attributes/Attributes';
import { Eventing } from '../eventing/Eventing';
import { SyncApi } from '../sync/SyncApi';
import { User, UserProps } from './User';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('User', () => {
  describe('Given a user is created', () => {
    test('Then use get to retrived valid user data', () => {
      const user = User.create({ name: 'Dustin', age: 30 });

      expect(user.get('name')).toEqual('Dustin');
      expect(user.get('age')).toEqual(30);
      // @ts-ignore
      expect(user.get('cake')).toEqual(undefined);
    });
  });

  describe('Given a user is created', () => {
    describe('And user data is set', () => {
      test('Then use get to retrived valid user data', () => {
        const user = User.create({ name: 'Dustin', age: 30 });
        user.set({ name: 'Zag' });

        expect(user.get('name')).toEqual('Zag');
        expect(user.get('age')).toEqual(30);
      });
    });
  });

  describe('Given an event is added', () => {
    test('Then the event should be added', () => {
      const user = User.create({});
      const clickFunction = () => 'yes';
      user.on('click', clickFunction);
      expect(user.eventsList).toEqual({ click: [clickFunction] });
    });
  });

  describe('Given an event is added', () => {
    test('Then the event should trigger', () => {
      const user = User.create({});
      const mockEvent = jest.fn();

      user.trigger('click');

      user.on('click', mockEvent);
      user.trigger('click');

      expect(mockEvent).toHaveBeenCalled();
    });
  });

  describe('Given a valid user is fetched', () => {
    test('Then return that user data', async () => {
      const userData = { name: 'TestUser', id: 1 };

      const fetchMock = jest.fn().mockImplementation(() => 1);

      const user = new User(
        new Attributes<UserProps>(userData),
        new Eventing(),
        {
          ...new SyncApi<UserProps>('http://localhost:3000/users'),
          fetch: fetchMock,
        },
      );

      await user.fetch();

      expect(fetchMock).toHaveBeenCalled();
    });
  });

  describe('Given valid user data is used to save', () => {
    test('Then it should save successfully', async () => {
      mockedAxios.get = jest.fn();
      mockedAxios.post = jest.fn();

      const userData = { name: 'TestUser' };
      const user = User.create(userData);
      await user.save();

      expect(mockedAxios.post).toHaveBeenCalled();
      const userDataUpdated = { ...userData, id: 1 };

      const saveMock = jest.fn().mockResolvedValue(() => userDataUpdated);

      const userWithId = new User(
        new Attributes<UserProps>(userDataUpdated),
        new Eventing(),
        {
          ...new SyncApi<UserProps>('http://localhost:3000/users'),
          save: saveMock,
        },
      );
      await userWithId.save();
      expect(saveMock).toHaveBeenCalled();
    });
  });
});
