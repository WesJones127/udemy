import { User, UserProps } from "./models/User";
import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";
import { UserForm } from "./views/UserForm";

const user = User.buildUser({ name: "Name", age: 20 });
const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error("root element not found");
}
