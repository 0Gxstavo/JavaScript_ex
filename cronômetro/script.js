var sec = 0
var min = 0
var hr = 0

var interval;

var isRunning = false;

function twoDigits(digit){
    if(digit<10) {
        return "0" + digit;
    }else {
        return digit
    }
}

function start() {
    if(isRunning == false) {
        watch();
        interval = setInterval(watch, 1000);
    }
    isRunning = true;
}

function pause() {
    clearInterval(interval);
    isRunning = false;
}

function reset() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    document.getElementById("watch").innerText = "00:00:00"
    isRunning = false;
}

function watch() {
    sec++
    if(sec==60) {
        min++;
        sec = 0;
        if(min == 60) {
            hr++;
            min = 0;
        }
    }
    document.getElementById('watch').innerText = `${twoDigits(hr)}:${twoDigits(min)}:${twoDigits(sec)}`;
}
