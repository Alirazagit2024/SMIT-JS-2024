const questions = [
  {
    question: "What is the maximum number of overs in an ODI match?",
    answer: "50 overs per side",
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    answer: "Sachin Tendulkar",
  },
  { question: "What is the length of a cricket pitch?", answer: "22 yards" },
  {
    question: "What does LBW stand for in cricket?",
    answer: "Leg Before Wicket",
  },
  {
    question: "Which country won the first-ever Cricket World Cup?",
    answer: "West Indies",
  },
];

let questionEl = document.getElementById("question");
let answerEl = document.getElementById("answer");
let timerEl = document.getElementById("timeChange");
let startBtn = document.getElementById("start");
let showAnswerBtn = document.getElementById("show-answer");
let nextQuestionBtn = document.getElementById("next-question");
let restart = document.getElementById("restart");
let audio = document.getElementById("audio");

let currentIndex = 0;
let timerInterval;
let timeLeft = 10;

// Start Button
startBtn.addEventListener("click", function () {
  if (currentIndex < questions.length) {
    timeLeft = 10;
    timerEl.innerHTML = `${timeLeft}`;
    questionEl.innerHTML =
      `<strong>Question:</strong>` + " " + questions[currentIndex].question;
    answerEl.classList.add("hidden");
    audio.currentTime = 0;
    audio.play();
    startTimer();
  } else {
    clearInterval(timerInterval);
    answerEl.classList.add("hidden");
    questionEl.innerHTML = "No more questions!";
  }
});

// Answer Button
showAnswerBtn.addEventListener("click", function () {
  if (currentIndex < questions.length) {
    answerEl.innerHTML =
      `<strong>Answer:</strong>` + " " + questions[currentIndex].answer;
    answerEl.classList.remove("hidden");
  }
});

// Time update Contdown
function updateTimer() {
  timerEl.innerHTML = ` ${timeLeft}`;
  if (timeLeft === 0) {
    currentIndex++;
    startBtn.click();
  } else {
    timeLeft--;
  }
}

// Time Start Function
function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 1000);
  audio.play();
}

// Restart Button
restart.addEventListener("click", function () {
  if (currentIndex >= questions.length) {
    currentIndex = 0;
    timeLeft = 10;
    timerEl.innerHTML = timeLeft;
    questionEl.innerHTML =
      `<strong>Question:</strong>` + " " + questions[currentIndex].question;
    answerEl.classList.add("hidden");
    startTimer();
  }
});
