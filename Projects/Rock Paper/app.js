let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"]
    const randIndx = Math.floor(Math.random()*3)
    return options[randIndx]
}

const drawGame = () => {
    console.log("Game was draw")
    msg.innerText = "Game was Draw. Play Again"
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You Won")
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("Comp Won")
        msg.innerText = `Comp Won! ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("User choice:", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp choice:", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // scisoors, paper
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){

            // rock, scissors
            userWin = compChoice === "scissor" ? false:true;    
        }
        else{
            // rock, paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})