// randomize the computer's choice
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    // return a string based on the value of randomChoice
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (computerChoice === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    return computerChoice;
}


// get user's choice
function getHumanChoice() {
    // prompt for user input
    let humanChoice = prompt("Let's play Rock, Paper, Scissors! Enter your choice.");

    return humanChoice;
}


// track players scores

let humanScore = 0;
let computerScore = 0;


// play a round of the game
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice = "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors.")
    } else if (humanChoice = "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock.")
    } else if (humanChoice = "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper.")
    } else {
        console.log("You lose.");
    }

    // increment score variables based on round winner
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 