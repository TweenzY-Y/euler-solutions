function fibonacci(index) {
  if (index === 1) return 1;
  if (index === 2) return 2;
  return fibonacci(index - 1) + fibonacci(index - 2);
}

const MAX_VALUE = 4_000_000;
const values = [];

let index = 1;
let value = 0;

do {
  value = fibonacci(index);
  if (value % 2 === 0) {
    values.push(value);
  }
  index++;
} while (value <= MAX_VALUE);

console.log(values.reduce((prev, a) => prev + a));
