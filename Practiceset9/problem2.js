var loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " It Worked");
    };
    document.head.appendChild(script);
  });
};
// Problem1
let a = loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
);
a.then((value) => {
  console.log(value);
});
