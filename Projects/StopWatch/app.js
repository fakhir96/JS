const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const timeTag = document.querySelector("p");


let ms = 1000
let sec = 60
let min = 1;
let timerID = null;


function updateTime() {
    ms -= 10;
  
    if (ms === 0) {
      ms = 1000;
      sec--;
    }
  
    if (sec === 0) {
      sec = 60;
      min--;

      if(min === 0){
        resetTimer();
      }
    }
  
    // Format time
    let m = String(min).padStart(2, "0");
    let s = String(sec).padStart(2, "0");
    let milli = String(ms).padStart(3, "0");
  
    timeTag.innerText = `${m}:${s}:${milli}`;
}


function startTimer() {
    if (timerID !== null) return; // prevent multiple intervals
  
    timerID = setInterval(updateTime, 10); // run every 10ms
}
  
function pauseTimer(){
    clearInterval(timerID);
    timerID = null;
}

function resetTimer() {
    clearInterval(timerID);
    timerID = null;
    ms = 1000
    sec = 60
    min = 24;
    timeTag.innerText = "25:00:000";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);



// let timerID = null;
// let sec = 0;

// timerID = setInterval(()=>{
//         console.log("Hello World");
//         sec++;
//     }, 1000)
    
    
// // startBtn.addEventListener("click", startTimer);
// stopBtn.addEventListener("click", ()=>{
//         clearInterval(timerID)
//         console.log("Stopped")
// });