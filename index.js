// Grab Computer's random selection
function computerPlay() {
    let selection = ["rock", "paper", "scissor"];
    let randomSelection = Math.floor(Math.random() * selection.length);
    return selection[randomSelection];
}

// Scores
let computerScore = 0;
let playerScore = 0;

// Play a round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {

    //convert player's input to lowercase 
    let playerChoice = playerSelection.toLowerCase();

    // rock
    if (playerChoice === "rock" && computerSelection === "rock") {
        console.log("Tie! Great minds think alike.");
        return showScore();
    } else if (playerChoice === "rock" && computerSelection === "paper") {
        computerScore += 1;
        // return "You Lose! Paper beats Rock.";
        console.log("You Lose! Paper beats Rock.")
        return showScore();
    } else if (playerChoice === "rock" && computerSelection === "scissor") {
        playerScore += 1;
        // return "You Win! Rock beats Scissor.";
        console.log("You Win! Rock beats Scissor.");
        return showScore();
    }

    // paper
    if (playerChoice === "paper" && computerSelection === "paper") {
        // return "Tie! Great minds think alike.";
        console.log("Tie! Great minds think alike.");
        return showScore();
    } else if (playerChoice === "paper" && computerSelection === "rock") {
        playerScore += 1;
        // return "You Win! Paper beats Rock.";
        console.log("You Win! Paper beats Rock.");
        return showScore();
    } else if (playerChoice === "paper" && computerSelection === "scissor") {
        computerScore += 1;
        // return "You Lose! Scissor beats Paper.";
        console.log("You Lose! Scissor beats Paper.");
        return showScore();
    }

    // scissor
    if (playerChoice === "scissor" && computerSelection === "scissor") {
        // return "Tie! Great minds think alike.";
        console.log("Tie! Great minds think alike.");
        return showScore();
    } else if (playerChoice === "scissor" && computerSelection === "paper") {
        playerScore += 1;
        // return "You Win! Scissor beats Paper.";
        console.log("You Win! Scissor beats Paper.");
        return showScore();
    } else if (playerChoice === "scissor" && computerSelection === "rock") {
        computerScore += 1;
        // return "You Lose! Rock beats Scissor.";
        console.log("You Lose! Rock beats Scissor.");
        return showScore();
    }
}

// Play the game
function game() {

    for (let round = 1; round < 6; round++) {
        console.log("ROUND " + round);

        // // Ask user to make a selection;
        // let playerSelection = prompt("Rock, Paper, or Scissor?")
        playerSelection = prompt("Enter: Rock, Paper, or Scissor").toLowerCase();
        computerSelection = computerPlay();

        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissor") {
            console.log(playRound(playerSelection, computerSelection));
        } else {
            console.log("Invalid selection. Please Enter: Rock, Paper, or Scissor.")
            round--;
        }

        // // playerSelection = playerSelection.toLowerCase();
        // let computerSelection = computerPlay();
        // console.log(playRound(playerSelection, computerSelection));
    }

    if (computerScore === playerScore) {
        console.log("There are no winner and loser. You and the Computer are tied!");
    } else if (computerScore > playerScore) {
        console.log("You have been defeated!");
    } else {
        console.log("You are victorious!");
    }

    // // End Game
    // if (computerScore === 5) {
    //     console.log(computerScore);
    //     console.log(playerScore);
    //     console.log("You lost to the computer!")
    //     return "You lost!";
    // } else if (playerScore === 5) {
    //     console.log(computerScore);
    //     console.log(playerScore);
    //     console.log("You beat the computer!")
    //     return "You win!";
    // }

    // // Continue playing
    // console.log(computerScore);
    // console.log(playerScore);
    // game();
}

//Show current score
function showScore() {
    console.log("Computer's Score: " + computerScore);
    console.log("Player's Score: " + playerScore);
}

// console.log(playRound(playerSelection,computerSelection));


game();