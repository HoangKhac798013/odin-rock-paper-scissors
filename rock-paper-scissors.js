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

function game() {
  console.log("The game begins");
  let playerScore = 0;
  let computerScore = 0;
  let result;
  for (let i = 0; i < 5; ++i) {
    do {
      let playerSelection = prompt("Please choose Rock, Paper or Scissors");
      // const readline = require('readline').createInterface({
      //   input: process.stdin,
      //   output: process.stdout
      // });
      
      // readline.question(, name => {
      //   playerSelection = name;
      // });
      result = playRound(playerSelection, getComputerChoice());
      console.log(result);
      if (result.includes("Win")) {
        ++playerScore;
      }
      else if (result.includes("Lose")) {
        ++computerScore;
      }
      console.log("The current result is: ");
      console.log("Player: ", playerScore, "\nComputer: ", computerScore);
    } while (result.includes("It's"));
    if(playerScore === 3 || computerScore === 3) {
      break;
    }
  }

  if(playerScore > computerScore) {
    console.log("You have won the best of 5");
  }
  
  if(playerScore < computerScore) {
    console.log("You have lost the best of 5");
  }

  let playAgain;
  do {
    playAgain = prompt("Do you want to play again? (y/n)");
    if(playAgain === "y") {
      game();
    }
    else if(playAgain === "n") {
      console.log("Thank you very much. See you next time");
      break;
    }
    else {
      console.log("Please choose y or n only.");
    }
  }
  while (playAgain !== "y")
}
