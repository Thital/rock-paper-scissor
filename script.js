choices = ["rock","paper","scissors"];

let playerSelection = prompt("Choose a hand to play:");
playerSelection = playerSelection.toLowerCase();
console.log(playerSelection)

let computerSelection
function getComputerChoice () {
    let random_num = Math.floor(Math.random()*3);
    computerSelection = choices[random_num];
    console.log(computerSelection)
    return computerSelection;
}
getComputerChoice()


function playRound(playerSelection, computerSelection){
    switch (true){
        case playerSelection === computerSelection:
            return "It's a tie";
        case playerSelection === "rock" && computerSelection == "paper":
            return "You lose! Paper beats Rock";
        case playerSelection === "rock" && computerSelection == "scissors":
            return "You win! Rock beats Scissors";
        case playerSelection === "paper" && computerSelection == "rock":
            return "You win! Paper beats Rock";
        case playerSelection === "paper" && computerSelection == "scissors":
            return "You lose! Scissors beat Paper"; 
        case playerSelection === "scissors" && computerSelection == "rock":
            return "You lose! Rock beat Scissors";
        case playerSelection === "scissors" && computerSelection == "paper":
            return "You win! Scissors beat Paper";  
        default:
            return "Incorrect input, type in either 'Rock', 'Paper' or 'Scissors'";
    }       
}
console.log(playRound(playerSelection, computerSelection))
