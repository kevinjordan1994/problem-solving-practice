const bubbleSort = require("./bubble_sort");
const optimizedBubbleSort = require("./bubble_sort");

test("Correctly sorts numbers in an array", () => {
  expect(bubbleSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  expect(bubbleSort([33, 2, 768, 11230, 22, 4, 1])).toStrictEqual([
    1, 2, 4, 22, 33, 768, 11230,
  ]);
  expect(bubbleSort([-1, 1, 0])).toStrictEqual([-1, 0, 1]);
});

test("Check if optimized bubble sort works", () => {
  expect(optimizedBubbleSort([23, 45, 2, 3, 555])).toStrictEqual([
    2, 3, 23, 45, 555,
  ]);
});
