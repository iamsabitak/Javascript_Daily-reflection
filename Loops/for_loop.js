//program to find the sum of first 10 natural number
//for loop
let sum = 0
let n = 5
for(let i=0;i<n;i++){
    sum += i+1
}
console.log(sum)


//practice Q.no.1--program to find the factorial of given numb
let fact = 1
let numb = 5
for(let i = 1;i<=numb;i++){
    fact *= i
}
console.log(fact)

//for-in loop
let x = {
    Sabita : 10,
nabin :70,
nilam : 20,
janaki:10
}
for (let a in x){
console.log("Marks of " + a + " is " + x[a])
}
//for-of loop
for (let b of "Sabita"){
    console.log(b)
    }
    //difference of for-in or for-of loop
    for (let b in "Sabita"){
        console.log(b)
        }
        