// 1

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

//2

const createCounter = (one) => {
  return {
    increment: count => count + one,
    decrement: count => count - one,
  };
};
let result = createCounter(1);
console.log(result.increment(7));
console.log(result.decrement(7));

//3

const factorial = (x) => {
  if (x > 1) {
      return x * factorial(x - 1);
  } else {
      return 1;
  }
};
console.log(factorial(5));
console.log(factorial(0));