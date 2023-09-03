class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }
    eat(){
        console.log(this.name +" whose color is " + this.color + " was Eating Banana.");
    }
    sout(){
        console.log(this.name +" whose color is " + this.color + " was Shouting in the Zoo.");
    }
}
class Monkey extends Animal{
    act(){
        console.log(this.name +" who is a monkey having color " + this.color + " acts like humans");
    }
}
monkey1 = new Monkey("Chimpu","black")
monkey2 = new Monkey("champu","red")
// monkey3 = new Animal("champu","red")
monkey1.eat()
monkey2.eat()
monkey1.act()
monkey2.act()



