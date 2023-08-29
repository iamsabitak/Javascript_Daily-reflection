let p = fetch("https://goweather.herokuapp.com/weather/Nepal")
p.then((response) => { 
   console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    console.log(response.body)
    // console.log(response.data)
    return response.json() 
    }).then((response) => {
    console.log(response)
})