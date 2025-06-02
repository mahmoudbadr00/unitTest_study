const theSum = require("../sum");

// ONLY // skip
// test.only(name, fn, timeout) or describe.only(name, fn, timeout)
// it tests only what i write only on it
// rest of tests , describes are skipped if not called with .only() or .skip()

describe("sum function", () => {
  describe.only("when input is only one number", () => {
    test.only("sum function", () => {
      expect(theSum(1)).toBe(1);
    });
    test("sum function with negative numbers", () => {
      expect(theSum(-1)).toBe(-1);
    });
    test.skip("sum function with zero", () => {
      expect(theSum(0)).toBe(0);
    });
  });
});
