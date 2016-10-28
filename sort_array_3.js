// INCOMPLETE - WILL RETURN

// Given an array of array of numbers like:

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];

var arr1 = [2, 3, 4, 5]
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ]

// calculates the sum of each array
function getSum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}
// compares each array in the 2 dimensional array 
var compare = function compare(arr1, arr2) {
  return getSum(arr1) - getSum(arr2);
}

arr.sort(compare);

// iterates through each array in the 2 dimensional array
// var new_obj = [];
// var arrSums = arr.forEach(function(row) {
//   new_obj.push(getSum(row));
// });
//
// new_obj.sort(compare);

// arr.sort(compare);

// var arrSums = arr.forEach(function(row) {
//   return getSum(row);
// });

// arr.reduce(function(a, b) {
//   return arr.compare()
// });











//
// var new = [];
// var new_arr = arr.filter(function() {
//
// });












var new_obj = [];
var arrSums = arr.forEach(function(row) {
  new_obj.push(getSum(row));
  // console.log(getSum(row));
});
console.log(new_obj);




for (var row in arr) {
  getSum(row);
}

function getMap(arr) {
  return arr.map(function(a) {
   return a;
  });
}


function getSum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

console.log(getSum([2, 4, 6, 7]));








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

// compares and sorts the array in asc order
// function compare(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }

// var compare = new_obj.return arr.sort(function(a, b) {
//     return a - b;
//   });
// }


function compare(a, b) {
  return a - b;
}
