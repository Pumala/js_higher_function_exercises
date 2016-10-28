// Implement a forEach function which takes two arguments: an array arr and a function fun.
// It will call fun passing each item in arr to fun as the first argument. Example:

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }];
// forEach(arr, function(person) {
//   console.log('Hello, ' + person.name + '!');
// });
// The above program will print:
//
// Hello, Bob!
// Hello, Alice!
// Hello, Joe!
// You can use a loop in the implementation of this function.

// var greeting = arr.forEach(function(arr, fun) {
//   console.log("Hello, " + arr.name + "!");
// });

var names = ["Mika", "Sasha", "Paulina"];

function greetPerson(name) {
  console.log("Hello, " + name + "!");
}

var greetings = names.map(function(a) {
  return greetPerson(a);
});





// greetPerson(names.map(function(a) {
//   return greetPerson(a);
// }));

// console.log(greetings);



// var names = ["Mika", "Sasha", "Paulina"];
//
// function greetPerson(name) {
//   console.log("Hello, " + name.map(function(a) {
//     return a;
//   }) + " !");
// }
//
// greetPerson(names);




//
// var greeting = names.forEach(function(names, fun) {
//   fun(arr);
// });
//
// var greetPerson = function(name) {
//   console.log("Hello, " + name + "!");
// };
//
//
//
//
//
//
//
