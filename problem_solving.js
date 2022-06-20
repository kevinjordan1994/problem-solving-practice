`use strict`;

function same(arr1, arr2) {
  const arrSqrd = arr1.sort((a, b) => a - b).map((num) => num * num);
  const arr2Sorted = arr2.sort((a, b) => a - b);
  return arrSqrd.every((num, i) => (num === arr2Sorted[i] ? true : false));
}

// console.log(same([1, 2, 3], [4, 1, 9]));
// console.log(same([1, 2, 3], [4, 4, 9]));

function sumZero(arr) {
  if (arr !== arr.sort((a, b) => a - b)) {
    console.error(`This function requires a sorted array!`);
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i]) === arr[arr.length - i - 1]) {
      return [arr[i], Math.abs(arr[i])];
    }
  }
  return null;
}

// console.log(sumZero([-1, 0, 1]));
// console.log(sumZero([-3, -2, -1, 0, 1]));

function maxSubarraySum(arr, num) {
  let maxNum = 0;
  let tempNum = 0;
  if (num > arr.length) return null;
  //Add the first num value in the array.
  for (let i = 0; i < num; i++) {
    tempNum += arr[i];
  }
  maxNum = tempNum;
  //Create the window
  for (let i = num; i < arr.length; i++) {
    tempNum -= arr[i - num];
    tempNum += arr[i];
    if (tempNum > maxNum) maxNum = tempNum;
  }
  return maxNum;
}

console.log(maxSubarraySum([1, 2, 3, 4, 5], 3));
