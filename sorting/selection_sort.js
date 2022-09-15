function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let min = array[i];
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < min) {
        min = array[j];
        indexOfMin = j;
      }
    }
    array[indexOfMin] = array[i];
    array[i] = min;
  }
  return array;
}

function optimizedSelectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let temp = array[i];
      array[i] = array[indexOfMin];
      array[indexOfMin] = temp;
      console.log(array);
    }
  }
  return array;
}

console.log(optimizedSelectionSort([0, 1, 44, 51, 23, 678, 90]));

module.exports = selectionSort;

/*PsudeoCode
We start by looping through the array
[3, 5, 1, 2]
i   j
set a variable "min" to array[i] in the outer loop
min = 3 in this case
create an inner loop starting j at i + 1
compare array[j] to min
if 3 > 5
since 3 is already less than 5, we do nothing here
[3, 5, 1, 2]
i       j
now j is at one which is smaller than 3 so we set min to 1
min = array[j] (1) 
set a variable to save the index we need to swap to
savedIndex = j (2)
we loop one more time but one ends up being the smallest so we swap it with array[i]
let temp = array[i] (3)
array[i] = min (1)
array[savedIndex] = temp (3)

so now the array should look like this
[1, 5, 3, 2]
    i  j*/
