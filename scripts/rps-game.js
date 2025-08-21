// randomize the computer's choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3);

    // return a string based on the value of randomChoice
    if (randomChoice === 0) {
        return "Rock";
    } else if (randomChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

getComputerChoice();

// get user's choice
function getHumanChoice() {
    // prompt for user input and convert value to an integer
    let userChoice = parseInt(prompt("Let's play Rock, Paper, Scissors! Enter your choice."));

    return userChoice;
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