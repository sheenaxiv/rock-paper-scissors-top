// randomize the computer's choice
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    // return a string based on the value of randomChoice
    if (randomNumber === 0) {
        computerChoice = "Rock";
    } else if (computerChoice === 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    
    console.log(computerChoice);
}


getComputerChoice();

// get user's choice
function getHumanChoice() {
    // prompt for user input
    let humanChoice = prompt("Let's play Rock, Paper, Scissors! Enter your choice.");

    return humanChoice;
}

getHumanChoice();

// track players scores

let humanScore = 0;
let computerScore = 0;

// play a round of the game
function playRound(humanChoice, computerChoice) {
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection); 