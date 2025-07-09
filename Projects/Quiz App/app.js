const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Which HTML tag is used to define a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<button>"],
    answer: "<a>"
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "1997"],
    answer: "1995"
  }
];

const quest = document.querySelector("#quest");
const nextBtn = document.querySelector("#next");
const ul = document.querySelector("#options");

let indx = 0;
let score = 0;

function startQuiz() {
  indx = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestion();
}

function resetState() {
  nextBtn.style.display = "none";
  ul.innerHTML = ""; // Clear old options
}

function showQuestion() {
  resetState();

  let currentQuestion = questions[indx];
  let qNumber = indx + 1;
  quest.innerHTML = `${qNumber}. ${currentQuestion.question}`;

  currentQuestion.options.forEach(optionText => {
    const li = document.createElement("li");
    li.innerText = optionText;
    li.className = "option";

    li.addEventListener("click", () => {
      if (li.classList.contains("disabled")) return;

      if (li.innerText === currentQuestion.answer) {
        li.classList.add("correct");
        score++;
      } else {
        li.classList.add("wrong");

        // Show correct answer
        const allOptions = ul.querySelectorAll("li");
        allOptions.forEach(opt => {
          if (opt.innerText === currentQuestion.answer) {
            opt.classList.add("correct");
          }
        });
      }

      // Disable all options
      const allOptions = ul.querySelectorAll("li");
      allOptions.forEach(opt => {
        opt.classList.add("disabled");
        opt.style.pointerEvents = "none";
      });

      nextBtn.style.display = "block";
    });

    ul.appendChild(li);
  });
}

function showScore() {
  resetState();
  quest.innerText = `🎉 You scored ${score} out of ${questions.length}!`;
  nextBtn.innerText = "Play Again";
  nextBtn.style.display = "block";
}

function handleNextButton() {
  indx++;
  if (indx < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextBtn.addEventListener("click", () => {
  if (indx < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

// Start the quiz
startQuiz();
