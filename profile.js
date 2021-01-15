import Component from "./component.js";

/** { name, age } */
export default class Profile extends Component {
  get description() {
    return `${this.args.name} is ${this.args.age} years old!`;
  }
}
