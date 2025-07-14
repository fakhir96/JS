const text = document.querySelector(".typing-text p")
const input = document.querySelector(".input-field")
const mistakeTag = document.querySelector(".mistake span")
const timeTag = document.querySelector(".time span b")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")
const tryAgainBtn = document.querySelector("button")

let timer, maxTime = 10
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

const randomPara = () =>{
    // getting random number and it'll always be less than the paragraphs length
    let randIndex = Math.floor(Math.random() * paragraphs.length)
    text.innerHTML = ""    
    // getting random item from paragraphs array, splitting all characters 
    // of it, adding each character inside span and then adding this span inside p tag
    paragraphs[randIndex].split("").forEach(span =>{
        let spanTag = `<span>${span}</span>`
        text.innerHTML += spanTag
    });

    text.querySelectorAll("span")[0].classList.add("active")
    //  focusing input field on keydowm or click event
    document.addEventListener("keydown", () => input.focus())
    text.addEventListener("click", () => input.focus())
}

function inittyping(){
    const characters = text.querySelectorAll("span")
    let typedCharacter = input.value.split("")[charIndex]

    if(charIndex<characters.length-1 && timeLeft>0){
    
        if(!isTyping){ // once timer is start, it won't restart again on every key clicked 
            timer = setInterval(initTimer, 1000)
            isTyping = true
        }
        console.log(typedCharacter)
        // if user hasn't pressed any charcter or prssed backspace
        if(typedCharacter == null){
            charIndex--; // decrement charIndex
            // decremnt mistakes only if the charIndex span contains incorrect class
            if(characters[charIndex].classList.contains("incorrect")){
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect")
        }
        else{
            if(characters[charIndex].innerText === typedCharacter){
                // if user typed character and shown character matched then add the correct class
                // else increment the mistakes and add the incorrect class
                characters[charIndex].classList.add("correct")
            } else{
                mistakes++;
                characters[charIndex].classList.add("incorrect")
            }
            charIndex++; // increment charIndex either user typed correct or incorrect character 
        }
        characters.forEach(span=> span.classList.remove("active"))
        characters[charIndex].classList.add("active")
        
        let wpm = Math.round((((charIndex-mistakes)/5)/(maxTime-timeLeft))*60)
        // if wpm value is 0, empty, or Infinity then setting its value to 0
        wpm = wpm<0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes; // cpm will not count mistakes
    } 
    else{
        input.value = "";
        clearInterval(timer);
    }
}

function initTimer(){
    // if timeLeft is greater than 0 then decrement the timeLeft else clear the timer
    if(timeLeft>0){
        timeLeft--;
        timeTag.innerText = timeLeft;
    } else{
        clearInterval(timer);
    }
}

function resetGame(){
    // calling randomPara() function and
    // resetting each variables and elements value to default 
    randomPara();
    input.value = "";
    clearInterval(timer);

    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    timeTag.innerText = timeLeft
    wpmTag.innerText = 0;
    cpmTag.innerText = 0;
    mistakeTag.innerText = mistakes;
}
randomPara();
input.addEventListener("input", inittyping);
tryAgainBtn.addEventListener("click", resetGame);