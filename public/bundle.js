/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);