class Student {
  constructor(name) {
    this._name = name;
    console.log("I am " + this._name);
  }
  fly() {
    console.log("panchi bani udti firu mast gagan me");
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    console.log("She is " + newName);
  }
}
let n = new Student("Sabita");
console.log(n.name);
n.fly();
n.name = "Nilam";
let c = 4958;
console.log(n instanceof Student);
console.log(c instanceof Student);
