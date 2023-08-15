alert("Enter the value of a")
let a = prompt("Enter value of a")
//a = Number.parseInt(a)
alert("you entered a type of " + (typeof a))
let write = confirm("Do you want to write ")
if(write){
document.write(a)
}
else{
    document.write("please allow me to write")
}