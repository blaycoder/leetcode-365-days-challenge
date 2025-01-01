let expect = function (val) {
  return {
    toBe: function (val1) {
      if (val === val1) {
        return true;
      }
      throw new Error("Not Equal");
    },
    notToBe: function (val2) {
      if (val !== val2) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

console.log(expect(5).notToBe(5));
