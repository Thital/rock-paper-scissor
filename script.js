choices = ["rock","paper","scissors"];
let computerScore = 0;
let playerScore = 0;

function getPlayerChoice(){
    let playerSelection = prompt("Choose a hand to play:");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

function getComputerChoice () {
    let random_num = Math.floor(Math.random()*3);
    let computerSelection = choices[random_num];
    console.log(computerSelection)
    return computerSelection;
}


function playRound(playerSelection, computerSelection){
    switch (true){
        case playerSelection === computerSelection:
            return "It's a tie";
        case playerSelection === "rock" && computerSelection == "paper":
            computerScore += 1;
            return "You lose! Paper beats Rock";
        case playerSelection === "rock" && computerSelection == "scissors":    
            playerScore +=1;
            return "You win! Rock beats Scissors";
        case playerSelection === "paper" && computerSelection == "rock":
            playerScore +=1;
            return "You win! Paper beats Rock";
        case playerSelection === "paper" && computerSelection == "scissors":
            computerScore +=1;
            return "You lose! Scissors beat Paper"; 
        case playerSelection === "scissors" && computerSelection == "rock":
            computerScore +=1;
            return "You lose! Rock beat Scissors";
        case playerSelection === "scissors" && computerSelection == "paper":
            playerScore +=1;
            return "You win! Scissors beat Paper";  
        default:
            return "Incorrect input, type in either 'Rock', 'Paper' or 'Scissors'";
    }       
}

function game(){
    for (let i =  0; i < 5; i++){
        playRound(getPlayerChoice(), getComputerChoice())

    }
    if (playerScore === computerScore){
        console.log("It's a tie!")
    }
    else if (playerScore > computerScore){
        console.log("You win!")
    }
    else{
       console.log("You lose!")
    }
}
game()
console.log(`Your score is ${playerScore}`)
console.log(`Computer score is ${computerScore}`)