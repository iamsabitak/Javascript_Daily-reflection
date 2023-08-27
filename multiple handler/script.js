let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Promise is resolved now");
        resolve();
        alert("Hey Promise is not resolved")
        // reject("Promise is rejected")
        // reject();
    },2000)
})
p.then(() => {
    console.log("Hello")
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
resolve(4)},3000)
        }).then((value)=>{console.log(value)})
       })

p.then((value) => {
    // console.log(value)
    console.log("This Promise is resolved now")
})
p.catch((value)=>{
console.log(value)
})
p.catch(()=>{
    console.log("Promise is rejected")
    })