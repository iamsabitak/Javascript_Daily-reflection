//Push ()
// let array = [1,2,3,4,5,6]
// let r = array.push(12)// add the element in the last of the array
//  console.log(r,array)


//toString()
// let array = [1,2,3,4,5,6]
// let r = array.toString() //change into string
//  console.log(typeof r)
//console.log(r)

//join()
// let array = [1,2,3,4,5,6]
// let r = array.join(" or ")// add the element written inside the join()
//  console.log(r)

//reverse()
// let array = [1,2,3,4,5,6]
// let r = array.reverse() //it will reverse the element
//  console.log(r)

 //pop()
//  let array = [1,2,3,4,5,6]
// let r = array.pop()//last element will be removed
//  console.log(r,array)

//shift()
// let array = [1,2,3,4,5,6]
// let r = array.shift() 
// //  console.log(typeof r)
//  console.log(array,r)//first element will be removed,opposite of pop()

//unsift()
// let array = [1,2,3,4,5,6]
// let r = array.unshift(7) //add the element at the first,opposite of push
// //  console.log(typeof r)
//  console.log(array,r)

//reduce()
// let array = [1,2,3,4,5,6]
// let red_func = ((x,y) => {
//     return x+y
// })
//reduces an array to a single value
// let arr = array.reduce(red_func) //
// console.log(arr)

//map()
// let array = [1,2,3]
// let map_func = ((x,y,z) => {
// //console.log(x,y,z)
//     return x + y
// })
// let arr = array.map(map_func)
// //creates a new array by performing some operation on each array element
//  console.log(arr,array)

//filter()
let array = [1,2,3,4,5,6,7]
let fil_func = ((x) => {
    return x > 3
})
//an array with values that passes the test and creates a new array
let arr = array.filter(fil_func)
console.log(arr)



