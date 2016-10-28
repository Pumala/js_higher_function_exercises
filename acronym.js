// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

var word_list = ["very", "important", "person"];

var acronym = word_list.reduce(function(combined, currWord) {
  return combined += currWord[0].toUpperCase();
}, "");

console.log(acronym);
