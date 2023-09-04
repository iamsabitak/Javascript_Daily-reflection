let a = 18 //--global scope
function ax(){ //--function scope
    let b = 8
    console.log(b)
    console.log(a)
}
ax()
console.log(a)

// {
//      let s = 89 //--block level scope
// }
// console.log(s)