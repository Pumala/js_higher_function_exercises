function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var result = '';
  for (var i = 0; i < text.length; i++) {
    var chr = text[i];
    var idx = alphabet.indexOf(chr.toUpperCase());
    var newIdx = idx + 13;
    if (newIdx >= alphabet.length) {
      newIdx -= 26;
    }
    result += alphabet[newIdx];
  }
  return result;
}

// You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
var encrypted = cipher('GENIUS');

console.log(encrypted);

function cipher(text) {
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  text = text.split("");
  var result = "";
  var words = text.map(function(char) {
    var index = alphabet.indexOf(char.toUpperCase());
    var newIndex = index + 13;
    if (newIndex >= alphabet.length) {
      newIndex -= 26;
    }
    return alphabet[newIndex];
  });
  console.log(words.join(""));
}

cipher("GENIUS");
