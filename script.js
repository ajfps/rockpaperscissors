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

let computerSelection = getComputerChoice();

let playerSelection = "";

const body = document.querySelector("body");

const content = document.querySelector(".container");
content.setAttribute(
  "style",
  "display: flex; width: 1000px; margin: 0 auto; justify-content: center; gap: 10px; align-items: center; height: 100px;"
);

const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

content.appendChild(rockButton);
content.appendChild(paperButton);
content.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
  playerSelection = "rock";
  playGame();
});
paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  playGame();
});
scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
  playGame();
});

const results = document.createElement("div");
results.setAttribute(
  "style",
  "display: flex; flex-direction: column; justify-content: center; align-items: center;"
);
body.appendChild(results);

let score = document.createElement("div");
score.setAttribute(
  "style",
  "position: absolute; top: 15px; left: 15px; font-size: 42px; font-weight: bold;"
);

body.insertBefore(score, content);
score.textContent = 0;

function scoring(currentScore) {
  currentScore = parseInt(score.textContent);
  score.textContent = currentScore + 1;
}

function playGame() {
  let winnerText = document.createElement("h1");

  const resultBox = document.createElement("div");

  resultBox.appendChild(winnerText);
  results.appendChild(resultBox);

  if (playerSelection === "rock" && computerSelection === "rock") {
    winnerText.textContent = "It's a draw. Rock versus rock.";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    winnerText.textContent = "You lose. Paper beats rock.";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    winnerText.textContent = "You win. Rock beats scissors.";
    scoring();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    winnerText.textContent = "You win. Paper beats rock.";
    scoring();
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    winnerText.textContent = "It's a draw. Paper versus paper.";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    winnerText.textContent = "You lose. Scissors beats paper.";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    winnerText.textContent = "You lose. Rock beats scissors.";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    winnerText.textContent = "You win. Scissors beats paper.";
    scoring();
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    winnerText.textContent = "It's a draw. Scissors versus scissors.";
  } else {
    winnerText.textContent =
      "Invalid player selection. Please enter rock, paper, or scissors.";
  }
}
