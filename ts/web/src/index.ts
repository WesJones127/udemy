import { User } from './models/User';

const user = new User({ name: 'new record', age: 11 });

user.events.on('change', () => {
  console.log('change');
});

// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 1000);

user.events.trigger('change');
