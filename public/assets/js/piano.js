/**
 * piano.js
 */

function pianoWave(Note) {

    //pass in some initial values for the filter and filter envelope
    var synth = new Tone.Synth({
        "oscillator": {
            "type": document.querySelector("#Oscillator").innerHTML,
            "modulationFrequency": 0.9
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

function instrument(instrument) {
    if (instrument == "Piano") {
        document.querySelector('#Oscillator').innerHTML = "triangle";
        document.querySelector('#Attack').innerHTML = "0.06";
        document.querySelector('#Decay').innerHTML = "0.04";
        document.querySelector('#Sustain').innerHTML = "0.5";
        document.querySelector('#Release').innerHTML = "0.35";
        document.querySelector('#AttackCurve').innerHTML = "linear";
        document.querySelector('#ReleaseCurve').innerHTML = "linear";
        document.querySelector('#Time').innerHTML = "0.5";
        //document.querySelector('#Velocity').innerHTML = "0.7";
    }
    if (instrument == "Violon") {
        document.querySelector('#Oscillator').innerHTML = "triangle";
        document.querySelector('#Attack').innerHTML = "4";
        document.querySelector('#Decay').innerHTML = "0";
        document.querySelector('#Sustain').innerHTML = "0";
        document.querySelector('#Release').innerHTML = "4";
        document.querySelector('#AttackCurve').innerHTML = "sine";
        document.querySelector('#ReleaseCurve').innerHTML = "sine";
        document.querySelector('#Time').innerHTML = "8";
        //document.querySelector('#Velocity').innerHTML = "80";
    }
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