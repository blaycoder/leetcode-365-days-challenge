// Write a function argumentsLength that returns the count of arguments passed to it.

let argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength({}, null, "3"));
