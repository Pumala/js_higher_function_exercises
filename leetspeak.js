var charDict = {
  A: "4",
  E: "3",
  G: "6",
  I: "1",
  O: "0",
  S: "5",
  T: "7"
};

function mapChar(char) {
  return charDict[char.toUpperCase()] || char;
}

function leetSpeak(phrase) {
  return phrase.split("").map(mapChar).join("");
}

console.log(leetSpeak("leet"));
