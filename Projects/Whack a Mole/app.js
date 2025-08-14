const holes = document.querySelectorAll(".square");
const startBtn = document.querySelector("button");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let countdownInterval;
let moleInterval;
let running = false;
let lastHole = null;
let moleSpeed = 1000; // Start with 1 second

// Handle mole click
holes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.classList.contains("mole")) {
            score++;
            scoreDisplay.textContent = `Your Score = ${score}`;
            box.classList.remove("mole"); // remove so it can't be clicked again
        }
    });
});

function randomHole() {
    let index;
    do {
        index = Math.floor(Math.random() * holes.length);
    } while (index === lastHole); // avoid same hole twice in a row
    lastHole = index;
    return holes[index];
}

function showMole() {
    if (!running) return;

    const hole = randomHole();
    hole.classList.add("mole");

    setTimeout(() => {
        hole.classList.remove("mole");
    }, moleSpeed - 200); // Mole stays slightly less than spawn interval
}

function startTimer() {
    let timeLeft = 30;

    timerDisplay.textContent = formatTime(timeLeft);
    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = formatTime(timeLeft);

        // if (timeLeft % 5 === 0 && moleSpeed > 400) {
        //     moleSpeed -= 100; // Speed up game every 5 seconds
        //     restartMoleInterval();
        // }

        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            stopGame();
            timerDisplay.textContent = "Time's up!";
        }
    }, 1000);
}

function formatTime(seconds) {
    return `00:${String(seconds).padStart(2, "0")}`;
}

function restartMoleInterval() {
    clearInterval(moleInterval);
    moleInterval = setInterval(showMole, moleSpeed);
}

function gameStart() {
    if (running) return; // prevent multiple starts
    running = true;
    score = 0;
    moleSpeed = 1000;
    scoreDisplay.textContent = `Your Score = ${score}`;

    clearInterval(moleInterval);
    clearInterval(countdownInterval);

    startTimer();
    restartMoleInterval();
}

function stopGame() {
    running = false;
    clearInterval(moleInterval);
    holes.forEach(h => h.classList.remove("mole"));
}

startBtn.addEventListener("click", gameStart);
