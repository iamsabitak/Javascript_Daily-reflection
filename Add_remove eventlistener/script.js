
let s = function(e){
        alert('HELLO 1')
    }
    let k = function(e){
        alert('Chal nikal aaya bada hyy hello wala')
    }
// let x = red.addEventListener('click',function(e){
//     alert('HELLO 1')
//     console.log(e)
//     console.log(e.target)
//     console.log(e.type)
//     console.log(e.currentTarget)
//     console.log(e.clientX)
//     console.log(e.clientY)
// })
// let y = red.addEventListener("click",function(e){
//     alert("HELLO 2")
// }) 
let a = prompt("Enter your lucky number")
red.addEventListener('click',s)
red.addEventListener('click',k)
if (a==1){
red.removeEventListener('click',s)
}
else if (a==2){
    red.removeEventListener("click",k)
}
