// counter with increment, decrement and reset methods
let createCounter = function (init) {
  let currentVal = init;
  return {
    increment: () => {
      return ++currentVal;
    },
    decrement: () => {
      return --currentVal;
    },
    reset: () => {
      return (currentVal = init);
    },
  };
};
