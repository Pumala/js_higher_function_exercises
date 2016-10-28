// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times.


function call3Times(times, fun) {
  counter = 0
  while (counter < times) {
    fun();
    counter++;
  }
}

var hello = function() {
  console.log("Hello, world!");
}

call3Times(5, hello);
