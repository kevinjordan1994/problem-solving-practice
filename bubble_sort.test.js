const bubbleSort = require("./bubble_sort");

test("Correctly sorts numbers in an array", () => {
  expect(bubbleSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  expect(bubbleSort([33, 2, 768, 11230, 22, 4, 1])).toStrictEqual([
    1, 2, 4, 22, 33, 768, 11230,
  ]);
  expect(bubbleSort([-1, 1, 0])).toStrictEqual([-1, 0, 1]);
});
