const GameBoard = (() => {
    let gameboard = ["", "", "", "", "", "", "", "", ""];

    const render = () => {
        let boardHTML = "";
        gameboard.forEach((square, index) => {
            boardHTML += `<div class="square" id="square-${index}">${square}</div>`;
        });

        document.querySelector("#gameBoard").innerHTML = boardHTML;

        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.addEventListener("click", Game.handleClick);
        });
    };

    const updateSquare = (index, mark) => {
        gameboard[index] = mark;
        render();
    };

    const getGameboard = () => gameboard;

    const resetBoard = () => {
        gameboard = ["", "", "", "", "", "", "", "", ""];
        render();
    };

    return {
        render,
        updateSquare,
        getGameboard,
        resetBoard
    };
})();

const createPlayer = (name, mark) => {
    return { name, mark };
};

const Game = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = () => {
        const p1 = document.querySelector("#player1").value || "Player 1";
        const p2 = document.querySelector("#player2").value || "Player 2";

        players = [createPlayer(p1, "X"), createPlayer(p2, "O")];
        currentPlayerIndex = 0;
        gameOver = false;
        document.getElementById("msg").textContent = `${players[0].name}'s turn`;
        GameBoard.resetBoard();
    };

    const handleClick = (event) => {
        const index = parseInt(event.target.id.split("-")[1]);
        const board = GameBoard.getGameboard();

        if (board[index] !== "" || gameOver) return;

        GameBoard.updateSquare(index, players[currentPlayerIndex].mark);

        if (checkWinner(board, players[currentPlayerIndex].mark)) {
            document.getElementById("msg").textContent = `${players[currentPlayerIndex].name} Wins! 🎉`;
            document.getElementById("result-display").textContent = `${players[currentPlayerIndex].mark} wins`;
            gameOver = true;
            return;
        }

        if (board.every(cell => cell !== "")) {
            document.getElementById("msg").textContent = "It's a Draw! 😅";
            document.getElementById("result-display").textContent = "Draw";
            gameOver = true;
            return;
        }

        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        document.getElementById("msg").textContent = `${players[currentPlayerIndex].name}'s turn`;
    };

    const checkWinner = (board, mark) => {
        const winPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return winPatterns.some(pattern =>
            pattern.every(index => board[index] === mark)
        );
    };

    const restart = () => {
        start();
        document.getElementById("result-display").textContent = "";
    };

    return {
        start,
        handleClick,
        restart
    };
})();

document.getElementById("startBtn").addEventListener("click", Game.start);
document.getElementById("restartBtn").addEventListener("click", Game.restart);
