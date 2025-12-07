// Initializes Score Variables for Human Score and Computer Score
let humanScore = 0;
let computerScore = 0;

// Generates a number between 0-2 for a choice
function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "Rock";
  } else if (choice === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

// Button Choice
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");

const playAgainBtn = document.querySelector('#playAgain');
playAgainBtn.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  resultsDiv.textContent = "";
  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
 
});

rockBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const result = playRound("Rock", computerChoice);
  console.log(result);

  resultsDiv.textContent = result;
  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

 
});


paperBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const result = playRound("paper", computerChoice);
  resultsDiv.textContent = result;
  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
});

scissorsBtn.addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  const result = playRound("paper", computerChoice);
  resultsDiv.textContent = result;
  scoreDiv.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
});

// Creates an object beat on which value beats which
const beat = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

// Determines tie, win or lose and increments to respective scores
function playRound(humanSelection, choice) {
  if (humanSelection === choice) {
    return "It's a Tie";
    // looks at the object beat and evaluates if human selection is in beat then sees if the value of beat is computer choice
  } else if (beat[humanSelection] === choice) {
    humanScore++;
    return "you win";
  } else {
    computerScore++;
    return "you lose";
  }
}
