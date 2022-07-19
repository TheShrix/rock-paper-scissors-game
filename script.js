let playerScore = 0;
let computerScore = 0;

const resultDiv = document.querySelector("#result");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const WinningScore = 5;

// function for computer's choice
function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    resultDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
  } else if (playerSelection == computerSelection) {
    resultDiv.textContent = `Tis but a draw, you both chose ${playerSelection}`
  } else {
    resultDiv.textContent = `You lose... ${computerSelection} beats ${playerSelection}.`;
    computerScore++;
  }

  playerScoreDiv.textContent = `Player Score: ${playerScore}`;
  computerScoreDiv.textContent = `Computer Score: ${computerScore}`;

  if (playerScore == WinningScore) {
    resultDiv.textContent = "You Win!";
    gameOver();
  } else if (computerScore == WinningScore) {
    resultDiv.textContent = "You Lose LMAO";
    gameOver();
  }
}

const buttons = document.querySelectorAll('.button');
buttons.forEach((button)=>{
  button.addEventListener('click',clickButton)
})

function clickButton(e) {
  let playerChoice = e.target.id;
  let computerChoice = computerPlay();
  playRound(playerChoice, computerChoice);
}

function gameOver() {
  buttons.forEach((button)=>{
    button.removeEventListener('click',clickButton);
  })
}
