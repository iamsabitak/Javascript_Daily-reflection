console.log("hello world")
let a 
a = 10
console.log(a)
a = "sabita"
console.log(a)
a = 2.2
console.log(a)
let s2 = 2 //digits,letters,underscores and $ sign is allowed
//let 3ss = 3 <-- will throw an error >-- it must begins with a $, _ or a letter
//let var >-- var cannot be a identifier. it is alreaedy defined in js
let sabita
let Sabita   //   >-- case sensitive
let sAbita



// <--IN the case of var 
var b = 12
console.log(b) // <--- var can be redeclared and updated
var b = 13
console.log(b)
// var c = "sabita">--INSTEAD OF WRITING VAR
let c = "sabita"
c = 10; // >-- this is allowed in the case of let
//let c >-- let cannot be redeclared but can be updated.
var d = undefined

// {
//     var b = 34
//     console.log(b)
// }
// console.log(b)
{
    let c = "nabin"
    console.log(c)
}
console.log(c)
//const name; <-- throws an error must be initialized
const author = "sabita" //const can neither be updated nor be redeclared
// let author = 6 >-- not allowed
    
