/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/index.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2 */ "./src/fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff */ "./src/fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/today.png */ "./src/images/today.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --content-hover-background: rgb(226, 235, 230);\n    --popup-btn-color: rgb(226, 235, 230);\n    --content-background: white;\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n    color: var(--font-color)\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list.project ul {\n    max-height: 10em;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list.project li,\n.list.options li {\n    background-color: var(--background-color);\n}\n\n.list.todo li {\n    background-color: var(--content-background);\n}\n\n.list.todo li.done {\n    filter:opacity(0.5);\n    text-decoration: line-through;\n}\n\n.list li a {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.list li:hover,\n.menu .add-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n#content .add-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.right-li {\n    margin-left: auto;\n    width: 40%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.todo input {\n    color: inherit;\n    border-width: 0;\n    background-color: inherit;\n    font-size: inherit;\n    cursor: pointer;\n    display: flex;\n    flex-flow: row-reverse;\n}\n\n.todo.input-title {\n    width: 100%;\n    border-radius: 0.2em;\n    margin: 0.1em\n}\n\n.todo.input-date:focus {\n    outline: none;\n}\n\n.todo.input-title:focus {\n    outline: 0.5px solid var(--background-color);\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list h2,\n.list h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-btn {\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.add-popup {\n    width: 100%;;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    gap: 0.5em;\n}\n\nbody .hidden {\n    display: none;\n}\n\nbody .active {\n    display: flex;\n}\n\nbody .selected {\n    filter: brightness(0.85);\n    font-weight: bold;\n}\n\n.add-popup > * {\n    width: 100%;\n}\n\n.add-popup input {\n    border-radius: 0.5em;\n    height: 3em;\n    padding: 0.5em;\n    font-size: 16px;\n    border: 0.5px solid var(--header-background-color);\n}\n\n.add-popup input:focus {\n    outline: none;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.btn-container button {\n    width: 45%;\n    height: 3em;\n    border-radius: 0.5em;\n    font-size: 16px;\n    font-weight: bold;\n    border:none;\n    cursor: pointer;\n    color: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-popup.add-btn {\n    background-color: rgb(170, 255, 170);\n}\n\n.add-popup.cancel-btn {\n    background-color: rgb(255, 190, 190);\n}\n\n.add-popup.add-btn:hover {\n    background-color: rgb(144, 236, 144);\n}\n\n.add-popup.cancel-btn:hover {\n    background-color: #f5b2b2;\n}\n\n.content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n    color: inherit;\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --content-hover-background: rgb(226, 235, 230);\n    --popup-btn-color: rgb(226, 235, 230);\n    --content-background: white;\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2') format('woff2'),\n        url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n    color: var(--font-color)\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list.project ul {\n    max-height: 10em;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list.project li,\n.list.options li {\n    background-color: var(--background-color);\n}\n\n.list.todo li {\n    background-color: var(--content-background);\n}\n\n.list.todo li.done {\n    filter:opacity(0.5);\n    text-decoration: line-through;\n}\n\n.list li a {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.list li:hover,\n.menu .add-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n#content .add-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.right-li {\n    margin-left: auto;\n    width: 40%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.todo input {\n    color: inherit;\n    border-width: 0;\n    background-color: inherit;\n    font-size: inherit;\n    cursor: pointer;\n    display: flex;\n    flex-flow: row-reverse;\n}\n\n.todo.input-title {\n    width: 100%;\n    border-radius: 0.2em;\n    margin: 0.1em\n}\n\n.todo.input-date:focus {\n    outline: none;\n}\n\n.todo.input-title:focus {\n    outline: 0.5px solid var(--background-color);\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list h2,\n.list h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-btn {\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.add-popup {\n    width: 100%;;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    gap: 0.5em;\n}\n\nbody .hidden {\n    display: none;\n}\n\nbody .active {\n    display: flex;\n}\n\nbody .selected {\n    filter: brightness(0.85);\n    font-weight: bold;\n}\n\n.add-popup > * {\n    width: 100%;\n}\n\n.add-popup input {\n    border-radius: 0.5em;\n    height: 3em;\n    padding: 0.5em;\n    font-size: 16px;\n    border: 0.5px solid var(--header-background-color);\n}\n\n.add-popup input:focus {\n    outline: none;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url(\"../images/today.png\");\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.btn-container button {\n    width: 45%;\n    height: 3em;\n    border-radius: 0.5em;\n    font-size: 16px;\n    font-weight: bold;\n    border:none;\n    cursor: pointer;\n    color: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-popup.add-btn {\n    background-color: rgb(170, 255, 170);\n}\n\n.add-popup.cancel-btn {\n    background-color: rgb(255, 190, 190);\n}\n\n.add-popup.add-btn:hover {\n    background-color: rgb(144, 236, 144);\n}\n\n.add-popup.cancel-btn:hover {\n    background-color: #f5b2b2;\n}\n\n.content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n    color: inherit;\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */

function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);

  if (isNaN(amount)) {
    return new Date(NaN);
  }

  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }

  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysInWeek": () => (/* binding */ daysInWeek),
/* harmony export */   "maxTime": () => (/* binding */ maxTime),
/* harmony export */   "millisecondsInMinute": () => (/* binding */ millisecondsInMinute),
/* harmony export */   "millisecondsInHour": () => (/* binding */ millisecondsInHour),
/* harmony export */   "millisecondsInSecond": () => (/* binding */ millisecondsInSecond),
/* harmony export */   "minTime": () => (/* binding */ minTime),
/* harmony export */   "minutesInHour": () => (/* binding */ minutesInHour),
/* harmony export */   "monthsInQuarter": () => (/* binding */ monthsInQuarter),
/* harmony export */   "monthsInYear": () => (/* binding */ monthsInYear),
/* harmony export */   "quartersInYear": () => (/* binding */ quartersInYear),
/* harmony export */   "secondsInHour": () => (/* binding */ secondsInHour),
/* harmony export */   "secondsInMinute": () => (/* binding */ secondsInMinute)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;
/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */

var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;
/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInMinute = 60000;
/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInHour = 3600000;
/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */

var millisecondsInSecond = 1000;
/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */

var minTime = -maxTime;
/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */

var minutesInHour = 60;
/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */

var monthsInQuarter = 3;
/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */

var monthsInYear = 12;
/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */

var quartersInYear = 4;
/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */

var secondsInHour = 3600;
/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */

var secondsInMinute = 60;

/***/ }),

/***/ "./node_modules/date-fns/esm/getDay/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/getDay/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDay
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {0|1|2|3|4|5|6} the day of week, 0 represents Sunday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * const result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */

function getDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getDay();
  return day;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isBefore/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/isBefore/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isBefore)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 * 
 * @example
 * // Are 4 September and 4 October in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 * 
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * var result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */

function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextDay/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/nextDay/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextDay)
/* harmony export */ });
/* harmony import */ var _addDays_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addDays/index.js */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var _getDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getDay/index.js */ "./node_modules/date-fns/esm/getDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name nextDay
 * @category Weekday Helpers
 * @summary When is the next day of the week?
 *
 * @description
 * When is the next day of the week? 0-6 the day of the week, 0 represents Sunday.
 *
 * @param {Date | number} date - the date to check
 * @param {Day} day - day of the week
 * @returns {Date} - the date is the next day of week
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // When is the next Monday after Mar, 20, 2020?
 * const result = nextDay(new Date(2020, 2, 20), 1)
 * //=> Mon Mar 23 2020 00:00:00
 *
 * @example
 * // When is the next Tuesday after Mar, 21, 2020?
 * const result = nextDay(new Date(2020, 2, 21), 2)
 * //=> Tue Mar 24 2020 00:00:00
 */

function nextDay(date, day) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var delta = day - (0,_getDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date);
  if (delta <= 0) delta += 7;
  return (0,_addDays_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, delta);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/nextMonday/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/nextMonday/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nextMonday)
/* harmony export */ });
/* harmony import */ var _nextDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nextDay/index.js */ "./node_modules/date-fns/esm/nextDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name nextMonday
 * @category Weekday Helpers
 * @summary When is the next Monday?
 *
 * @description
 * When is the next Monday?
 *
 * @param {Date | number} date - the date to start counting from
 * @returns {Date} the next Monday
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // When is the next Monday after Mar, 22, 2020?
 * const result = nextMonday(new Date(2020, 2, 22))
 * //=> Mon Mar 23 2020 00:00:00
 */

function nextMonday(date) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_nextDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, 1);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The previous `parse` implementation was renamed to `parseISO`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   parseISO('2016-01-01')
 *   ```
 *
 * - `parseISO` now validates separate date and time values in ISO-8601 strings
 *   and returns `Invalid Date` if the date is invalid.
 *
 *   ```javascript
 *   parseISO('2018-13-32')
 *   //=> Invalid Date
 *   ```
 *
 * - `parseISO` now doesn't fall back to `new Date` constructor
 *   if it fails to parse a string argument. Instead, it returns `Invalid Date`.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */

function parseISO(argument, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var additionalDigits = options.additionalDigits == null ? 2 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.additionalDigits);

  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }

  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }

  var dateStrings = splitDateString(argument);
  var date;

  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }

  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }

  var timestamp = date.getTime();
  var time = 0;
  var offset;

  if (dateStrings.time) {
    time = parseTime(dateStrings.time);

    if (isNaN(time)) {
      return new Date(NaN);
    }
  }

  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);

    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time); // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.

    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }

  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString; // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].

  if (array.length > 2) {
    return dateStrings;
  }

  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];

    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns.timezone.exec(timeString);

    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings;
}

function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex); // Invalid ISO-formatted year

  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null; // either year or century is null, not both

  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex); // Invalid ISO-formatted string

  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;

  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }

    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);

    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }

    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}

function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}

function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);

  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }

  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}

function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}

function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;

  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }

  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
} // Validation functions
// February is null to handle the leap year (using ||)


var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}

function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}

function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}

function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}

function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }

  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}

function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */

function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfToday/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfToday/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfToday)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");

/**
 * @name startOfToday
 * @category Day Helpers
 * @summary Return the start of today.
 * @pure false
 *
 * @description
 * Return the start of today.
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */

function startOfToday() {
  return (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */

function startOfWeek(dirtyDate, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/base-object.js":
/*!*******************************!*\
  !*** ./src/js/base-object.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBaseObject": () => (/* binding */ createBaseObject)
/* harmony export */ });
function createBaseObject(type, title, createLiElementFunction) {
    function changeTitle(newTitle) {
        if (newTitle === "" || newTitle == null) newTitle = "Default title"
        title = newTitle
    }
    changeTitle(title)
    return {
        type,
        cssClassName: "",
        changeTitle,
        cssClassNameToTitle: function () {
            return this.cssClassName.substring(1).replace(/-/g, ' ')
        },
        titleToCssClassName: function () {
            this.cssClassName = "c" + this.title.replace(/\W/g, "-")
            return this.cssClassName
        },
        get domElement() {
            return createLiElementFunction(this)
        },
        get title(){
            return title
        },
        set title(newTitle) {
            title = newTitle
            if (newTitle === "" || newTitle == null) title = "Default title"
        }
    }
}



/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controller": () => (/* binding */ controller)
/* harmony export */ });
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");




const controller = (() => {

    function removeObject(object, objectList){
        objectList.removeChild(object.domElement)
        _project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.remove(object)
    }

    function createObject(inputForm, createFunction) {
        const parameters = _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.collectInput(inputForm)
        const obj = createFunction(parameters)
        if (!_project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.add(obj)) return
        _storage__WEBPACK_IMPORTED_MODULE_2__.storage.populateStorage()
        return obj
    }

    function addObject(object, objectList, setupFunction){
        try{
            const objectElement = object.domElement
            setupFunction(object)
            objectList.appendChild(objectElement)
        }
        catch {
            alert("Alredy exists!")
        }
    }

    return {
        createObject,
        addObject,
        removeObject,
    }
})()



/***/ }),

/***/ "./src/js/dom-basic-functions.js":
/*!***************************************!*\
  !*** ./src/js/dom-basic-functions.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomFunctions": () => (/* binding */ createDomFunctions)
/* harmony export */ });
function createDomFunctions(){
    function createDomElement(name, classes){
        const element = document.createElement(name)
        element.classList.add(...classes)
        return element
    }

    function createDiv(classes){
        const div = createDomElement("div", classes)
        return div
    }

    function createImg(classes, src, height, width){
        const img = createDomElement("img", classes)
        img.height = height
        img.width = width
        img.src = src
        return img
    }

    function createInput(classes, name, type){
        const input = createDomElement("input", classes)
        input.type = type
        input.name = name
        return input
    }

    function createBtn(classes, textContent){
        const btn = createDomElement("button", classes)
        const span = document.createElement("span")
        span.textContent = textContent
        btn.appendChild(span)
        return btn
    }

    function collectInput(form){
        const parameters = {}
        const inputs = form.querySelectorAll("input")
        inputs.forEach(input => {
            if (input.type == "text") input.value = input.value.replace(/[^a-z\d]/, ' ')
            parameters[input.name] = input.value
        })

        return parameters
    }

    function cleanInput(form){
        const inputs = form.querySelectorAll("input")
        inputs.forEach(input => {
            input.value = ""
        })
    }


    function showElement(element){
        element.classList.remove("hidden")
        element.classList.add("active")
    }

    function hideElement(element){
        element.classList.remove("active")
        element.classList.add("hidden")
    }

    function replaceElement(elemToShow, elemToHide) {
        showElement(elemToShow)
        hideElement(elemToHide)
    }

    return {
        createDiv,
        createBtn,
        createImg,
        createInput,
        collectInput,
        replaceElement,
        hideElement,
        cleanInput,
    }
}



/***/ }),

/***/ "./src/js/dom-interfacer.js":
/*!**********************************!*\
  !*** ./src/js/dom-interfacer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domInterfacer": () => (/* binding */ domInterfacer)
/* harmony export */ });
/* harmony import */ var _images_add_icon_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/add-icon.png */ "./src/images/add-icon.png");
/* harmony import */ var _dom_list_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-list-functions */ "./src/js/dom-list-functions.js");
/* harmony import */ var _selectorHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectorHolder */ "./src/js/selectorHolder.js");




const domInterfacer = (() => {
    const domFunctions = (0,_dom_list_functions__WEBPACK_IMPORTED_MODULE_1__.createDomListFunctions)()

    function createAddBtn(objectType) {
        const btn = domFunctions.createBtn([_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addBtn, objectType, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.active], `Add ${objectType}`)
        const btnIcon = domFunctions.createImg([],_images_add_icon_png__WEBPACK_IMPORTED_MODULE_0__, "16", "16")
        btn.prepend(btnIcon)
        return btn
    }

    function createAddPopup(addType){
        const div = domFunctions.createDiv([_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup, addType, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.hidden])
        const input = domFunctions.createInput([_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.inputTitle], "title", "text")
        const btnContainer = domFunctions.createDiv([_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.btnContainer])
        const addBtn = domFunctions.createBtn([_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addBtn], "Add")
        const cancelBtn = domFunctions.createBtn([_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.cancelBtn], "Cancel")
        btnContainer.append(addBtn, cancelBtn)
        div.append(input, btnContainer)
        return div
    }

    function createProjectDiv(project){
        const elements = domFunctions.createDivUlElements(project, "h1")
        const div = elements.div
        elements.header.classList.add(project.titleToCssClassName())
        elements.ul.classList.add(project.titleToCssClassName())
        return div
    }

    function addPopupInterface(div, addType){
        const addBtn = createAddBtn(`${addType}`)
        const addPopup = createAddPopup(`${addType}`)
        div.append(addBtn, addPopup)
    }
    
    function createProjectPage(project) {
        const div = createProjectDiv(project)
        addPopupInterface(div, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.todo)
        return div
    }

    function createAllProjectsPage(projectsContainer){
        const content = domFunctions.createDiv(["all-projects"]);
        Object.values(projectsContainer).forEach((project) => {
            const div = createProjectDiv(project)
            if (div.querySelector("ul").childNodes.length > 0) content.append(div)
        })
        return content
    }

    function createProjectList(projectStructurer) {
        const div = domFunctions.createDivUlElements(projectStructurer, "h2").div
        addPopupInterface(div, _selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.project)
        div.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.inbox}`).classList.add(`${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.hidden}`)
        return div
    }

    function selectObjectElement(element, elementType){
        const previousSelected = document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.selected}.${elementType}`)
        if (previousSelected) previousSelected.classList.remove(`${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.selected}`)
        element.classList.add(`${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.selected}`)
    }

    function selectClosestProjectLi(event){
        const li = event.target.closest("li")
        selectObjectElement(li, "project")
    }

    function getListUiElements(listContainer){
        const addBtn = listContainer.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addBtn}`)
        const addPopup = listContainer.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup}`)
        const closePopupBtn = listContainer.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup} .${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.cancelBtn}`)
        const ul = listContainer.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.list} ul`)
        const popupAddBtn = listContainer.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addPopup}.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.addBtn}`)
        return {
            addBtn, addPopup, popupAddBtn, closePopupBtn, ul
        }
    }

    return Object.assign({}, domFunctions, {
        createProjectPage,
        createAllProjectsPage,
        createProjectList,
        selectObjectElement,
        getListUiElements,
        selectClosestProjectLi,
        get inbox(){
            return document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.inbox}.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.project}`)
        },
        get today(){
            return document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.today}.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.project}`)
        },
        get thisWeek(){
            return document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.thisWeek}.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.project}`)
        },
        get projectList() {
            return document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.projectList}`)
        },
        get projectWindow() {
            return document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.projectWindow}`) 
        },
        get menu() {
            return document.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.selectorHolder.menu}`)
        },
        set projectList(projectList){
            this.projectList = projectList
        }
    })
})()



/***/ }),

/***/ "./src/js/dom-list-functions.js":
/*!**************************************!*\
  !*** ./src/js/dom-list-functions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomListFunctions": () => (/* binding */ createDomListFunctions)
/* harmony export */ });
/* harmony import */ var _dom_basic_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-basic-functions */ "./src/js/dom-basic-functions.js");
/* harmony import */ var _selectorHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectorHolder */ "./src/js/selectorHolder.js");
/* harmony import */ var _images_remove_task_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/remove-task.png */ "./src/images/remove-task.png");
/* harmony import */ var _images_finished_task_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/finished-task.png */ "./src/images/finished-task.png");
/* harmony import */ var _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/unfinished-task.png */ "./src/images/unfinished-task.png");
/* harmony import */ var _images_project_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/project.png */ "./src/images/project.png");








function createDomListFunctions() {
    const domFunctions = (0,_dom_basic_functions__WEBPACK_IMPORTED_MODULE_0__.createDomFunctions)()

    function createLi(object) {
        const li = document.createElement("li")
        li.classList.add(`${object.titleToCssClassName()}`, object.constructor.name.toLowerCase())
        const link = document.createElement("a")
        link.href = `#${object.titleToCssClassName()}`
        const span = document.createElement("span")
        span.innerText = object.title
        const rightDiv = domFunctions.createDiv([_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.rightDiv])
        const removeIcon = domFunctions.createImg([_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.removeitemIcon], _images_remove_task_png__WEBPACK_IMPORTED_MODULE_2__, "16", "16")
        link.append(span)
        rightDiv.appendChild(removeIcon)
        li.append(link, rightDiv)
        return li
    }

    function getLiChildren(li){
        const itemIcon = li.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.itemIcon}`)
        const anchor = li.querySelector("a")
        const removeIcon = li.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.removeitemIcon}`)
        const dateInput = li.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.inputDate}`)
        const titleInput = li.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.inputTitle}`)
        const title = li.querySelector("span")
        const rightDiv = li.querySelector(`.${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.rightDiv}`)
        return {
            itemIcon, anchor, removeIcon, dateInput, titleInput, title, rightDiv
        }
    }

    function addIconToLi(liAnchor, icon){
        const elemIcon = domFunctions.createImg([_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.itemIcon], icon, "16", "16")
        liAnchor.prepend(elemIcon)
    }

    function createProjectLi(baseObject){
        const li = createLi(baseObject)
        const liAnchor = getLiChildren(li).anchor
        addIconToLi(liAnchor, _images_project_png__WEBPACK_IMPORTED_MODULE_5__)
        return li
    }

    function finishTodo(li){
        li.classList.add(`${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.done}`)
        getLiChildren(li).itemIcon.src = _images_finished_task_png__WEBPACK_IMPORTED_MODULE_3__
    }

    function unfinishTodo(li){
        li.classList.remove(`${_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.done}`)
        getLiChildren(li).itemIcon.src = _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_4__
    }

    function changeTodoIcon(todo, li){
        if (todo.isFinished){
            finishTodo(li)
        }
        else {
            unfinishTodo(li)
        }
    }

    function createTodoLi(baseObject) {
        const li = createLi(baseObject)
        const liChildren = getLiChildren(li)
        addIconToLi(li,_images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_4__)
        changeTodoIcon(this, li)
        const titleInput = domFunctions.createInput([_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.todo, _selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.inputTitle, _selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.hidden], "title", "text")
        const dateInput = domFunctions.createInput([_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.todo, _selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.inputDate], "date", "date")
        dateInput.value = this.date
        liChildren.anchor.append(titleInput)
        liChildren.rightDiv.prepend(dateInput)
        return li
    }

    function createUl(object) {
        const ul = document.createElement("ul")
        for (const key in object.container) {
            const element = object.container[key]
            const li = element.domElement
            li.classList.remove(_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.hidden)
            ul.appendChild(li)
        }
        return ul
    }

    function changeTodoLiTitle(todo, titleInput){
        const li = todo.domElement
        li.classList.remove(todo.titleToCssClassName())
        todo.changeTitle(titleInput.value)
        getLiChildren(li).title.textContent = todo.title
        li.classList.add(todo.titleToCssClassName())
        getLiChildren(li).anchor.href = `#${todo.titleToCssClassName()}`
    }

    function createHeader(object, headerTag){
        const header = document.createElement(headerTag)
        header.textContent = object.title
        return header
    }

    function createDivUlElements(project, headerTag){
        const div = domFunctions.createDiv([_selectorHolder__WEBPACK_IMPORTED_MODULE_1__.selectorHolder.list, project.containClass])
        const header = createHeader(project, headerTag)
        const ul = createUl(project)
        div.append(header, ul)
        return { div, header, ul }
    }

    return Object.assign({}, domFunctions, {
        createLi,
        getLiChildren,
        createTodoLi,
        changeTodoIcon,
        changeTodoLiTitle,
        createProjectLi,
        createUl,
        createDivUlElements,
        finishTodo,
        unfinishTodo,
        createHeader
    })
}



/***/ }),

/***/ "./src/js/event-listener-functions.js":
/*!********************************************!*\
  !*** ./src/js/event-listener-functions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setAddBtn": () => (/* binding */ setAddBtn),
/* harmony export */   "setClosePopupBtn": () => (/* binding */ setClosePopupBtn),
/* harmony export */   "setDateInput": () => (/* binding */ setDateInput),
/* harmony export */   "setPopupAddBtn": () => (/* binding */ setPopupAddBtn),
/* harmony export */   "setRemoveIcon": () => (/* binding */ setRemoveIcon),
/* harmony export */   "setTitle": () => (/* binding */ setTitle),
/* harmony export */   "setTitleInput": () => (/* binding */ setTitleInput),
/* harmony export */   "setTodoIcon": () => (/* binding */ setTodoIcon),
/* harmony export */   "showAllTodoByFilter": () => (/* binding */ showAllTodoByFilter)
/* harmony export */ });
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");





function setAddBtn(listInterface){
    listInterface.addBtn.addEventListener("click", () => {
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.cleanInput(listInterface.addPopup)
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.replaceElement(listInterface.addPopup, listInterface.addBtn)
        listInterface.addPopup.querySelector("input").focus()
    })
}

function setClosePopupBtn(listInterface){
    listInterface.closePopupBtn.addEventListener("click",
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.replaceElement.bind(null, listInterface.addBtn, listInterface.addPopup))
}

function setPopupAddBtn(listInterface, createFunction, setupFunction){
    listInterface.popupAddBtn.addEventListener("click", () => {
        const object = _controller__WEBPACK_IMPORTED_MODULE_1__.controller.createObject(listInterface.addPopup, createFunction)
        _controller__WEBPACK_IMPORTED_MODULE_1__.controller.addObject(object, listInterface.ul, setupFunction)
        listInterface.closePopupBtn.click()
    })
}

function setRemoveIcon(removeIcon, object){
    removeIcon.addEventListener("click", (event) => {
        event.stopPropagation()
        const ul = event.target.closest("ul")
        _controller__WEBPACK_IMPORTED_MODULE_1__.controller.removeObject(object, ul)
        _storage__WEBPACK_IMPORTED_MODULE_2__.storage.populateStorage()
        if (object.constructor.name.toLowerCase() == "project") _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.inbox.click()
    })
}

function setTitle(title, titleInput, todo){
    title.addEventListener("click", (event) => {
        event.stopPropagation()
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.replaceElement(titleInput, title)
        titleInput.value = todo.title
        titleInput.focus()
    })
}

function setTitleInput(title, titleInput, todo){
    titleInput.addEventListener("keydown", (event) => {
        event.stopPropagation()
        if (event.key == "Enter"){
            _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.changeTodoLiTitle(todo, titleInput)
            _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.replaceElement(title, titleInput)
            _storage__WEBPACK_IMPORTED_MODULE_2__.storage.populateStorage()
        }
    })
}

function setTodoIcon(itemIcon, todo){
    itemIcon.addEventListener("click", (event) => {
        const li = event.target.closest("li")
        todo.isFinished = !todo.isFinished
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.changeTodoIcon(todo, li)
        _storage__WEBPACK_IMPORTED_MODULE_2__.storage.populateStorage()
    })
}

function setDateInput(dateInput, todo){
    dateInput.addEventListener("change", (event) => {
        todo.date = event.target.value
        _storage__WEBPACK_IMPORTED_MODULE_2__.storage.populateStorage()
    })
}

function showAllTodoByFilter(filterFunction, ...filterArgs){
    _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.projectWindow.innerHTML = ""
    const filteredProjects = _project_structurer__WEBPACK_IMPORTED_MODULE_3__.projectStructurer.filterTodos(filterFunction, ...filterArgs)
    const content = _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.createAllProjectsPage(filteredProjects)
    _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.projectWindow.appendChild(content)
}




/***/ }),

/***/ "./src/js/event-listeners-setter.js":
/*!******************************************!*\
  !*** ./src/js/event-listeners-setter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventListenerSetter": () => (/* binding */ eventListenerSetter)
/* harmony export */ });
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");
/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-object */ "./src/js/todo-object.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");
/* harmony import */ var _event_listener_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-listener-functions */ "./src/js/event-listener-functions.js");






const eventListenerSetter = (() => {

    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.getListUiElements(listContainer)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setAddBtn)(listInterface)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setClosePopupBtn)(listInterface)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setPopupAddBtn)(listInterface, createFunction, setupFunction)
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent
        _project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.activeProject = _project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.container[title]
        showActiveProject()
    }

    function showActiveProject(){
        const project = _project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.activeProject
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.selectObjectElement(project.domElement, "project")
        const projectPage = _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.createProjectPage(project)
        setListEventListeners(projectPage, _todo_object__WEBPACK_IMPORTED_MODULE_2__.createTodo, setTodoListeners)
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.projectWindow.innerHTML = ""
        _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.projectWindow.appendChild(projectPage)
    }

    function setProjectListeners(project){
        (0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setRemoveIcon)(_dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.getLiChildren(project.domElement).removeIcon, project)
        project.domElement.addEventListener("click", function(){
            chooseProject.call(this)
            showActiveProject()
        })
    }

    function setTodoListeners(todo){
        const liChildren = _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.getLiChildren(todo.domElement)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setRemoveIcon)(liChildren.removeIcon, todo)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setTitle)(liChildren.title, liChildren.titleInput, todo)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setTitleInput)(liChildren.title, liChildren.titleInput, todo)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setTodoIcon)(liChildren.itemIcon, todo)
        ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.setDateInput)(liChildren.dateInput, todo)
    }

    function setDateFilters(domElement, filterFunction, ...filterArgs){
        domElement.addEventListener("click", (event) => {
            _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.selectClosestProjectLi(event)
            ;(0,_event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.showAllTodoByFilter)(filterFunction, ...filterArgs)
        })
    }

    function setInbox(domElement){
        domElement.addEventListener("click", (event) => {
            chooseProject.call(domElement)
            _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.selectClosestProjectLi(event)
        })
    }

    function setStartPageEventListeners(today, weekStart, weekEnd){
        setListEventListeners(_dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.projectList, _project_object__WEBPACK_IMPORTED_MODULE_3__.createProject, eventListenerSetter.setProjectListeners)
        setDateFilters(_dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.thisWeek, _project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.isInDateRange, weekStart, weekEnd)
        setDateFilters(_dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.today, _project_structurer__WEBPACK_IMPORTED_MODULE_1__.projectStructurer.isOnDate, today)
        setInbox(_dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.domInterfacer.inbox)
    }
    
    return {
        setListEventListeners,
        setProjectListeners,
        setTodoListeners,
        showAllTodoByFilter: _event_listener_functions__WEBPACK_IMPORTED_MODULE_4__.showAllTodoByFilter,
        setDateFilters,
        setInbox,
        setStartPageEventListeners
    }
})()



/***/ }),

/***/ "./src/js/project-object.js":
/*!**********************************!*\
  !*** ./src/js/project-object.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _structurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structurer */ "./src/js/structurer.js");
/* harmony import */ var _base_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-object */ "./src/js/base-object.js");
/* harmony import */ var _images_project_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/project.png */ "./src/images/project.png");
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");





function createProject(parametersObject) {
    let type = "project"
    
    const containClass = "todo"
    const proto1 = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(containClass)
    const proto2 = (0,_base_object__WEBPACK_IMPORTED_MODULE_1__.createBaseObject)(type, parametersObject.title, _dom_interfacer__WEBPACK_IMPORTED_MODULE_3__.domInterfacer.createProjectLi)

    return Object.assign({}, proto1, proto2)
}



/***/ }),

/***/ "./src/js/project-structurer.js":
/*!**************************************!*\
  !*** ./src/js/project-structurer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectStructurer": () => (/* binding */ projectStructurer)
/* harmony export */ });
/* harmony import */ var _structurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structurer */ "./src/js/structurer.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isBefore/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isSameDay/index.js");




const projectStructurer = (() => {
    const title = 'Projects'
    const containClass = "project"
    const proto = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(containClass)
    //default inbox project setup
    const inbox = (0,_project_object__WEBPACK_IMPORTED_MODULE_1__.createProject)({"title": "Inbox"})
    proto.add(inbox)
    const activeProject = proto.container[inbox.title]

    function add(object){
        if (object.constructor.name.toLowerCase() !== containClass){
            return this.activeProject.add(object)
        }
        else {
            return proto.add(object)
        }
    }

    function remove(object){
        if (object.constructor.name.toLowerCase() !== containClass){
            return this.activeProject.remove(object)
        }
        else {
            return proto.remove(object)
        }
    }

    function filterTodos(filterFunction, ...args){
        const filteredContainer = {}
        Object.values(this.container).forEach(project => {
            const title = project.title
            const copyProject = (0,_project_object__WEBPACK_IMPORTED_MODULE_1__.createProject)({title})
            Object.values(project.container).forEach(todo => {
                if (filterFunction.apply(todo, args)) copyProject.add(todo)
            })
            filteredContainer[copyProject.title] = copyProject
        })
        return filteredContainer 
    }

    function isInDateRange(startDate, endDate){
        const isoDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(this.date)
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(isoDate, endDate) && (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(isoDate, startDate)
    }

    function isOnDate(date){
        const isoDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(this.date)
        return ((0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])(isoDate, date))
    }

    return Object.assign({}, proto, {
        add,
        remove,
        filterTodos,
        isInDateRange,
        isOnDate,
        get activeProject() {
            return activeProject
        },
        set activeProject(project){
            activeProject = project
        },
        get title() {
            return title
        }
    })
})()



/***/ }),

/***/ "./src/js/selectorHolder.js":
/*!**********************************!*\
  !*** ./src/js/selectorHolder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectorHolder": () => (/* binding */ selectorHolder)
/* harmony export */ });
const selectorHolder = (() => {
    
    return {
    //list selectors
    list : "list",
    //li selectors
    itemIcon : "list-icon",
    rightDiv : "right-li",
    removeitemIcon : "remove-icon",
    //todo li
    inputDate : "input-date",
    inputTitle: "input-title",
    //popup selectors
    addPopup : "add-popup",
    btnContainer : "btn-container",
    //special selectors
    addBtn : "add-btn",
    cancelBtn : "cancel-btn",
    active : "active",
    hidden : "hidden",
    selected : "selected",
    todo : "todo",
    project : "project",
    inbox : "cInbox",
    today: "cToday",
    thisWeek: "cThis-week",
    projectList: "list.project",
    projectWindow: "content",
    menu: "menu",
    done: "done"
    }
})()



/***/ }),

/***/ "./src/js/start-page-setter.js":
/*!*************************************!*\
  !*** ./src/js/start-page-setter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setStartPage": () => (/* binding */ setStartPage)
/* harmony export */ });
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _event_listeners_setter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-listeners-setter */ "./src/js/event-listeners-setter.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/nextMonday/index.js");
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/js/storage.js");







function setStartPage() {
    if(localStorage.getItem("projects")) {
        //change to classes, create folders and done
        _storage__WEBPACK_IMPORTED_MODULE_4__.storage.populateContainer()
        resetProjectsList()
    }
    const dates = getDates()
    _event_listeners_setter__WEBPACK_IMPORTED_MODULE_1__.eventListenerSetter.setStartPageEventListeners(dates.today, dates.weekStart, dates.weekEnd)
    _dom_interfacer__WEBPACK_IMPORTED_MODULE_2__.domInterfacer.inbox.click()
}

function resetProjectsList(){
    const div = _dom_interfacer__WEBPACK_IMPORTED_MODULE_2__.domInterfacer.createProjectList(_project_structurer__WEBPACK_IMPORTED_MODULE_3__.projectStructurer)
    const menu = _dom_interfacer__WEBPACK_IMPORTED_MODULE_2__.domInterfacer.menu
    menu.removeChild(_dom_interfacer__WEBPACK_IMPORTED_MODULE_2__.domInterfacer.projectList)
    menu.appendChild(div)
    _dom_interfacer__WEBPACK_IMPORTED_MODULE_2__.domInterfacer.projectList = div
}

function getDates(){
    const today = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__["default"])()
    const weekStart = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])(today, { weekStartsOn: 1 })
    const weekEnd = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(today)
    return { today, weekStart, weekEnd }
}



/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");
/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-object */ "./src/js/todo-object.js");
/* harmony import */ var _event_listeners_setter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-listeners-setter */ "./src/js/event-listeners-setter.js");





const storage = (() => {
    function populateStorage(){
        const projects = {}
        Object.values(_project_structurer__WEBPACK_IMPORTED_MODULE_0__.projectStructurer.container).forEach(project => {
            projects[project.title] = {}
            Object.values(project.container).forEach(todo => {
                projects[project.title][todo.title] = todo.allData()
            })
        })
        const stringProjects = JSON.stringify(projects)
        localStorage.setItem("projects", stringProjects)
    }

    //move to controller
    function populateContainer(){
        const projects = JSON.parse(localStorage.projects);
        Object.keys(projects).forEach((title) => {
            const project = (0,_project_object__WEBPACK_IMPORTED_MODULE_1__.createProject)({title})
            _event_listeners_setter__WEBPACK_IMPORTED_MODULE_3__.eventListenerSetter.setProjectListeners(project)
            _project_structurer__WEBPACK_IMPORTED_MODULE_0__.projectStructurer.add(project)
            Object.values(projects[title]).forEach((todoParams) => {
                const todo = (0,_todo_object__WEBPACK_IMPORTED_MODULE_2__.createTodo)(todoParams)
                _event_listeners_setter__WEBPACK_IMPORTED_MODULE_3__.eventListenerSetter.setTodoListeners(todo)
                _project_structurer__WEBPACK_IMPORTED_MODULE_0__.projectStructurer.container[title].add(todo)
            })
        })   
    }

    return {
        populateStorage,
        populateContainer
    }
    
})()



/***/ }),

/***/ "./src/js/structurer.js":
/*!******************************!*\
  !*** ./src/js/structurer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStructurer": () => (/* binding */ createStructurer)
/* harmony export */ });
function createStructurer(containClass) {
    const container = {}
    function add(object){
        if (object.title in container) return false
        container[object.title] = object
        return true
    }
    function remove(object){
        delete this.container[object.title]
    }
    return {
        add,
        remove,
        get container() {
            return container
        },
        get containClass() {
            return containClass
        }
    }
}



/***/ }),

/***/ "./src/js/todo-object.js":
/*!*******************************!*\
  !*** ./src/js/todo-object.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _base_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-object */ "./src/js/base-object.js");
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");



function createTodo(parametersObject) {
    let title = parametersObject.title
    let date = parametersObject.date || ""
    let isFinished = parametersObject.isFinished || false;
    let type = "todo"

    const proto = (0,_base_object__WEBPACK_IMPORTED_MODULE_0__.createBaseObject)(type, title, _dom_interfacer__WEBPACK_IMPORTED_MODULE_1__.domInterfacer.createTodoLi.bind(parametersObject))

    return Object.assign({}, proto, { 
        date,
        isFinished,
        allData: function(){
            const title = this.title
            const date = this.date
            const isFinished = this.isFinished
            return { title, date, isFinished }
        },
    })

}



/***/ }),

/***/ "./src/fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff":
/*!******************************************************************!*\
  !*** ./src/fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd41fed28fbcec570aaf.woff";

/***/ }),

/***/ "./src/fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2":
/*!*******************************************************************!*\
  !*** ./src/fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2 ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8aa0bf0a4e02821116d0.woff2";

/***/ }),

/***/ "./src/images/add-icon.png":
/*!*********************************!*\
  !*** ./src/images/add-icon.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d94315115b7d9c3602b7.png";

/***/ }),

/***/ "./src/images/finished-task.png":
/*!**************************************!*\
  !*** ./src/images/finished-task.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "724ca14fb40b71dec3f5.png";

/***/ }),

/***/ "./src/images/project.png":
/*!********************************!*\
  !*** ./src/images/project.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a2fd82c4cdccb83bd84.png";

/***/ }),

/***/ "./src/images/remove-task.png":
/*!************************************!*\
  !*** ./src/images/remove-task.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bf51407e8d747da91c2.png";

/***/ }),

/***/ "./src/images/today.png":
/*!******************************!*\
  !*** ./src/images/today.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee424bd948e6a83682d5.png";

/***/ }),

/***/ "./src/images/unfinished-task.png":
/*!****************************************!*\
  !*** ./src/images/unfinished-task.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e6afd9a683177d29194.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _start_page_setter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-page-setter */ "./src/js/start-page-setter.js");


(0,_start_page_setter__WEBPACK_IMPORTED_MODULE_0__.setStartPage)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsZUFBZSxtRUFBUzs7QUFFeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFTzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIaUM7QUFDaUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLGFBQWEsZUFBZTtBQUM1QixZ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RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7OztBQ3JCbUQ7O0FBRW5ELGdFQUFZLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2dldERheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0JlZm9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL25leHREYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9uZXh0TW9uZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZlRvZGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3RhcnRPZldlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9iYXNlLW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvZG9tLWJhc2ljLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvZG9tLWludGVyZmFjZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL2RvbS1saXN0LWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvZXZlbnQtbGlzdGVuZXItZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9ldmVudC1saXN0ZW5lcnMtc2V0dGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9wcm9qZWN0LW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvcHJvamVjdC1zdHJ1Y3R1cmVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9zZWxlY3RvckhvbGRlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvc3RhcnQtcGFnZS1zZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3N0cnVjdHVyZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3RvZG8tb2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU2stTW9kZXJuaXN0LVJlZ3VsYXIvU2stTW9kZXJuaXN0LVJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Tay1Nb2Rlcm5pc3QtUmVndWxhci9Tay1Nb2Rlcm5pc3QtUmVndWxhci53b2ZmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaW1hZ2VzL3RvZGF5LnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIxMSwgMjAxKTtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNzgsIDY4KTtcXG4gICAgLS1oZWFkZXItZm9udC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1tZW51LWhvdmVyLWJhY2tncm91bmQ6cmdiKDE0NCwgMTc1LCAxNjApOyBcXG4gICAgLS1jb250ZW50LWhvdmVyLWJhY2tncm91bmQ6IHJnYigyMjYsIDIzNSwgMjMwKTtcXG4gICAgLS1wb3B1cC1idG4tY29sb3I6IHJnYigyMjYsIDIzNSwgMjMwKTtcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm5pc3RcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vZGVybmlzdFxcXCIsIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKVxcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5tZW51LWljb24gcGF0aCxcXG4ubG9nby1pY29uIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDoxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmxpc3QgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5saXN0IHVsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDE1ZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5saXN0LnByb2plY3QgdWwge1xcbiAgICBtYXgtaGVpZ2h0OiAxMGVtO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdC5wcm9qZWN0IGxpLFxcbi5saXN0Lm9wdGlvbnMgbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLmxpc3QudG9kbyBsaSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0LnRvZG8gbGkuZG9uZSB7XFxuICAgIGZpbHRlcjpvcGFjaXR5KDAuNSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4ubGlzdCBsaSBhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmxpc3QgbGk6aG92ZXIsXFxuLm1lbnUgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWhvdmVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ubGlzdC50b2RvIGxpOmhvdmVyLFxcbiNjb250ZW50IC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QgbGk6aG92ZXIgLnJlbW92ZS1pY29uIHtcXG4gICAgZGlzcGxheTppbmxpbmU7XFxufVxcblxcbi5yaWdodC1saSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XFxufVxcblxcbi50b2RvLmlucHV0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgICBtYXJnaW46IDAuMWVtXFxufVxcblxcbi50b2RvLmlucHV0LWRhdGU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby5pbnB1dC10aXRsZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDAuNXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubGlzdCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmxpc3QgaW1nIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLnJlbW92ZS1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0IGgyLFxcbi5saXN0IGgxIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1wb3B1cCB7XFxuICAgIHdpZHRoOiAxMDAlOztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG5ib2R5IC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5IC5zZWxlY3RlZCB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjg1KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtcG9wdXAgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtcG9wdXAgaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uYWRkLXBvcHVwIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcG9wdXAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDI1NSwgMTcwKTtcXG59XFxuXFxuLmFkZC1wb3B1cC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxOTApO1xcbn1cXG5cXG4uYWRkLXBvcHVwLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMzYsIDE0NCk7XFxufVxcblxcbi5hZGQtcG9wdXAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWIyYjI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMmVtIDEwZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZmxleDogMTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZm9vdGVyIGltZzpob3ZlciB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoMzYwZGVnKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKnNjcm9sbCBiYXIqL1xcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbiAgXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gIFxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0NBQXNDO0lBQ3RDLDZCQUE2QjtJQUM3QiwwQ0FBMEM7SUFDMUMsK0JBQStCO0lBQy9CLDBDQUEwQztJQUMxQyw4Q0FBOEM7SUFDOUMscUNBQXFDO0lBQ3JDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qjs4REFDaUY7SUFDakYsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9DQUFvQztJQUNwQztBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFn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aUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZ0RBQWdEO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMTEsIDIwMSk7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDQ4LCA3OCwgNjgpO1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWZvbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kOnJnYigxNDQsIDE3NSwgMTYwKTsgXFxuICAgIC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxuICAgIC0tcG9wdXAtYnRuLWNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9kZXJuaXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoJy4uL2ZvbnRzL1NrLU1vZGVybmlzdC1SZWd1bGFyL1NrLU1vZGVybmlzdC1SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKCcuLi9mb250cy9Tay1Nb2Rlcm5pc3QtUmVndWxhci9Tay1Nb2Rlcm5pc3QtUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm5pc3RcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcilcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubWVudS1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubWVudS1pY29uIHBhdGgsXFxuLmxvZ28taWNvbiBwYXRoIHtcXG4gICAgZmlsbDogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6MTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5saXN0ICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ubGlzdCB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAxNWVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubGlzdC5wcm9qZWN0IHVsIHtcXG4gICAgbWF4LWhlaWdodDogMTBlbTtcXG59XFxuXFxuLmxpc3QgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QucHJvamVjdCBsaSxcXG4ubGlzdC5vcHRpb25zIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5saXN0LnRvZG8gbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcbn1cXG5cXG4ubGlzdC50b2RvIGxpLmRvbmUge1xcbiAgICBmaWx0ZXI6b3BhY2l0eSgwLjUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmxpc3QgbGkgYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5saXN0IGxpOmhvdmVyLFxcbi5tZW51IC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QudG9kbyBsaTpob3ZlcixcXG4jY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0IGxpOmhvdmVyIC5yZW1vdmUtaWNvbiB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbn1cXG5cXG4ucmlnaHQtbGkge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kbyBpbnB1dCB7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4udG9kby5pbnB1dC10aXRsZSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gICAgbWFyZ2luOiAwLjFlbVxcbn1cXG5cXG4udG9kby5pbnB1dC1kYXRlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLnRvZG8uaW5wdXQtdGl0bGU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAwLjVweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLmxpc3QgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5saXN0IGltZyB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi5yZW1vdmUtaWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdCBoMixcXG4ubGlzdCBoMSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGdhcDogMC41ZW07XFxufVxcblxcbi5hZGQtcG9wdXAge1xcbiAgICB3aWR0aDogMTAwJTs7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuYm9keSAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuYm9keSAuYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSAuc2VsZWN0ZWQge1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44NSk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uYWRkLXBvcHVwID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXBvcHVwIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLmFkZC1wb3B1cCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWFnZXMvdG9kYXkucG5nXFxcIik7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1wb3B1cC5hZGQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMjU1LCAxNzApO1xcbn1cXG5cXG4uYWRkLXBvcHVwLmNhbmNlbC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDE5MCk7XFxufVxcblxcbi5hZGQtcG9wdXAuYWRkLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIzNiwgMTQ0KTtcXG59XFxuXFxuLmFkZC1wb3B1cC5jYW5jZWwtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1YjJiMjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyZW0gMTBlbTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBmbGV4OiAxO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2Nyb2xsIGJhciovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuICBcXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGREYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZERheXMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG5cbiAgaWYgKGlzTmFOKGFtb3VudCkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG5cbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgYW1vdW50KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cblxuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwOyIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZ2V0RGF5XG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgd2VlayBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7MHwxfDJ8M3w0fDV8Nn0gdGhlIGRheSBvZiB3ZWVrLCAwIHJlcHJlc2VudHMgU3VuZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiBjb25zdCByZXN1bHQgPSBnZXREYXkobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0RGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHJldHVybiBkYXk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAxMCBKdWx5IDE5ODkgYWZ0ZXIgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNBZnRlcihkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpID4gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0JlZm9yZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYmVmb3JlIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0JlZm9yZShkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSB0b0RhdGUoZGlydHlEYXRlVG9Db21wYXJlKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHN0YXJ0T2ZEYXkgZnJvbSBcIi4uL3N0YXJ0T2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZURheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5IChhbmQgeWVhciBhbmQgbW9udGgpP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aClcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAxODowMDowMCBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLCBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqIFxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkobmV3IERhdGUoMjAxNCwgOCwgNCksIG5ldyBEYXRlKDIwMTQsIDksIDQpKVxuICogLy89PiBmYWxzZVxuICogXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyLCAyMDE0IGFuZCA0IFNlcHRlbWJlciwgMjAxNSBpbiB0aGUgc2FtZSBkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1NhbWVEYXkoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZkRheSA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGFkZERheXMgZnJvbSBcIi4uL2FkZERheXMvaW5kZXguanNcIjtcbmltcG9ydCBnZXREYXkgZnJvbSBcIi4uL2dldERheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgbmV4dERheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgV2hlbiBpcyB0aGUgbmV4dCBkYXkgb2YgdGhlIHdlZWs/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGVuIGlzIHRoZSBuZXh0IGRheSBvZiB0aGUgd2Vlaz8gMC02IHRoZSBkYXkgb2YgdGhlIHdlZWssIDAgcmVwcmVzZW50cyBTdW5kYXkuXG4gKlxuICogQHBhcmFtIHtEYXRlIHwgbnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF5fSBkYXkgLSBkYXkgb2YgdGhlIHdlZWtcbiAqIEByZXR1cm5zIHtEYXRlfSAtIHRoZSBkYXRlIGlzIHRoZSBuZXh0IGRheSBvZiB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IC0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBNb25kYXkgYWZ0ZXIgTWFyLCAyMCwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IG5leHREYXkobmV3IERhdGUoMjAyMCwgMiwgMjApLCAxKVxuICogLy89PiBNb24gTWFyIDIzIDIwMjAgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBUdWVzZGF5IGFmdGVyIE1hciwgMjEsIDIwMjA/XG4gKiBjb25zdCByZXN1bHQgPSBuZXh0RGF5KG5ldyBEYXRlKDIwMjAsIDIsIDIxKSwgMilcbiAqIC8vPT4gVHVlIE1hciAyNCAyMDIwIDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV4dERheShkYXRlLCBkYXkpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWx0YSA9IGRheSAtIGdldERheShkYXRlKTtcbiAgaWYgKGRlbHRhIDw9IDApIGRlbHRhICs9IDc7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIGRlbHRhKTtcbn0iLCJpbXBvcnQgbmV4dERheSBmcm9tIFwiLi4vbmV4dERheS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgbmV4dE1vbmRheVxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgV2hlbiBpcyB0aGUgbmV4dCBNb25kYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBXaGVuIGlzIHRoZSBuZXh0IE1vbmRheT9cbiAqXG4gKiBAcGFyYW0ge0RhdGUgfCBudW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBzdGFydCBjb3VudGluZyBmcm9tXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5leHQgTW9uZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hlbiBpcyB0aGUgbmV4dCBNb25kYXkgYWZ0ZXIgTWFyLCAyMiwgMjAyMD9cbiAqIGNvbnN0IHJlc3VsdCA9IG5leHRNb25kYXkobmV3IERhdGUoMjAyMCwgMiwgMjIpKVxuICogLy89PiBNb24gTWFyIDIzIDIwMjAgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuZXh0TW9uZGF5KGRhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBuZXh0RGF5KGRhdGUsIDEpO1xufSIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBwcmV2aW91cyBgcGFyc2VgIGltcGxlbWVudGF0aW9uIHdhcyByZW5hbWVkIHRvIGBwYXJzZUlTT2AuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgcGFyc2UoJzIwMTYtMDEtMDEnKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBwYXJzZUlTTygnMjAxNi0wMS0wMScpXG4gKiAgIGBgYFxuICpcbiAqIC0gYHBhcnNlSVNPYCBub3cgdmFsaWRhdGVzIHNlcGFyYXRlIGRhdGUgYW5kIHRpbWUgdmFsdWVzIGluIElTTy04NjAxIHN0cmluZ3NcbiAqICAgYW5kIHJldHVybnMgYEludmFsaWQgRGF0ZWAgaWYgdGhlIGRhdGUgaXMgaW52YWxpZC5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgcGFyc2VJU08oJzIwMTgtMTMtMzInKVxuICogICAvLz0+IEludmFsaWQgRGF0ZVxuICogICBgYGBcbiAqXG4gKiAtIGBwYXJzZUlTT2Agbm93IGRvZXNuJ3QgZmFsbCBiYWNrIHRvIGBuZXcgRGF0ZWAgY29uc3RydWN0b3JcbiAqICAgaWYgaXQgZmFpbHMgdG8gcGFyc2UgYSBzdHJpbmcgYXJndW1lbnQuIEluc3RlYWQsIGl0IHJldHVybnMgYEludmFsaWQgRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzID09IG51bGwgPyAyIDogdG9JbnRlZ2VyKG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cyk7XG5cbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuXG4gIGlmICghKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcblxuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuXG4gIGlmICghZGF0ZSB8fCBpc05hTihkYXRlLmdldFRpbWUoKSkpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuXG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcblxuICAgIGlmIChpc05hTih0aW1lKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG5cbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTsgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSArIG9mZnNldCk7XG59XG52YXIgcGF0dGVybnMgPSB7XG4gIGRhdGVUaW1lRGVsaW1pdGVyOiAvW1QgXS8sXG4gIHRpbWVab25lRGVsaW1pdGVyOiAvW1ogXS9pLFxuICB0aW1lem9uZTogLyhbWistXS4qKSQvXG59O1xudmFyIGRhdGVSZWdleCA9IC9eLT8oPzooXFxkezN9KXwoXFxkezJ9KSg/Oi0/KFxcZHsyfSkpP3xXKFxcZHsyfSkoPzotPyhcXGR7MX0pKT98KSQvO1xudmFyIHRpbWVSZWdleCA9IC9eKFxcZHsyfSg/OlsuLF1cXGQqKT8pKD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8kLztcbnZhciB0aW1lem9uZVJlZ2V4ID0gL14oWystXSkoXFxkezJ9KSg/Ojo/KFxcZHsyfSkpPyQvO1xuXG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nOyAvLyBUaGUgcmVnZXggbWF0Y2ggc2hvdWxkIG9ubHkgcmV0dXJuIGF0IG1heGltdW0gdHdvIGFycmF5IGVsZW1lbnRzLlxuICAvLyBbZGF0ZV0sIFt0aW1lXSwgb3IgW2RhdGUsIHRpbWVdLlxuXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG5cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuXG4gICAgaWYgKHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyLnRlc3QoZGF0ZVN0cmluZ3MuZGF0ZSkpIHtcbiAgICAgIGRhdGVTdHJpbmdzLmRhdGUgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLnRpbWVab25lRGVsaW1pdGVyKVswXTtcbiAgICAgIHRpbWVTdHJpbmcgPSBkYXRlU3RyaW5nLnN1YnN0cihkYXRlU3RyaW5ncy5kYXRlLmxlbmd0aCwgZGF0ZVN0cmluZy5sZW5ndGgpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRhdGVTdHJpbmdzO1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG5cbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDsgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJzZURhdGUoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBjYXB0dXJlcyA9IGRhdGVTdHJpbmcubWF0Y2goZGF0ZVJlZ2V4KTsgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHN0cmluZ1xuXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG5cbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRheU9mSVNPV2Vla1llYXIoeWVhciwgd2VlaywgZGF5T2ZXZWVrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuXG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG5cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZVVuaXQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID8gcGFyc2VJbnQodmFsdWUpIDogMTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuXG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gaG91cnMgKiBtaWxsaXNlY29uZHNJbkhvdXIgKyBtaW51dGVzICogbWlsbGlzZWNvbmRzSW5NaW51dGUgKyBzZWNvbmRzICogMTAwMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cblxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG5cbiAgaWYgKCF2YWxpZGF0ZVRpbWV6b25lKGhvdXJzLCBtaW51dGVzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn0gLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxuXG5cbnZhciBkYXlzSW5Nb250aHMgPSBbMzEsIG51bGwsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXTtcblxuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpIHtcbiAgcmV0dXJuIGRheU9mWWVhciA+PSAxICYmIGRheU9mWWVhciA8PSAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMzY2IDogMzY1KTtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG5cbiAgcmV0dXJuIHNlY29uZHMgPj0gMCAmJiBzZWNvbmRzIDwgNjAgJiYgbWludXRlcyA+PSAwICYmIG1pbnV0ZXMgPCA2MCAmJiBob3VycyA+PSAwICYmIGhvdXJzIDwgMjU7XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgc3RhcnRPZkRheSBmcm9tIFwiLi4vc3RhcnRPZkRheS9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdGFydE9mVG9kYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiB0b2RheS5cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZlRvZGF5KClcbiAqIC8vPT4gTW9uIE9jdCA2IDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVG9kYXkoKSB7XG4gIHJldHVybiBzdGFydE9mRGF5KERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZXZWVrXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVCYXNlT2JqZWN0KHR5cGUsIHRpdGxlLCBjcmVhdGVMaUVsZW1lbnRGdW5jdGlvbikge1xuICAgIGZ1bmN0aW9uIGNoYW5nZVRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgIGlmIChuZXdUaXRsZSA9PT0gXCJcIiB8fCBuZXdUaXRsZSA9PSBudWxsKSBuZXdUaXRsZSA9IFwiRGVmYXVsdCB0aXRsZVwiXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGVcbiAgICB9XG4gICAgY2hhbmdlVGl0bGUodGl0bGUpXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBjaGFuZ2VUaXRsZSxcbiAgICAgICAgY2xhc3NOYW1lVG9UaXRsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lLnN1YnN0cmluZygxKS5yZXBsYWNlKC8tL2csICcgJylcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVUb0NsYXNzTmFtZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImNcIiArIHRoaXMudGl0bGUucmVwbGFjZSgvXFxXL2csIFwiLVwiKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBsaUVsZW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlTGlFbGVtZW50RnVuY3Rpb24odGhpcylcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHRpdGxlKCl7XG4gICAgICAgICAgICByZXR1cm4gdGl0bGVcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IHRpdGxlKG5ld1RpdGxlKSB7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlXG4gICAgICAgICAgICBpZiAobmV3VGl0bGUgPT09IFwiXCIgfHwgbmV3VGl0bGUgPT0gbnVsbCkgdGl0bGUgPSBcIkRlZmF1bHQgdGl0bGVcIlxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVCYXNlT2JqZWN0IH0iLCJpbXBvcnQgeyBkb21JbnRlcmZhY2VyIH0gZnJvbSBcIi4vZG9tLWludGVyZmFjZXJcIlxuaW1wb3J0IHsgcHJvamVjdFN0cnVjdHVyZXIgfSBmcm9tIFwiLi9wcm9qZWN0LXN0cnVjdHVyZXJcIlxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIlxuXG5jb25zdCBjb250cm9sbGVyID0gKCgpID0+IHtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU9iamVjdChvYmplY3QsIG9iamVjdExpc3Qpe1xuICAgICAgICBvYmplY3RMaXN0LnJlbW92ZUNoaWxkKG9iamVjdC5saUVsZW1lbnQpXG4gICAgICAgIHByb2plY3RTdHJ1Y3R1cmVyLnJlbW92ZShvYmplY3QpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGlucHV0Rm9ybSwgY3JlYXRlRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IGRvbUludGVyZmFjZXIuY29sbGVjdElucHV0KGlucHV0Rm9ybSlcbiAgICAgICAgY29uc3Qgb2JqID0gY3JlYXRlRnVuY3Rpb24ocGFyYW1ldGVycylcbiAgICAgICAgaWYgKCFwcm9qZWN0U3RydWN0dXJlci5hZGQob2JqKSkgcmV0dXJuXG4gICAgICAgIHN0b3JhZ2UucG9wdWxhdGVTdG9yYWdlKClcbiAgICAgICAgcmV0dXJuIG9ialxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE9iamVjdChvYmplY3QsIG9iamVjdExpc3QsIHNldHVwRnVuY3Rpb24pe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBvYmplY3RFbGVtZW50ID0gb2JqZWN0LmxpRWxlbWVudFxuICAgICAgICAgICAgc2V0dXBGdW5jdGlvbihvYmplY3QpXG4gICAgICAgICAgICBvYmplY3RMaXN0LmFwcGVuZENoaWxkKG9iamVjdEVsZW1lbnQpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgYWxlcnQoXCJBbHJlZHkgZXhpc3RzIVwiKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlT2JqZWN0LFxuICAgICAgICBhZGRPYmplY3QsXG4gICAgICAgIHJlbW92ZU9iamVjdCxcbiAgICB9XG59KSgpXG5cbmV4cG9ydCB7IGNvbnRyb2xsZXIgfSIsImZ1bmN0aW9uIGNyZWF0ZURvbUZ1bmN0aW9ucygpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQobmFtZSwgY2xhc3Nlcyl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc2VzKXtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCBjbGFzc2VzKVxuICAgICAgICByZXR1cm4gZGl2XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW1nKGNsYXNzZXMsIHNyYywgaGVpZ2h0LCB3aWR0aCl7XG4gICAgICAgIGNvbnN0IGltZyA9IGNyZWF0ZURvbUVsZW1lbnQoXCJpbWdcIiwgY2xhc3NlcylcbiAgICAgICAgaW1nLmhlaWdodCA9IGhlaWdodFxuICAgICAgICBpbWcud2lkdGggPSB3aWR0aFxuICAgICAgICBpbWcuc3JjID0gc3JjXG4gICAgICAgIHJldHVybiBpbWdcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dChjbGFzc2VzLCBuYW1lLCB0eXBlKXtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVEb21FbGVtZW50KFwiaW5wdXRcIiwgY2xhc3NlcylcbiAgICAgICAgaW5wdXQudHlwZSA9IHR5cGVcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWVcbiAgICAgICAgcmV0dXJuIGlucHV0XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQnRuKGNsYXNzZXMsIHRleHRDb250ZW50KXtcbiAgICAgICAgY29uc3QgYnRuID0gY3JlYXRlRG9tRWxlbWVudChcImJ1dHRvblwiLCBjbGFzc2VzKVxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKVxuICAgICAgICByZXR1cm4gYnRuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29sbGVjdElucHV0KGZvcm0pe1xuICAgICAgICBjb25zdCBwYXJhbWV0ZXJzID0ge31cbiAgICAgICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIilcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgaWYgKGlucHV0LnR5cGUgPT0gXCJ0ZXh0XCIpIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUucmVwbGFjZSgvW15hLXpcXGRdLywgJyAnKVxuICAgICAgICAgICAgcGFyYW1ldGVyc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHBhcmFtZXRlcnNcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhbklucHV0KGZvcm0pe1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKVxuICAgICAgICBpbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IFwiXCJcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsZW1lbnQpe1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGlkZUVsZW1lbnQoZWxlbWVudCl7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtVG9TaG93LCBlbGVtVG9IaWRlKSB7XG4gICAgICAgIHNob3dFbGVtZW50KGVsZW1Ub1Nob3cpXG4gICAgICAgIGhpZGVFbGVtZW50KGVsZW1Ub0hpZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlRGl2LFxuICAgICAgICBjcmVhdGVCdG4sXG4gICAgICAgIGNyZWF0ZUltZyxcbiAgICAgICAgY3JlYXRlSW5wdXQsXG4gICAgICAgIGNvbGxlY3RJbnB1dCxcbiAgICAgICAgcmVwbGFjZUVsZW1lbnQsXG4gICAgICAgIGhpZGVFbGVtZW50LFxuICAgICAgICBjbGVhbklucHV0LFxuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlRG9tRnVuY3Rpb25zIH0iLCJpbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2FkZC1pY29uLnBuZ1wiXG5pbXBvcnQgeyBjcmVhdGVEb21MaXN0RnVuY3Rpb25zIH0gZnJvbSBcIi4vZG9tLWxpc3QtZnVuY3Rpb25zXCJcbmltcG9ydCB7IHNlbGVjdG9ySG9sZGVyIH0gZnJvbSBcIi4vc2VsZWN0b3JIb2xkZXJcIlxuXG5jb25zdCBkb21JbnRlcmZhY2VyID0gKCgpID0+IHtcbiAgICBjb25zdCBkb21GdW5jdGlvbnMgPSBjcmVhdGVEb21MaXN0RnVuY3Rpb25zKClcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZEJ0bihvYmplY3RUeXBlKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVCdG4oW3NlbGVjdG9ySG9sZGVyLmFkZEJ0biwgb2JqZWN0VHlwZSwgc2VsZWN0b3JIb2xkZXIuYWN0aXZlXSwgYEFkZCAke29iamVjdFR5cGV9YClcbiAgICAgICAgY29uc3QgYnRuSWNvbiA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVJbWcoW10sQWRkSWNvbiwgXCIxNlwiLCBcIjE2XCIpXG4gICAgICAgIGJ0bi5wcmVwZW5kKGJ0bkljb24pXG4gICAgICAgIHJldHVybiBidG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRQb3B1cChhZGRUeXBlKXtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9tRnVuY3Rpb25zLmNyZWF0ZURpdihbc2VsZWN0b3JIb2xkZXIuYWRkUG9wdXAsIGFkZFR5cGUsIHNlbGVjdG9ySG9sZGVyLmhpZGRlbl0pXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9tRnVuY3Rpb25zLmNyZWF0ZUlucHV0KFtzZWxlY3RvckhvbGRlci5hZGRQb3B1cCwgc2VsZWN0b3JIb2xkZXIuaW5wdXRUaXRsZV0sIFwidGl0bGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVEaXYoW3NlbGVjdG9ySG9sZGVyLmJ0bkNvbnRhaW5lcl0pXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVCdG4oW3NlbGVjdG9ySG9sZGVyLmFkZFBvcHVwLCBzZWxlY3RvckhvbGRlci5hZGRCdG5dLCBcIkFkZFwiKVxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb21GdW5jdGlvbnMuY3JlYXRlQnRuKFtzZWxlY3RvckhvbGRlci5hZGRQb3B1cCwgc2VsZWN0b3JIb2xkZXIuY2FuY2VsQnRuXSwgXCJDYW5jZWxcIilcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bilcbiAgICAgICAgZGl2LmFwcGVuZChpbnB1dCwgYnRuQ29udGFpbmVyKVxuICAgICAgICByZXR1cm4gZGl2XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0KXtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb21GdW5jdGlvbnMuY3JlYXRlRGl2VWxFbGVtZW50cyhwcm9qZWN0LCBcImgxXCIpXG4gICAgICAgIGNvbnN0IGRpdiA9IGVsZW1lbnRzLmRpdlxuICAgICAgICBlbGVtZW50cy5oZWFkZXIuY2xhc3NMaXN0LmFkZChwcm9qZWN0LnRpdGxlVG9DbGFzc05hbWUoKSlcbiAgICAgICAgZWxlbWVudHMudWwuY2xhc3NMaXN0LmFkZChwcm9qZWN0LnRpdGxlVG9DbGFzc05hbWUoKSlcbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZFBvcHVwSW50ZXJmYWNlKGRpdiwgYWRkVHlwZSl7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGNyZWF0ZUFkZEJ0bihgJHthZGRUeXBlfWApXG4gICAgICAgIGNvbnN0IGFkZFBvcHVwID0gY3JlYXRlQWRkUG9wdXAoYCR7YWRkVHlwZX1gKVxuICAgICAgICBkaXYuYXBwZW5kKGFkZEJ0biwgYWRkUG9wdXApXG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQYWdlKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlUHJvamVjdERpdihwcm9qZWN0KVxuICAgICAgICBhZGRQb3B1cEludGVyZmFjZShkaXYsIHNlbGVjdG9ySG9sZGVyLnRvZG8pXG4gICAgICAgIHJldHVybiBkaXZcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBbGxQcm9qZWN0c1BhZ2UocHJvamVjdHNDb250YWluZXIpe1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9tRnVuY3Rpb25zLmNyZWF0ZURpdihbXCJhbGwtcHJvamVjdHNcIl0pO1xuICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3RzQ29udGFpbmVyKS5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBjcmVhdGVQcm9qZWN0RGl2KHByb2plY3QpXG4gICAgICAgICAgICBpZiAoZGl2LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIGNvbnRlbnQuYXBwZW5kKGRpdilcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNvbnRlbnRcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0TGlzdChwcm9qZWN0U3RydWN0dXJlcikge1xuICAgICAgICBjb25zdCBkaXYgPSBkb21GdW5jdGlvbnMuY3JlYXRlRGl2VWxFbGVtZW50cyhwcm9qZWN0U3RydWN0dXJlciwgXCJoMlwiKS5kaXZcbiAgICAgICAgYWRkUG9wdXBJbnRlcmZhY2UoZGl2LCBzZWxlY3RvckhvbGRlci5wcm9qZWN0KVxuICAgICAgICBkaXYucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIuaW5ib3h9YCkuY2xhc3NMaXN0LmFkZChgJHtzZWxlY3RvckhvbGRlci5oaWRkZW59YClcbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlbGVjdE9iamVjdEVsZW1lbnQoZWxlbWVudCwgZWxlbWVudFR5cGUpe1xuICAgICAgICBjb25zdCBwcmV2aW91c1NlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIuc2VsZWN0ZWR9LiR7ZWxlbWVudFR5cGV9YClcbiAgICAgICAgaWYgKHByZXZpb3VzU2VsZWN0ZWQpIHByZXZpb3VzU2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShgJHtzZWxlY3RvckhvbGRlci5zZWxlY3RlZH1gKVxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7c2VsZWN0b3JIb2xkZXIuc2VsZWN0ZWR9YClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZWxlY3RDbG9zZXN0UHJvamVjdExpKGV2ZW50KXtcbiAgICAgICAgY29uc3QgbGkgPSBldmVudC50YXJnZXQuY2xvc2VzdChcImxpXCIpXG4gICAgICAgIHNlbGVjdE9iamVjdEVsZW1lbnQobGksIFwicHJvamVjdFwiKVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExpc3RVaUVsZW1lbnRzKGxpc3RDb250YWluZXIpe1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ySG9sZGVyLmFkZEJ0bn1gKVxuICAgICAgICBjb25zdCBhZGRQb3B1cCA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIuYWRkUG9wdXB9YClcbiAgICAgICAgY29uc3QgY2xvc2VQb3B1cEJ0biA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIuYWRkUG9wdXB9IC4ke3NlbGVjdG9ySG9sZGVyLmNhbmNlbEJ0bn1gKVxuICAgICAgICBjb25zdCB1bCA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIubGlzdH0gdWxgKVxuICAgICAgICBjb25zdCBwb3B1cEFkZEJ0biA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIuYWRkUG9wdXB9LiR7c2VsZWN0b3JIb2xkZXIuYWRkQnRufWApXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhZGRCdG4sIGFkZFBvcHVwLCBwb3B1cEFkZEJ0biwgY2xvc2VQb3B1cEJ0biwgdWxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBkb21GdW5jdGlvbnMsIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdFBhZ2UsXG4gICAgICAgIGNyZWF0ZUFsbFByb2plY3RzUGFnZSxcbiAgICAgICAgY3JlYXRlUHJvamVjdExpc3QsXG4gICAgICAgIHNlbGVjdE9iamVjdEVsZW1lbnQsXG4gICAgICAgIGdldExpc3RVaUVsZW1lbnRzLFxuICAgICAgICBzZWxlY3RDbG9zZXN0UHJvamVjdExpLFxuICAgICAgICBnZXQgaW5ib3goKXtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvckhvbGRlci5pbmJveH0uJHtzZWxlY3RvckhvbGRlci5wcm9qZWN0fWApXG4gICAgICAgIH0sXG4gICAgICAgIGdldCB0b2RheSgpe1xuICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ySG9sZGVyLnRvZGF5fS4ke3NlbGVjdG9ySG9sZGVyLnByb2plY3R9YClcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHRoaXNXZWVrKCl7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIudGhpc1dlZWt9LiR7c2VsZWN0b3JIb2xkZXIucHJvamVjdH1gKVxuICAgICAgICB9LFxuICAgICAgICBnZXQgcHJvamVjdExpc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIucHJvamVjdExpc3R9YClcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IHByb2plY3RXaW5kb3coKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIucHJvamVjdFdpbmRvd31gKSBcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0IG1lbnUoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JIb2xkZXIubWVudX1gKVxuICAgICAgICB9LFxuICAgICAgICBzZXQgcHJvamVjdExpc3QocHJvamVjdExpc3Qpe1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TGlzdCA9IHByb2plY3RMaXN0XG4gICAgICAgIH1cbiAgICB9KVxufSkoKVxuXG5leHBvcnQgeyBkb21JbnRlcmZhY2VyIH0iLCJpbXBvcnQgeyBjcmVhdGVEb21GdW5jdGlvbnMgfSBmcm9tIFwiLi9kb20tYmFzaWMtZnVuY3Rpb25zXCJcbmltcG9ydCB7IHNlbGVjdG9ySG9sZGVyIH0gZnJvbSBcIi4vc2VsZWN0b3JIb2xkZXJcIlxuaW1wb3J0IFJlbW92ZUljb24gZnJvbSBcIi4uL2ltYWdlcy9yZW1vdmUtdGFzay5wbmdcIlxuaW1wb3J0IERvbmVJY29uIGZyb20gXCIuLi9pbWFnZXMvZmluaXNoZWQtdGFzay5wbmdcIlxuaW1wb3J0IFVuZG9uZUljb24gZnJvbSBcIi4uL2ltYWdlcy91bmZpbmlzaGVkLXRhc2sucG5nXCJcbmltcG9ydCBQcm9qZWN0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3Byb2plY3QucG5nXCJcbmltcG9ydCBUb2RvSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3VuZmluaXNoZWQtdGFzay5wbmdcIlxuXG5mdW5jdGlvbiBjcmVhdGVEb21MaXN0RnVuY3Rpb25zKCkge1xuICAgIGNvbnN0IGRvbUZ1bmN0aW9ucyA9IGNyZWF0ZURvbUZ1bmN0aW9ucygpXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaShvYmplY3QpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChgJHtvYmplY3QudGl0bGVUb0NsYXNzTmFtZSgpfWAsIG9iamVjdC50eXBlKVxuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgICAgbGluay5ocmVmID0gYCMke29iamVjdC50aXRsZVRvQ2xhc3NOYW1lKCl9YFxuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIilcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBvYmplY3QudGl0bGVcbiAgICAgICAgY29uc3QgcmlnaHREaXYgPSBkb21GdW5jdGlvbnMuY3JlYXRlRGl2KFtzZWxlY3RvckhvbGRlci5yaWdodERpdl0pXG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb21GdW5jdGlvbnMuY3JlYXRlSW1nKFtzZWxlY3RvckhvbGRlci5yZW1vdmVpdGVtSWNvbl0sIFJlbW92ZUljb24sIFwiMTZcIiwgXCIxNlwiKVxuICAgICAgICBsaW5rLmFwcGVuZChzcGFuKVxuICAgICAgICByaWdodERpdi5hcHBlbmRDaGlsZChyZW1vdmVJY29uKVxuICAgICAgICBsaS5hcHBlbmQobGluaywgcmlnaHREaXYpXG4gICAgICAgIHJldHVybiBsaVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldExpQ2hpbGRyZW4obGkpe1xuICAgICAgICBjb25zdCBpdGVtSWNvbiA9IGxpLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ySG9sZGVyLml0ZW1JY29ufWApXG4gICAgICAgIGNvbnN0IGFuY2hvciA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCJhXCIpXG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBsaS5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvckhvbGRlci5yZW1vdmVpdGVtSWNvbn1gKVxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBsaS5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvckhvbGRlci5pbnB1dERhdGV9YClcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGxpLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ySG9sZGVyLmlucHV0VGl0bGV9YClcbiAgICAgICAgY29uc3QgdGl0bGUgPSBsaS5xdWVyeVNlbGVjdG9yKFwic3BhblwiKVxuICAgICAgICBjb25zdCByaWdodERpdiA9IGxpLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ySG9sZGVyLnJpZ2h0RGl2fWApXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtSWNvbiwgYW5jaG9yLCByZW1vdmVJY29uLCBkYXRlSW5wdXQsIHRpdGxlSW5wdXQsIHRpdGxlLCByaWdodERpdlxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSWNvblRvTGkobGlBbmNob3IsIGljb24pe1xuICAgICAgICBjb25zdCBlbGVtSWNvbiA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVJbWcoW3NlbGVjdG9ySG9sZGVyLml0ZW1JY29uXSwgaWNvbiwgXCIxNlwiLCBcIjE2XCIpXG4gICAgICAgIGxpQW5jaG9yLnByZXBlbmQoZWxlbUljb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdExpKGJhc2VPYmplY3Qpe1xuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUxpKGJhc2VPYmplY3QpXG4gICAgICAgIGNvbnN0IGxpQW5jaG9yID0gZ2V0TGlDaGlsZHJlbihsaSkuYW5jaG9yXG4gICAgICAgIGFkZEljb25Ub0xpKGxpQW5jaG9yLCBQcm9qZWN0SWNvbilcbiAgICAgICAgcmV0dXJuIGxpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmluaXNoVG9kbyhsaSl7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoYCR7c2VsZWN0b3JIb2xkZXIuZG9uZX1gKVxuICAgICAgICBnZXRMaUNoaWxkcmVuKGxpKS5pdGVtSWNvbi5zcmMgPSBEb25lSWNvblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuZmluaXNoVG9kbyhsaSl7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2VsZWN0b3JIb2xkZXIuZG9uZX1gKVxuICAgICAgICBnZXRMaUNoaWxkcmVuKGxpKS5pdGVtSWNvbi5zcmMgPSBVbmRvbmVJY29uXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlVG9kb0ljb24odG9kbywgbGkpe1xuICAgICAgICBpZiAodG9kby5pc0ZpbmlzaGVkKXtcbiAgICAgICAgICAgIGZpbmlzaFRvZG8obGkpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1bmZpbmlzaFRvZG8obGkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUb2RvTGkoYmFzZU9iamVjdCkge1xuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUxpKGJhc2VPYmplY3QpXG4gICAgICAgIGNvbnN0IGxpQ2hpbGRyZW4gPSBnZXRMaUNoaWxkcmVuKGxpKVxuICAgICAgICBhZGRJY29uVG9MaShsaSxUb2RvSWNvbilcbiAgICAgICAgY2hhbmdlVG9kb0ljb24odGhpcywgbGkpXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb21GdW5jdGlvbnMuY3JlYXRlSW5wdXQoW3NlbGVjdG9ySG9sZGVyLnRvZG8sIHNlbGVjdG9ySG9sZGVyLmlucHV0VGl0bGUsIHNlbGVjdG9ySG9sZGVyLmhpZGRlbl0sIFwidGl0bGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVJbnB1dChbc2VsZWN0b3JIb2xkZXIudG9kbywgc2VsZWN0b3JIb2xkZXIuaW5wdXREYXRlXSwgXCJkYXRlXCIsIFwiZGF0ZVwiKVxuICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSB0aGlzLmRhdGVcbiAgICAgICAgbGlDaGlsZHJlbi5hbmNob3IuYXBwZW5kKHRpdGxlSW5wdXQpXG4gICAgICAgIGxpQ2hpbGRyZW4ucmlnaHREaXYucHJlcGVuZChkYXRlSW5wdXQpXG4gICAgICAgIHJldHVybiBsaVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVVsKG9iamVjdCkge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gb2JqZWN0LmNvbnRhaW5lcltrZXldXG4gICAgICAgICAgICBjb25zdCBsaSA9IGVsZW1lbnQubGlFbGVtZW50XG4gICAgICAgICAgICBsaS5jbGFzc0xpc3QucmVtb3ZlKHNlbGVjdG9ySG9sZGVyLmhpZGRlbilcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bFxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZVRvZG9MaVRpdGxlKHRvZG8sIHRpdGxlSW5wdXQpe1xuICAgICAgICBjb25zdCBsaSA9IHRvZG8ubGlFbGVtZW50XG4gICAgICAgIGxpLmNsYXNzTGlzdC5yZW1vdmUodG9kby50aXRsZVRvQ2xhc3NOYW1lKCkpXG4gICAgICAgIHRvZG8uY2hhbmdlVGl0bGUodGl0bGVJbnB1dC52YWx1ZSlcbiAgICAgICAgZ2V0TGlDaGlsZHJlbihsaSkudGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlXG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQodG9kby50aXRsZVRvQ2xhc3NOYW1lKCkpXG4gICAgICAgIGdldExpQ2hpbGRyZW4obGkpLmFuY2hvci5ocmVmID0gYCMke3RvZG8udGl0bGVUb0NsYXNzTmFtZSgpfWBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIob2JqZWN0LCBoZWFkZXJUYWcpe1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGhlYWRlclRhZylcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlXG4gICAgICAgIHJldHVybiBoZWFkZXJcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEaXZVbEVsZW1lbnRzKHByb2plY3QsIGhlYWRlclRhZyl7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVEaXYoW3NlbGVjdG9ySG9sZGVyLmxpc3QsIHByb2plY3QuY29udGFpblR5cGVdKVxuICAgICAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIocHJvamVjdCwgaGVhZGVyVGFnKVxuICAgICAgICBjb25zdCB1bCA9IGNyZWF0ZVVsKHByb2plY3QpXG4gICAgICAgIGRpdi5hcHBlbmQoaGVhZGVyLCB1bClcbiAgICAgICAgcmV0dXJuIHsgZGl2LCBoZWFkZXIsIHVsIH1cbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgZG9tRnVuY3Rpb25zLCB7XG4gICAgICAgIGNyZWF0ZUxpLFxuICAgICAgICBnZXRMaUNoaWxkcmVuLFxuICAgICAgICBjcmVhdGVUb2RvTGksXG4gICAgICAgIGNoYW5nZVRvZG9JY29uLFxuICAgICAgICBjaGFuZ2VUb2RvTGlUaXRsZSxcbiAgICAgICAgY3JlYXRlUHJvamVjdExpLFxuICAgICAgICBjcmVhdGVVbCxcbiAgICAgICAgY3JlYXRlRGl2VWxFbGVtZW50cyxcbiAgICAgICAgZmluaXNoVG9kbyxcbiAgICAgICAgdW5maW5pc2hUb2RvLFxuICAgICAgICBjcmVhdGVIZWFkZXJcbiAgICB9KVxufVxuXG5leHBvcnQgeyBjcmVhdGVEb21MaXN0RnVuY3Rpb25zIH0iLCJpbXBvcnQgeyBkb21JbnRlcmZhY2VyIH0gZnJvbSBcIi4vZG9tLWludGVyZmFjZXJcIlxuaW1wb3J0IHsgY29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJcIlxuaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gXCIuL3N0b3JhZ2VcIlxuaW1wb3J0IHsgcHJvamVjdFN0cnVjdHVyZXIgfSBmcm9tIFwiLi9wcm9qZWN0LXN0cnVjdHVyZXJcIlxuXG5mdW5jdGlvbiBzZXRBZGRCdG4obGlzdEludGVyZmFjZSl7XG4gICAgbGlzdEludGVyZmFjZS5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZG9tSW50ZXJmYWNlci5jbGVhbklucHV0KGxpc3RJbnRlcmZhY2UuYWRkUG9wdXApXG4gICAgICAgIGRvbUludGVyZmFjZXIucmVwbGFjZUVsZW1lbnQobGlzdEludGVyZmFjZS5hZGRQb3B1cCwgbGlzdEludGVyZmFjZS5hZGRCdG4pXG4gICAgICAgIGxpc3RJbnRlcmZhY2UuYWRkUG9wdXAucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXRDbG9zZVBvcHVwQnRuKGxpc3RJbnRlcmZhY2Upe1xuICAgIGxpc3RJbnRlcmZhY2UuY2xvc2VQb3B1cEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixcbiAgICAgICAgZG9tSW50ZXJmYWNlci5yZXBsYWNlRWxlbWVudC5iaW5kKG51bGwsIGxpc3RJbnRlcmZhY2UuYWRkQnRuLCBsaXN0SW50ZXJmYWNlLmFkZFBvcHVwKSlcbn1cblxuZnVuY3Rpb24gc2V0UG9wdXBBZGRCdG4obGlzdEludGVyZmFjZSwgY3JlYXRlRnVuY3Rpb24sIHNldHVwRnVuY3Rpb24pe1xuICAgIGxpc3RJbnRlcmZhY2UucG9wdXBBZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0ID0gY29udHJvbGxlci5jcmVhdGVPYmplY3QobGlzdEludGVyZmFjZS5hZGRQb3B1cCwgY3JlYXRlRnVuY3Rpb24pXG4gICAgICAgIGNvbnRyb2xsZXIuYWRkT2JqZWN0KG9iamVjdCwgbGlzdEludGVyZmFjZS51bCwgc2V0dXBGdW5jdGlvbilcbiAgICAgICAgbGlzdEludGVyZmFjZS5jbG9zZVBvcHVwQnRuLmNsaWNrKClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXRSZW1vdmVJY29uKHJlbW92ZUljb24sIG9iamVjdCl7XG4gICAgcmVtb3ZlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgIGNvbnN0IHVsID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJ1bFwiKVxuICAgICAgICBjb250cm9sbGVyLnJlbW92ZU9iamVjdChvYmplY3QsIHVsKVxuICAgICAgICBzdG9yYWdlLnBvcHVsYXRlU3RvcmFnZSgpXG4gICAgICAgIGlmIChvYmplY3QudHlwZSA9PSBcInByb2plY3RcIikgZG9tSW50ZXJmYWNlci5pbmJveC5jbGljaygpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUsIHRpdGxlSW5wdXQsIHRvZG8pe1xuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZG9tSW50ZXJmYWNlci5yZXBsYWNlRWxlbWVudCh0aXRsZUlucHV0LCB0aXRsZSlcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGVcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2V0VGl0bGVJbnB1dCh0aXRsZSwgdGl0bGVJbnB1dCwgdG9kbyl7XG4gICAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpe1xuICAgICAgICAgICAgZG9tSW50ZXJmYWNlci5jaGFuZ2VUb2RvTGlUaXRsZSh0b2RvLCB0aXRsZUlucHV0KVxuICAgICAgICAgICAgZG9tSW50ZXJmYWNlci5yZXBsYWNlRWxlbWVudCh0aXRsZSwgdGl0bGVJbnB1dClcbiAgICAgICAgICAgIHN0b3JhZ2UucG9wdWxhdGVTdG9yYWdlKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNldFRvZG9JY29uKGl0ZW1JY29uLCB0b2RvKXtcbiAgICBpdGVtSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGxpID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJsaVwiKVxuICAgICAgICB0b2RvLmlzRmluaXNoZWQgPSAhdG9kby5pc0ZpbmlzaGVkXG4gICAgICAgIGRvbUludGVyZmFjZXIuY2hhbmdlVG9kb0ljb24odG9kbywgbGkpXG4gICAgICAgIHN0b3JhZ2UucG9wdWxhdGVTdG9yYWdlKClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXREYXRlSW5wdXQoZGF0ZUlucHV0LCB0b2RvKXtcbiAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgdG9kby5kYXRlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHN0b3JhZ2UucG9wdWxhdGVTdG9yYWdlKClcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzaG93QWxsVG9kb0J5RmlsdGVyKGZpbHRlckZ1bmN0aW9uLCAuLi5maWx0ZXJBcmdzKXtcbiAgICBkb21JbnRlcmZhY2VyLnByb2plY3RXaW5kb3cuaW5uZXJIVE1MID0gXCJcIlxuICAgIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSBwcm9qZWN0U3RydWN0dXJlci5maWx0ZXJUb2RvcyhmaWx0ZXJGdW5jdGlvbiwgLi4uZmlsdGVyQXJncylcbiAgICBjb25zdCBjb250ZW50ID0gZG9tSW50ZXJmYWNlci5jcmVhdGVBbGxQcm9qZWN0c1BhZ2UoZmlsdGVyZWRQcm9qZWN0cylcbiAgICBkb21JbnRlcmZhY2VyLnByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQoY29udGVudClcbn1cblxuZXhwb3J0IHsgc2V0QWRkQnRuLCBzZXRDbG9zZVBvcHVwQnRuLCBzZXREYXRlSW5wdXQsIHNldFBvcHVwQWRkQnRuLCBzZXRSZW1vdmVJY29uLCBzZXRUaXRsZSwgc2V0VGl0bGVJbnB1dCwgc2V0VG9kb0ljb24sIHNob3dBbGxUb2RvQnlGaWx0ZXIgfVxuIiwiaW1wb3J0IHsgZG9tSW50ZXJmYWNlciB9IGZyb20gXCIuL2RvbS1pbnRlcmZhY2VyXCJcbmltcG9ydCB7IHByb2plY3RTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vcHJvamVjdC1zdHJ1Y3R1cmVyXCJcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLW9iamVjdFwiXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1vYmplY3RcIlxuaW1wb3J0IHsgc2V0QWRkQnRuLCBzZXRDbG9zZVBvcHVwQnRuLCBzZXREYXRlSW5wdXQsIHNldFJlbW92ZUljb24sIFxuICAgIHNldFRpdGxlLCBzZXRUaXRsZUlucHV0LCBzZXRQb3B1cEFkZEJ0biwgc2V0VG9kb0ljb24sIHNob3dBbGxUb2RvQnlGaWx0ZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyLWZ1bmN0aW9ucydcblxuY29uc3QgZXZlbnRMaXN0ZW5lclNldHRlciA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBzZXRMaXN0RXZlbnRMaXN0ZW5lcnMobGlzdENvbnRhaW5lciwgY3JlYXRlRnVuY3Rpb24sIHNldHVwRnVuY3Rpb24pIHtcbiAgICAgICAgY29uc3QgbGlzdEludGVyZmFjZSA9IGRvbUludGVyZmFjZXIuZ2V0TGlzdFVpRWxlbWVudHMobGlzdENvbnRhaW5lcilcbiAgICAgICAgc2V0QWRkQnRuKGxpc3RJbnRlcmZhY2UpXG4gICAgICAgIHNldENsb3NlUG9wdXBCdG4obGlzdEludGVyZmFjZSlcbiAgICAgICAgc2V0UG9wdXBBZGRCdG4obGlzdEludGVyZmFjZSwgY3JlYXRlRnVuY3Rpb24sIHNldHVwRnVuY3Rpb24pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hvb3NlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnRleHRDb250ZW50XG4gICAgICAgIHByb2plY3RTdHJ1Y3R1cmVyLmFjdGl2ZVByb2plY3QgPSBwcm9qZWN0U3RydWN0dXJlci5jb250YWluZXJbdGl0bGVdXG4gICAgICAgIHNob3dBY3RpdmVQcm9qZWN0KClcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93QWN0aXZlUHJvamVjdCgpe1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdFN0cnVjdHVyZXIuYWN0aXZlUHJvamVjdFxuICAgICAgICBkb21JbnRlcmZhY2VyLnNlbGVjdE9iamVjdEVsZW1lbnQocHJvamVjdC5saUVsZW1lbnQsIFwicHJvamVjdFwiKVxuICAgICAgICBjb25zdCBwcm9qZWN0UGFnZSA9IGRvbUludGVyZmFjZXIuY3JlYXRlUHJvamVjdFBhZ2UocHJvamVjdClcbiAgICAgICAgc2V0TGlzdEV2ZW50TGlzdGVuZXJzKHByb2plY3RQYWdlLCBjcmVhdGVUb2RvLCBzZXRUb2RvTGlzdGVuZXJzKVxuICAgICAgICBkb21JbnRlcmZhY2VyLnByb2plY3RXaW5kb3cuaW5uZXJIVE1MID0gXCJcIlxuICAgICAgICBkb21JbnRlcmZhY2VyLnByb2plY3RXaW5kb3cuYXBwZW5kQ2hpbGQocHJvamVjdFBhZ2UpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UHJvamVjdExpc3RlbmVycyhwcm9qZWN0KXtcbiAgICAgICAgc2V0UmVtb3ZlSWNvbihkb21JbnRlcmZhY2VyLmdldExpQ2hpbGRyZW4ocHJvamVjdC5saUVsZW1lbnQpLnJlbW92ZUljb24sIHByb2plY3QpXG4gICAgICAgIHByb2plY3QubGlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2hvb3NlUHJvamVjdC5jYWxsKHRoaXMpXG4gICAgICAgICAgICBzaG93QWN0aXZlUHJvamVjdCgpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VG9kb0xpc3RlbmVycyh0b2RvKXtcbiAgICAgICAgY29uc3QgbGlDaGlsZHJlbiA9IGRvbUludGVyZmFjZXIuZ2V0TGlDaGlsZHJlbih0b2RvLmxpRWxlbWVudClcbiAgICAgICAgc2V0UmVtb3ZlSWNvbihsaUNoaWxkcmVuLnJlbW92ZUljb24sIHRvZG8pXG4gICAgICAgIHNldFRpdGxlKGxpQ2hpbGRyZW4udGl0bGUsIGxpQ2hpbGRyZW4udGl0bGVJbnB1dCwgdG9kbylcbiAgICAgICAgc2V0VGl0bGVJbnB1dChsaUNoaWxkcmVuLnRpdGxlLCBsaUNoaWxkcmVuLnRpdGxlSW5wdXQsIHRvZG8pXG4gICAgICAgIHNldFRvZG9JY29uKGxpQ2hpbGRyZW4uaXRlbUljb24sIHRvZG8pXG4gICAgICAgIHNldERhdGVJbnB1dChsaUNoaWxkcmVuLmRhdGVJbnB1dCwgdG9kbylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXREYXRlRmlsdGVycyhsaUVsZW1lbnQsIGZpbHRlckZ1bmN0aW9uLCAuLi5maWx0ZXJBcmdzKXtcbiAgICAgICAgbGlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGRvbUludGVyZmFjZXIuc2VsZWN0Q2xvc2VzdFByb2plY3RMaShldmVudClcbiAgICAgICAgICAgIHNob3dBbGxUb2RvQnlGaWx0ZXIoZmlsdGVyRnVuY3Rpb24sIC4uLmZpbHRlckFyZ3MpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0SW5ib3gobGlFbGVtZW50KXtcbiAgICAgICAgbGlFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNob29zZVByb2plY3QuY2FsbChsaUVsZW1lbnQpXG4gICAgICAgICAgICBkb21JbnRlcmZhY2VyLnNlbGVjdENsb3Nlc3RQcm9qZWN0TGkoZXZlbnQpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0U3RhcnRQYWdlRXZlbnRMaXN0ZW5lcnModG9kYXksIHdlZWtTdGFydCwgd2Vla0VuZCl7XG4gICAgICAgIHNldExpc3RFdmVudExpc3RlbmVycyhkb21JbnRlcmZhY2VyLnByb2plY3RMaXN0LCBjcmVhdGVQcm9qZWN0LCBldmVudExpc3RlbmVyU2V0dGVyLnNldFByb2plY3RMaXN0ZW5lcnMpXG4gICAgICAgIHNldERhdGVGaWx0ZXJzKGRvbUludGVyZmFjZXIudGhpc1dlZWssIHByb2plY3RTdHJ1Y3R1cmVyLmlzSW5EYXRlUmFuZ2UsIHdlZWtTdGFydCwgd2Vla0VuZClcbiAgICAgICAgc2V0RGF0ZUZpbHRlcnMoZG9tSW50ZXJmYWNlci50b2RheSwgcHJvamVjdFN0cnVjdHVyZXIuaXNPbkRhdGUsIHRvZGF5KVxuICAgICAgICBzZXRJbmJveChkb21JbnRlcmZhY2VyLmluYm94KVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBzZXRMaXN0RXZlbnRMaXN0ZW5lcnMsXG4gICAgICAgIHNldFByb2plY3RMaXN0ZW5lcnMsXG4gICAgICAgIHNldFRvZG9MaXN0ZW5lcnMsXG4gICAgICAgIHNob3dBbGxUb2RvQnlGaWx0ZXIsXG4gICAgICAgIHNldERhdGVGaWx0ZXJzLFxuICAgICAgICBzZXRJbmJveCxcbiAgICAgICAgc2V0U3RhcnRQYWdlRXZlbnRMaXN0ZW5lcnNcbiAgICB9XG59KSgpXG5cbmV4cG9ydCB7IGV2ZW50TGlzdGVuZXJTZXR0ZXIgfSIsImltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZXIgfSBmcm9tIFwiLi9zdHJ1Y3R1cmVyXCJcbmltcG9ydCB7IGNyZWF0ZUJhc2VPYmplY3QgfSBmcm9tIFwiLi9iYXNlLW9iamVjdFwiXG5pbXBvcnQgUHJvamVjdEljb24gZnJvbSBcIi4uL2ltYWdlcy9wcm9qZWN0LnBuZ1wiXG5pbXBvcnQgeyBkb21JbnRlcmZhY2VyIH0gZnJvbSBcIi4vZG9tLWludGVyZmFjZXJcIlxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHBhcmFtZXRlcnNPYmplY3QpIHtcbiAgICBsZXQgdHlwZSA9IFwicHJvamVjdFwiXG4gICAgXG4gICAgY29uc3QgY29udGFpblR5cGUgPSBcInRvZG9cIlxuICAgIGNvbnN0IHByb3RvMSA9IGNyZWF0ZVN0cnVjdHVyZXIoY29udGFpblR5cGUpXG4gICAgY29uc3QgcHJvdG8yID0gY3JlYXRlQmFzZU9iamVjdCh0eXBlLCBwYXJhbWV0ZXJzT2JqZWN0LnRpdGxlLCBkb21JbnRlcmZhY2VyLmNyZWF0ZVByb2plY3RMaSlcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90bzEsIHByb3RvMilcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9IiwiaW1wb3J0IHsgY3JlYXRlU3RydWN0dXJlciB9IGZyb20gXCIuL3N0cnVjdHVyZXJcIlxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3Qtb2JqZWN0XCJcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlLCBpc1NhbWVEYXksIHBhcnNlSVNPIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IHByb2plY3RTdHJ1Y3R1cmVyID0gKCgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9ICdQcm9qZWN0cydcbiAgICBjb25zdCBjb250YWluVHlwZSA9IFwicHJvamVjdFwiXG4gICAgY29uc3QgcHJvdG8gPSBjcmVhdGVTdHJ1Y3R1cmVyKGNvbnRhaW5UeXBlKVxuICAgIC8vZGVmYXVsdCBpbmJveCBwcm9qZWN0IHNldHVwXG4gICAgY29uc3QgaW5ib3ggPSBjcmVhdGVQcm9qZWN0KHtcInRpdGxlXCI6IFwiSW5ib3hcIn0pXG4gICAgcHJvdG8uYWRkKGluYm94KVxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBwcm90by5jb250YWluZXJbaW5ib3gudGl0bGVdXG5cbiAgICBmdW5jdGlvbiBhZGQob2JqZWN0KXtcbiAgICAgICAgaWYgKG9iamVjdC50eXBlICE9PSBjb250YWluVHlwZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9qZWN0LmFkZChvYmplY3QpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG8uYWRkKG9iamVjdClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZShvYmplY3Qpe1xuICAgICAgICBpZiAob2JqZWN0LnR5cGUgIT09IGNvbnRhaW5UeXBlKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVByb2plY3QucmVtb3ZlKG9iamVjdClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5yZW1vdmUob2JqZWN0KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyVG9kb3MoZmlsdGVyRnVuY3Rpb24sIC4uLmFyZ3Mpe1xuICAgICAgICBjb25zdCBmaWx0ZXJlZENvbnRhaW5lciA9IHt9XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb250YWluZXIpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHByb2plY3QudGl0bGVcbiAgICAgICAgICAgIGNvbnN0IGNvcHlQcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh7dGl0bGV9KVxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0LmNvbnRhaW5lcikuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyRnVuY3Rpb24uYXBwbHkodG9kbywgYXJncykpIGNvcHlQcm9qZWN0LmFkZCh0b2RvKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGZpbHRlcmVkQ29udGFpbmVyW2NvcHlQcm9qZWN0LnRpdGxlXSA9IGNvcHlQcm9qZWN0XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZENvbnRhaW5lciBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0luRGF0ZVJhbmdlKHN0YXJ0RGF0ZSwgZW5kRGF0ZSl7XG4gICAgICAgIGNvbnN0IGlzb0RhdGUgPSBwYXJzZUlTTyh0aGlzLmRhdGUpXG4gICAgICAgIHJldHVybiBpc0JlZm9yZShpc29EYXRlLCBlbmREYXRlKSAmJiBpc0FmdGVyKGlzb0RhdGUsIHN0YXJ0RGF0ZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc09uRGF0ZShkYXRlKXtcbiAgICAgICAgY29uc3QgaXNvRGF0ZSA9IHBhcnNlSVNPKHRoaXMuZGF0ZSlcbiAgICAgICAgcmV0dXJuIChpc1NhbWVEYXkoaXNvRGF0ZSwgZGF0ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBmaWx0ZXJUb2RvcyxcbiAgICAgICAgaXNJbkRhdGVSYW5nZSxcbiAgICAgICAgaXNPbkRhdGUsXG4gICAgICAgIGdldCBhY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3RcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IGFjdGl2ZVByb2plY3QocHJvamVjdCl7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdFxuICAgICAgICB9LFxuICAgICAgICBnZXQgdGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGl0bGVcbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG5cbmV4cG9ydCB7IHByb2plY3RTdHJ1Y3R1cmVyIH0iLCJjb25zdCBzZWxlY3RvckhvbGRlciA9ICgoKSA9PiB7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAvL2xpc3Qgc2VsZWN0b3JzXG4gICAgbGlzdCA6IFwibGlzdFwiLFxuICAgIC8vbGkgc2VsZWN0b3JzXG4gICAgaXRlbUljb24gOiBcImxpc3QtaWNvblwiLFxuICAgIHJpZ2h0RGl2IDogXCJyaWdodC1saVwiLFxuICAgIHJlbW92ZWl0ZW1JY29uIDogXCJyZW1vdmUtaWNvblwiLFxuICAgIC8vdG9kbyBsaVxuICAgIGlucHV0RGF0ZSA6IFwiaW5wdXQtZGF0ZVwiLFxuICAgIGlucHV0VGl0bGU6IFwiaW5wdXQtdGl0bGVcIixcbiAgICAvL3BvcHVwIHNlbGVjdG9yc1xuICAgIGFkZFBvcHVwIDogXCJhZGQtcG9wdXBcIixcbiAgICBidG5Db250YWluZXIgOiBcImJ0bi1jb250YWluZXJcIixcbiAgICAvL3NwZWNpYWwgc2VsZWN0b3JzXG4gICAgYWRkQnRuIDogXCJhZGQtYnRuXCIsXG4gICAgY2FuY2VsQnRuIDogXCJjYW5jZWwtYnRuXCIsXG4gICAgYWN0aXZlIDogXCJhY3RpdmVcIixcbiAgICBoaWRkZW4gOiBcImhpZGRlblwiLFxuICAgIHNlbGVjdGVkIDogXCJzZWxlY3RlZFwiLFxuICAgIHRvZG8gOiBcInRvZG9cIixcbiAgICBwcm9qZWN0IDogXCJwcm9qZWN0XCIsXG4gICAgaW5ib3ggOiBcImNJbmJveFwiLFxuICAgIHRvZGF5OiBcImNUb2RheVwiLFxuICAgIHRoaXNXZWVrOiBcImNUaGlzLXdlZWtcIixcbiAgICBwcm9qZWN0TGlzdDogXCJsaXN0LnByb2plY3RcIixcbiAgICBwcm9qZWN0V2luZG93OiBcImNvbnRlbnRcIixcbiAgICBtZW51OiBcIm1lbnVcIixcbiAgICBkb25lOiBcImRvbmVcIlxuICAgIH1cbn0pKClcblxuZXhwb3J0IHsgc2VsZWN0b3JIb2xkZXIgfSIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIlxuaW1wb3J0IHsgZXZlbnRMaXN0ZW5lclNldHRlciB9IGZyb20gXCIuL2V2ZW50LWxpc3RlbmVycy1zZXR0ZXJcIlxuaW1wb3J0IHsgc3RhcnRPZlRvZGF5LCBzdGFydE9mV2VlaywgbmV4dE1vbmRheSB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgZG9tSW50ZXJmYWNlciB9IGZyb20gXCIuL2RvbS1pbnRlcmZhY2VyXCJcbmltcG9ydCB7IHByb2plY3RTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vcHJvamVjdC1zdHJ1Y3R1cmVyXCJcbmltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yYWdlXCJcblxuZnVuY3Rpb24gc2V0U3RhcnRQYWdlKCkge1xuICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcbiAgICAgICAgLy9jaGFuZ2UgdG8gY2xhc3NlcywgY3JlYXRlIGZvbGRlcnMgYW5kIGRvbmVcbiAgICAgICAgc3RvcmFnZS5wb3B1bGF0ZUNvbnRhaW5lcigpXG4gICAgICAgIHJlc2V0UHJvamVjdHNMaXN0KClcbiAgICB9XG4gICAgY29uc3QgZGF0ZXMgPSBnZXREYXRlcygpXG4gICAgZXZlbnRMaXN0ZW5lclNldHRlci5zZXRTdGFydFBhZ2VFdmVudExpc3RlbmVycyhkYXRlcy50b2RheSwgZGF0ZXMud2Vla1N0YXJ0LCBkYXRlcy53ZWVrRW5kKVxuICAgIGRvbUludGVyZmFjZXIuaW5ib3guY2xpY2soKVxufVxuXG5mdW5jdGlvbiByZXNldFByb2plY3RzTGlzdCgpe1xuICAgIGNvbnN0IGRpdiA9IGRvbUludGVyZmFjZXIuY3JlYXRlUHJvamVjdExpc3QocHJvamVjdFN0cnVjdHVyZXIpXG4gICAgY29uc3QgbWVudSA9IGRvbUludGVyZmFjZXIubWVudVxuICAgIG1lbnUucmVtb3ZlQ2hpbGQoZG9tSW50ZXJmYWNlci5wcm9qZWN0TGlzdClcbiAgICBtZW51LmFwcGVuZENoaWxkKGRpdilcbiAgICBkb21JbnRlcmZhY2VyLnByb2plY3RMaXN0ID0gZGl2XG59XG5cbmZ1bmN0aW9uIGdldERhdGVzKCl7XG4gICAgY29uc3QgdG9kYXkgPSBzdGFydE9mVG9kYXkoKVxuICAgIGNvbnN0IHdlZWtTdGFydCA9IHN0YXJ0T2ZXZWVrKHRvZGF5LCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICAgIGNvbnN0IHdlZWtFbmQgPSBuZXh0TW9uZGF5KHRvZGF5KVxuICAgIHJldHVybiB7IHRvZGF5LCB3ZWVrU3RhcnQsIHdlZWtFbmQgfVxufVxuXG5leHBvcnQgeyBzZXRTdGFydFBhZ2UgfSIsImltcG9ydCB7IHByb2plY3RTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vcHJvamVjdC1zdHJ1Y3R1cmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1vYmplY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLW9iamVjdFwiO1xuaW1wb3J0IHsgZXZlbnRMaXN0ZW5lclNldHRlciB9IGZyb20gXCIuL2V2ZW50LWxpc3RlbmVycy1zZXR0ZXJcIjtcblxuY29uc3Qgc3RvcmFnZSA9ICgoKSA9PiB7XG4gICAgZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCl7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0ge31cbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwcm9qZWN0U3RydWN0dXJlci5jb250YWluZXIpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0c1twcm9qZWN0LnRpdGxlXSA9IHt9XG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHByb2plY3QuY29udGFpbmVyKS5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3RzW3Byb2plY3QudGl0bGVdW3RvZG8udGl0bGVdID0gdG9kby5hbGxEYXRhKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnN0IHN0cmluZ1Byb2plY3RzID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgc3RyaW5nUHJvamVjdHMpXG4gICAgfVxuXG4gICAgLy9tb3ZlIHRvIGNvbnRyb2xsZXJcbiAgICBmdW5jdGlvbiBwb3B1bGF0ZUNvbnRhaW5lcigpe1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnByb2plY3RzKTtcbiAgICAgICAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdCh7dGl0bGV9KVxuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lclNldHRlci5zZXRQcm9qZWN0TGlzdGVuZXJzKHByb2plY3QpXG4gICAgICAgICAgICBwcm9qZWN0U3RydWN0dXJlci5hZGQocHJvamVjdClcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXMocHJvamVjdHNbdGl0bGVdKS5mb3JFYWNoKCh0b2RvUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8odG9kb1BhcmFtcylcbiAgICAgICAgICAgICAgICBldmVudExpc3RlbmVyU2V0dGVyLnNldFRvZG9MaXN0ZW5lcnModG9kbylcbiAgICAgICAgICAgICAgICBwcm9qZWN0U3RydWN0dXJlci5jb250YWluZXJbdGl0bGVdLmFkZCh0b2RvKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSkgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UsXG4gICAgICAgIHBvcHVsYXRlQ29udGFpbmVyXG4gICAgfVxuICAgIFxufSkoKVxuXG5leHBvcnQgeyBzdG9yYWdlIH0iLCJmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVyKGNvbnRhaW5UeXBlKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0ge31cbiAgICBmdW5jdGlvbiBhZGQob2JqZWN0KXtcbiAgICAgICAgaWYgKG9iamVjdC50aXRsZSBpbiBjb250YWluZXIpIHJldHVybiBmYWxzZVxuICAgICAgICBjb250YWluZXJbb2JqZWN0LnRpdGxlXSA9IG9iamVjdFxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmUob2JqZWN0KXtcbiAgICAgICAgZGVsZXRlIHRoaXMuY29udGFpbmVyW29iamVjdC50aXRsZV1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkLFxuICAgICAgICByZW1vdmUsXG4gICAgICAgIGdldCBjb250YWluZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyXG4gICAgICAgIH0sXG4gICAgICAgIGdldCBjb250YWluVHlwZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluVHlwZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVyIH0iLCJpbXBvcnQgeyBjcmVhdGVCYXNlT2JqZWN0IH0gZnJvbSBcIi4vYmFzZS1vYmplY3RcIlxuaW1wb3J0IHsgZG9tSW50ZXJmYWNlciB9IGZyb20gXCIuL2RvbS1pbnRlcmZhY2VyXCJcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwYXJhbWV0ZXJzT2JqZWN0KSB7XG4gICAgbGV0IHRpdGxlID0gcGFyYW1ldGVyc09iamVjdC50aXRsZVxuICAgIGxldCBkYXRlID0gcGFyYW1ldGVyc09iamVjdC5kYXRlIHx8IFwiXCJcbiAgICBsZXQgaXNGaW5pc2hlZCA9IHBhcmFtZXRlcnNPYmplY3QuaXNGaW5pc2hlZCB8fCBmYWxzZTtcbiAgICBsZXQgdHlwZSA9IFwidG9kb1wiXG5cbiAgICBjb25zdCBwcm90byA9IGNyZWF0ZUJhc2VPYmplY3QodHlwZSwgdGl0bGUsIGRvbUludGVyZmFjZXIuY3JlYXRlVG9kb0xpLmJpbmQocGFyYW1ldGVyc09iamVjdCkpXG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIHsgXG4gICAgICAgIGRhdGUsXG4gICAgICAgIGlzRmluaXNoZWQsXG4gICAgICAgIGFsbERhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMudGl0bGVcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVcbiAgICAgICAgICAgIGNvbnN0IGlzRmluaXNoZWQgPSB0aGlzLmlzRmluaXNoZWRcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBkYXRlLCBpc0ZpbmlzaGVkIH1cbiAgICAgICAgfSxcbiAgICB9KVxuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IHNldFN0YXJ0UGFnZSB9IGZyb20gXCIuL3N0YXJ0LXBhZ2Utc2V0dGVyXCI7XG5cbnNldFN0YXJ0UGFnZSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9