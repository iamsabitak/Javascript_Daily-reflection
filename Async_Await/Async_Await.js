async function hey(){
let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data 1")
    },3000)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Data 2")
    },5000)
})
// promise1.then(alert)
// promise2.then(alert)
console.log("Fetching Data 1 plz wait...")
let p1 = await promise1
console.log("Data 1 Fetched : " + p1 )
console.log("Fetching Data 2 plz wait...")
let p2 = await promise2
console.log("Data 2 Fetched : " + p2 )
return [p1,p2]
}
// hey();
const cherry = () => {
console.log("Hey  am Sabita and I am not waiting")
}
cherry()
hey().then((value)=>{
console.log(value)
})
console.log("This is not the end...")

// async function hey(){
//     return "kochiniwa"
// }
// hey().then((x)=>{
//     alert(x)
// })