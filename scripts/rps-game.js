// randomize the computer's choice
function getComputerChoice() {
    let computerChoice = "";
    let randomNumber = Math.floor(Math.random() * 3);

    // return a string based on the value of randomChoice
    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    return computerChoice;
}


// get user's choice
function getHumanChoice() {
    // prompt for user input
    let humanChoice = prompt("Your turn! Enter your choice (rock, paper, or scissors):");

    return humanChoice.toLowerCase();
}


// play 5 rounds of the game
function playGame(humanChoice, computerChoice) {
    // announce game
    console.log("Let's play 5 rounds of Rock, Paper, Scissors!")

    // call previous functions
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // track players scores
    let humanScore = 0;
    let computerScore = 0;

    // play a single round of the game   
    function playRound(humanSelection, computerSelection) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats paper.");
            humanScore++;
        } else {
            console.log("You lose.");
            computerScore++;
        }
    }

    // play 5 rounds
    for (let round = 1; round <= 5; round++) {
        getHumanChoice();
        getComputerChoice();
        playRound();
    }

    // declare winner
    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} rounds. You have won the game. Congratulations!`);
    } else {
        console.log("Sorry, you have lost the game. Better luck next time!");
    }
}

playGame();