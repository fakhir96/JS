const sq = document.querySelectorAll(".square");
const btn = document.querySelector("button");
const statusText = document.querySelector("#statusText");

const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    sq.forEach(box => box.addEventListener("click", cellClicked));
    btn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s Turn`;
    running = true;
}

function cellClicked(){
    const cellIndex = this.getAttribute("id");
    
    if(options[cellIndex] !== "" || !running) return;
    
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer(){
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s Turn`;
}

function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winningConditions.length; i++){
        const [a, b, c] = winningConditions[i];
        const cellA = options[a];
        const cellB = options[b];
        const cellC = options[c];

        if(cellA === "" || cellB === "" || cellC === "") continue;

        if(cellA === cellB && cellB === cellC){
            roundWon = true;
            highlightWinnerSquares(a, b, c);
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} Wins! 🎉`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = "Draw! 🤝";
        running = false;
    }
    else{
        changePlayer();
    }
}

function highlightWinnerSquares(a, b, c){
    sq[a].style.backgroundColor = "#90ee90";
    sq[b].style.backgroundColor = "#90ee90";
    sq[c].style.backgroundColor = "#90ee90";
}

function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    running = true;
    statusText.textContent = `${currentPlayer}'s Turn`;
    sq.forEach(box => {
        box.textContent = "";
        box.style.backgroundColor = ""; // remove highlight
    });
}
