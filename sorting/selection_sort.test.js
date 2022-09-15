const selectionSort = require("./selection_sort");

test("Check if 0 1 -1 can be sorted", () => {
  expect(selectionSort([0, 1, -1])).toStrictEqual([-1, 0, 1]);
});

test("Check if 77, 3, 406, 8.23 can be sorted", () => {
  expect(selectionSort([77, 3, 406, 8.23])).toStrictEqual([3, 8.23, 77, 406]);
});
