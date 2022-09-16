//Given an array of n length, return an array in which each i element is a product of all the other elements except itself

//Example [2, 3, 4] => [12, 8, 6]

function productOfOtherElements(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newElement = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        newElement *= arr[j];
      }
    }
    newArr.push(newElement);
  }
  return newArr;
}

console.log(productOfOtherElements([2, 3, 4]));
