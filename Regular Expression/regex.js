const regex = /very/g;
// const regex = /(Sabitasabita){2}/gi
const text = "Sabita is a very very very awesome girl";
console.log(text.replace("very", "VERY"));
console.log(text.replace(regex, "VERY"));
