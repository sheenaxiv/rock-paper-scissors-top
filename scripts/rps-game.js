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
    let userChoice = parseInt(prompt("Let's play Rock, Paper, Scissors. Enter 0 for Rock, 1 for Paper or 2 for Scissors."));

    // return a string based on the value of userChoice
    if (userChoice === 0) {
        return "Rock";
    } else if (userChoice === 1) {
        return "Paper";
    } else if (userChoice === 2) {
        return "Scissors";
    } else {
        alert("Invalid entry");
    }
}

getHumanChoice();