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
    let humanChoice = prompt("Your turn! Enter your choice (rock, paper, or scissors):");
    
    return humanChoice.toLowerCase();
}


// play a single round of the game   
function playRound(humanSelection, computerSelection) {
    console.log(`You chose: ${humanSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    // declare round winner
    if (humanSelection === computerSelection) {
        console.log("It's a tie!");
        return "tie";
    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock beats Scissors.");
        return "human";
    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper beats rock.");
        return "human";
    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors beats paper.");
        return "human";
    } else {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
        return "computer";
    }
}


// play 5 rounds of the game
function playGame(humanChoice, computerChoice) {
    console.log("Let's play 5 rounds of Rock, Paper, Scissors!")

    let humanScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        // get choices for the round
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        // play a round and get the winner
        const winner = playRound(humanSelection, computerSelection);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }

    console.log("Final Results");
    if (humanScore > computerScore) {
        console.log(`You won ${humanScore} rounds. You have won the game. Congratulations!`);
    } else if (computerScore > humanScore) {
        console.log(`Computer won ${computerScore} rounds. Sorry, you have lost the game. Better luck next time!`);
    } else {
        console.log("It's a time game!");
    }
}


playGame();