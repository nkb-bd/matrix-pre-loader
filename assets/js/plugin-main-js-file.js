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
      topMenus: [],
      mainLogo: '',
      pluginLink: 'https://wordpress.org/plugins/matrix-pre-loader/#reviews'
    };
  },
  methods: {
    setTopmenu: function setTopmenu() {
      this.topMenus = this.applyFilters('matrixloader_top_level_menu', [{
        route: 'dashboard',
        title: 'Matrix Pre Loader Setting'
      }, {
        route: 'extra',
        title: 'Extra'
      }]);
    },
    redirectTo: function redirectTo() {
      window.open(this.pluginLink, "_blank");
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.setTopmenu();
    this.$adminGet({
      route: "get_main_icon_svg"
    }).then(function (data) {
      console.log(data);
      console.log(data.data);
      _this.mainLogo = data.data;
    });
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
      loaderActive: true,
      excludeSwitch: false,
      submitDisable: false,
      validImage: true,
      options: [],
      dialogVisible: false,
      dialogImageUrl: '',
      iframe: '',
      customImg: false,
      image_list: [],
      animate_class_list_array: [],
      animate_class_list: 'flash bounce shake tada swing wobble pulse flip flipInX flipOutX flipInY flipOutY fadeIn fadeInUp fadeInDown fadeInLeft fadeInRight fadeInUpBig fadeInDownBig fadeInLeftBig fadeInRightBig fadeOut fadeOutUp fadeOutDown fadeOutLeft fadeOutRight fadeOutUpBig fadeOutDownBig fadeOutLeftBig fadeOutRightBig bounceIn bounceInDown bounceInUp bounceInLeft bounceInRight bounceOut bounceOutDown bounceOutUp bounceOutLeft bounceOutRight rotateIn rotateInDownLeft rotateInDownRight rotateInUpLeft rotateInUpRight rotateOut rotateOutDownLeft rotateOutDownRight rotateOutUpLeft rotateOutUpRight hinge rollIn rollOut',
      formData: {
        active: true,
        text: '',
        font_color: '',
        font_size: '',
        matrix_style: false,
        location: '',
        exclude: [],
        bgcolor: '',
        bg_image: '',
        opacity: 0,
        image: '',
        width: '',
        height: '',
        loader_delay: '',
        wait_image: '',
        custom_img: '',
        image_offset: '',
        loader_animation_in: '',
        loader_animation_out: '',
        text_animation_in: '',
        text_animation_in_type: '',
        close_button_on: false,
        show_per_session: ''
      }
    };
  },
  methods: {
    checkImage: function checkImage() {
      this.validImage = true;
    },
    invalidImage: function invalidImage() {
      this.validImage = false;
      return true;
    },
    setCustomImg: function setCustomImg() {
      this.formData.custom_img = true;
      this.formData.image = this.dialogImageUrl;
    },
    formatTooltip: function formatTooltip(val) {
      return val;
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
        _this3.formData.active = data.data.active;
        _this3.loaderActive = data.data.active;
        _this3.formData.location = data.data.location;
        _this3.formData.font_size = data.data.font_size;
        _this3.formData.font_color = data.data.font_color;
        _this3.formData.height = data.data.height;
        _this3.formData.width = data.data.width;
        _this3.formData.bgcolor = data.data.bgcolor;
        _this3.formData.bg_image = data.data.bg_image;

        if (data.data.bg_image != '') {
          _this3.checkImage();
        }

        _this3.formData.opacity = parseFloat(data.data.opacity);
        _this3.options = [{
          label: 'Pages',
          options: data.data.pages_posts.pages
        }, {
          label: 'Posts',
          options: data.data.pages_posts.posts
        }];
        _this3.formData.exclude = data.data.exclude;

        if (data.data.exclude.length > 0) {
          _this3.excludeSwitch = true;
        }

        _this3.formData.loader_delay = data.data.loader_delay;
        _this3.formData.matrix_style = data.data.matrix_style == 'true' ? true : false;
        _this3.formData.wait_image = data.data.wait_image == 'true' ? true : false;
        _this3.image_list = data.data.image_list;
        _this3.formData.image = data.data.image;
        _this3.formData.image_offset = data.data.image_offset;
        _this3.formData.custom_img = false;
        _this3.formData.loader_animation_in = data.data.loader_animation_in;
        _this3.formData.loader_animation_out = data.data.loader_animation_out;
        _this3.formData.text_animation_in = data.data.text_animation_in;
        _this3.formData.text_animation_in_type = data.data.text_animation_in_type;
        _this3.formData.close_button_on = data.data.close_button_on;
        _this3.formData.show_per_session = data.data.show_per_session;

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
    var _this5 = this;

    this.getData();
    this.iframe = window.matrixloaderAdmin.base_url;
    this.animate_class_list_array = this.animate_class_list.split(' ');
    this.$router.beforeEach(function (to, from, next) {
      var self = _this5;

      if (to.name == 'dashboard') {
        next();
      } else {
        _this5.$confirm('Click save to save changes or cancel ?').then(function () {
          self.submitForm();
          next();
        })["catch"](function () {
          next();
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Extra.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Components/Extra.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Extra',
  data: function data() {
    return {
      Author: 'https://www.github.com/nkb-bd',
      tableData: [{
        Fading_entrances: 'fadeIn',
        Fading_exits: 'fadeOut',
        Flippers_In: "flipInX",
        Flippers_Out: "flipOutX",
        Sliding_entrances: "slideInRight",
        Sliding_exits: "slideOutLeft"
      }, {
        Fading_entrances: 'fadeInLeft',
        Fading_exits: 'fadeOutRight',
        Flippers_In: "flipInY",
        Flippers_Out: "flipOutY",
        Sliding_entrances: "slideInUp",
        Sliding_exits: "slideOutUp"
      }]
    };
  },
  methods: {
    redirrestUrl: function redirrestUrl() {
      window.open(this.Author, "_blank");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./src/js/AdminApp.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.topnav a.ninja-tab-active {\n    color: #fff!important;\n    background-color: #0172aa!important;\n    border-bottom: 2px solid #0172aa!important;\n}\n.matrixloader_main_nav{\n    width: 100%;\n}\n#matrixloader_app{\n    margin-left: -20px;\n}\n.matrix-card{\n    margin: 20px;\n}\n", ""]);

// exports


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
exports.push([module.i, "\n.el-slider__runway {\n     width: 100%;\n     height: 6px;\n     margin: 16px 0;\n     background-color: #e4e7ed;\n     border-radius: 3px;\n     position: relative;\n     cursor: pointer;\n     vertical-align: middle;\n}\n.el-slider:after, .el-slider:before {\n     display: table;\n     content: \"\";\n}\n.el-slider__button-wrapper .el-tooltip, .el-slider__button-wrapper:after {\n     display: inline-block;\n     vertical-align: middle;\n}\n.el-slider__bar {\n     height: 6px;\n     background-color: #409eff;\n     border-top-left-radius: 3px;\n     border-bottom-left-radius: 3px;\n     position: absolute;\n}\n.el-slider__button-wrapper {\n     height: 36px;\n     width: 36px;\n     position: absolute;\n     z-index: 1001;\n     top: -15px;\n     transform: translateX(-50%);\n     background-color: transparent;\n     text-align: center;\n     -webkit-user-select: none;\n        -moz-user-select: none;\n         -ms-user-select: none;\n             user-select: none;\n     line-height: normal;\n}\n.el-slider__button {\n     width: 16px;\n     height: 16px;\n     border: 2px solid #409eff;\n     background-color: #fff;\n     border-radius: 50%;\n     transition: .2s;\n     -webkit-user-select: none;\n        -moz-user-select: none;\n         -ms-user-select: none;\n             user-select: none;\n}\n.el-slider__button-wrapper:after {\n     content: \"\";\n     height: 100%;\n}\n.el-card  {\n     border-radius: 0px!important;\n}\n.matrix-card .el-card__body{\n     padding: 0px!important;\n}\n.matrix-admin-form .el-select{\n     width: 100%;\n}.matrix-admin-form .el-select .el-input__inner{\n    background-color: #fff;\n}\n.matrix-admin-form .img-holder{\n      max-width: 70px;\n      padding: 5px;\n      background-color: #dddddd;\n}\n.bg-dark{\n     background: #99a9bf;\n}\n.grid-content{\n     border: 1px solid #eee;\n}\n.matrix-admin-form .el-input-group__append, .el-input-group__prepend{\n     border-color: #7e8993;\n}\n.matrix-admin-form .el-radio__input{\n     vertical-align: top;\n}\n.img-holder-option{\n     padding : 10px;\n     width: 2rem;\n     height:2em;\n}\n.blurDiv{\n     opacity: .4;\n}\n.pull-right{\n     float: right;\n}\n.matrix-pre-loader-img-container label:nth-child(1)  img {\n         background-color: #1ABC9C;\n}\n.matrix-pre-loader-img-container label:nth-child(2) img{\n     background-color: #34495E;\n}\n.matrix-pre-loader-img-container label:nth-child(3) img{\n     background-color: #F39C12;\n}\n.matrix-pre-loader-img-container label:nth-child(4) img{\n     background-color: #9B59B6;\n}\n.matrix-pre-loader-img-container label:nth-child(5) img{\n     background-color: #3498DB;\n}\n.matrix-pre-loader-img-container label:nth-child(6) img{\n     background-color: #E74C3C;\n}\n.matrix-pre-loader-img-container label:nth-child(7) img{\n     background-color: #2ECC71;\n}\n.matrix-pre-loader-img-container label:nth-child(8) img{\n     background-color: #2C3E50;\n}\n.matrix-pre-loader-img-container label:nth-child(9) img{\n     background-color: #F1C40F;\n}\n.matrix-pre-loader-img-container label:nth-child(10) img{\n     background-color: #8E44AD;\n}\n.matrix-pre-loader-img-container label:nth-child(11) img{\n     background-color: #2980B9;\n}\n.matrix-pre-loader-img-container label:nth-child(12) img{\n     background-color: #E74C3C;\n}\n.matrix-pre-loader-img-container label:nth-child(13) img{\n     background-color: #2C3E50;\n}.matrix-pre-loader-img-container label:nth-child(14) img{\n     background-color: #F1C40F;\n}\n.matrix-pre-loader-img-container label:nth-child(15) img{\n     background-color: #2980B9;\n}\n.el-header{\n     padding: 0 5px;\n     margin: 10px 0px;\n}\n#matrixloader_app .el-tabs--left .el-tabs__header.is-left{\n     margin-right: 0px;\n}\n#matrixloader_app .el-tabs--border-card{\n     box-shadow: none!important;\n}\n /*sub menu*/\n.el-tabs--left .el-tabs__header.is-left {\n}\n.el-tabs__content .tab-title{\n     background: #f1f1f1;\n     padding:10px 15px;\n}\n.el-tabs--border-card .el-tabs__content {\n     padding: 0px!important;\n}\n.el-form-item__label-wrap, .el-form-item__content{\n     margin: 0px!important;\n}\n.el-form-item {\n     padding: 0px 20px;\n}\n.el-form-item__label-wrap{\n     float: none!important;\n}\n.is-disabled,.el-tabs__nav-next {\n     display: none;\n}\n.el-tabs--left.el-tabs--border-card .el-tabs__item.is-left {\n     color:     #5c5b59;\n}\n.el-input-number__decrease {\n     left: 3px!important;\n}\n.el-tabs--left .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--left .el-tabs__nav-wrap.is-right.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-left.is-scrollable, .el-tabs--right .el-tabs__nav-wrap.is-right.is-scrollable {\n     padding: 38px 0!important;\n}\n.el-tabs--left .el-tabs__nav.is-left{\n     min-height: 450px;\n}\n.el-form-item__label{\n     float: none!important;\n}\n.active-matrix-preloader{\n   color: #409EFF;\n   font-weight:500;\n   font-size:14px;\n   height: 20px;\n}\n.inactive{\n   color:red;\n   font-weight:500;\n   font-size:14px;\n   height: 20px;\n}\n.inactive-pluign-matrixloader .matrix-admin-form,.inactive-pluign-matrixloader .matrix-preloader-preview-area{\n     opacity:.5;\n     pointer-events:none;\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./src/js/AdminApp.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./AdminApp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
          [
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
            _vm._v(" "),
            _c(
              "el-popover",
              {
                attrs: {
                  placement: "top-start",
                  title: "Let us know what you think",
                  width: "200",
                  trigger: "hover",
                  content:
                    "Do leave a review if you liked it or you can help me to improve the plugin"
                }
              },
              [
                _c(
                  "el-button",
                  {
                    staticStyle: {
                      padding: "2px",
                      float: "right",
                      "margin-right": "20px"
                    },
                    attrs: {
                      slot: "reference",
                      href:
                        "https://wordpress.org/plugins/matrix-pre-loader/#reviews"
                    },
                    on: { click: _vm.redirectTo },
                    slot: "reference"
                  },
                  [
                    _c("img", {
                      staticStyle: { "max-width": "40px" },
                      attrs: { src: _vm.mainLogo }
                    })
                  ]
                )
              ],
              1
            )
          ],
          2
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
            {
              class:
                _vm.formData.active == false
                  ? "matrix-admin-form inactive-pluign-matrixloader"
                  : ""
            },
            [
              _c("el-col", { attrs: { span: 13 } }, [
                _c(
                  "div",
                  { staticClass: "grid-content " },
                  [
                    _c(
                      "el-header",
                      [
                        _c("h2", [_vm._v("Setup Your Preloader")]),
                        _vm._v(" "),
                        _c("el-switch", {
                          on: {
                            change: function($event) {
                              return _vm.submitForm()
                            }
                          },
                          model: {
                            value: _vm.formData.active,
                            callback: function($$v) {
                              _vm.$set(_vm.formData, "active", $$v)
                            },
                            expression: "formData.active"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            class:
                              _vm.formData.active == true
                                ? "active-matrix-preloader"
                                : "inactive"
                          },
                          [
                            !_vm.formData.active
                              ? _c("span", [_vm._v("In")])
                              : _vm._e(),
                            _vm._v(
                              " Active\n                                  "
                            )
                          ]
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
                            _c(
                              "el-form",
                              {
                                ref: "formData",
                                staticClass: "matrix-admin-form",
                                attrs: {
                                  "hide-required-asterisk": "",
                                  model: _vm.formData
                                }
                              },
                              [
                                _c(
                                  "el-tabs",
                                  {
                                    staticClass: "el-menu-vertical-demo",
                                    attrs: {
                                      tabPosition: "left",
                                      type: "border-card"
                                    }
                                  },
                                  [
                                    _c(
                                      "el-tab-pane",
                                      { attrs: { label: "Location" } },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tab-content" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "tab-title" },
                                              [
                                                _vm._v(
                                                  "\n                                                    Display Location\n                                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "tab-body" },
                                              [
                                                _c(
                                                  "el-form-item",
                                                  {
                                                    attrs: {
                                                      label: "Location",
                                                      prop: "region"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "el-select",
                                                      {
                                                        attrs: {
                                                          placeholder:
                                                            "Pre Loader Location"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.formData
                                                              .location,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.formData,
                                                              "location",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "formData.location"
                                                        }
                                                      },
                                                      [
                                                        _c("el-option", {
                                                          attrs: {
                                                            label:
                                                              "Full Webiste",
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
                                                  "el-form-item",
                                                  {
                                                    attrs: {
                                                      label: "Show",
                                                      prop: "region"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "el-select",
                                                      {
                                                        attrs: {
                                                          placeholder: ""
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.formData
                                                              .show_per_session,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.formData,
                                                              "show_per_session",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "formData.show_per_session"
                                                        }
                                                      },
                                                      [
                                                        _c("el-option", {
                                                          attrs: {
                                                            label: "Always",
                                                            value: "false"
                                                          }
                                                        }),
                                                        _vm._v(" "),
                                                        _c("el-option", {
                                                          attrs: {
                                                            label:
                                                              "Once Per Session",
                                                            value: "true"
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
                                                  "el-form-item",
                                                  {
                                                    attrs: {
                                                      label: "Exclude Page/Post"
                                                    }
                                                  },
                                                  [
                                                    _c("el-switch", {
                                                      model: {
                                                        value:
                                                          _vm.excludeSwitch,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.excludeSwitch = $$v
                                                        },
                                                        expression:
                                                          "excludeSwitch"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.excludeSwitch == true
                                                      ? _c(
                                                          "el-select",
                                                          {
                                                            attrs: {
                                                              multiple: "",
                                                              placeholder:
                                                                "Select"
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.formData
                                                                  .exclude,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.formData,
                                                                  "exclude",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "formData.exclude"
                                                            }
                                                          },
                                                          _vm._l(
                                                            _vm.options,
                                                            function(group) {
                                                              return _c(
                                                                "el-option-group",
                                                                {
                                                                  key: group.ID,
                                                                  attrs: {
                                                                    label:
                                                                      group.label
                                                                  }
                                                                },
                                                                _vm._l(
                                                                  group.options,
                                                                  function(
                                                                    item
                                                                  ) {
                                                                    return _c(
                                                                      "el-option",
                                                                      {
                                                                        key:
                                                                          item.ID,
                                                                        attrs: {
                                                                          label:
                                                                            item.post_title,
                                                                          value:
                                                                            item.ID
                                                                        }
                                                                      }
                                                                    )
                                                                  }
                                                                ),
                                                                1
                                                              )
                                                            }
                                                          ),
                                                          1
                                                        )
                                                      : _vm._e()
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "el-form-item",
                                                  {
                                                    attrs: {
                                                      label: "Show Close Button"
                                                    }
                                                  },
                                                  [
                                                    _c("el-switch", {
                                                      model: {
                                                        value:
                                                          _vm.formData
                                                            .close_button_on,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.formData,
                                                            "close_button_on",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "formData.close_button_on"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-tab-pane",
                                      { attrs: { label: "Icon" } },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tab-content" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "tab-title" },
                                              [
                                                _vm._v(
                                                  "\n                                                    Loader Icon\n                                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "tab-body" },
                                              [
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
                                                              label:
                                                                "Enable Matrix Style"
                                                            }
                                                          },
                                                          [
                                                            _c("el-switch", {
                                                              model: {
                                                                value:
                                                                  _vm.formData
                                                                    .matrix_style,
                                                                callback: function(
                                                                  $$v
                                                                ) {
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
                                                        _c(
                                                          "el-form-item",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Delay Millisecond(s)"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-input",
                                                              {
                                                                attrs: {
                                                                  placeholder:
                                                                    "20",
                                                                  type: "number"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .loader_delay,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "loader_delay",
                                                                      _vm._n(
                                                                        $$v
                                                                      )
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.loader_delay"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "template",
                                                                  {
                                                                    slot:
                                                                      "append"
                                                                  },
                                                                  [_vm._v("ms")]
                                                                )
                                                              ],
                                                              2
                                                            )
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
                                                !this.formData.matrix_style
                                                  ? _c(
                                                      "el-form-item",
                                                      {
                                                        staticClass:
                                                          "matrix-pre-loader-img-container",
                                                        attrs: {
                                                          label:
                                                            "Pre Loader Image"
                                                        }
                                                      },
                                                      [
                                                        _vm._l(
                                                          _vm.image_list,
                                                          function(img) {
                                                            return img != "none"
                                                              ? _c(
                                                                  "el-radio",
                                                                  {
                                                                    key: img,
                                                                    attrs: {
                                                                      label: img
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        _vm.formData.custom_img = false
                                                                      }
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .formData
                                                                          .image,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.formData,
                                                                          "image",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "formData.image"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c("img", {
                                                                      staticClass:
                                                                        "img-holder-option",
                                                                      class: {
                                                                        blurDiv:
                                                                          _vm
                                                                            .formData
                                                                            .custom_img
                                                                      },
                                                                      attrs: {
                                                                        src: img,
                                                                        alt: ""
                                                                      }
                                                                    })
                                                                  ]
                                                                )
                                                              : _c(
                                                                  "el-radio",
                                                                  {
                                                                    key: img,
                                                                    attrs: {
                                                                      label: img
                                                                    },
                                                                    on: {
                                                                      change: function(
                                                                        $event
                                                                      ) {
                                                                        _vm.formData.custom_img = false
                                                                      }
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .formData
                                                                          .image,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.formData,
                                                                          "image",
                                                                          $$v
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "formData.image"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "\n                                                           None\n                                                        "
                                                                    )
                                                                  ]
                                                                )
                                                          }
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "el-radio",
                                                          {
                                                            attrs: {
                                                              label: true,
                                                              border: ""
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                return _vm.setCustomImg()
                                                              }
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.formData
                                                                  .custom_img,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.formData,
                                                                  "custom_img",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "formData.custom_img"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                                            Custom\n                                                        "
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _vm.formData
                                                          .custom_img == true
                                                          ? _c(
                                                              "div",
                                                              {
                                                                staticClass:
                                                                  "upload-box"
                                                              },
                                                              [
                                                                _c(
                                                                  "el-button",
                                                                  {
                                                                    attrs: {
                                                                      type:
                                                                        "primary",
                                                                      plain: "",
                                                                      size:
                                                                        "small"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        return _vm.fileUpload()
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Upload"
                                                                    ),
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "el-icon-upload"
                                                                    })
                                                                  ]
                                                                ),
                                                                _vm._v(" "),
                                                                _vm.dialogImageUrl !=
                                                                ""
                                                                  ? _c("div", [
                                                                      _c(
                                                                        "img",
                                                                        {
                                                                          staticClass:
                                                                            "img-holder",
                                                                          attrs: {
                                                                            src:
                                                                              _vm.dialogImageUrl,
                                                                            alt:
                                                                              ""
                                                                          }
                                                                        }
                                                                      )
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
                                                      { attrs: { span: 12 } },
                                                      [
                                                        _c(
                                                          "el-form-item",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Image Width"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-input",
                                                              {
                                                                attrs: {
                                                                  type:
                                                                    "number",
                                                                  placeholder:
                                                                    "100"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .width,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "width",
                                                                      _vm._n(
                                                                        $$v
                                                                      )
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.width"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "template",
                                                                  {
                                                                    slot:
                                                                      "append"
                                                                  },
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
                                                      { attrs: { span: 12 } },
                                                      [
                                                        _c(
                                                          "div",
                                                          [
                                                            _c(
                                                              "el-form-item",
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    "Image Hight"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "el-input",
                                                                  {
                                                                    attrs: {
                                                                      placeholder:
                                                                        "100",
                                                                      type:
                                                                        "number"
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm
                                                                          .formData
                                                                          .height,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.$set(
                                                                          _vm.formData,
                                                                          "height",
                                                                          _vm._n(
                                                                            $$v
                                                                          )
                                                                        )
                                                                      },
                                                                      expression:
                                                                        "formData.height"
                                                                    }
                                                                  },
                                                                  [
                                                                    _c(
                                                                      "template",
                                                                      {
                                                                        slot:
                                                                          "append"
                                                                      },
                                                                      [
                                                                        _vm._v(
                                                                          "px"
                                                                        )
                                                                      ]
                                                                    )
                                                                  ],
                                                                  2
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _c("el-col", {
                                                  attrs: { span: 24 }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-tab-pane",
                                      { attrs: { label: "Background" } },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tab-content" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "tab-title" },
                                              [
                                                _vm._v(
                                                  "\n                                                    Loading Background\n                                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "tab-body" },
                                              [
                                                _c(
                                                  "el-form-item",
                                                  {
                                                    attrs: {
                                                      label:
                                                        "Background Opacity"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      { staticClass: "block" },
                                                      [
                                                        _c("el-slider", {
                                                          attrs: {
                                                            "show-input": "",
                                                            step: 0.1,
                                                            max: 1,
                                                            "format-tooltip":
                                                              _vm.formatTooltip
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.formData
                                                                .opacity,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.formData,
                                                                "opacity",
                                                                _vm._n($$v)
                                                              )
                                                            },
                                                            expression:
                                                              "formData.opacity"
                                                          }
                                                        })
                                                      ],
                                                      1
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                !this.formData.matrix_style
                                                  ? _c(
                                                      "el-form-item",
                                                      {
                                                        attrs: {
                                                          label:
                                                            "Background Color"
                                                        }
                                                      },
                                                      [
                                                        _c("el-color-picker", {
                                                          model: {
                                                            value:
                                                              _vm.formData
                                                                .bgcolor,
                                                            callback: function(
                                                              $$v
                                                            ) {
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
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "el-form-item",
                                                  {
                                                    attrs: {
                                                      prop: "bg_image",
                                                      label:
                                                        "Background Image Url(click outside after inserting the link)"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "el-input",
                                                      {
                                                        on: {
                                                          change: function(
                                                            $event
                                                          ) {
                                                            return _vm.checkImage()
                                                          },
                                                          paste: function(
                                                            $event
                                                          ) {
                                                            return _vm.checkImage()
                                                          }
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.formData
                                                              .bg_image,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.formData,
                                                              "bg_image",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "formData.bg_image"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "template",
                                                          { slot: "append" },
                                                          [
                                                            _c(
                                                              "el-popover",
                                                              {
                                                                attrs: {
                                                                  placement:
                                                                    "top-start",
                                                                  title:
                                                                    "Background Image",
                                                                  width: "240",
                                                                  trigger:
                                                                    "hover",
                                                                  content:
                                                                    "You can add background image or keep it empty, if no image found this  will be skipped"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "el-button",
                                                                  {
                                                                    attrs: {
                                                                      slot:
                                                                        "reference"
                                                                    },
                                                                    slot:
                                                                      "reference"
                                                                  },
                                                                  [
                                                                    _c("i", {
                                                                      staticClass:
                                                                        "el-icon-info"
                                                                    })
                                                                  ]
                                                                )
                                                              ],
                                                              1
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      2
                                                    )
                                                  ],
                                                  1
                                                ),
                                                _vm._v(" "),
                                                _vm.validImage
                                                  ? _c(
                                                      "el-form-item",
                                                      {
                                                        attrs: {
                                                          label:
                                                            " Image Preview"
                                                        }
                                                      },
                                                      [
                                                        _c("img", {
                                                          staticStyle: {
                                                            "max-height":
                                                              "400px"
                                                          },
                                                          attrs: {
                                                            src:
                                                              _vm.formData
                                                                .bg_image
                                                          },
                                                          on: {
                                                            error: function(
                                                              $event
                                                            ) {
                                                              return _vm.invalidImage()
                                                            }
                                                          }
                                                        })
                                                      ]
                                                    )
                                                  : _vm.formData.bg_image !== ""
                                                  ? _c(
                                                      "div",
                                                      [
                                                        _c(
                                                          "el-form-item",
                                                          [
                                                            _c("el-alert", {
                                                              attrs: {
                                                                title:
                                                                  "Please insert a valid image url or keep it empty",
                                                                type: "error"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        )
                                                      ],
                                                      1
                                                    )
                                                  : _vm._e()
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-tab-pane",
                                      { attrs: { label: "Text" } },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tab-content" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "tab-title" },
                                              [
                                                _vm._v(
                                                  "\n                                                   Loader Text\n                                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "tab-body" },
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
                                                        value:
                                                          _vm.formData.text,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.formData,
                                                            "text",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "formData.text"
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
                                                          {
                                                            attrs: {
                                                              label: "Font Size"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-input",
                                                              {
                                                                attrs: {
                                                                  placeholder:
                                                                    "20",
                                                                  type: "number"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .font_size,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "font_size",
                                                                      _vm._n(
                                                                        $$v
                                                                      )
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.font_size"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "template",
                                                                  {
                                                                    slot:
                                                                      "append"
                                                                  },
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
                                                            attrs: {
                                                              label:
                                                                "Font Color"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-color-picker",
                                                              {
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .font_color,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "font_color",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.font_color"
                                                                }
                                                              }
                                                            )
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
                                                  {
                                                    attrs: {
                                                      label: "Text Offset"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "el-input",
                                                      {
                                                        attrs: {
                                                          type: "number",
                                                          placeholder: "45"
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.formData
                                                              .image_offset,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.formData,
                                                              "image_offset",
                                                              _vm._n($$v)
                                                            )
                                                          },
                                                          expression:
                                                            "formData.image_offset"
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
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "el-tab-pane",
                                      { attrs: { label: "Animation" } },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "tab-content" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "tab-title" },
                                              [
                                                _vm._v(
                                                  "\n                                                    Loading Animation\n                                                "
                                                )
                                              ]
                                            ),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "tab-body" },
                                              [
                                                _c(
                                                  "el-row",
                                                  [
                                                    _c(
                                                      "el-col",
                                                      { attrs: { span: 24 } },
                                                      [
                                                        _c(
                                                          "el-form-item",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Loader Animate In"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-select",
                                                              {
                                                                attrs: {
                                                                  filterable:
                                                                    "",
                                                                  clearable: "",
                                                                  placeholder:
                                                                    "none",
                                                                  type: "text"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .loader_animation_in,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "loader_animation_in",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.loader_animation_in"
                                                                }
                                                              },
                                                              _vm._l(
                                                                _vm.animate_class_list_array,
                                                                function(item) {
                                                                  return _c(
                                                                    "el-option",
                                                                    {
                                                                      key: item,
                                                                      attrs: {
                                                                        label: item,
                                                                        value: item
                                                                      }
                                                                    }
                                                                  )
                                                                }
                                                              ),
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
                                                      "el-col",
                                                      { attrs: { span: 24 } },
                                                      [
                                                        _c(
                                                          "el-form-item",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Loader Animate Out"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-select",
                                                              {
                                                                attrs: {
                                                                  filterable:
                                                                    "",
                                                                  clearable: "",
                                                                  placeholder:
                                                                    "none",
                                                                  type: "text"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .loader_animation_out,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "loader_animation_out",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.loader_animation_out"
                                                                }
                                                              },
                                                              _vm._l(
                                                                _vm.animate_class_list_array,
                                                                function(item) {
                                                                  return _c(
                                                                    "el-option",
                                                                    {
                                                                      key: item,
                                                                      attrs: {
                                                                        label: item,
                                                                        value: item
                                                                      }
                                                                    }
                                                                  )
                                                                }
                                                              ),
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
                                                              label:
                                                                "Text Animation"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-select",
                                                              {
                                                                attrs: {
                                                                  filterable:
                                                                    "",
                                                                  clearable: "",
                                                                  placeholder:
                                                                    "Select"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .text_animation_in,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "text_animation_in",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.text_animation_in"
                                                                }
                                                              },
                                                              _vm._l(
                                                                _vm.animate_class_list_array,
                                                                function(item) {
                                                                  return _c(
                                                                    "el-option",
                                                                    {
                                                                      key: item,
                                                                      attrs: {
                                                                        label: item,
                                                                        value: item
                                                                      }
                                                                    }
                                                                  )
                                                                }
                                                              ),
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
                                                      "el-col",
                                                      { attrs: { span: 12 } },
                                                      [
                                                        _c(
                                                          "el-form-item",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Text Animation Type"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "el-select",
                                                              {
                                                                attrs: {
                                                                  filterable:
                                                                    "",
                                                                  clearable: "",
                                                                  placeholder:
                                                                    "Select"
                                                                },
                                                                model: {
                                                                  value:
                                                                    _vm.formData
                                                                      .text_animation_in_type,
                                                                  callback: function(
                                                                    $$v
                                                                  ) {
                                                                    _vm.$set(
                                                                      _vm.formData,
                                                                      "text_animation_in_type",
                                                                      $$v
                                                                    )
                                                                  },
                                                                  expression:
                                                                    "formData.text_animation_in_type"
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "el-option",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Reverse",
                                                                      value:
                                                                        "reverse"
                                                                    }
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "el-option",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Shuffle",
                                                                      value:
                                                                        "shuffle"
                                                                    }
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "el-option",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Sync",
                                                                      value:
                                                                        "Sync"
                                                                    }
                                                                  }
                                                                ),
                                                                _vm._v(" "),
                                                                _c(
                                                                  "el-option",
                                                                  {
                                                                    attrs: {
                                                                      label:
                                                                        "Sequence",
                                                                      value:
                                                                        "sequence"
                                                                    }
                                                                  }
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
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "el-form-item",
                                  { staticStyle: { padding: "10px 0px" } },
                                  [
                                    _c(
                                      "el-button",
                                      {
                                        staticClass: "pull-right",
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
              _c("el-col", { attrs: { span: 11 } }, [
                _c(
                  "div",
                  { staticClass: "grid-content matrix-preloader-preview-area" },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Extra.vue?vue&type=template&id=2562e9d8&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/js/Components/Extra.vue?vue&type=template&id=2562e9d8& ***!
  \**************************************************************************************************************************************************************************************************/
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
              _c("el-header", [
                _c("h2", [_vm._v("Thank you for trying the plugin")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Do not forget leave review "),
                  _c(
                    "a",
                    {
                      staticClass: "is-success",
                      attrs: {
                        href:
                          "https://wordpress.org/plugins/matrix-pre-loader/#reviews",
                        target: "_blank",
                        type: "primary"
                      }
                    },
                    [_vm._v("here")]
                  ),
                  _vm._v(" if you think you like this plugin :)")
                ])
              ]),
              _vm._v(" "),
              _c(
                "el-main",
                [
                  _vm._v(
                    "\n                Here is a list of few animation class you can use :\n                "
                  ),
                  _c(
                    "el-table",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { data: _vm.tableData, stripe: "" }
                    },
                    [
                      _c("el-table-column", {
                        attrs: {
                          prop: "Fading_entrances",
                          label: "Fading entrances",
                          width: "180"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "Fading_exits",
                          label: "Fading exits",
                          width: "180"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "Flippers_In",
                          label: "Flippers In",
                          width: "180"
                        }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: { prop: "Flippers_Out", label: "Flippers Out" }
                      }),
                      _vm._v(" "),
                      _c("el-table-column", {
                        attrs: {
                          prop: "Sliding_entrances",
                          label: "Sliding entrances"
                        }
                      }),
                      _c("el-table-column", {
                        attrs: { prop: "Sliding_exits", label: "Sliding exits" }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("el-row", { staticStyle: { padding: "20px" } }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href: "https://animate.style/"
                        }
                      },
                      [
                        _vm._v(
                          " Thanks to animate.style css, for more animation class visit this link"
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-button",
                    {
                      attrs: { type: "info", plain: "" },
                      on: {
                        click: function($event) {
                          return _vm.redirrestUrl()
                        }
                      }
                    },
                    [_vm._v("For support you may knock me")]
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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
/* empty/unused harmony star reexport *//* harmony import */ var _AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminApp.vue?vue&type=style&index=0&lang=css& */ "./src/js/AdminApp.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./src/js/AdminApp.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************!*\
  !*** ./src/js/AdminApp.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./AdminApp.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/AdminApp.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminApp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "./src/js/Components/Extra.vue":
/*!*************************************!*\
  !*** ./src/js/Components/Extra.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Extra_vue_vue_type_template_id_2562e9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Extra.vue?vue&type=template&id=2562e9d8& */ "./src/js/Components/Extra.vue?vue&type=template&id=2562e9d8&");
/* harmony import */ var _Extra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extra.vue?vue&type=script&lang=js& */ "./src/js/Components/Extra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Extra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Extra_vue_vue_type_template_id_2562e9d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Extra_vue_vue_type_template_id_2562e9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/Components/Extra.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/js/Components/Extra.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./src/js/Components/Extra.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Extra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Extra.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Extra.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Extra_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/Components/Extra.vue?vue&type=template&id=2562e9d8&":
/*!********************************************************************!*\
  !*** ./src/js/Components/Extra.vue?vue&type=template&id=2562e9d8& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Extra_vue_vue_type_template_id_2562e9d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Extra.vue?vue&type=template&id=2562e9d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/js/Components/Extra.vue?vue&type=template&id=2562e9d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Extra_vue_vue_type_template_id_2562e9d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Extra_vue_vue_type_template_id_2562e9d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
}); // Try edit message

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
/* harmony import */ var _Components_Extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/Extra */ "./src/js/Components/Extra.vue");


var routes = [{
  path: '/',
  name: 'dashboard',
  component: _Components_Dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]
}, {
  path: '/extra',
  name: 'extra',
  component: _Components_Extra__WEBPACK_IMPORTED_MODULE_1__["default"]
}];

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Local Sites\wpfluentforms\app\public\wp-content\plugins\matrix-pre-loader\src\js\main.js */"./src/js/main.js");


/***/ })

/******/ });