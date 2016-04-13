(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vectorDevTools"] = factory();
	else
		root["vectorDevTools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var viewStyle = "\n    width: 100px;\n    height: 100px;\n    border: 1px solid black;\n    position: relative;\n    overflow: hidden;\n    font-size: 10px;\n";

	var circleStyle = "\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: calc(100% - 22px);\n    height: calc(100% - 22px);\n    border-radius: 50%;\n    border: 1px dashed red;\n";

	function textStyle(plus, vert) {
	    return "\n        position: absolute;\n        top: " + (vert ? plus ? 100 : 0 : 50) + "%;\n        left: " + (vert ? 50 : plus ? 100 : 0) + "%;\n        transform: translate(" + (vert ? -50 : plus ? -100 : 0) + "%, " + (vert ? plus ? -100 : 0 : -50) + "%);\n    ";
	}

	var plusYStyle = textStyle(true, true);
	var plusXStyle = textStyle(true, false);
	var minusYStyle = textStyle(false, true);
	var minusXStyle = textStyle(false, false);

	function vectorStyle(_ref) {
	    var x = _ref.x;
	    var y = _ref.y;

	    var len = Math.sqrt(x * x + y * y);
	    return "\n        position: absolute;\n        width: calc(" + len * 50 + "% - 10px);\n        top: 50%;\n        left: 50%;\n        transform: rotate(" + Math.atan2(y, x) + "rad);\n        transform-origin: left;\n    ";
	}

	var vectorBarStyle = "\n    width: 100%;\n    border-bottom: 1px solid red;\n";

	var vectorArrowStyle = "\n    position: absolute;\n    left: calc(100% - 6px);\n    top: -4px;\n    border-top: 4px solid transparent;\n    border-left: 6px solid red;\n    border-bottom: 4px solid transparent;\n";

	var VectorFormatter = exports.VectorFormatter = function () {
	    function VectorFormatter(vectorType) {
	        _classCallCheck(this, VectorFormatter);

	        this.vectorType = vectorType;
	    }

	    _createClass(VectorFormatter, [{
	        key: "header",
	        value: function header(value) {
	            if (!(value instanceof this.vectorType)) {
	                return null;
	            }
	            return ["div", { class: "vector-view", style: viewStyle }, ["div", { class: "circle", style: circleStyle }], ["span", { style: plusYStyle }, "+y"], ["span", { style: plusXStyle }, "+x"], ["span", { style: minusYStyle }, "-y"], ["span", { style: minusXStyle }, "-x"], ["div", { class: "vector", style: vectorStyle(value) }, ["div", { class: "vector-bar", style: vectorBarStyle }], ["div", { class: "vector-arrow", style: vectorArrowStyle }]]];
	        }
	    }, {
	        key: "hasBody",
	        value: function hasBody() {
	            return false;
	        }
	    }, {
	        key: "body",
	        value: function body() {
	            return null;
	        }
	    }]);

	    return VectorFormatter;
	}();

/***/ }
/******/ ])
});
;