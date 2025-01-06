// Given two promises promise1 and promise2, return a new promise.
// promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

let addTwoPromises = async function (promise1, promise2) {
  let num1 = await promise1;
  let num2 = await promise2;
  return num1 + num2;
};

let promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
let promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));
addTwoNumbers(promise1, promise2).then((result) => console.log(result));
