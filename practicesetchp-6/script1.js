let runAgain = true;
while(runAgain){
let color = prompt("Enter the background color")
document.body.style.background = color;
runAgain = confirm("DO you want to change the background color")
}