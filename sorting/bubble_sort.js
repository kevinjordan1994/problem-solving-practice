//my method

function bubbleSort(array) {
  let sortedArray = array;
  //This numOfLoops variable prevents unnecessary loops.
  let numOfLoops = array.length - 1;
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < numOfLoops; j++) {
      let first = j;
      let second = j + 1;
      if (sortedArray[first] > sortedArray[second]) {
        let temp = sortedArray[first];
        sortedArray[first] = sortedArray[second];
        sortedArray[second] = temp;
      }
    }
    numOfLoops--;
  }
  return sortedArray;
}

module.exports = bubbleSort;

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

//optimized version

module.exports = function optimizedBubbleSort(array) {
  let sortedArray = array;
  for (let i = array.length; i > 0; i--) {
    let done = true;
    for (let j = 0; j < i - 1; j++) {
      let first = j;
      let second = j + 1;
      if (sortedArray[first] > sortedArray[second]) {
        let temp = sortedArray[first];
        sortedArray[first] = sortedArray[second];
        sortedArray[second] = temp;
        done = false;
      }
    }
    if (done) {
      return sortedArray;
    }
  }
  return sortedArray;
};

/*Big O Notation: Best case is O of n, Worst case is O of n squared (nested loops)*/
