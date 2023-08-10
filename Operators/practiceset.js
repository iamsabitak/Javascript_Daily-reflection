// Chapter 1 - Q1. - Create a variable type String and  Tey to add a numberto it.
let a = "sabita"
let b = 9
let c = a + b
console.log(c)
//Q2-Use a operator to find the datatype of the string of teh last question
console.log(typeof c)
//O3-Create a const object in js.  can you change it to hold a number later
const x = {

    name : "sabita",
    section : 1,
    isPrincipal: false
}

//x = 24 - throws an error so the answer is no.

//Q-4  - try to add a new object to the const object
x['friend'] = "janaki"
x.name = "nabin" //x.name and x['name'] are same .
console. log(x)

//Q-5 --program to create a word - meaning dictoinary of 3
const dict = {
    
    appreciate: "recognize the full worth of.",
   
    ataraxia: "a state of freedom from emotional disturbance and anxiety",
   
    yakka: "work, especially hard work."
}
    console. log(dict[ 'yakka' ])
    console. log(dict.appreciate)