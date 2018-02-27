/**
 * piano.js
 */

function pianoWave(Note) {

    //pass in some initial values for the filter and filter envelope
    var synth = new Tone.Synth({
        "oscillator": {
            "type": "pwm",
            "modulationFrequency": 0.2
        },
        "envelope": {
            "attack": document.querySelector("#Attack").innerHTML,
            "decay": document.querySelector("#Decay").innerHTML,
            "sustain": document.querySelector("#Sustain").innerHTML,
            "release": document.querySelector("#Release").innerHTML,
            "attackCurve": document.querySelector("#AttackCurve").innerHTML,
            "releaseCurve": document.querySelector("#ReleaseCurve").innerHTML
        }
    }).toMaster();

    synth.triggerAttackRelease(Note, document.querySelector("#Time").innerHTML);

}

var Note = ["C", "D", "E", "F", "G", "A", "B"];

function createPiano(nbOctave) {
    document.querySelector("#piano").innerHTML = "";

    for (var j = 0; j < nbOctave; j++) {

        // DO
        document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"pianoWave('" + Note[0] + (4 + j) + "');\"></div></li>";

        for (var i = 0; i < 2; i++) {
            document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"pianoWave('" + (Note[1 + i]) + (4 + j) + "', '8n');\"></div><span></span></li>";
        }

        document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"pianoWave('" + (Note[3]) + (4 + j) + "');\"></div></li>";

        for (var i = 0; i < 3; i++) {
            document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"pianoWave('" + (Note[4 + i]) + (4 + j) + "');\"></div><span></span></li>";
        }
    }
}

createPiano(2);