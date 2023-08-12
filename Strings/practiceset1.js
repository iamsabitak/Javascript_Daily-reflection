// Chapter 4 - Practice Set
//problem no 1
let str = "Sabi\"ta"
console. log(str. length)

//problem no 2
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console. log( sentence. includes (word) )
console.log(`the word "&{word}"  ${sentence.includes(word) ? "is " : "is not "}  in the sentence`)
 
//problem no 3
let name = "sabita"
console.log(name.toLowerCase())
console.log(name.toUpperCase())

//problem no 4
let str2 = "Please give Rs 1000"
// let amount = str2. slice("Please give Rs ".length)
 let amount = Number.parseInt(str2.slice(15))
console. log(amount)
console.log(typeof amount)

//problem no 4
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable.

