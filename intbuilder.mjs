import Builder from "./baseBuilder.mjs";

export default class IntBuilder extends Builder {
  constructor(value = 0) {
    super(value);
  }

  plus(...args) {
    this.value += args.reduce((sum, current) => sum + current, 0);
    return this;
  }

  minus(...args) {
    this.value += args.reduce((sum, current) => sum - current, 0);
    return this;
  }

  multiply(n) {
    this.value = this.value * n;
    return this;
  }
  
  divide(n) {
    this.value = Math.floor(this.value / n);
    return this;
  }
}
