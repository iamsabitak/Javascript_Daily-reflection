// const sayHello = () => {console. log("Hello"); console. log("Hi")}
// const sayHello = () => console. log("Hello"); console. log("Hi")//can be written like this too

const sayHello = (name,greet) => console. log(greet,name );
sayHello("Sabita" ,"Hello")

const x = {
name: "Sabita", 
role: "Js Developer",
exp: 30,
show: function() {
    setTimeout(()=>{
        console.log(this);
        console. log(`The name is ${this.name}\nThe role is ${this.role}\nThe exp is ${this.exp} years`)
    },2000)
    // console.log(this);
    setTimeout(function(){
        console.log(this);
        console. log(`The name is ${this.name}\nThe role is ${this.role}\nThe exp is ${this.exp} years`)
    },3000)
// console. log(`The name is ${this.name}\nThe role is ${this.role}\nThe exp is ${this.exp} years`)
}
}
// console.log(x)
// console.log(x.name)
// console.log(x.role) //---> instead of This 
// console.log(x.exp)
x.show() //--> we can do this