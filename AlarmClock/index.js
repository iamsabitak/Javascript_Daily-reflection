function play () {
    var audio = new Audio ('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}
setInterval (() => {
let d = new Date()
time. innerHTML = d. toDateString() + '' + d. toTimeString()
// time. innerHTML = time. innerHTML + Date();
}, 1000)

const setAlarm = (second) => {
setTimeout (() => {
    play()
},second*1000)
}

let s = prompt ("After how many seconds do you want an alarm?")
setAlarm(parseInt(s) )
