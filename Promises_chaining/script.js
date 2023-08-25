let p = new Promise((resolve, reject) => {
setTimeout(()=>{
    console.log("Hey What's up?");
},3000)
    
    resolve(78)
})
p.then((value) => {
    console.log(value);
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve("promise 1")},3000)

})
return p1
        }).then((value)=>{
            console.log("We are done1");
            return 2
        }).then((value)=>{
            console.log("We are done2");
            return 2
        }).then((value)=>{
            console.log("We are done3");
            return 2
        }).then((value)=>{
            console.log("Now, We are surely done");
            return 2
        })
        
        
