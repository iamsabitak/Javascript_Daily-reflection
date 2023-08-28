//Callbacks
function loadScript(src, Callbacks) {
    var script = document. createElement ("script");
    script.src = src;
    script.onload = function() {
    console. log( "Loaded script with SC: " + src)
    Callbacks(null,src);
    }
    script.onerror = function() {
        console. log("Error loading script with SRC:" + src);
        Callbacks(new Error("Src got some error"))
    }
    document.body.appendChild(script);
     }
    function goodmorning(error, src) {
        if (error) {
        console. log(error)
        sendEmergencyMessageToCeo();
        return;
    }
    alert ('Good morning' + src);
}

    function Hello(){
        alert("Ni hao");
    }
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",goodmorning)