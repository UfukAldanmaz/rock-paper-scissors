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
    const arr = ["✊", "✋", "✌"];
    const random = Math.floor(Math.random() * arr.length);
    return arr[random];
}

const computerWin = "Computer Wins!"
const playerWin = "You win!"
const draw = "Draw!"

function playRound(player, computer) {

    switch (true) {
        case (player == "✊" && computer == "✌"):
            return playerWin;
        case (player == "✌" && computer == "✋"):
            return playerWin;
        case (player == "✋" && computer == "✊"):
            return playerWin;
        case (player == "✌" && computer == "✊"):
            return computerWin;
        case (player == "✊" && computer == "✋"):
            return computerWin;
        case (player == "✋" && computer == "✌"):
            return computerWin;
        case (player == "✊" && computer == "✊"):
            return draw;
        case (player == "✌" && computer == "✌"):
            return draw;
        case (player == "✋" && computer == "✋"):
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
        let ele1 = document.getElementById("btn1");
        ele1.remove();
        let ele2 = document.getElementById("btn2");
        ele2.remove();
        let ele3 = document.getElementById("btn3");
        ele3.remove();
    } else if (playerScore > computerScore) {
        finalResult.innerHTML = "You won! <br> <button onclick='window.location.reload(true)'> Click here to play again! </button>"
        let element = document.getElementById("myDiv");
        element.remove();
        let ele1 = document.getElementById("btn1");
        ele1.remove();
        let ele2 = document.getElementById("btn2");
        ele2.remove();
        let ele3 = document.getElementById("btn3");
        ele3.remove();
    } else if (playerScore == computerScore) {
        finalResult.innerHTML = "It's a tie! <br> <button onclick='window.location.reload(true)'> Click here to play again! </button>";
        let element = document.getElementById("myDiv");
        element.remove();
        let ele1 = document.getElementById("btn1");
        ele1.remove();
        let ele2 = document.getElementById("btn2");
        ele2.remove();
        let ele3 = document.getElementById("btn3");
        ele3.remove();
    }
}
