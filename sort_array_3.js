// INCOMPLETE - WILL RETURN

// Given an array of array of numbers like:

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ]

function sum(arr) {
  return arr.reduce(function(currSum, num) {
    return currSum + num;
  });
}

function compare(arr1, arr2) {
  return sum(arr1) - sum(arr2);
}

console.log(arr.sort(compare));

// var sortedNumRow = arr.sort
