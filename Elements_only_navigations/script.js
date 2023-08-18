 function func() {
    document.body.firstElementChild.style.background = "pink"
    document.body.firstElementChild.style.color = "red"
    document.body.style.background = "aqua"
    document.body.style.color = "blue"
}

let b = document.body;
console.log("First child of b" + b.firstChild);
console.log("First Elementchild of b" + b.firstElementChild);
console.log("Last child of b " + document.body.lastChild)
console.log("Last Element schild of b " + document.body.lastElementChild)