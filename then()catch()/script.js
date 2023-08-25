let p = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("I am promise and i am fullfilled");
        // console.log("I am promise and i am resolved");
        resolve(true);
        // reject(new Error("I am an error"));
    },2000)

})
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        // console.log("I am promise and i am reject");
        // resolve(true);
        reject(new Error("I am an error"));
    },2000)

})
// console.log(p,p1)

// TO get the value
p.then((value) => {
    console.log(value)
},error=>{
    console.log(value)
})
// To catch the error
p1.catch((error) => {
    console.log(error)
    console.log("some error occured in p1")
})
console.log(p,p1)


let p2 = new Promise((resolve)=> {
    setTimeout(() => {
        console.log("done")
    },3000)
    p1.finally(() => {
        console.log("ENd")
    })
})


