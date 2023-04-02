console.log('Web Framework!');
import { User } from './modules/user/User';

const user = new User({ name: 'Shannon', age: 30 });

console.log(user.get('name'), user.get('age'));
