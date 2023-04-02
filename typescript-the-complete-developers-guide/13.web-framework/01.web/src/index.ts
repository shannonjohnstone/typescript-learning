console.log('Web Framework!');
import { User } from './modules/user/User';

const user = new User({ name: 'Shannon', age: 30 });

console.log(user.get('name'), user.get('age'));

user.on('change', () => {
  console.log('Change 1');
});
user.on('change', () => {
  console.log('Change 2');
});

user.trigger('change');
