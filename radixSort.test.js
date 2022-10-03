const identifyDigit = require(`./radixSort`);

test(`Return correct digit from a number`, () => {
  expect(identifyDigit(34561, 3).toEqual(5));
});
