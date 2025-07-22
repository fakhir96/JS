const timeTag = document.querySelector("p");

let d = new Date();
let hr = String(d.getHours()).padStart(2, "0");
let min = String(d.getMinutes()).padStart(2, "0");
let sec = String(d.getSeconds()).padStart(2, "0");

timeTag.innerText = `${hr}:${min}:${sec}`

const timer = ()=>{
    sec++;
    if(sec === 60){
        sec = 0;
        min++;  
        min = String(min).padStart(2, "0");
        
    }
    sec = String(sec).padStart(2, "0");
    timeTag.innerText = `${hr}:${min}:${sec}`
}
setInterval(timer, 1000)