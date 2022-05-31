function computerPlay() {
    const arr = ["rock", "scissors", "paper"];
    const random = Math.floor(Math.random() * arr.length);
    console.log(arr[random]);
    return arr[random];
}

const computerWin = 'COMPUTER-WIN'
const playerWin = 'USER-WIN'
const draw = 'DRAW'

function playRound(playerSelection, computerSelection) {

    switch (true) {
        case (playerSelection == "rock" && computerSelection == "scissors"):
            console.log("You win! rock beats scissors!");
            return playerWin;
        case (playerSelection == "scissors" && computerSelection == "paper"):
            console.log("You win! scissors beats paper!");
            return playerWin;
        case (playerSelection == "paper" && computerSelection == "rock"):
            console.log("You win! paper beats rock");
            return playerWin;
        case (playerSelection == "scissors" && computerSelection == "rock"):
            console.log("You lose! rock beats scissors!");
            return computerWin;
        case (playerSelection == "rock" && computerSelection == "paper"):
            console.log("You lose! paper beats rock!");
            return computerWin;
        case (playerSelection == "paper" && computerSelection == "scissors"):
            console.log("You lose! scissors beats paper!");
            return computerWin;
        case (playerSelection == "rock" && computerSelection == "rock"):
            console.log("It's a tie!")
            return draw;
        case (playerSelection == "scissors" && computerSelection == "scissors"):
            console.log("It's a tie!")
            return draw;
        case (playerSelection == "paper" && computerSelection == "paper"):
            console.log("It's a tie!")
            return draw;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Enter your choice").toLowerCase();
        console.log(playerSelection);
        const computerSelection = computerPlay();
        const whoWin = playRound(playerSelection, computerSelection);

        switch (whoWin) {
            case computerWin:
                computerScore++;
                break;
            case playerWin:
                playerScore++;
                break;
        }
    }

    console.log(`Your score is ${playerScore}`);
    console.log(`Computer's score is ${computerScore}`);
    if (computerScore > playerScore) {
        console.log("Computer wins!");
    } else if (playerScore > computerScore) {
        console.log("You win!")
    } else if (playerScore == computerScore) {
        console.log("It's a tie!");
    }
}

game();