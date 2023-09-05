//Prblm 1
const a = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 2000);
  });
};
(async () => {
   let x = await a("Hello");
  console.log("I am resolving after 2 sec.");
  console.log(x);
  let y = await a("World");
  console.log("I am resolving after 2 sec.");
  console.log(y);
})();

//Problem 2
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(4, 5, 1));

//Problem 3
function simpleInterset(P, t, r) {
  return (P * t * r) / 100;
}
console.log(simpleInterset(1000, 5, 1));
