// expects any type is ok , except null and undefined
test('any thing', () => {
  expect(1).toEqual(expect.anything());
  expect('string').toEqual(expect.anything());
  expect({}).toEqual(expect.anything());
  expect([]).toEqual(expect.anything());
  expect(() => {}).toEqual(expect.anything());
  expect(null).not.toEqual(expect.anything());
  expect(undefined).not.toEqual(expect.anything());
  let x;
  expect(x).not.toEqual(expect.anything());
})


// expect.any(constructor)
test('any constructor', () => {
  expect(1).toEqual(expect.any(Number));
  expect('string').toEqual(expect.any(String));
  expect({}).toEqual(expect.any(Object));
  expect([]).toEqual(expect.any(Array));
  expect(() => {}).toEqual(expect.any(Function));
})

// expect.arrayContaining(array)
test('array containing', () => {
  expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2, 3]));
  expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 2, 1]));
  expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
})