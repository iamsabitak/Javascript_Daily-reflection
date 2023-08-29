// problem 4
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello1");
    }, 1000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello2");
    }, 2000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello3");
    }, 3000);
  });
};
let run = async () => {
    console.log(new Date().getSeconds()+" Start")
    console.time("run")
  let a = await p1();
  let b = await p2();
  let c = await p3();
  console.log(a,b,c);
  console.log(new Date().getSeconds() + " End")
console.timeEnd("run")
};
run();

let run2 = async () => {
    console.time("run2")
  let a = await p1();
  let b = await p2();
  let c = await p3();
let abc = await Promise.all([a,b,c])
console.log(abc);
console.timeEnd("run2")
};
run2();

