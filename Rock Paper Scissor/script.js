// let choice = ["Rock", "Paper", "Scissor"];
function playGame() {
let user = prompt("Enter the number");
let comp = Math.floor(Math.random() * 3);
// 0 for scissor
// 1 for rock
// 2 for paper
if (comp >2) {
  console.timeLog("Computern - Invalid Number");
} else if (user > 2) {
  console.log("User - Invalid Number");
} else if (comp == 0 && user == 1) {
  console.log("Computer - Scissor");
  console.log("User - Rock");
} else if (comp == 1 && user == 2) {
  console.log("Computer - Rock");
  console.log("User - Paper");
} else if (comp == 2 && user == 0) {
  console.log("Computer - Paper");
  console.log("User - Scissor");
}

if (comp == user) {
  console.log("draw");
} else if (
  (comp == 0 && user == 1) ||
  (comp == 1 && user == 2) ||
  (comp == 2 && user == 0)
) {
  console.log("You Win..");
} else {
  console.log("Computer Win..");
}
}
const result = playGame();