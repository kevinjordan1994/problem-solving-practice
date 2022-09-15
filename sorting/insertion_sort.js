function insertionSort(arr) {
  const swap = (array, ind1, ind2) => {
    let temp = array[ind1];
    array[ind1] = array[ind2];
    array[ind2] = temp;
  };

  for (let i = 1; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[smallestIndex]) {
        swap(arr, j, smallestIndex);
        smallestIndex = j;
      }
    }
  }
  return arr;
}

console.log(insertionSort([89, 34, 22]));
console.log(insertionSort([0, 1, -1, 34, 5]));

function optimizedInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    //We have to use var for this line to work
    arr[j + 1] = currentValue;
  }
  return arr;
}

optimizedInsertionSort([1, 5, 2, 45, 78, 9]);
