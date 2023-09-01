class Smartphone{
 ring(name){
    this.name = name;
alert("You phone is Ringing " + name) 
console.log("Phone Ringing......")
    }
    vibrate(){
        alert("Vibrating.....")
        console.log("Vibrating.....")
            }
    call(){
        alert("Calling....")
        console.log("Calling someone")
    }
    
}
phone = new Smartphone();
phone.ring("Sabita");
phone.call();
phone.vibrate();