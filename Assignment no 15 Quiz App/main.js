let currentQuestion = 0;
let score = 0;

const questions = [
  {
    question: "What does DOM stand for?",
    options: [
      "Data Object Module",
      "Direct Object Method",
      "Dynamic Object Memory",
      "Document Object Model",
    ],
    answer: "Document Object Model",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Oracle", "Google"],
    answer: "Netscape",
  },
  {
    question:
      "Which method is used to add an element to an array in JavaScript?",
    options: ["append()", "add()", "push()", "insert()"],
    answer: "push()",
  },
];

function startQuiz() {
  document.getElementById("home").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  displayQuestion();
}

function displayQuestion() {
  const question = questions[currentQuestion];
  document.querySelector("#quiz h2").textContent = `Question ${
    currentQuestion + 1
  }: ${question.question}`;
  const optionsHtml = question.options
    .map(
      (option) =>
        `<label><input type="radio" name="answer" value="${option}"> ${option}</label>`
    )
    .join("");
  document.getElementById("options").innerHTML = optionsHtml;
}

function nextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) return;

  const answer = selectedOption.value;
  if (answer === questions[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById(
    "score"
  ).textContent = `You scored ${score} out of ${questions.length}`;
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const themeIcon = document.getElementById("themeIcon");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("score").textContent = "";
}
