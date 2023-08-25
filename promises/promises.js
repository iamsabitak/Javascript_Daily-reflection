let promsie = new Promise((resolve, reject)=>{
alert("hello")  
resolve(56);
console.log("Hello one")
setTimeout(function () {
    console.log("Hello two in two Sec")
},2000)
})
console.log("Hello three")
console.log(promsie)