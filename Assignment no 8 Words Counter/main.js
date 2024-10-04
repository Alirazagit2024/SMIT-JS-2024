let userInput = prompt("Plz enter a sentence and count words");
alert("Total Sentence:-" + "\n" + userInput);
let totalWords = userInput.split(" ");
let wordCount = 0;

for (let i = 0; i < totalWords.length; i++) {
  if (totalWords[i] !== "");
  {
    wordCount++;
  }
}
alert("Total Words:-" + "\n" +wordCount);
