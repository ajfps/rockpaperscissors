const getComputerChoice = function () {
  let number = Math.floor(Math.random() * 3) + 1;
  let object = "";

  switch (number) {
    case 1:
      object = "rock";
      break;
    case 2:
      object = "paper";
      break;
    case 3:
      object = "scissors";
  }

  return object;
};

let winner = "";




function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    winner = "It's a draw. Rock versus rock.";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    winner = "You lose. Paper beats rock.";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    winner = "You win. Rock beats scissors.";
  }
  return winner;
}

let playerSelection = prompt("Enter rock, paper, or scissors: ");
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));
