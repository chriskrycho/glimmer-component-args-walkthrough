export default class Component {
  #args;
  get args() {
    return this.#args;
  }

  constructor(args) {
    this.#args = args;
  }
}
