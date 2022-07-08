let computerScore = 0;
let playerScore = 0;

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    console.log(
      "You win! " + playerSelection + " beats " + computerSelection + "!"
    );
    playerScore++;
  } else if (playerSelection == computerSelection) {
    console.log(`It is a tie. You both chose ${playerSelection}.`);
  } else {
    console.log(
      "You lose! " +
        playerSelection +
        " does not beat " +
        computerSelection +
        "."
    );
    computerScore++;
  }
}

function game() {
  computerScore = 0;
  playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Choose rock, paper, or scissors!");
    const computerSelection = computerPlay();

    playRound(playerSelection, computerSelection);
  }
  if (playerScore > computerScore) {
    console.log("You win!");
  } else if (computerScore > playerScore) {
    console.log("HAHAHAH YOU LOSE");
  } else {
    console.log("Tis but a draw.");
  }
}

game();
