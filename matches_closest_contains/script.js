let id1 = document.getElementById("id1");
console.log(id1);
let id2 = document.getElementById("id2");
console.log(id2);
console.log(id1.matches(".class"));
console.log(id1.matches(".element1"));
let sp1 = document.getElementById("sp1")
console.log(sp1.closest(".element1"))
console.log(sp1.closest("#sp1"))
console.log(id1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(sp1))