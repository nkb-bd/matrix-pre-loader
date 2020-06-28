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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/matrix-loader-public.js":
/*!****************************************!*\
  !*** ./src/js/matrix-loader-public.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var animateCSS = function animateCSS(element, animation) {
    var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'animate__';
    return (// We create a Promise and return it
      new Promise(function (resolve, reject) {
        var animationName = "".concat(prefix).concat(animation);
        var node = document.querySelector(element);
        node.classList.add("".concat(prefix, "animated"), animationName); // When the animation ends, we clean the classes and resolve the Promise

        function handleAnimationEnd() {
          node.classList.remove("".concat(prefix, "animated"), animationName);
          node.removeEventListener('animationend', handleAnimationEnd);
          resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd);
      })
    );
  };

  function loftloader_finished() {
    if (window.matrixloaderPublic.loader_delay > 0) {
      setTimeout(function () {
        //if animation out class added
        var animate_out = window.matrixloaderPublic.text_animation_out;

        if (animate_out != '') {
          animateCSS('.loader-section', animate_out).then(function (message) {
            document.body.classList.add('loaded');
            removeElement();
          });
        } else {
          console.log('xxxx');
          document.body.classList.add('loaded');
          removeElement();
        }
      }, window.matrixloaderPublic.loader_delay);
    } else {
      document.body.classList.add('loaded');
      removeElement();
    }
  }

  var loader = document.getElementById('matrix-preloader-wrapper');

  function removeElement() {
    loader.remove();
  }

  if (loader) {
    window.addEventListener('load', function (e) {
      //if animation in class added
      var animate_in = window.matrixloaderPublic.text_animation_in;

      if (animate_in != '') {
        animateCSS('.loader-section', animate_in).then(function (message) {
          loftloader_finished();
        });
      } else {
        loftloader_finished();
      }
    });
  }
})();

/***/ }),

/***/ 2:
/*!*******************************************!*\
  !*** multi ./src/js/matrix-loader-public ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nakib/Practice/wp_lab/wp-content/plugins/matrix-pre-loader/src/js/matrix-loader-public */"./src/js/matrix-loader-public.js");


/***/ })

/******/ });