let a = [
    "Initializing Hack tool....",
"Connecting to FacebooK....",
"Connecting to server 1....",
"Connection failed. Retrying....",
"Connecting to server 2....",
"Connected Successfully....",
"Username sabita....",
"Trying Brute Force....",
"200K passwords tried...",
"Match not found....",
"Another 200K passwords tried....",
"Match not found....",
"Another 200K passwords tried...",
"Match not found....",
"Another 200K passwords tried...",
"Match found....",
"Accessing Account....",
"Hack Successful...."
]


let sleep = async()=> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a)
    },2000)
})
}
    const showHack = async (message)=>{
        await sleep(2)
        // console.log (message)
        text.innerHTML = text.innerHTML + message + "<br>"
    }

    let x = (async () => {
        for(let i=0; i<a.length; i++){
        await showHack(a[i])
        }
    })
    x();