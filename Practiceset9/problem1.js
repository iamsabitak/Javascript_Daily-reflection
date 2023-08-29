var loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done Successfully");
    };
    document.head.appendChild(script);
  });
};

// Problem2
let fun = async () => {
  console.log(new Date().getSeconds());
  let a = await loadScript(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
  );
  console.log(a);
  console.log(new Date().getSeconds());
};
fun();
