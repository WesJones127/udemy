import { User } from "./models/User";

const user = new User({ name: "new record", age: 11 });
// user.fetch();

// setTimeout(() => {
//   console.log(user);
// }, 1000);

user.save();
