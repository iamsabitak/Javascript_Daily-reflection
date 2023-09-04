// No need to do this 
// let d = arr[0]
// console.log(d)

let arr = [1,3,4,6,7,8,9,10,11,]
// let[a,b,c, ...rest] = arr
// console.log(a,b,c,rest)
let[a, , b, ...rest] = arr
console.log(a,b,rest)


let{c,d} = {c:1, d:2}
console.log(c,d)

// Spread Operators 
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

let s = (x,y,z)=>{
    return x+y+z
}
console.log(s(...arr1))

let obj2 = {
    name: "Harry",
    company: "Company xyz",
    address: "XYZ"
}
    // console. log({...obj2, name: "John" })//value will change
    console. log({ name: "John",...obj2 })//value will not change
