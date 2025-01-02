let map = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn.length === 1) {
      newArr.push(fn(arr[i]));
    }
    else if (fn.length === 0) {
      newArr.push(fn());
    } else {
      newArr.push(fn(arr[i], i));
    }
  }
  return newArr;
};

function plusone(num) {
  return num + 1;
}

function plusI(n, i) {
  return n + i;
}

function constant() {
  return 42;
}

const arrNum = [1, 2, 3];
console.log(map(arrNum, plusone));

console.log(map(arrNum, plusI));
console.log(map(arrNum, constant));

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// // The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
