
let score = 0;

for (let i = 0; i < 5; i++){
  


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

 

  if (playerSelection === "rock" && computerSelection === "rock") {
    winner = "It's a draw. Rock versus rock.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    winner = "You lose. Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winner = "You win. Rock beats scissors.";
    score += 1;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winner = "You win. Paper beats rock.";
    score += 1;
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    winner = "It's a draw. Paper versus paper.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    winner = "You lose. Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winner = "You lose. Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winner = "You win. Scissors beats paper.";
    score += 1;
  } else if (playerSelection === "scissors" && computerSelection === "scissors") {
    winner = "It's a draw. Scissors versus scissors.";
  } else {
    winner = "Invalid player selection. Please enter rock, paper, or scissors.";
  }
  return winner;
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Enter rock, paper, or scissors: ");


console.log(`Round ${i + 1}: ${playRound(playerSelection, computerSelection)}`);
console.log(`Score is ${score}`);

}
