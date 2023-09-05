// Following two linw will run succcessfully due to hoisting
console.log(a)
greet()
function greet(){
console.log("Hello")
}
var a=10; //Declaration hoisted to the top but initialization is not
console.log(a)


let b;
console.log(b)
// let b; //INcase of let and const cannot be access before initialization 


// greet1()
const greet1=()=>{
console.log("Hello")
}
