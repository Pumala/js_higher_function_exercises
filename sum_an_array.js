// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

var nums = [1, 2, 3, 4, 5];

var sum = nums.reduce(function(num1, num2) {
  return num1 += num2;
}, 0);

console.log(sum);
