let humanScore = 0;
let computerScore = 0;
const winningScore = 3;

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

function checkGameState (){
    const gameOverDisplay = document.createElement("p");

    if (computerScore >= winningScore || humanScore >= winningScore) {
        if (computerScore > humanScore){ 
            gameOverDisplay.textContent = "Game Over - computer wins the game - ";
        }

        else {
            gameOverDisplay.textContent = "Game Over - human wins the game - "
        }    

            gameOverDisplay.textContent += "click a button to start a new game"
            roundDisplay.appendChild(gameOverDisplay);

            computerScore = 0;
            humanScore = 0;

            return "gameover";
        } 

    else {
        gameOverDisplay.textContent = "";
    }
}  

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a draw!";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
    humanScore++;
    return `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
    computerScore++;
    return `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
}


function playGame() { //listens to user input, calls playRound and displays result and score
    
        const buttons = document.querySelectorAll(".gameButton");
        const roundDisplay = document.querySelector("#roundDisplay"); // Select the display area

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                const result = playRound(button.id, getComputerChoice()); 
                const resultParagraph = document.createElement("p"); 
                const scoreDisplay = document.createElement("p");

                resultParagraph.textContent = result; 
                scoreDisplay.textContent = "human: "+humanScore+", computer: "+computerScore;

                roundDisplay.textContent = ""; // Clear previous result 
                roundDisplay.appendChild(resultParagraph); 
                roundDisplay.appendChild(scoreDisplay);
            
        if (checkGameState() === "gameover") {
            return "gameover";
                }

            });
        });
}

playGame();