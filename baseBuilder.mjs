export default class Builder {
  constructor(value = "") {
    this.value = value;
  }
  
  plus(...args) {}

  minus(...args) {}

  multiply(n) {}

  divide(n) {}

  mod(n) {
    this.value = this.value % n;
    return this;
  }

  remove(str) {
    var re = new RegExp(str, "g");
    this.value = this.value.replace(re, "");
    return this;
  }

  sub(from, n) {
    this.value = this.value.substr(from, n);
    return this;
  }

  static random(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
  }

  get() {
    return this;
  }
}
