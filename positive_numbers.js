// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

var arr = [-15, 8, -4, 11, 9];

var postitiveNumList = arr.filter(function (a) { return a > 0;});

console.log(postitiveNumList);
