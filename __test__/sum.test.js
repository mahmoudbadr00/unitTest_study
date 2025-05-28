const theSum = require('../sum');

// test(name, fn, timeout)
// it(name, fn, timeout)

test("sum function", () => {
    expect(theSum(1)).toBe(1);
    expect(theSum(2)).toBe(2);
    expect(theSum(3)).toBe(3);
    expect(theSum(4)).toBe(4);
    expect(theSum(5)).toBe(5);
});
test("sum function with negative numbers", () => {
    expect(theSum(-1)).toBe(-1);
    expect(theSum(-2)).toBe(-2);
    expect(theSum(-3)).toBe(-3);
    expect(theSum(-4)).toBe(-4);
    expect(theSum(-5)).toBe(-5);
});
test("sum function with zero", () => {
    expect(theSum(0)).toBe(0);
});

test("sum function 2 numbers", () => {
    expect(theSum(1 , 2)).toBe(3);
    expect(theSum(2 , 3)).toBe(5);
    expect(theSum(3 , 4)).toBe(7);
    expect(theSum(4 , 5)).toBe(9);
    expect(theSum(5 , 6)).toBe(11);
});

test("return 0 if no number", () => {
    expect(theSum()).toBe(0);
});