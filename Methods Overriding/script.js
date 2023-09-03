class Employee{
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
class Employee1 extends Employee{
    employeecoffee(){
        console.log("Employee needs some coffee");
    }
    
    employeeLeave(){
super.employeeLeave();
console.log("Autometically granted a new leave");
    }
}
e = new Employee1();
e.login();
e.logout()
e.employeecoffee();
e.employeeLeave();