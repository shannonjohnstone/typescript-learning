console.log('Web Framework!');
import { User } from './modules/models/User';
import { UserForm } from './views/UserForm';
// import { Collection } from './modules/models/Collection';

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
  const user = User.create({ name: 'Dustin' });
  await user.save();
}
// runSaveNewUser();
// run();

async function runCollection() {
  const userCollection = User.createCollection();

  await userCollection.fetch();
  console.log(userCollection.models);
}

// runCollection();
function runApp() {
  const appRoot = document.getElementById('app') as HTMLElement;
  const user = User.create({ name: 'Dustin' });
  const userForm = new UserForm(appRoot, user);
  userForm.render();
}

runApp();
