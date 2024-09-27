function getInputs() {
  const inputs = [
    { question: "Enter your name.", key: "name" },
    { question: "Enter your age.", key: "age" },
    { question: "Enter your present status.", key: "presentState" },
    { question: "Enter your desired status.", key: "desireState" },
    { question: `Why do you want to move from ?`, key: "reason" },
    { question: "Is the goal to be measurable? (yes/no)", key: "measurable" },
    {
      question: "Is the goal personal desire or a suggestion?",
      key: "meaningful",
    },
    {
      question: "Is the idea of becoming realistic and achievable? (yes/no)",
      key: "achievable",
    },
    { question: "Enter a deadline to accomplish your goal.", key: "deadLine" },
    { question: "State a line of responsibility.", key: "responsibility" },
    {
      question: "Write a burning motivation to reach your goal.",
      key: "yearning",
    },
    {
      question: "Provide proof that indicates you are on the right path.",
      key: "evidence",
    },
    {
      question: "Do you have control over your actions? (control/external)",
      key: "control",
    },
    {
      question: "Who is your role model? Describe how they guide you.",
      key: "roleModel",
    },
    { question: "Make plans A, B, C, D for adaptability.", key: "flexibility" },
    {
      question: "How does your goal fit into your overall environment?",
      key: "ecology",
    },
  ];

  const responses = {};
  for (let input of inputs) {
    let answer;
    do {
      answer = prompt(
        input.question.replace("?", responses[input.key - 1] || "")
      );
    } while (!answer);
    responses[input.key] = answer;
  }
  const results = `
    
        <h2>Your Input Summary</h2>
        ${Object.entries(responses)
          .map(
            ([key, value]) => `
            <p><strong>${
              key.charAt(0).toUpperCase() +
              key.slice(1).replace(/([A-Z])/g, " $1")
            }:</strong> ${value}</p>
        `
          )
          .join("")}
    `;

  document.getElementById("results").innerHTML = results;
  document.getElementById("results").style.display = "block";
}

window.onload = function () {
  const audio = document.getElementById("myAudio");
  audio.play();
};
