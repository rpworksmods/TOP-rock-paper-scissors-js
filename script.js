let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; // Get random number between 1 - 3
    switch(choice) {
        case 1:
            alert("Rock")
            return "Rock"
        case 2:
            alert("Paper")
            return "Paper"
        case 3:
            alert("Scissors")
            return "Scissors"
    }
}

function getHumanChoice() {

    return prompt("Make your choice between: Rock, Paper or Scissors below:")

}

function displayScores() {
    console.log("Your score: " + humanScore)
    console.log("Computer's Score: " + computerScore)
}

function playGame() {
    let playerChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    playRound(playerChoice, computerChoice)
}

function playRound(humanChoice, computerChoice) {
    // Make both parameters case-insensitive (lowercase)
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const winner = "Congratulations, you win! "
    const loser = "Shucks, better luck next time. "
    const tie = "A tie! What are the chances?! No points awarded. You both chose: "

    // If human is rock and computer is paper, computer wins and vice versa
    if (humanChoice == computerChoice) {
        // Tie
        console.log(tie + humanChoice)
        displayScores()
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            // Win
            console.log(winner + humanChoice + " beats " + computerChoice)
            humanScore++
            displayScores()
        } else {
            // Lose
            console.log(loser + computerChoice + " beats " + humanChoice)
            computerScore++
            displayScores()
        }
    // If human is paper and computer is scissors, computer wins and vice versa
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            // Win
            console.log(winner + humanChoice + " beats " + computerChoice)
            humanScore++
            displayScores()
        } else {
            // Lose
            console.log(loser + computerChoice + " beats " + humanChoice)
            computerScore++
            displayScores()
        }
    // If human is scissors and computer is rock, computer wins and vice versa
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            // Win
            console.log(winner + humanChoice + " beats " + computerChoice)
            humanScore++
            displayScores()
        } else {
            // Lose
            console.log(loser + computerChoice + " beats " + humanChoice)
            computerScore++
            displayScores()
        }
    }

    rounds--

    if (rounds > 0) {
        playGame()
    } else {
        if (humanScore > computerScore) {
            alert("Game over - You win!")
        } else if (humanChoice == humanScore) {
            alert("Game over - Tie!")
        } else {
            alert("Game over - You Lose :(");
        }
        
    }
    
}

playGame()