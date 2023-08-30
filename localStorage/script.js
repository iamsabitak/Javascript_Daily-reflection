localStorage.setItem("Name","Sabita")
let key = prompt( "Enter key you want to set" )
let value = prompt( "Enter value you want to set" )

localStorage. setItem(key, value)
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)
if (key == "India" || key == "green") {
    localStorage.removeItem(key);
}
// if (key==0){
    // localStorage.clear()
// }
console.log(localStorage.length)
console.log(localStorage.key(0))
console.log(localStorage.key(2))
console.log(localStorage.key(3))
console.log(localStorage.key(1))