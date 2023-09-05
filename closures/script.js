message = "Hey Hello";
function hello1() {
  let message = "Good morning";
  console.log("Hey this is Hello 1()" + message);
  let d = function hello2() {
    console.log(" annyoog " + message);
  };
  return d;
}
d = hello1();
d();
// hello1()

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function name1() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Sabita";
  name1();
}
init();


function x() {
  const a = () => {
    let a = 10;
    console.log(a);
    const b = () => {
      let b = 11;
      console.log(b);
      const c = () => {
        let c = 12;
        console.log(c);
      };
      c()
    };
   b()
  };
  a();
}

 x();
