`use strict`;

function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpTwo(n) {
  return (n * (n + 1)) / 2;
}

//CHECKING TO SEE WHICH OF THESE FUNCTIONS PERFORMS FASTER
// const t1 = performance.now();
// addUpTo(1000000000);
// const t2 = performance.now();
// console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

const t1 = performance.now();
addUpTwo(1000000000);
const t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

//Big O Notation - Describes how the runtime of an algorithm grows as the inputs grow.
//The addUpTo function has a Big O of O(n) because it's number of operations is based on the n variable (due to the loop).
//The addUpTwo function has a Big O of O(1) because it has a constant number of operations no matter the size of n (3 which we simplify down to 1, all constant values can be simplified to 1 in Big O notation).
