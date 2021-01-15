class ArgsHandler {
  #capturedArgs; // { name: () => root.args.name }

  constructor(capturedArgs) {
    this.#capturedArgs = capturedArgs;
  }

  get(_target, propName, _receiver) {
    const ref = this.#capturedArgs[propName];
    if (ref) {
      return ref();
    }

    return undefined;
  }

  set(_target, propName) {
    throw new Error(`${propName} can't be set! NO SETTING ARGS!`);
  }
}

export function argsProxyFor(capturedArgs) {
  const target = Object.create(null);
  const handler = new ArgsHandler(capturedArgs);
  return new Proxy(target, handler);
}
