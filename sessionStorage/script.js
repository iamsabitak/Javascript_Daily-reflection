console.log(
  (sessionStorage.setItem = ("name", "sabita", "hgsv", "swhjdgd", "sdhgcv"))
);
// sessionStorage.clear();
// sessionStorage.getItem = ("name", "sabita");
sessionStorage.removeItem = ("name", "sabita");

window.onstorage = (e) => {
    alert(" changed" )
    console. log(e)
}