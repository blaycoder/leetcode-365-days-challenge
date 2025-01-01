// counter with increment, decrement and reset methods
let createCounter = function (init) {
  let currentVal = init ;
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

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

const counterOne = createCounter(0);
console.log(counterOne.increment());
console.log(counterOne.increment());
console.log(counterOne.decrement());
console.log(counterOne.reset());
console.log(counterOne.reset());
