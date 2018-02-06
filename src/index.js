/**
 * Index.js
 */

var context = null;
var usingWebAudio = true;
if (typeof AudioContext !== 'undefined') {
    context = new AudioContext();
} else if (typeof webkitAudioContext !== 'undefined') {
    context = new webkitAudioContext();
} else {
    usingWebAudio = false;
}
var playing = false;
var osc = null;
var freq = 0;
var STEP_CONSTANT = Math.pow(2.0, 1.0 / 12.0);
function toggle() {
    if (playing && osc) {
        playing = false;
        osc.stop(0);
    } else {
        playing = true;
        osc = context.createOscillator();
        osc.connect(context.destination);
        osc.frequency.value = freq;
        osc.start(0);
    }
}
function updateFreq(newFreq) {
    console.log(newFreq);
    freq = newFreq;
    if (osc) {
        osc.frequency.value = freq;
    }
}

var button = document.querySelector('#white1');
button.addEventListener("mousedown", function () {
    updateFreq(440);
    button.addEventListener("mouseup", function () {
        updateFreq(0);
    });
});

toggle();

window.onload = function () {
    if (!usingWebAudio) {
        document.getElementById("audioControls").innerHTML = "<p>Web audio required.</p>"
    }
}