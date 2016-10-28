// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

var arr = [-15, 8, -4, 11, 9];

var evenNumList = arr.filter(function (a) { return a % 2 === 0;});

console.log(evenNumList);
