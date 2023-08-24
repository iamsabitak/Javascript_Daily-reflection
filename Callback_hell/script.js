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
    //Pyramid of doooom
    console.log("Pyramid of doooom")
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js",function goodmorning(erroe,src){
    if (error) {
        console. log(error)
        sendEmergencyMessageToCeo() ;
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap-2.bundle.min.js",function goodmorning(erroe,src){
        if (error) {
            console. log(error)
            sendEmergencyMessageToCeo() ;
            return
        }
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap-1.bundle.min.js",function goodmorning(erroe,src){
            if (error) {
                console. log(error)
                sendEmergencyMessageToCeo() ;
                return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap0.bundle.min.js",function goodmorning(erroe,src){
                if (error) {
                    console. log(error)
                    sendEmergencyMessageToCeo() ;
                    return
                }
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap1.bundle.min.js",function goodmorning(erroe,src){
                    if (error) {
                        console. log(error)
                        sendEmergencyMessageToCeo() ;
                        return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js",function goodmorning(erroe,src){
                        if (error) {
                            console. log(error)
                            sendEmergencyMessageToCeo() ;
                            return
                        }
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js",function goodmorning(erroe,src){
                            if (error) {
                                console. log(error)
                                sendEmergencyMessageToCeo() ;
                                return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js",function goodmorning(erroe,src){
                                if (error) {
                                    console. log(error)
                                    sendEmergencyMessageToCeo() ;
                                    return
                                }
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js",function goodmorning(erroe,src){
                                    if (error) {
                                        console. log(error)
                                        sendEmergencyMessageToCeo() ;
                                        return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js",function goodmorning(erroe,src){
                                        if (error) {
                                            console. log(error)
                                            sendEmergencyMessageToCeo() ;
                                            return
                                        }
                                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js",function goodmorning(erroe,src){
                                            if (error) {
                                                console. log(error)
                                                sendEmergencyMessageToCeo() ;
                                                return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js",function goodmorning(erroe,src){})
                                        })
                                         
                                    })
                                     
                                })
                                 
                            })
                             
                        })
                         
                    })
                     
                })
                 
            })
             
        })
         
    })
     
})
 

   