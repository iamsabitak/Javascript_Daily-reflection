let num = [3, 5, 1, 2, 4]
for(let i=0; i<num. length; i++){
    console. log (num[i])}

    // ForEach Loop
    num.forEach((element) => {
        console.log(element * element + "forEach")
    })

    // Array.from
let name = "Sabita "
let arr = Array. from(name )
console. log(arr)

// for...of
 for (let i of name){
    console. log(i)
}
// for...in
for (let i in name){
    console. log(name[i])
}