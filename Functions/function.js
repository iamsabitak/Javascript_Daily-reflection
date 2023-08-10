//functions

function Sum(x,y){
    console.log("Done")
 return x + y;
 

}
let a = 10;
let b = 20;
let c = 30;
console.log("sum of a and b =" , Sum(a,b));
console.log("sum of b and c =",Sum(b,c));
console.log("sum of c and a =",Sum(c,a))


//Arrow function
const myFunc = (x,y) => {
    return 1+(x+y)/2
}
console.log("onePlusAvg"+ myFunc(2,3))
    

const greet = () => {
    console.log("Good Morning")
    // return "hello"
}
greet();
// console.log(greet())