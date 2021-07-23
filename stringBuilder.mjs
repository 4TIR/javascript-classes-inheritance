import Builder from "./baseBuilder.mjs";

export default function StringBuilder() {
  return Reflect.construct(Builder, arguments, StringBuilder);
}

Reflect.setPrototypeOf(StringBuilder.prototype, Builder.prototype);

Reflect.setPrototypeOf(StringBuilder, Builder);

StringBuilder.prototype.plus = function (...args) {
  this.value += args.reduce((sum, current) => sum + current, "");
  return this;
};

StringBuilder.prototype.minus = function (...args) {
  let n = args[0];
  this.value = this.value.slice(0, -n);
  return this;
};

StringBuilder.prototype.multiply = function (n) {
  this.value = this.value.repeat(n);
  return this;
};

StringBuilder.prototype.divide = function (n) {
  var k = Math.floor(this.value.length / n);
  this.value = this.value.substring(0, k);
  return this;
};
