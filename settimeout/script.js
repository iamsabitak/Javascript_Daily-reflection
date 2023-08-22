const sum = (a,b) => {
console.log("Yes I am runnning" + (a+b));
a+b;
}
setTimeout(sum,1000, 2,2)

alert("Hey This is me sabbu!")
document.write(" 안녕하세요 " + "annyeonghaseyo " + " : " + " Hello  ")

// let x = setInterval(() => {
//     alert("setInterval")
// },1000);
// console.log(x)
let a = setTimeout(function(){
    alert("setTimeout")
},3000)
let b = prompt("Do you want to run the setTimeout?")
if("n" == b){
clearTimeout(a)
}
console.log(a)