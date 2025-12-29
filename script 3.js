const quiz = [
  {
    question: "What is 2 + 3?",
    answers: ["3", "4", "5"],
    correct: "5"
  },
  {
    question: "What is the capital of India?",
    answers: ["Rome", "Madrid", "Delhi"],
    correct: "Delhi"
  }
];

let index = 0;
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  const q = quiz[index];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(answer);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(answer) {
  if (answer === quiz[index].correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

nextBtn.onclick = () => {
  index++;
  if (index < quiz.length) {
    showQuestion();
  } else {
    questionEl.textContent = "Quiz complete!";
    answersEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
};

showQuestion();
