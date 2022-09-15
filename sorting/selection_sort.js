function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    console.log(array);
  }
}

selectionSort([1, 34, 5, 66, 777, 90, 0, 44, 32]);
