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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/AdminApp.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdminApp',
  data: function data() {
    return {
      topMenus: []
    };
  },
  methods: {
    setTopmenu: function setTopmenu() {
      this.topMenus = this.applyFilters('matrixloader_top_level_menu', [{
        route: 'dashboard',
        title: 'Matrix Pre Loader Setting'
      }]);
    }
  },
  mounted: function mounted() {
    this.setTopmenu();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Components/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Dashboard',
  data: function data() {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
      iframe: '',
      customImg: false,
      image_list: [],
      formData: {
        text: '',
        font_color: '',
        font_size: '',
        matrix_style: false,
        location: '',
        bgcolor: '',
        image: '',
        width: '',
        height: '',
        loader_delay: '',
        wait_image: '',
        custom_img: ''
      },
      rules: {}
    };
  },
  methods: {
    setCustomImg: function setCustomImg() {
      this.formData.custom_img = true;
      this.formData.image = this.dialogImageUrl;
    },
    fileUpload: function fileUpload() {
      var _this = this;

      if (typeof wp !== 'undefined' && wp.media && wp.media.editor) {
        wp.media.editor.send.attachment = function (props, attachment) {
          _this.dialogImageUrl = wp.media.attachment(attachment.id).get("url");

          if (_this.dialogImageUrl != '') {
            _this.dialogVisible = true;
            _this.formData.image = _this.dialogImageUrl;
          }
        };

        wp.media.editor.open();
        return false;
      }
    },
    refreshFrame: function refreshFrame() {
      var _this2 = this;

      var temp = this.iframe;
      this.iframe = '';
      setTimeout(function () {
        _this2.iframe = temp;
      }, 5);
    },
    getData: function getData() {
      var _this3 = this;

      // loader settings data and image array
      this.$adminGet({
        route: "get_settings_data"
      }).then(function (data) {
        _this3.formData.text = data.data.text;
        _this3.formData.location = data.data.location;
        _this3.formData.font_size = data.data.font_size;
        _this3.formData.font_color = data.data.font_color;
        _this3.formData.height = data.data.height;
        _this3.formData.width = data.data.width;
        _this3.formData.bgcolor = data.data.bgcolor;
        _this3.formData.loader_delay = data.data.loader_delay;
        _this3.formData.matrix_style = data.data.matrix_style == 'true' ? true : false;
        _this3.formData.wait_image = data.data.wait_image == 'true' ? true : false;
        _this3.image_list = data.data.image_list;
        _this3.formData.image = data.data.image;
        _this3.formData.custom_img = false;
        console.log(data.data.image_list);

        if (data.data.custom_img == 'true') {
          _this3.formData.custom_img = true;
          _this3.dialogVisible = true;
          _this3.dialogImageUrl = data.data.image;
        }

        if (data.success != true) {
          _this3.$notify({
            title: 'Error',
            message: 'Something went wrong !',
            type: 'error',
            offset: 20
          });

          console.log(data);
        }
      });
    },
    submitForm: function submitForm() {
      var _this4 = this;

      this.$adminPost({
        data: this.formData,
        route: "settings_data_submit"
      }).then(function (status) {
        if (status.success == true) {
          _this4.$notify({
            title: 'Success',
            message: 'Setting Saved !',
            type: 'success',
            offset: 20
          });
        } else {
          _this4.$notify({
            title: 'Error',
            message: 'Something went wrong !',
            type: 'error',
            offset: 20
          });

          console.log(status);
        }
      });
    }
  },
  mounted: function mounted() {
    this.getData();
    this.iframe = window.matrixloaderAdmin.base_url;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.el-card  {\n     border-radius: 0px!important;\n}\n.matrix-card .el-card__body{\n     padding: 0px!important;\n}\n.matrix-admin-form .el-select{\n     width: 100%;\n}.matrix-admin-form .el-select .el-input__inner{\n    background-color: #fff;\n}\n.matrix-admin-form .img-holder{\n      max-width: 70px;\n      padding: 5px;\n      background-color: #dddddd;\n}\n.bg-dark{\n     background: #99a9bf;\n}\n.grid-content{\n     border: 1px solid #eee;\n}\n.matrix-admin-form .el-input-group__append, .el-input-group__prepend{\n     border-color: #7e8993;\n}\n.matrix-admin-form .el-radio__input{\n     vertical-align: top;\n}\n.img-holder-option{\n     padding : 10px;\n     width: 2rem;\n     height:2em;\n}\n.blurDiv{\n     opacity: .4;\n}\n.pull-right{\n     float: right;\n}\n.matrix-pre-loader-img-container label:nth-child(1)  img {\n         background-color: #1ABC9C;\n}\n.matrix-pre-loader-img-container label:nth-child(2) img{\n     background-color: #34495E;\n}\n.matrix-pre-loader-img-container label:nth-child(3) img{\n     background-color: #F39C12;\n}\n.matrix-pre-loader-img-container label:nth-child(4) img{\n     background-color: #9B59B6;\n}\n.matrix-pre-loader-img-container label:nth-child(5) img{\n     background-color: #3498DB;\n}\n.matrix-pre-loader-img-container label:nth-child(6) img{\n     background-color: #E74C3C;\n}\n.matrix-pre-loader-img-container label:nth-child(7) img{\n     background-color: #2ECC71;\n}\n.matrix-pre-loader-img-container label:nth-child(8) img{\n     background-color: #2C3E50;\n}\n.matrix-pre-loader-img-container label:nth-child(9) img{\n     background-color: #F1C40F;\n}\n.matrix-pre-loader-img-container label:nth-child(10) img{\n     background-color: #8E44AD;\n}\n.matrix-pre-loader-img-container label:nth-child(11) img{\n     background-color: #2980B9;\n}\n.matrix-pre-loader-img-container label:nth-child(12) img{\n     background-color: #E74C3C;\n}\n.matrix-pre-loader-img-container label:nth-child(13) img{\n     background-color: #2C3E50;\n}.matrix-pre-loader-img-container label:nth-child(14) img{\n     background-color: #F1C40F;\n}\n.matrix-pre-loader-img-container label:nth-child(15) img{\n     background-color: #2980B9;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=template&id=bf37c1a2&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/AdminApp.vue?vue&type=template&id=bf37c1a2& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "matrixloader_app" } },
    [
      _c("div", { staticClass: "matrixloader_main_nav" }, [
        _c(
          "div",
          { staticClass: "topnav" },
          _vm._l(_vm.topMenus, function(menuItem) {
            return _c(
              "router-link",
              {
                key: menuItem.route,
                class: ["ninja-tab"],
                attrs: {
                  "active-class": "ninja-tab-active",
                  exact: "",
                  to: { name: menuItem.route }
                }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(menuItem.title) +
                    "\n            "
                )
              ]
            )
          }),
          1
        )
      ]),
      _vm._v(" "),
      _c("router-view")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=template&id=1766e998&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Components/Dashboard.vue?vue&type=template&id=1766e998& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-card",
        { staticClass: "matrix-card", attrs: { shadow: "never" } },
        [
          _c(
            "el-container",
            [
              _c("el-col", { attrs: { span: 10 } }, [
                _c(
                  "div",
                  { staticClass: "grid-content " },
                  [
                    _c("el-header", [
                      _c("h2", [_vm._v("Setup Your Pre Loader")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "el-main",
                      [
                        _c(
                          "el-row",
                          [
                            _c(
                              "el-form",
                              {
                                ref: "formData",
                                staticClass: "matrix-admin-form",
                                attrs: {
                                  "hide-required-asterisk": "",
                                  model: _vm.formData,
                                  rules: _vm.rules,
                                  "label-width": "auto"
                                }
                              },
                              [
                                _c(
                                  "el-form-item",
                                  {
                                    attrs: {
                                      label: "Loading text",
                                      prop: "name"
                                    }
                                  },
                                  [
                                    _c("el-input", {
                                      model: {
                                        value: _vm.formData.text,
                                        callback: function($$v) {
                                          _vm.$set(_vm.formData, "text", $$v)
                                        },
                                        expression: "formData.text"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-row",
                                  [
                                    _c(
                                      "el-col",
                                      { attrs: { span: 14 } },
                                      [
                                        _c(
                                          "el-form-item",
                                          { attrs: { label: "Font Size" } },
                                          [
                                            _c(
                                              "el-input",
                                              {
                                                attrs: {
                                                  placeholder: "20",
                                                  type: "number"
                                                },
                                                model: {
                                                  value: _vm.formData.font_size,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.formData,
                                                      "font_size",
                                                      _vm._n($$v)
                                                    )
                                                  },
                                                  expression:
                                                    "formData.font_size"
                                                }
                                              },
                                              [
                                                _c(
                                                  "template",
                                                  { slot: "append" },
                                                  [_vm._v("px")]
                                                )
                                              ],
                                              2
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-col",
                                      { attrs: { span: 10 } },
                                      [
                                        _c(
                                          "el-form-item",
                                          {
                                            staticClass: "pull-right",
                                            attrs: { label: "Font Color" }
                                          },
                                          [
                                            _c("el-color-picker", {
                                              model: {
                                                value: _vm.formData.font_color,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formData,
                                                    "font_color",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "formData.font_color"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Delay Millisecond(s)" } },
                                  [
                                    _c(
                                      "el-input",
                                      {
                                        attrs: {
                                          placeholder: "20",
                                          type: "number"
                                        },
                                        model: {
                                          value: _vm.formData.loader_delay,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formData,
                                              "loader_delay",
                                              _vm._n($$v)
                                            )
                                          },
                                          expression: "formData.loader_delay"
                                        }
                                      },
                                      [
                                        _c("template", { slot: "append" }, [
                                          _vm._v("ms")
                                        ])
                                      ],
                                      2
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  {
                                    attrs: { label: "Location", prop: "region" }
                                  },
                                  [
                                    _c(
                                      "el-select",
                                      {
                                        attrs: {
                                          placeholder: "Pre Loader Location"
                                        },
                                        model: {
                                          value: _vm.formData.location,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.formData,
                                              "location",
                                              $$v
                                            )
                                          },
                                          expression: "formData.location"
                                        }
                                      },
                                      [
                                        _c("el-option", {
                                          attrs: {
                                            label: "Full Webiste",
                                            value: "full"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Home Page",
                                            value: "home"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Front Page",
                                            value: "front"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Posts",
                                            value: "post"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Pages",
                                            value: "page"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Categories",
                                            value: "category"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Attachment",
                                            value: "attachment"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("el-option", {
                                          attrs: {
                                            label: "Error Page",
                                            value: "error"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-row",
                                  [
                                    _c(
                                      "el-col",
                                      { attrs: { span: 12 } },
                                      [
                                        _c(
                                          "el-form-item",
                                          {
                                            attrs: {
                                              label: "Enable Matrix Style"
                                            }
                                          },
                                          [
                                            _c("el-switch", {
                                              model: {
                                                value:
                                                  _vm.formData.matrix_style,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formData,
                                                    "matrix_style",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "formData.matrix_style"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-col",
                                      { attrs: { span: 12 } },
                                      [
                                        !this.formData.matrix_style
                                          ? _c(
                                              "el-form-item",
                                              {
                                                staticClass: "pull-right",
                                                attrs: {
                                                  label: "Background Color"
                                                }
                                              },
                                              [
                                                _c("el-color-picker", {
                                                  model: {
                                                    value: _vm.formData.bgcolor,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.formData,
                                                        "bgcolor",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "formData.bgcolor"
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { attrs: { label: "Wait for Images" } },
                                  [
                                    _c("el-switch", {
                                      model: {
                                        value: _vm.formData.wait_image,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.formData,
                                            "wait_image",
                                            $$v
                                          )
                                        },
                                        expression: "formData.wait_image"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                !this.formData.matrix_style
                                  ? _c(
                                      "el-form-item",
                                      {
                                        staticClass:
                                          "matrix-pre-loader-img-container",
                                        attrs: { label: "Pre Loader Image" }
                                      },
                                      [
                                        _vm._l(_vm.image_list, function(img) {
                                          return _c(
                                            "el-radio",
                                            {
                                              key: img,
                                              attrs: { label: img },
                                              on: {
                                                change: function($event) {
                                                  _vm.formData.custom_img = false
                                                }
                                              },
                                              model: {
                                                value: _vm.formData.image,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.formData,
                                                    "image",
                                                    $$v
                                                  )
                                                },
                                                expression: "formData.image"
                                              }
                                            },
                                            [
                                              _c("img", {
                                                staticClass:
                                                  "img-holder-option",
                                                class: {
                                                  blurDiv:
                                                    _vm.formData.custom_img
                                                },
                                                attrs: { src: img, alt: "" }
                                              })
                                            ]
                                          )
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "el-radio",
                                          {
                                            attrs: { label: true, border: "" },
                                            on: {
                                              change: function($event) {
                                                return _vm.setCustomImg()
                                              }
                                            },
                                            model: {
                                              value: _vm.formData.custom_img,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.formData,
                                                  "custom_img",
                                                  $$v
                                                )
                                              },
                                              expression: "formData.custom_img"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                            Custom\n                                        "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _vm.formData.custom_img == true
                                          ? _c(
                                              "div",
                                              { staticClass: "upload-box" },
                                              [
                                                _c(
                                                  "el-button",
                                                  {
                                                    attrs: {
                                                      type: "primary",
                                                      plain: "",
                                                      size: "small"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.fileUpload()
                                                      }
                                                    }
                                                  },
                                                  [
                                                    _vm._v("Upload"),
                                                    _c("i", {
                                                      staticClass:
                                                        "el-icon-upload"
                                                    })
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _vm.dialogImageUrl != ""
                                                  ? _c("div", [
                                                      _c("img", {
                                                        staticClass:
                                                          "img-holder",
                                                        attrs: {
                                                          src:
                                                            _vm.dialogImageUrl,
                                                          alt: ""
                                                        }
                                                      })
                                                    ])
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      2
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "el-row",
                                  [
                                    _c(
                                      "el-col",
                                      { attrs: { span: 15 } },
                                      [
                                        !this.formData.matrix_style
                                          ? _c(
                                              "el-form-item",
                                              {
                                                attrs: {
                                                  label: "Image Width & Hight"
                                                }
                                              },
                                              [
                                                _c(
                                                  "el-input",
                                                  {
                                                    attrs: {
                                                      type: "number",
                                                      placeholder: "100"
                                                    },
                                                    model: {
                                                      value: _vm.formData.width,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.formData,
                                                          "width",
                                                          _vm._n($$v)
                                                        )
                                                      },
                                                      expression:
                                                        "formData.width"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "template",
                                                      { slot: "append" },
                                                      [_vm._v("px")]
                                                    )
                                                  ],
                                                  2
                                                )
                                              ],
                                              1
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("el-col", { attrs: { span: 9 } }, [
                                      !this.formData.matrix_style
                                        ? _c(
                                            "div",
                                            [
                                              _c(
                                                "el-input",
                                                {
                                                  attrs: {
                                                    placeholder: "100",
                                                    type: "number"
                                                  },
                                                  model: {
                                                    value: _vm.formData.height,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.formData,
                                                        "height",
                                                        _vm._n($$v)
                                                      )
                                                    },
                                                    expression:
                                                      "formData.height"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "template",
                                                    { slot: "append" },
                                                    [_vm._v("px")]
                                                  )
                                                ],
                                                2
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        attrs: { type: "primary" },
                                        on: {
                                          click: function($event) {
                                            return _vm.submitForm("formData")
                                          }
                                        }
                                      },
                                      [_vm._v("Save")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("el-col", { attrs: { span: 14 } }, [
                _c(
                  "div",
                  { staticClass: "grid-content" },
                  [
                    _c(
                      "el-header",
                      [
                        _c("h2", [_vm._v("Preview")]),
                        _vm._v(" "),
                        _c(
                          "el-button",
                          {
                            on: {
                              click: function($event) {
                                return _vm.refreshFrame()
                              }
                            }
                          },
                          [_vm._v(" Refresh")]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "el-main",
                      [
                        _c(
                          "el-row",
                          [
                            _c("el-card", { attrs: { shadow: "always" } }, [
                              _c("iframe", {
                                staticClass: "frame",
                                attrs: {
                                  width: "100%",
                                  height: "500rem",
                                  src: _vm.iframe
                                }
                              })
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/js/AdminApp.vue":
/*!*****************************!*\
  !*** ./src/js/AdminApp.vue ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminApp_vue_vue_type_template_id_bf37c1a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminApp.vue?vue&type=template&id=bf37c1a2& */ "./src/js/AdminApp.vue?vue&type=template&id=bf37c1a2&");
/* harmony import */ var _AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminApp.vue?vue&type=script&lang=js& */ "./src/js/AdminApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminApp_vue_vue_type_template_id_bf37c1a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminApp_vue_vue_type_template_id_bf37c1a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/AdminApp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/AdminApp.vue?vue&type=script&lang=js&":
/*!******************************************************!*\
  !*** ./src/js/AdminApp.vue?vue&type=script&lang=js& ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./AdminApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/AdminApp.vue?vue&type=template&id=bf37c1a2&":
/*!************************************************************!*\
  !*** ./src/js/AdminApp.vue?vue&type=template&id=bf37c1a2& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_template_id_bf37c1a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./AdminApp.vue?vue&type=template&id=bf37c1a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=template&id=bf37c1a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_template_id_bf37c1a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_template_id_bf37c1a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/Components/Dashboard.vue":
/*!*****************************************!*\
  !*** ./src/js/Components/Dashboard.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1766e998___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1766e998& */ "./src/js/Components/Dashboard.vue?vue&type=template&id=1766e998&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./src/js/Components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1766e998___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1766e998___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/Components/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/js/Components/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/js/Components/Dashboard.vue?vue&type=template&id=1766e998&":
/*!************************************************************************!*\
  !*** ./src/js/Components/Dashboard.vue?vue&type=template&id=1766e998& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1766e998___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1766e998& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Dashboard.vue?vue&type=template&id=1766e998&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1766e998___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1766e998___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/js/routes.js");
/* harmony import */ var _AdminApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminApp */ "./src/js/AdminApp.vue");
window.matrixloaderBus = new window.matrixloader.Vue();
window.matrixloader.Vue.mixin({
  methods: {
    applyFilters: window.matrixloader.applyFilters,
    addFilter: window.matrixloader.addFilter,
    addAction: window.matrixloader.addFilter,
    doAction: window.matrixloader.doAction,
    $get: window.matrixloader.$get,
    $adminGet: window.matrixloader.$adminGet,
    $adminPost: window.matrixloader.$adminPost,
    $post: window.matrixloader.$post
  }
});

var router = new window.matrixloader.Router({
  routes: window.matrixloader.applyFilters('matrixloader_global_vue_routes', _routes__WEBPACK_IMPORTED_MODULE_0__["routes"]),
  linkActiveClass: 'active'
});

new window.matrixloader.Vue({
  el: '#matrixloader_app',
  render: function render(h) {
    return h(_AdminApp__WEBPACK_IMPORTED_MODULE_1__["default"]);
  },
  router: router
});

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _Components_Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Dashboard */ "./src/js/Components/Dashboard.vue");

var routes = [{
  path: '/',
  name: 'dashboard',
  component: _Components_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]
}];

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nakib/Practice/wp_lab/wp-content/plugins/matrix-pre-loader/src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });