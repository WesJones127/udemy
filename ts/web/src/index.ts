import { User, UserProps } from "./models/User";
import axios, { AxiosResponse } from "axios";
import { Collection } from "./models/Collection";
import { UserEdit } from "./views/UserEdit";

const user = User.buildUser({ name: "Name", age: 20 });
const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, user);

  userEdit.render();
} else {
  throw new Error("root element not found");
}
