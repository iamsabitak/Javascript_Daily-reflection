class Password {
  constructor() {
    console.log("Welcome to passwprd generator");
  }
  generatePassword(len) {
    let chars = "abcdefghijklmnopgrstuvwxyz";
    let numbers = "1234567890";
    let special = "!@#$%^&*() ";
    if (i < 3) {
      console.log("Your Password must be more than 3 characters");
    } 
    else {
     var i = 0;
      while (i < len) {
        this.pass += chars[Math.floor(Math.random() * chars.length)];
        this.pass += numbers[Math.floor(Math.random() * numbers.length)];
        this.pass += special[Math.floor(Math.random() * special.length)];
        i += 3;
      }
      this.pass = this.pass.substr(0, len);
      return this.pass;
    }
  }
}
let a = new Password();
console.log(a.generatePassword(17));
