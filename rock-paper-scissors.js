let startButton = document.querySelector("#start");
let choices = document.querySelector("#choices");

choices.addEventListener("click", choicesCallback);
let playerScore = 0;
let computerScore = 0;
let endGameResult = false;
let gameStart = true;
let resultSection = document.querySelector("#result");
function choicesCallback(event) {
  if(gameStart) {
    let singleRoundResult = document.createElement("h1");
    singleRoundResult.setAttribute("id", "singleRoundResult");
    resultSection.appendChild(singleRoundResult);
    gameStart = false;
  }
  if(endGameResult) {
    const output = document.querySelector("#endGameResult");
    const singleRoundResult = document.querySelector("#singleRoundResult");
    resultSection.removeChild(output);
    resultSection.removeChild(singleRoundResult);
    endGameResult = false;
    gameStart = true;
  }
  let result = playRound(event.target.id, getComputerChoice());
  playerScore += result.includes("Win") ? 1 : 0;
  computerScore += result.includes("Lose") ? 1 : 0;
  updateScore(result);
  endGameResult = endGame();
}

function updateScore(result) {
  let player = document.querySelector("body div h1#player");
  let computer = document.querySelector("body div h1#computer");
  player.textContent = `Player Score: ${playerScore}`;
  computer.textContent = `Computer Score: ${computerScore}`;
  let singleRoundResult = document.querySelector("#singleRoundResult");
  singleRoundResult.textContent = result;
};

function endGame() {
  if(playerScore === 5 || computerScore === 5) {
    let endGameResult = document.createElement("h1");
    endGameResult.setAttribute("id", "endGameResult");
    endGameResult.textContent = playerScore === 5 ? "You won" : "You lost";
    resultSection.appendChild(endGameResult);
    playerScore = 0;
    computerScore = 0;
    return true;
  }
  return false;
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 100);
  switch (randomNumber % 3) {
    case 0: {
      return "Rock";
      // break;
    }

    case 1: {
      return "Paper";
      // break;
    }

    case 2: {
      return "Scissors";
      // break;
    }
  }
}

function playRound(playerSelection, computerSelection) {
  let processedPlayerSelection = playerSelection.charAt(0).toUpperCase();
  processedPlayerSelection += playerSelection.slice(1).toLowerCase();
  if (
    processedPlayerSelection !== "Rock" &&
    processedPlayerSelection !== "Paper" &&
    processedPlayerSelection !== "Scissors"
  ) {
    return "It's not a valid selection. Please try again";
  }
  if (processedPlayerSelection === computerSelection) {
    return "It's a Ties. Replaying the round";
  }
  if (processedPlayerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      return "You Win! Rock beats Scissors";
    }
    if (computerSelection === "Paper") {
      return "You Lose! Scissors beats Rock";
    }
  }
  if (processedPlayerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      return "You Win! Scissors beats Paper";
    }
    if (computerSelection === "Rock") {
      return "You Lose! Rock beats Scissors";
    }
  }
  if (processedPlayerSelection === "Paper") {
    if (computerSelection === "Rock") {
      return "You Win! Paper beats Rock";
    }
    if (computerSelection === "Scissors") {
      return "You Lose! Scissors beat Paper";
    }
  }
}
