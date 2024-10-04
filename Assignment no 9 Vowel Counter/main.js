let word = prompt("Enter word and check vowel or not");
convert = word.toLocaleLowerCase();
alert("All the alphabets have been converted to lowercase:-"+"\n"+convert)
let vowel = ["a", "e", "i", "o", "u"];
vowelCount = 0;
for (let i = 0; i < convert.length; i++)
  for (let j = 0; j < vowel.length; j++) {
    if (convert[i] === vowel[j]) vowelCount++;
  }
alert("Vowels:-"+"\n"+vowelCount);
