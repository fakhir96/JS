const timer = document.getElementById("timer");
const startButton = document.querySelector("#startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

const inputMinutes = document.getElementById("minsInput");
const inputSeconds = document.getElementById("secondsInput");

let countdown; // Variable to hold the countdown interval
timer.innerText = "00:00";
let totalTime = 0;
let isRunning = false;

// Function to validate and format input values
function validateInput() {
    const minutes = parseInt(inputMinutes.value);
    const seconds = parseInt(inputSeconds.value);

    if (isNaN(minutes) && isNaN(seconds)) {
        alert("Please enter valid numbers for minutes and seconds.");
        return false;
    }

    if (minutes < 0 || seconds < 0 || seconds >= 60) {
        alert("Please enter valid time. Minutes should be non-negative and seconds should be between 0 and 59.");
        return false;
    }

    return true;
}

// Function to format time as MM:SS
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60; 
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer(){
    if (isRunning) return; // Prevent multiple intervals

    // If totalTime is 0, it's a new timer, so get input
    if (totalTime === 0) {
        const minutes = parseInt(inputMinutes.value) || 0;
        const seconds = parseInt(inputSeconds.value) || 0;

        // if (minutes < 0 || seconds < 0 || seconds >= 60) {
        //     alert("Enter valid minutes (>= 0) and seconds (0–59)");
        //     return;
        // }
        if (!validateInput()) return;

        totalTime = minutes * 60 + seconds;
    }

    timer.innerText = formatTime(totalTime);
    isRunning = true;

    countdown = setInterval(() => {
        if (totalTime <= 0) {
            clearInterval(countdown);
            timer.innerText = "Time's up!";
            isRunning = false;
            return;
        }
        totalTime--;
        timer.innerText = formatTime(totalTime);
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    inputMinutes.value = '';
    inputSeconds.value = '';
    timer.innerText = "00:00";
    isRunning = false;
    inputMinutes.focus(); // Focus back on the minutes input field
    totalTime = 0; 
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);