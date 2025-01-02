// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

// Please solve it without the built-in Array.filter method.

let filter = function (arr, fn) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn.length === 1) {
      if (fn(arr[i]) === true) {
        filteredArr.push(arr[i]);
      } else if (fn(arr[i]) != 0) {
        filteredArr.push(arr[i]);
      }
    } else {
      if (fn(arr[i], i) === true || fn(arr[i], i)) {
        filteredArr.push(arr[i]);
      }
    }
  }
  return filteredArr;
};

const arrNum = [0, 10, 20, 30];
function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

const arrOne = [-2, -1, 0, 1, 2];
const arrFirstIndex = [1, 2, 3];
console.log(filter(arrFirstIndex, firstIndex));

console.log(filter(arrNum, greaterThan10));
console.log(filter(arrOne, plusOne));
