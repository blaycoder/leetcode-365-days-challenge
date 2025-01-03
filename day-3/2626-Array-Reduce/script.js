let reduce = function (nums, fn, init) {
  let acc = init;
  if (nums.length >= 1) {
    for (let i = 0; i < nums.length; i++) {
      if (fn.length === 0) acc = fn();
      else if (fn.length === 1) acc = fn(nums[i]);
      else if (fn.length === 2) acc = fn(acc, init, nums[i]);
      acc = fn(acc, nums[i]);
    }
    return acc;
  } else {
    return init;
  }
};

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;
console.log(reduce(nums, fn, init));
