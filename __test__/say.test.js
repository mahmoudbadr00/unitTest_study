const say = require('../say');

test("say jest message", () => {
    expect(say()).toBe("Goodbye, World!");
});
// This test checks if the say function returns the expected message.