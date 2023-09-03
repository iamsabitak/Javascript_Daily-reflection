class Animal {
  constructor(name) {
    this.name = Animal.capitalize(name);
  }
  run() {
    console.log(`Dog ${this.name} is running so fast`);
  }
  static capitalize() {
    return (
      this.name.charAt(0).toUpperCase() + this.name.substr(1, this.name.length)
    );
  }
}
s = new Animal("jerry");
s.run();
