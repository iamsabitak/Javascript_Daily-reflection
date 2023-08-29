// Problem3
let p = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("I am rejected"));
      // resolve("Hey")
    }, 1000);
  });
};

let b = async () => {
  try {
    let c = await p();
    console.log(c);
  } catch (error) {
    console.log("This Error has been handled");
  }
};
p();
b();
