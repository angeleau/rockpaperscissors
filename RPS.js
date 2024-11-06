let humanScore = 0;
let computerScore = 0;
let gameIsOn = true;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);    
        if (computerChoice === 1) {
            return "rock";
        }
        else if (computerChoice === 2) {
            return "paper";
        }
        else {
            return "scissors";
        } 
          
  }

function getHumanChoice() {
let humanChoice = prompt("Please type rock, paper or scissors")
    if (humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors") {
        return humanChoice.toLowerCase();
    }
    else {
        return "invalid value";
    }

}

function playRound (humanChoice, computerChoice) {
console.log("human-"+humanChoice);
console.log("computer-"+computerChoice);

    if (humanChoice === computerChoice) {
        console.log("draw");
    }

    else if (humanChoice === "invalid value") {
        console.log("wrong value, try again");
    }

    else if(humanChoice === "rock"){
        if (computerChoice === "paper"){
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }

    else if(humanChoice === "paper"){
        if (computerChoice === "scissors"){
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }

    else {
        if (computerChoice === "rock"){
            console.log("You lose!");
            computerScore++;
        }
        else {
            console.log("You win!");
            humanScore++;
        }
    }

console.log ("human: "+humanScore, "computer: "+computerScore)

}

function playGame() {
    while (gameIsOn) {        
        playRound(getHumanChoice(), getComputerChoice());
        if (computerScore === 3) {
            console.log("You lose the game");
            gameIsOn = false;
        }
        else if (humanScore === 3) {
            console.log("You win the game");
            gameIsOn = false;
        }

    }
}

playGame();


 
  