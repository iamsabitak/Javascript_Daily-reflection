let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello")
        },3000)
    })
}
// let b = async()=>{
//    let b = await a()
//    console.log(b)
//    let c = await a()
//    console.log(c)
//    let d = await a()
//    console.log(d)
// }
// b()

(async()=>{
    let b = await a()
    console.log(b)
    let c = await a() // <------ This is IIFE
    console.log(c)
    let d = await a()
    console.log(d)
 })()