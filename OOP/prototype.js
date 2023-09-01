const a = {
  Name: "Sabita",
  Age: 18,
  class: 12,
  sleep: () => {
    alert("Self Sleep A");
  },
};

let p = {
  sleep: () => {
    alert("Sleep 1");
  },
};
p.__proto__ = {
    Name: "Babita",
    sleep: () => {
        alert("Sleep 2");
      },
    run: () => {
        alert("Run");
      },
  };
// p.sleep()
a.__proto__ = p;
a.sleep();
console.log(a.Name);
a.run();
