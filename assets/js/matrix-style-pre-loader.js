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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/matrix-style-pre-loader.js":
/*!*******************************************!*\
  !*** ./src/js/matrix-style-pre-loader.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var c = document.getElementById("matrix-canvas");
var ctx = c.getContext("2d");
ctx.font = "30px cursive"; //making the canvas full screen

c.height = window.innerHeight;
c.width = window.innerWidth; //chinese characters - taken from the unicode charset

var matrix = "ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂ0ｵﾘｱﾎ1ﾃﾏｹ2ﾒ*ｴｶ3+ｷﾑﾕﾗ ﾘｾﾈｽﾀﾇﾍｦｲｸｺｿﾁﾄﾉﾌﾔﾖﾙﾚﾛﾝ"; //converting the string into an array of single characters

matrix = matrix.split("");
var font_size = 20;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column

var drops = []; //x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)

for (var x = 0; x < columns; x++) {
  drops[x] = 1;
} //drawing the characters


function draw() {
  //Black BG for the canvas
  //translucent BG to show trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#0F0"; //green text

  ctx.font = font_size + "px arial"; //looping over drops

  for (var i = 0; i < drops.length; i++) {
    //a random chinese character to print
    var text = matrix[Math.floor(Math.random() * matrix.length)]; //x = i*font_size, y = value of drops[i]*font_size

    ctx.fillText(text, i * font_size, drops[i] * font_size); //sending the drop back to the top randomly after it has crossed the screen
    //adding a randomness to the reset to make the drops scattered on the Y axis

    if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0; //incrementing Y coordinate

    drops[i]++;
  }
}

setInterval(draw, 55);
jQuery(document).ready(function () {
  console.log(window.matrixloaderPublic.wait_image);

  if (window.matrixloaderPublic.wait_image == true) {
    jQuery(window).on("load", function () {
      hide_loader_matrix();
    });
  } else {
    hide_loader_matrix();
  }
});

function hide_loader_matrix() {
  jQuery('#matrix-canvas').delay(window.matrixloaderPublic.loader_delay).fadeOut("slow");
  setTimeout(matrix_plugin_remove_preloader, window.matrixloaderPublic.loader_delay);

  function matrix_plugin_remove_preloader() {
    jQuery('#matrix-canvas').remove();
  }
}

/***/ }),

/***/ 3:
/*!*************************************************!*\
  !*** multi ./src/js/matrix-style-pre-loader.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nakib/Practice/wp_lab/wp-content/plugins/matrix-pre-loader/src/js/matrix-style-pre-loader.js */"./src/js/matrix-style-pre-loader.js");


/***/ })

/******/ });