import { argsProxyFor } from "./args-handler.js";
import Profile from "./profile.js";
import { TrackedArray } from "tracked-built-ins";

class User {
  @tracked name;
  @tracked age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Root {
  @tracked user = new User("Chris", 33);

  @tracked users = new TrackedArray();

  get tooManyUsers() {
    return this.users.length > 100;
  }

  addUser(newUser) {
    this.users.pushObject(newUser);
    this.users = this.users.concat(newUser);
  }

  updateUserName(newName) {
    this.user.name = newName;
  }
}

/*
 <Profile @name={{this.user.name}} @age={{this.user.age}} />
*/

/*
<p>{{this.description}}</p>
*/

let root = new Root();

let args = argsProxyFor({
  name: () => root.user.name,
  age: () => root.user.age,
});

let profile = new Profile(args);
console.log(profile.description);

root.user.name = "Christopher";
console.log(profile.description);
