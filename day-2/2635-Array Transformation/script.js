let map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return (newArr, newArr[i]);
};

function plusone(num) {
  return num + 1;
}

let arrNum = [1, 2, 3];

function plusI(n, i) {
  return n + i;
}

const newArray = map(arrNum, plusone);
// console.log(newArray);

const newArray1 = map(arrNum, plusI);
console.log(newArray1);

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// // The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
