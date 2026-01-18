let humanScore = 0;
let computerScore = 0;
let rounds = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; // Get random number between 1 - 3
    switch(choice) {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

function displayScores() {
    const hScoreBox = document.querySelector("#humanScore");
    const cScoreBox = document.querySelector("#computerScore");

    hScoreBox.textContent = "Your Score: " + humanScore
    cScoreBox.textContent = "Computer Score: " + computerScore
}

function playRound(humanChoice, computerChoice) {
    // Make both parameters case-insensitive (lowercase)
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    const resultBox = document.querySelector("#results");

    const winner = "Congratulations, you win! "
    const loser = "Shucks, better luck next time. "
    const tie = "A tie! What are the chances?! No points awarded. You both chose: "

    // If human is rock and computer is paper, computer wins and vice versa
    if (humanChoice == computerChoice) {
        // Tie
        resultBox.textContent = tie + humanChoice
        displayScores()
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            // Win
            resultBox.textContent = winner + humanChoice + " beats " + computerChoice
            humanScore++
            displayScores()
        } else {
            // Lose
            resultBox.textContent = loser + computerChoice + " beats " + humanChoice
            computerScore++
            displayScores()
        }
    // If human is paper and computer is scissors, computer wins and vice versa
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            // Win
            resultBox.textContent = winner + humanChoice + " beats " + computerChoice
            humanScore++
            displayScores()
        } else {
            // Lose
            resultBox.textContent = loser + computerChoice + " beats " + humanChoice
            computerScore++
            displayScores()
        }
    // If human is scissors and computer is rock, computer wins and vice versa
    } else if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            // Win
            resultBox.textContent = winner + humanChoice + " beats " + computerChoice
            humanScore++
            displayScores()
        } else {
            // Lose
            resultBox.textContent = loser + computerChoice + " beats " + humanChoice
            computerScore++
            displayScores()
        }
    }

    if (humanScore > computerScore && humanScore >= 5) {
        alert("Game over - You win!")
    } else if (humanChoice == humanScore) {
        alert("Game over - Tie!")
    } else if (computerScore > humanScore && computerScore >= 5) {
        alert("Game over - You Lose :(");
    }
    
}

const buttons = document.querySelectorAll(".choiceBtn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice())
    })
})