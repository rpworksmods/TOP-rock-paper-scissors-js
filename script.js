let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1; // Get random number between 1 - 3
    console.log(choice)
    switch(choice) {
        case 1:
            alert("Rock")
            break;
        case 2:
            alert("Paper")
            break;
        case 3:
            alert("Scissors")
            break;
    }
}

function getHumanChoice() {

    let playerChoice = prompt("Make your choice between: Rock, Paper or Scissors below:")
    let computerChoice = getComputerChoice()

    playRound(playerChoice, computerChoice)

}

function playRound(humanChoice, computerChoice) {

}