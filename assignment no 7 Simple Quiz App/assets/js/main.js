const questions = [
  "HTML ka full form kya hai?",
  "Kaun si CSS property text ka color change karne ke liye use hoti hai?",
  "HTML main images ko web page par display karne ke liye kaun si tag use hoti hai?",
  "CSS main elements ko horizontally center karne ke liye kaun si property use hoti hai?",
  "Kaun si tag HTML main headings create karne ke liye use hoti hai?",
];

const correctAnswers = [
  "Hypertext Markup Language",
  "color",
  "img",
  "text align",
  "h1 to h6",
];

let score = 0;
let wrongAnswers = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(questions[i]);
  if (userAnswer.toLowerCase() === correctAnswers[i].toLowerCase()) {
    score++;
  } else {
    wrongAnswers++;
  }
}

let grade;
if (score === 5) {
  grade = "A (Wah bhai, tum toh HTML/CSS ke master ho!)";
} else if (score >= 3) {
  grade = "B (Good job! Thoda aur practice karo)";
} else if (score >= 1) {
  grade = "C (Chalo try acha tha, lekin aur seekhna padega)";
} else {
  grade = "F (Bhai, ab thoda HTML aur CSS padh lo)";
}

alert(
  "Tumne " +
    score +
    " out of 5 sahi diye. Ghalat jawab: " +
    wrongAnswers +
    ". Tumhara grade: " +
    grade
);
