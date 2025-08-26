const number = 600_851_475_143;

function getLargestPrimeFactor(num) {
  let half = Math.ceil(num / 2);
  const factors = [];
  for (let i = 1; i < half; i++) {
    if (num % i === 0 && isPrime(i)) {
      factors.push(i);
      half = Math.ceil(half / 2) + 1;
      console.log(half);
    }
  }
  return factors;
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(getLargestPrimeFactor(number));
