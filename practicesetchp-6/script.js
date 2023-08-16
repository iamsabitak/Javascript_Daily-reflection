// problem no 1

const canDrive = (age) =>{
    return age>18? true:false
}

let playAgain = true;
while (playAgain){
let age = prompt("Enter your age")
Number.parseInt(age)
document.write("are you ok")
if (age < 1) {
    console.error("Please Enter a valid age")
    break;
}
alert(age)
if(canDrive(age)){
    alert("you can drive")
}
else{
    alert("you cannot drive")

}
playAgain = confirm("Do you want to play again")
}