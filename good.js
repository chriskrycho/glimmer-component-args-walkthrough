import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class Good extends Component {
  @tracked count = 0;

  #count;
  get count() {
    HEY_TEMPLATE_LAYER_I_GOT_USED("Good.count");
    return this.#count;
  }

  set count(value) {
    HEY_TEMPLATE_LAYER_I_GOT_SET_SO_PLEASE_RERENDER_ANYTHING_WHICH_USES_ME(
      "Good.count"
    );
    this.#count = value;
  }

  increment = () => {
    this.count++;
  };
}
