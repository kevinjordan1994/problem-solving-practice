//my method

function bubbleSort(array) {
  let sortedArray = array;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < array.length; j++) {
      let first = j;
      let second = j + 1;
      if (sortedArray[first] > sortedArray[second]) {
        let temp = sortedArray[first];
        sortedArray[first] = sortedArray[second];
        sortedArray[second] = temp;
      }
    }
  }
  return sortedArray;
}

module.exports = bubbleSort;

bubbleSort([33, 2, 76, 1, 666, 90, 12, 13]);

/*Bubble sort logic
First, look at the first two values
[90, 34, 56, 2, 33]
0     1
Determine if value 1 is greater than value 2, if it is swap them
90 is greater than 34 so new array wil be
[34, 90, 56, 2, 33]
repeat with next two numbers and so on
[34, 90, 56, 2, 33]
      1   2 
Eventually the largest number will be moved to the end
[34, 56, 2, 33, 90]
repeat these steps for each index in the array*/
