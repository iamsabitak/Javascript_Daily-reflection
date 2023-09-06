let user = prompt("Rock Paper Scissor");
let comp = Math.floor(Math.random(0, 1, 2));
// 0 for scissor
// 1 for rock
// 2 for paper
if (comp > 2) {
  console.log("Computern - Invalid Number");
} else if (user > 2) {
  console.log("User - Invalid Number");
}
if (comp == 0 && user == 1) {
  console.log("Computer - Scissor");
  console.log("User - Rock");
}
if (comp == 1 && user == 2) {
  console.log("Computer - Rock");
  console.log("User - Paper");
}
if (comp == 2 && user == 0) {
  console.log("Computer - Paper");
  console.log("User - Scissor");
}

if (
  (comp == 0 && user == 1) ||
  (comp == 1 && user == 2) ||
  (comp == 2 && user == 0)
) {
  console.log("You Win..");
} else {
  console.log("Computer Win..");
}
