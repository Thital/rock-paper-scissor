let choices = ["Rock", "Paper","Scissors"]
let computerScore = parseInt(document.querySelector('#computer_score').innerHTML);
let playerScore = parseInt(document.querySelector('#player_score').innerHTML);

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
        case playerSelection === "Rock" && computerSelection == "Paper":
            document.querySelector('#computer_score').innerHTML = computerScore += 1;
            return "You lose! Paper beats Rock";
        case playerSelection === "Rock" && computerSelection == "Scissors":    
            document.querySelector('#player_score').innerHTML = playerScore += 1;
            return "You win! Rock beats Scissors";
        case playerSelection === "Paper" && computerSelection == "Rock":
            document.querySelector('#player_score').innerHTML = playerScore += 1;
            return "You win! Paper beats Rock";
        case playerSelection === "Paper" && computerSelection == "Scissors":
            document.querySelector('#computer_score').innerHTML = computerScore += 1;
            return "You lose! Scissors beat Paper"; 
        case playerSelection === "Scissors" && computerSelection == "Rock":
            document.querySelector('#computer_score').innerHTML = computerScore += 1;
            return "You lose! Rock beat Scissors";
        case playerSelection === "Scissors" && computerSelection == "Paper":
            document.querySelector('#player_score').innerHTML = playerScore += 1;
            return "You win! Scissors beat Paper";  
        default:
            return "Incorrect input, type in either 'Rock', 'Paper' or 'Scissors'";
    }       
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        playerSelection = button.id
        let computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
        if(computerScore == 5){
        alert("Computer has won!")
        }
        else if(playerScore == 5){
        alert("You have won!")
        };

    })
})


console.log(`Your score is ${playerScore}`)
console.log(`Computer score is ${computerScore}`)