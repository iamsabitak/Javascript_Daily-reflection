let a = 2+2
console.log(a)
console.log("hello")
//console.log(console)
console. log("log")
console. info("info")
console.warn( "warn" )
 console.error ("err")
console. assert("err" != false)
console.assert("err" == false)

console.time("for loop")
for(let i = 0;i<10;i++){
    console.log(233)
}
console.timeEnd("for loop")

console.time("while loop")
let i = 0
while(i<10){
    console.log(233)
    i++;
}
console.timeEnd("while loop")