// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

var arr = [5, 8, 4, 7, 9];

var squareNumList = arr.map(function (a) { return a * a;});

console.log(squareNumList);
