/**
 * piano.js
 */

var testInstance = new AudioSynth;
var piano = Synth.createInstrument('piano');

var Note = ["C", "D", "E", "F", "G", "A", "B"];

function createPiano(nbOctave) {
    document.querySelector("#piano").innerHTML = "";

    for (var j = 0; j < nbOctave; j++) {

        // DO
        document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"piano.play('" + Note[0] + "', '" + (4 + j) + "', 1);\"></div></li>";

        for (var i = 0; i < 2; i++) {
            document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"piano.play('" + (Note[1 + i]) + "', '" + (4 + j) + "', 1);\"></div><span></span></li>";
        }

        document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"piano.play('" + (Note[3]) + "', '" + (4 + j) + "', 1);\"></div></li>";

        for (var i = 0; i < 3; i++) {
            document.querySelector("#piano").innerHTML = document.querySelector("#piano").innerHTML + "<li><div class='anchor' onclick=\"piano.play('" + (Note[4 + i]) + "', '" + (4 + j) + "', 1);\"></div><span></span></li>";
        }
    }
}

createPiano(2);