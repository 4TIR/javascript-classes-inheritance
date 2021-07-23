import IntBuilder from "./intbuilder.mjs";
import StringBuilder from "./stringbuilder.mjs";

let newInt = new IntBuilder(10);
newInt
  .plus(2, 3, 2) // 17;
  .minus(1, 2) // 14;
  .multiply(2) // 28;
  .divide(4) // 7;
  .mod(3) // 1;
  .get();
console.log(newInt);

let strBuilder = new StringBuilder("Hello");
strBuilder
  .plus(" all", "!")
  .minus(4)
  .multiply(3)
  .divide(4)
  .remove("l")
  .sub(1, 1)
  .get();
console.log(strBuilder);
