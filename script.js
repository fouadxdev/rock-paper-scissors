// // Initializes Score Variables for Human Score and Computer Score
// let humanScore = 0;
// let computerScore = 0;

// // Generates a number between 0-2 for a choice
// function getComputerChoice() {
//   let choice = Math.floor(Math.random() * 3);

//   if (choice === 0) {
//     return "Rock";
//   } else if (choice === 1) {
//     return "Paper";
//   } else {
//     return "Scissors";
//   }
// }

// // Gets Human Input
// function getHumanChoice() {
//   while (true) {
//     let humanChoice = prompt("Rock, Paper or Scissors");
//     // If user clicks cancel, returns 'game cancelled' in the consol and returns null value
//     if (humanChoice === null) {
//       console.log("Game Cancelled");
//       return null;
//     }
//     // trims human inputs and converts to lowercase for proper placement in the conditionals
//     let humanSelection = humanChoice.trim().toLowerCase();

//     if (humanSelection === "rock") {
//       return "Rock";
//     } else if (humanSelection === "paper") {
//       return "Paper";
//     } else if (humanSelection === "scissors") {
//       return "Scissors";
//     } else {
//       alert("Invalid Input! Please input Rock, Paper, Scissors");
//     }
//   }
// }

// // Creates an object beat on which value beats which
// const beat = {
//   Rock: "Scissors",
//   Paper: "Rock",
//   Scissors: "Paper",
// };

// // Determines tie, win or lose and increments to respective scores
// function playRound(humanSelection, choice) {
//   if (humanSelection === choice) {
//     return "It's a Tie";
//     // looks at the object beat and evaluates if human selection is in beat then sees if the value of beat is computer choice
//   } else if (beat[humanSelection] === choice) {
//     humanScore++;
//     return "you win";
//   } else {
//     computerScore++;
//     return "you lose";
//   }
// }

// // Main game function
// function playgame() {
//   // Determine value of rounds
//   const rounds = 5;
//   for (let i = 0; i < rounds; i++) {
//     let human = getHumanChoice();
//     // if user presses cancel game ends
//     if (human == null) {
//       return null;
//     }
//     let computer = getComputerChoice();
//     let result = playRound(human, computer);
//     console.log(result);
//     console.log(`Scores - You: ${humanScore}: Computer: ${computerScore}`);
//   }
//   if (humanScore > computerScore) {
//     console.log(
//       `You won! - Scores- You: ${humanScore}: Computer: ${computerScore}`
//     );
//   } else if (computerScore > humanScore) {
//     console.log(
//       `You lost! Scores- You: ${humanScore}: Computer: ${computerScore}`
//     );
//   } else {
//     console.log(
//       `Game is tied  Scores- You: ${humanScore}: Computer: ${computerScore}`
//     );
//   }
// }

// // Play Game
// playgame();
