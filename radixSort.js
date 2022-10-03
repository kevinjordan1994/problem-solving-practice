const getDigit = (number, digit) => {
  const splitNumbers = Math.abs(number).toString().split("");
  const digitIndex = splitNumbers.length - 1 - digit;
  if (digitIndex < 0) return 0;
  return +splitNumbers[digitIndex];
};

const digitCount = (number) => {
  return Math.abs(number).toString().length;
};

const getHighestDigitNumber = (arrayOfNumbers) => {
  let highestDigit = 1;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    highestDigit = Math.max(highestDigit, digitCount(arrayOfNumbers[i]));
  }
  return highestDigit;
};

function radixSort(arrayOfNumbers) {
  const highestDigitCount = getHighestDigitNumber(arrayOfNumbers);
  for (let i = 0; i < highestDigitCount; i++) {
    const numberBuckets = [...Array(10)].map((a) => Array());
    arrayOfNumbers.forEach((number) => {
      numberBuckets[getDigit(number, i)].push(number);
    });
    arrayOfNumbers = [].concat.apply([], numberBuckets);
  }
  return arrayOfNumbers;
}

radixSort([1, 89, 3, 900]);
console.log(radixSort([34, 56, 1223, 67, 8, 90, 2376]));
