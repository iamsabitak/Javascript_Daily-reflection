class Smartphone{
    constructor(age,grade) {
        this.age = age;
        this.grade = grade;
        console.log("You are " + age + " and you read in class " + grade);
    }
    ring(name1){
       this.name1 = name1;
   alert("You phone is Ringing " + name1) 
   console.log("Phone Ringing......")
       }
       vibrate(name2){
        this.name2 = name2;
           alert("Phone is Vibrating"+ name2)
           console.log("Vibrating.....")
               }
       call(name3){
        this.name3 = name3;
           alert("You are Calling someone " + name3)
           console.log("Calling someone")
       }
       
   }
   phone = new Smartphone(12,6);
   phone1 = new Smartphone(18,12);
   phone.ring("Sabita");
   phone.call("Roshan");
   phone.vibrate("Dada");
   phone1.ring("Niru");
   phone1.call("Didi");
   phone1.vibrate("Mamu");