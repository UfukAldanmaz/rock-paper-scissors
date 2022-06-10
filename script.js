const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
const resultText = document.querySelector(".result");
const selectBtn = document.querySelectorAll(".selection");
const playerTotal = document.querySelector(".playerTotal");
const computerTotal = document.querySelector(".computerTotal");
const finalResult = document.querySelector(".finalResult")

let player;
let computer;
let result;
let computerScore = 0;
let playerScore = 0;

selectBtn.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computer = computerPlay();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = ` ${playRound(player, computer)}`;
    game();

}))

function computerPlay() {
    const arr = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

const computerWin = "Computer Wins!"
const playerWin = "You win!"
const draw = "Draw!"

function playRound(player, computer) {

    switch (true) {
        case (player == "Rock" && computer == "Scissors"):
            return playerWin;
        case (player == "Scissors" && computer == "Paper"):
            return playerWin;
        case (player == "Paper" && computer == "Rock"):
            return playerWin;
        case (player == "Scissors" && computer == "Rock"):
            return computerWin;
        case (player == "Rock" && computer == "Paper"):
            return computerWin;
        case (player == "Paper" && computer == "Scissors"):
            return computerWin;
        case (player == "Rock" && computer == "Rock"):
            return draw;
        case (player == "Scissors" && computer == "Scissors"):
            return draw;
        case (player == "Paper" && computer == "Paper"):
            return draw;
    }
}

function game() {

    switch (playRound(player, computer)) {
        case computerWin:
            computerScore++;
            computerTotal.textContent = `${computerScore}`;
            break;
        case playerWin:
            playerScore++;
            playerTotal.textContent = `${playerScore}`;
            break;
        case draw:
            null;
            break;
    }
    if (playerScore >= 5 || computerScore >= 5) {
        calculateWinner();
    }

}

function calculateWinner() {
    if (computerScore > playerScore) {
        finalResult.innerHTML = "Computer won! <br> <button onclick='window.location.reload(true)'> Click here to play again! </button> ";
        let element = document.getElementById("myDiv");
        element.remove();
    } else if (playerScore > computerScore) {
        finalResult.innerHTML = "You won! <br> <button onclick='window.location.reload(true)'> Click here to play again! </button>"
        let element = document.getElementById("myDiv");
        element.remove();
    } else if (playerScore == computerScore) {
        finalResult.innerHTML = "It's a tie! <br> <button onclick='window.location.reload(true)'> Click here to play again! </button>";
        let element = document.getElementById("myDiv");
        element.remove();
    }
}
