//Array Methods
let num = [1, 2, 3, 34, 4]
let b = num. toString() // b is now a string
console.log(b,typeof b)
let c = num. join("and")
console. log(c, typeof c)
// num.pop()
// let r = num.pop() // pop returns the popped element
// console.log(num,r)
// let s = num.push(56)
// console.log(num,s)
let p = num. shift ()
console. log(num,p) // Removes an element from the start of the array
let q = num. unshift (345)//returns new array length
console. log(num,p) 


//delete operator
console. log (num. length)//length will be same before or after delete
delete num[0]
console.log(num)
console. log(num. length)

//concat
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
let newArray = num.concat(num_more, num_even_more)
console.log(newArray)//returns a new array
console.log(num,num_even_more,num_more)//does not change existing array


 //short method
//  let compare = (a, b)=>{
//  return a - b
// }
let numb = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// numb. sort (compare)
//numb.reverse()
console.log (numb)

// Splice and Slice
let n = [551, 22, 3, 14, 5, 6, 7, 8, 229]
 //n.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
//  let deletedValues = n.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
 console. log (n)
// console. log(deletedValues)


// let newNum = num. slice(3)
let newNum = n. slice(3, 5)
console. log(newNum)


