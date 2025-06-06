const mocker = require('../mock');

test('mock function', () => {
  // implement mock function
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker('John')).toBe('Hello John');
  expect(mocker('emma')).toBe('Hello emma');
  expect(mocker).toHaveBeenCalled(); // check if the function has been called
  expect(mocker).toHaveBeenCalledTimes(2); // check if the function has been called twice
  expect(mocker).toHaveBeenCalledWith('John'); // check if the function has been called with 'John'
  expect(mocker).toHaveBeenLastCalledWith('emma'); // check if the function has been called with 'emma'
  expect(mocker.mock.calls).toEqual([['John'], ['emma']]); // check if the function has been called with 'John' and 'emma'
})
