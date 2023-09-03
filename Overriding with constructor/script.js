class Employee{
    // constructor() {
    //     console.log("Employee constructor of parent class is here");
    // } if we create a constructor in parent class in Child class js engine automectically create a constructor
    login(){
        console.log("Emyoloyee has login");
    }
    logout(){
        console.log("Employee has logout");
    }
    employeeLeave(){
        console.log("Leave for 2 day");
    }
}
class Programmar extends Employee{
    constructor(name) {
        super(); // super method must be called when we create a new constructor in child class before "this"
        this.name = name;
        console.log(`${name} - Employee constructor of child class is here`);
    }
    employeecoffee(){
        console.log("Employee needs some coffee");
    } 
    employeeLeave(){
super.employeeLeave();
console.log("Autometically granted a new leave");
    }
}
e = new Programmar("Sabita");
e.login();
e.logout()
e.employeecoffee();
e.employeeLeave();