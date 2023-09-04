// class Complex{
//     constructor(real,imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     }
//     add(num){
//         this.real += num;
//         this.imaginary += num;
//     }
// }
// let a = new Complex(1, 2);
// let b = new Complex(2, 4);
// a.add(b);
// console.log(`${a.imaginary} +  ${a.real}`);

class Human{
    constructor(name) {
        this.name = name;
    }
    walk(){
        console.log("Walk method of parent class " + this.name)
    }
    eat(){
        console.log("eat method of parent class")
    }
}
class Chlid extends Human{
    work(){
        console.log("Work..")
    }
    walk(){
        console.log("Walk method of derived class" + this.name)
    }
    eat(){
        console.log("eat method of derived class")
    }
}
k = new Human("jhabbu");
k.walk();
n = new Chlid("dabbu");
n.walk();
