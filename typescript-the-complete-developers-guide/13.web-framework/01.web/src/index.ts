console.log('Web Framework!');
import axios from 'axios';
import { User } from './modules/user/User';

// const user = new User({ name: 'Dustin', age: 20 });
// axios.post('http://localhost:3000/users', user);

async function runFetch() {
  const user = new User({ id: 1 });
  console.log(user, 'user 1');
  const res = await user.fetch();
  console.log(res);
}

async function runSaveUpateUser() {
  const user = new User({ id: 1 });
  user.set({ name: 'Zag ' });
  await user.save();
}
// runSaveUpateUser();

async function runSaveNewUser() {
  const user = new User({ name: 'Dustin' });
  await user.save();
}
// runSaveNewUser();
// run();
