function memoize(fn) {
  let called = false;
  let prevArgs = [];
  let cachedResult;

  return function (...args) {
    if (
      called &&
      prevArgs.length === args.length &&
      prevArgs.every((value, index) => value === args[index])
    ) {
      console.log("Result is cached");
      return cachedResult;
    } else {
      called = true;
      prevArgs = [...args];
      cachedResult = fn(...args);
      return cachedResult;
    }
  };
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
console.log(memoizedSum(2, 2));
console.log(memoizedSum(2, 2));
console.log(memoizedSum(1, 2));

// const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// console.log(memoFactorial(3));
