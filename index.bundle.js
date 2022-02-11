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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --content-hover-background: rgb(226, 235, 230);\n    --popup-btn-color: rgb(226, 235, 230);\n    --content-background: white;\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list.project li,\n.list.options li {\n    background-color: var(--background-color);\n}\n\n.list.todo li {\n    background-color: var(--content-background);\n}\n\n.list.todo li.done {\n    filter:opacity(0.5);\n    text-decoration: line-through;\n}\n\n.list li a {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.list li:hover,\n.menu .add-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n#content .add-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.right-li.todo{\n    margin-left: auto;\n    width: 40%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.todo input {\n    color: inherit;\n    border-width: 0;\n    background-color: inherit;\n    font-size: inherit;\n    cursor: pointer;\n    display: flex;\n    flex-flow: row-reverse;\n}\n\n.todo.input-title {\n    width: 30%;\n    border-radius: 0.2em;\n}\n\n.todo.input-date:focus {\n    outline: none;\n}\n\n.todo.input-title:focus {\n    outline: 0.5px solid var(--background-color);\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list h2,\n#content h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-btn {\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.add-popup {\n    width: 100%;;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    gap: 0.5em;\n}\n\nbody .hidden {\n    display: none;\n}\n\nbody .active {\n    display: flex;\n}\n\nbody .selected {\n    filter: brightness(0.85);\n    font-weight: bold;\n}\n\n.add-popup > * {\n    width: 100%;\n}\n\n.add-popup input {\n    border-radius: 0.5em;\n    height: 3em;\n    padding: 0.5em;\n    font-size: 16px;\n    border: 0.5px solid var(--header-background-color);\n}\n\n.add-popup input:focus {\n    outline: none;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.btn-container button {\n    width: 45%;\n    height: 3em;\n    border-radius: 0.5em;\n    font-size: 16px;\n    font-weight: bold;\n    border:none;\n    cursor: pointer;\n    color: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-popup.add-btn {\n    background-color: rgb(170, 255, 170);\n}\n\n.add-popup.cancel-btn {\n    background-color: rgb(255, 190, 190);\n}\n\n.add-popup.add-btn:hover {\n    background-color: rgb(144, 236, 144);\n}\n\n.add-popup.cancel-btn:hover {\n    background-color: #f5b2b2;\n}\n\n.content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n}\n\n#content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: var(--font-color);\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --content-hover-background: rgb(226, 235, 230);\n    --popup-btn-color: rgb(226, 235, 230);\n    --content-background: white;\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2') format('woff2'),\n        url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list.project li,\n.list.options li {\n    background-color: var(--background-color);\n}\n\n.list.todo li {\n    background-color: var(--content-background);\n}\n\n.list.todo li.done {\n    filter:opacity(0.5);\n    text-decoration: line-through;\n}\n\n.list li a {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.list li:hover,\n.menu .add-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n#content .add-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.right-li.todo{\n    margin-left: auto;\n    width: 40%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n}\n\n.todo input {\n    color: inherit;\n    border-width: 0;\n    background-color: inherit;\n    font-size: inherit;\n    cursor: pointer;\n    display: flex;\n    flex-flow: row-reverse;\n}\n\n.todo.input-title {\n    width: 30%;\n    border-radius: 0.2em;\n}\n\n.todo.input-date:focus {\n    outline: none;\n}\n\n.todo.input-title:focus {\n    outline: 0.5px solid var(--background-color);\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list h2,\n#content h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-btn {\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.add-popup {\n    width: 100%;;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    gap: 0.5em;\n}\n\nbody .hidden {\n    display: none;\n}\n\nbody .active {\n    display: flex;\n}\n\nbody .selected {\n    filter: brightness(0.85);\n    font-weight: bold;\n}\n\n.add-popup > * {\n    width: 100%;\n}\n\n.add-popup input {\n    border-radius: 0.5em;\n    height: 3em;\n    padding: 0.5em;\n    font-size: 16px;\n    border: 0.5px solid var(--header-background-color);\n}\n\n.add-popup input:focus {\n    outline: none;\n}\n\n::-webkit-calendar-picker-indicator {\n    background-image: url(\"../images/today.png\");\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.btn-container button {\n    width: 45%;\n    height: 3em;\n    border-radius: 0.5em;\n    font-size: 16px;\n    font-weight: bold;\n    border:none;\n    cursor: pointer;\n    color: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.add-popup.add-btn {\n    background-color: rgb(170, 255, 170);\n}\n\n.add-popup.cancel-btn {\n    background-color: rgb(255, 190, 190);\n}\n\n.add-popup.add-btn:hover {\n    background-color: rgb(144, 236, 144);\n}\n\n.add-popup.cancel-btn:hover {\n    background-color: #f5b2b2;\n}\n\n.content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n}\n\n#content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: var(--font-color);\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}"],"sourceRoot":""}]);
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
function createBaseObject(type, title, icon, createLiElementFunction){

    const titleToClassName = () => {
        return "c" + title.replace(/\W/g, "-");
    }

    return {

        get icon() {
            return icon;
        },

        get type() {
            return type;
        },

        get title() {
            return title;
        },

        set title(newTitle){
            title = newTitle;
        },

        get titleToClassName() {
            return titleToClassName();
        },

        get liElement() {
            return createLiElementFunction(this);
        }
    };
}



/***/ }),

/***/ "./src/js/dom-functions.js":
/*!*********************************!*\
  !*** ./src/js/dom-functions.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDomFunctions": () => (/* binding */ createDomFunctions)
/* harmony export */ });
function createDomFunctions(){
    function createDomElement(name, classes){
        const element = document.createElement(name);
        element.classList.add(...classes);
        return element;
    }

    function createDiv(classes){
        const div = createDomElement("div", classes);
        return div;
    }

    function createImg(classes, src, height, width){
        const img = createDomElement("img", classes);
        img.height = height;
        img.width = width;
        img.src = src;
        return img;
    }

    function createInput(classes, name, type){
        const input = createDomElement("input", classes);
        input.type = type;
        input.name = name;
        return input;
    }

    function createBtn(classes, textContent){
        const btn = createDomElement("button", classes);
        const span = document.createElement("span");
        span.textContent = textContent;
        btn.appendChild(span);
        return btn;
    }

    function collectInput(form){
        const parameters = {};
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            parameters[input.name] = input.value;
        })

        return parameters
    }

    function cleanInput(form){
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            input.value = "";
        })
    }


    function showElement(element){
        element.classList.remove("hidden");
        element.classList.add("active");
    }

    function hideElement(element){
        element.classList.remove("active");
        element.classList.add("hidden");
    }

    function replaceElement(elemToShow, elemToHide) {
        showElement(elemToShow);
        hideElement(elemToHide);
    }

    return {
        createDiv,
        createBtn,
        createImg,
        createInput,
        collectInput,
        replaceElement,
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
/* harmony export */   "createDomInterfacer": () => (/* binding */ createDomInterfacer)
/* harmony export */ });
/* harmony import */ var _images_remove_task_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/remove-task.png */ "./src/images/remove-task.png");
/* harmony import */ var _images_add_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/add-icon.png */ "./src/images/add-icon.png");
/* harmony import */ var _dom_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-functions */ "./src/js/dom-functions.js");
/* harmony import */ var _selectorHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorHolder */ "./src/js/selectorHolder.js");





function createDomInterfacer(){
    const domFunctions = (0,_dom_functions__WEBPACK_IMPORTED_MODULE_2__.createDomFunctions)();
    const selectors = (0,_selectorHolder__WEBPACK_IMPORTED_MODULE_3__.createSelectorHolder)();

    function createUlElement(object){
        const li = document.createElement("li");
        li.classList.add(`${object.titleToClassName}`, object.type);
    
        const link = document.createElement("a");
        link.href = `#${object.titleToClassName}`;
        
        const elemIcon = domFunctions.createImg([selectors.itemIcon, object.type], object.icon, "16", "16");
    
        const span = document.createElement("span");
        span.innerText = object.title;
        
        const rightDiv = domFunctions.createDiv([selectors.rightDiv, object.type])

        const removeIcon = domFunctions.createImg([selectors.removeitemIcon], _images_remove_task_png__WEBPACK_IMPORTED_MODULE_0__, "16", "16");
        
        link.append(elemIcon, span);
        rightDiv.appendChild(removeIcon);
        li.append(link, rightDiv);
    
        return li;
    }
    
    function createTodoListElement(todo){
        const li = createUlElement(todo);
        const a = li.querySelector("a");
        const titleInput = domFunctions.createInput([selectors.todo, selectors.inputTitle, selectors.hidden], "title", "text")
        const rightDiv = li.querySelector(`.${selectors.rightDiv}.${selectors.todo}`);
        const dateInput = domFunctions.createInput([selectors.todo, selectors.inputDate], "date", "date");
        dateInput.value = todo.date;
        a.append(titleInput);
        rightDiv.prepend(dateInput);
        return li
    }

    function createUl(object) {
        const div = domFunctions.createDiv([selectors.list, object.containType])
        const ul = document.createElement("ul");

        for (const key in object.container) {
            const element = object.container[key];
            const li = element.liElement;
            ul.appendChild(li);
        }

        div.appendChild(ul);
        return div
    }

    function createAddBtn(objectType) {
        const btn = domFunctions.createBtn([selectors.addBtn, objectType, selectors.active], `Add ${objectType}`);
        const btnIcon = domFunctions.createImg([],_images_add_icon_png__WEBPACK_IMPORTED_MODULE_1__, "16", "16");
        btn.prepend(btnIcon);

        return btn;
    }

    function createAddPopup(addType){
        const div = domFunctions.createDiv([selectors.addPopup, addType, selectors.hidden]);
        const input = domFunctions.createInput([selectors.addPopup, selectors.inputTitle], "title", "text");
        const btnContainer = domFunctions.createDiv([selectors.btnContainer])

        const addBtn = domFunctions.createBtn([selectors.addPopup, selectors.addBtn], "Add");
        const cancelBtn = domFunctions.createBtn([selectors.addPopup, selectors.cancelBtn], "Cancel");

        btnContainer.append(addBtn, cancelBtn);
        div.append(input, btnContainer);

        return div
    }

    function createProjectPage(project) {
        const content = document.createElement("div");
        content.id = "content";
        const h1 = document.createElement("h1");
        h1.textContent = project.title;

        const ul = createUl(project);
        const addBtn = createAddBtn("todo");
        const addPopup = createAddPopup("todo");

        content.append(h1, ul, addBtn, addPopup);

        return content;
    }

    function selectObjectElement(object){
        const element = document.querySelector(`.${object.titleToClassName}.${object.type}`);
        const previousSelected = document.querySelector(`.${selectors.selected}.${object.type}`);
        if (previousSelected) previousSelected.classList.remove(`${selectors.selected}`);
        element.classList.add("selected");
    }

    function getListUiElements(listContainer){
        const addBtn = listContainer.querySelector(`.${selectors.addBtn}`);
        const addPopup = listContainer.querySelector(`.${selectors.addPopup}`);
        const closePopupBtn = listContainer.querySelector(`.${selectors.addPopup} .${selectors.cancelBtn}`);
        const ul = listContainer.querySelector(`.${selectors.list} ul`);
        const popupAddBtn = listContainer.querySelector(`.${selectors.addPopup}.${selectors.addBtn}`);

        return {
            addBtn, addPopup, popupAddBtn, closePopupBtn, ul
        }
    }

    function getLiInterface(li){
        const itemIcon = li.querySelector(`.${selectors.itemIcon}`);
        const removeIcon = li.querySelector(`.${selectors.removeitemIcon}`);
        const dateInput = li.querySelector(`.${selectors.inputDate}`);
        const titleInput = li.querySelector(`.${selectors.inputTitle}`);
        const title = li.querySelector("span")
        return {
            itemIcon, removeIcon, dateInput, titleInput, title
        }
    }

    return {
        createUlElement,
        createTodoListElement,
        createProjectPage,
        collectInput: domFunctions.collectInput,
        replaceElement: domFunctions.replaceElement,
        cleanInput: domFunctions.cleanInput,
        selectObjectElement,
        getListUiElements,
        getLiInterface,
        get inbox(){
            return document.querySelector(`.${selectors.inbox}.${selectors.project}`)
        }
    };
}



/***/ }),

/***/ "./src/js/object-manipulator.js":
/*!**************************************!*\
  !*** ./src/js/object-manipulator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createObjectManipulator": () => (/* binding */ createObjectManipulator)
/* harmony export */ });
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");


function createObjectManipulator(){
    const domInterfacer = (0,_dom_interfacer__WEBPACK_IMPORTED_MODULE_0__.createDomInterfacer)();

    function removeObject(object, objectList, objectContainer){
        const objectElement = objectList.querySelector(`.${object.titleToClassName}`);
        objectList.removeChild(objectElement);
        objectContainer.remove(object);
    }

    function createObject(inputForm, createFunction, projectStructurer) {
        const parameters = domInterfacer.collectInput(inputForm);
        const obj = createFunction(parameters);
        if (!projectStructurer.add(obj)) return;
        return obj
    }

    function addObject(object, objectList, setupFunction){
        // try{
            const objectElement = object.liElement;
            setupFunction(object, objectElement, objectList);
            objectList.appendChild(objectElement);
        // }
        // catch {
        //     alert("Alredy exists!");
        // }
    }

    return {
        createObject,
        addObject,
        removeObject,
    }
}



/***/ }),

/***/ "./src/js/project-controller.js":
/*!**************************************!*\
  !*** ./src/js/project-controller.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectController": () => (/* binding */ createProjectController)
/* harmony export */ });
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _selectorHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectorHolder */ "./src/js/selectorHolder.js");
/* harmony import */ var _object_manipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object-manipulator */ "./src/js/object-manipulator.js");
/* harmony import */ var _todo_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-controller */ "./src/js/todo-controller.js");






function createProjectController(projectWindow) {
    //create objects
    const domInterfacer = (0,_dom_interfacer__WEBPACK_IMPORTED_MODULE_1__.createDomInterfacer)();
    const projectStructurer = (0,_project_structurer__WEBPACK_IMPORTED_MODULE_0__.createProjectStructurer)();
    const selectors = (0,_selectorHolder__WEBPACK_IMPORTED_MODULE_2__.createSelectorHolder)();
    const objectManipulator = (0,_object_manipulator__WEBPACK_IMPORTED_MODULE_3__.createObjectManipulator)();
    const todoController = (0,_todo_controller__WEBPACK_IMPORTED_MODULE_4__.createTodoController)(objectManipulator, domInterfacer,projectStructurer);

    function showActiveProject() {
        const project = projectStructurer.activeProject;
        const projectPage = domInterfacer.createProjectPage(project);
        setListEventListeners(projectPage, todoController.createTodo, todoController.setupTodoListeners);
        projectWindow.innerHTML = "";
        projectWindow.appendChild(projectPage);
    }

    function setListEventListeners(listContainer, createFunction, setupFunction) {
        const listInterface = domInterfacer.getListUiElements(listContainer);
        listInterface.addBtn.addEventListener("click", () => {
            domInterfacer.cleanInput(listInterface.addPopup);
            domInterfacer.replaceElement(listInterface.addPopup, listInterface.addBtn);
        });

        listInterface.closePopupBtn.addEventListener("click", 
            domInterfacer.replaceElement.bind(null,  listInterface.addBtn,listInterface.addPopup));

        listInterface.popupAddBtn.addEventListener("click", () => {
            const object = objectManipulator.createObject(listInterface.addPopup, createFunction, projectStructurer)
            objectManipulator.addObject(object, listInterface.ul, setupFunction);
            listInterface.closePopupBtn.click();
        });
    }

    function chooseProject() {
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        domInterfacer.selectObjectElement(project);
        showActiveProject();
    }

    function setupRemoveIcon(element, object, objectList, objectContainer){
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon;
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            objectManipulator.removeObject(object, objectList, objectContainer);
            if (element.classList.contains(`${selectors.selected}`)) chooseProject.bind(domInterfacer.inbox)();
        });
    }

    function setupProjectListeners(project, projectElement, projectList){
        setupRemoveIcon(projectElement, project, projectList, projectStructurer);
        projectElement.addEventListener("click", chooseProject);
    }

    return {
        chooseProject,
        setListEventListeners,
        setupProjectListeners,
    };
}



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
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _images_project_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/project.png */ "./src/images/project.png");





function createProject(parametersObject) {
    let title = "Default project";

    if (arguments.length == 1){
        title = parametersObject.title;
        if (title === "") title = "Default title";
    }

    const todoList = {};
    const containType = "todo";
    const domInteracer = (0,_dom_interfacer__WEBPACK_IMPORTED_MODULE_2__.createDomInterfacer)()
    const proto1 = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(todoList, containType);
    const proto2 = (0,_base_object__WEBPACK_IMPORTED_MODULE_1__.createBaseObject)("project", title, _images_project_png__WEBPACK_IMPORTED_MODULE_3__, domInteracer.createUlElement);

    return Object.assign({}, proto1, proto2 );
}



/***/ }),

/***/ "./src/js/project-structurer.js":
/*!**************************************!*\
  !*** ./src/js/project-structurer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectStructurer": () => (/* binding */ createProjectStructurer)
/* harmony export */ });
/* harmony import */ var _structurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./structurer */ "./src/js/structurer.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");



function createProjectStructurer() {
    const projects = {};
    const containType = "project";
    const proto = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(projects, containType);
     //create default projects
     const inbox = (0,_project_object__WEBPACK_IMPORTED_MODULE_1__.createProject)({
        "title": "Inbox"
    });
    proto.add(inbox);
    const activeProject = proto.getObjectByTitle(inbox.title);

    function add(object){
        if (object.type !== containType){
            return this.activeProject.add(object);
        }
        else {
            return proto.add(object);
        }
    }

    function remove(object){
        if (object.type !== containType){
            return this.activeProject.remove(object);
        }
        else {
            return proto.remove(object);
        }
    }

    return Object.assign({}, proto, {
        get activeProject() {
            return activeProject;
        },

        set activeProject(title){
            activeProject = proto.getObjectByTitle(title);
        },
        add,
        remove
    });
}



/***/ }),

/***/ "./src/js/selectorHolder.js":
/*!**********************************!*\
  !*** ./src/js/selectorHolder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSelectorHolder": () => (/* binding */ createSelectorHolder)
/* harmony export */ });
function createSelectorHolder(){
    
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
    done: "done"
    }
}



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
function createStructurer(container, containType) {
    const add = (object) => {
        if (object.title in container) return false;
        container[object.title] = object;
        return true;
    }

    const remove = (object) => {
        delete container[object.title];
    }

    const getObjectByTitle = (name) => {
        if (name in container) return container[name];
        return false;
    }

    return {
        add,
        remove,
        getObjectByTitle,

        get container() {
            return container;
        },

        get containType() {
            return containType;
        }
    };
}



/***/ }),

/***/ "./src/js/todo-controller.js":
/*!***********************************!*\
  !*** ./src/js/todo-controller.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodoController": () => (/* binding */ createTodoController)
/* harmony export */ });
/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-object */ "./src/js/todo-object.js");
/* harmony import */ var _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/unfinished-task.png */ "./src/images/unfinished-task.png");
/* harmony import */ var _images_finished_task_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/finished-task.png */ "./src/images/finished-task.png");
/* harmony import */ var _selectorHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectorHolder */ "./src/js/selectorHolder.js");





function createTodoController(objectManipulator, domInterfacer, projectStructurer){
    const selectors = (0,_selectorHolder__WEBPACK_IMPORTED_MODULE_3__.createSelectorHolder)();
    
    function setupRemoveIcon(element, object, objectList, objectContainer){
        const removeIcon = domInterfacer.getLiInterface(element).removeIcon;
        removeIcon.addEventListener("click", (event) => {
            event.stopPropagation();
            objectManipulator.removeObject(object, objectList, objectContainer);
        });
    }

    function setupTitleInput(todo, li, domInterfacer){
        const titleInput = li.titleInput;
        const title = li.title;
        title.addEventListener("click", (event) => {
            event.stopPropagation();
            domInterfacer.replaceElement(titleInput, title);
            titleInput.value = todo.title;
            titleInput.focus();
        });
        titleInput.addEventListener("keydown", (event) => {
            event.stopPropagation();
            if (event.key == "Enter"){
                todo.title = titleInput.value;
                title.textContent = titleInput.value;
                domInterfacer.replaceElement(title, titleInput);
            }
        });
    }

    function setupTodoIcon(li){
        const itemIcon = li.itemIcon;
        itemIcon.addEventListener("click", (event) => {
            const li = event.target.parentElement.parentElement;
            if (li.classList.contains(selectors.done)){
                li.classList.remove(selectors.done);
                itemIcon.src = _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_1__;
            }
            else {
                itemIcon.src = _images_finished_task_png__WEBPACK_IMPORTED_MODULE_2__;
                li.classList.add(selectors.done);
            }
        })
    }

    function setupTodoListeners(todo, todoElement, todoList){
        const li = domInterfacer.getLiInterface(todoElement);
        setupRemoveIcon(todoElement, todo, todoList, projectStructurer.activeProject)
        setupTitleInput(todo, li, domInterfacer);
        setupTodoIcon(li);
        const dateInput = li.dateInput;
        dateInput.addEventListener("change", (event) => {
            todo.date = event.target.value;
        })
    }

    return {
        setupTodoListeners,
        createTodo: _todo_object__WEBPACK_IMPORTED_MODULE_0__.createTodo
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
/* harmony import */ var _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/unfinished-task.png */ "./src/images/unfinished-task.png");




function createTodo(parametersObject) {
    let title = "Default title";
    let date = "";

    if (arguments.length == 1){
        title = parametersObject.title;
        if (title === "") title = "Default title";
    }

    const domInteracer = (0,_dom_interfacer__WEBPACK_IMPORTED_MODULE_1__.createDomInterfacer)()
    const proto = (0,_base_object__WEBPACK_IMPORTED_MODULE_0__.createBaseObject)("todo", title, _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_2__, domInteracer.createTodoListElement);

    return Object.assign({}, proto, { 

        get date() {
            return date;
        },

        set date(newDate) {
            date = newDate;
        },

    });

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
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-controller */ "./src/js/project-controller.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");




function createStartPage() {
    const projectWindow = document.querySelector(".content");
    const controller = (0,_project_controller__WEBPACK_IMPORTED_MODULE_1__.createProjectController)(projectWindow);
   
    const projectList = document.querySelector(".list.project");
    controller.setListEventListeners(projectList, _project_object__WEBPACK_IMPORTED_MODULE_2__.createProject, controller.setupProjectListeners);
}

createStartPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsNExBQTJFO0FBQ3ZILDRDQUE0QywwTEFBMEU7QUFDdEgsNENBQTRDLGtIQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsaURBQWlELDZDQUE2QyxvQ0FBb0MsaURBQWlELHNDQUFzQyxrREFBa0QscURBQXFELDRDQUE0QyxrQ0FBa0MsR0FBRyxnQkFBZ0IsaUNBQWlDLG9KQUFvSiwwQkFBMEIseUJBQXlCLEdBQUcsT0FBTyw2QkFBNkIsZ0JBQWdCLGlCQUFpQiw2Q0FBNkMsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsb0JBQW9CLEdBQUcsYUFBYSxvQkFBb0IscUNBQXFDLG1CQUFtQix1REFBdUQsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsV0FBVyxvQkFBb0IsOEJBQThCLDBCQUEwQixzQ0FBc0MsR0FBRyx1Q0FBdUMscUNBQXFDLEdBQUcsV0FBVyxvQkFBb0IsYUFBYSw4QkFBOEIsMEJBQTBCLEdBQUcsV0FBVyxpQkFBaUIsdUJBQXVCLG1CQUFtQixnREFBZ0QsK0JBQStCLG1CQUFtQixHQUFHLFlBQVksb0JBQW9CLGtDQUFrQyw2QkFBNkIsMEJBQTBCLHlCQUF5QixHQUFHLGNBQWMsa0JBQWtCLHVCQUF1Qix1QkFBdUIsY0FBYyxHQUFHLGNBQWMsdUJBQXVCLHFCQUFxQiwyQkFBMkIsb0JBQW9CLDBCQUEwQixzQkFBc0IsR0FBRyx5Q0FBeUMsZ0RBQWdELEdBQUcsbUJBQW1CLGtEQUFrRCxHQUFHLHdCQUF3QiwwQkFBMEIsb0NBQW9DLEdBQUcsZ0JBQWdCLGtCQUFrQixvQkFBb0Isa0NBQWtDLDBCQUEwQixHQUFHLDJDQUEyQyxxREFBcUQsR0FBRyxtREFBbUQsd0RBQXdELEdBQUcsaUNBQWlDLHFCQUFxQixHQUFHLG1CQUFtQix3QkFBd0IsaUJBQWlCLG9CQUFvQixrQ0FBa0MsMEJBQTBCLEdBQUcsaUJBQWlCLHFCQUFxQixzQkFBc0IsZ0NBQWdDLHlCQUF5QixzQkFBc0Isb0JBQW9CLDZCQUE2QixHQUFHLHVCQUF1QixpQkFBaUIsMkJBQTJCLEdBQUcsNEJBQTRCLG9CQUFvQixHQUFHLDZCQUE2QixtREFBbUQsR0FBRyxhQUFhLDRCQUE0QixxQkFBcUIsR0FBRyxlQUFlLDBCQUEwQixHQUFHLGtCQUFrQix3QkFBd0Isb0JBQW9CLEdBQUcsNEJBQTRCLGtCQUFrQix1QkFBdUIsNEJBQTRCLEdBQUcsY0FBYywwQkFBMEIsZ0NBQWdDLHFCQUFxQixtQkFBbUIsc0JBQXNCLGtCQUFrQixxQkFBcUIsMkJBQTJCLHlCQUF5QixpQkFBaUIsR0FBRyxnQkFBZ0IsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLHFCQUFxQixpQkFBaUIsR0FBRyxrQkFBa0Isb0JBQW9CLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLG9CQUFvQiwrQkFBK0Isd0JBQXdCLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLHNCQUFzQiwyQkFBMkIsa0JBQWtCLHFCQUFxQixzQkFBc0IseURBQXlELEdBQUcsNEJBQTRCLG9CQUFvQixHQUFHLHlDQUF5Qyx3RUFBd0UsR0FBRyxvQkFBb0Isb0JBQW9CLHFDQUFxQywwQkFBMEIsR0FBRywyQkFBMkIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsc0JBQXNCLHdCQUF3QixrQkFBa0Isc0JBQXNCLHFCQUFxQixvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLHdCQUF3QiwyQ0FBMkMsR0FBRywyQkFBMkIsMkNBQTJDLEdBQUcsOEJBQThCLDJDQUEyQyxHQUFHLGlDQUFpQyxnQ0FBZ0MsR0FBRyxjQUFjLHdCQUF3QixtQkFBbUIsaUJBQWlCLGNBQWMsR0FBRyxjQUFjLG1CQUFtQixrQkFBa0Isb0JBQW9CLDZCQUE2QixrQ0FBa0MsK0JBQStCLEdBQUcsYUFBYSx5QkFBeUIsdUJBQXVCLG9CQUFvQix1REFBdUQsc0NBQXNDLEdBQUcsaUJBQWlCLG1CQUFtQixrQkFBa0IsdUJBQXVCLEdBQUcsdUJBQXVCLG1CQUFtQixrQkFBa0IsMkNBQTJDLHNCQUFzQixHQUFHLHNEQUFzRCxpQkFBaUIsMEJBQTBCLEdBQUcsOENBQThDLGdEQUFnRCx1QkFBdUIsd0RBQXdELDBCQUEwQixHQUFHLCtDQUErQywwQ0FBMEMsMEJBQTBCLEdBQUcsOERBQThELHVEQUF1RCxHQUFHLE9BQU8sdUZBQXVGLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLFVBQVUsVUFBVSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGlDQUFpQyw2Q0FBNkMsb0NBQW9DLGlEQUFpRCxzQ0FBc0Msa0RBQWtELHFEQUFxRCw0Q0FBNEMsa0NBQWtDLEdBQUcsZ0JBQWdCLGlDQUFpQyxtTEFBbUwsMEJBQTBCLHlCQUF5QixHQUFHLE9BQU8sNkJBQTZCLGdCQUFnQixpQkFBaUIsNkNBQTZDLEdBQUcsVUFBVSxvQkFBb0IsNkJBQTZCLG9CQUFvQixHQUFHLGFBQWEsb0JBQW9CLHFDQUFxQyxtQkFBbUIsdURBQXVELEdBQUcsZ0JBQWdCLHNCQUFzQixHQUFHLFdBQVcsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0NBQXNDLEdBQUcsdUNBQXVDLHFDQUFxQyxHQUFHLFdBQVcsb0JBQW9CLGFBQWEsOEJBQThCLDBCQUEwQixHQUFHLFdBQVcsaUJBQWlCLHVCQUF1QixtQkFBbUIsZ0RBQWdELCtCQUErQixtQkFBbUIsR0FBRyxZQUFZLG9CQUFvQixrQ0FBa0MsNkJBQTZCLDBCQUEwQix5QkFBeUIsR0FBRyxjQUFjLGtCQUFrQix1QkFBdUIsdUJBQXVCLGNBQWMsR0FBRyxjQUFjLHVCQUF1QixxQkFBcUIsMkJBQTJCLG9CQUFvQiwwQkFBMEIsc0JBQXNCLEdBQUcseUNBQXlDLGdEQUFnRCxHQUFHLG1CQUFtQixrREFBa0QsR0FBRyx3QkFBd0IsMEJBQTBCLG9DQUFvQyxHQUFHLGdCQUFnQixrQkFBa0Isb0JBQW9CLGtDQUFrQywwQkFBMEIsR0FBRywyQ0FBMkMscURBQXFELEdBQUcsbURBQW1ELHdEQUF3RCxHQUFHLGlDQUFpQyxxQkFBcUIsR0FBRyxtQkFBbUIsd0JBQXdCLGlCQUFpQixvQkFBb0Isa0NBQWtDLDBCQUEwQixHQUFHLGlCQUFpQixxQkFBcUIsc0JBQXNCLGdDQUFnQyx5QkFBeUIsc0JBQXNCLG9CQUFvQiw2QkFBNkIsR0FBRyx1QkFBdUIsaUJBQWlCLDJCQUEyQixHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyw2QkFBNkIsbURBQW1ELEdBQUcsYUFBYSw0QkFBNEIscUJBQXFCLEdBQUcsZUFBZSwwQkFBMEIsR0FBRyxrQkFBa0Isd0JBQXdCLG9CQUFvQixHQUFHLDRCQUE0QixrQkFBa0IsdUJBQXVCLDRCQUE0QixHQUFHLGNBQWMsMEJBQTBCLGdDQUFnQyxxQkFBcUIsbUJBQW1CLHNCQUFzQixrQkFBa0IscUJBQXFCLDJCQUEyQix5QkFBeUIsaUJBQWlCLEdBQUcsZ0JBQWdCLG1CQUFtQiw2QkFBNkIsOEJBQThCLDBCQUEwQixxQkFBcUIsaUJBQWlCLEdBQUcsa0JBQWtCLG9CQUFvQixHQUFHLGtCQUFrQixvQkFBb0IsR0FBRyxvQkFBb0IsK0JBQStCLHdCQUF3QixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxzQkFBc0IsMkJBQTJCLGtCQUFrQixxQkFBcUIsc0JBQXNCLHlEQUF5RCxHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyx5Q0FBeUMscURBQXFELEdBQUcsb0JBQW9CLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEdBQUcsMkJBQTJCLGlCQUFpQixrQkFBa0IsMkJBQTJCLHNCQUFzQix3QkFBd0Isa0JBQWtCLHNCQUFzQixxQkFBcUIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsR0FBRyx3QkFBd0IsMkNBQTJDLEdBQUcsMkJBQTJCLDJDQUEyQyxHQUFHLDhCQUE4QiwyQ0FBMkMsR0FBRyxpQ0FBaUMsZ0NBQWdDLEdBQUcsY0FBYyx3QkFBd0IsbUJBQW1CLGlCQUFpQixjQUFjLEdBQUcsY0FBYyxtQkFBbUIsa0JBQWtCLG9CQUFvQiw2QkFBNkIsa0NBQWtDLCtCQUErQixHQUFHLGFBQWEseUJBQXlCLHVCQUF1QixvQkFBb0IsdURBQXVELHNDQUFzQyxHQUFHLGlCQUFpQixtQkFBbUIsa0JBQWtCLHVCQUF1QixHQUFHLHVCQUF1QixtQkFBbUIsa0JBQWtCLDJDQUEyQyxzQkFBc0IsR0FBRyxzREFBc0QsaUJBQWlCLDBCQUEwQixHQUFHLDhDQUE4QyxnREFBZ0QsdUJBQXVCLHdEQUF3RCwwQkFBMEIsR0FBRywrQ0FBK0MsMENBQTBDLDBCQUEwQixHQUFHLDhEQUE4RCx1REFBdUQsR0FBRyxtQkFBbUI7QUFDbHJkO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzVCYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXNHO0FBQ3RHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJZ0Q7QUFDeEUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7Ozs7Ozs7Ozs7QUNyQjZCO0FBQ2tDO0FBQ2Q7O0FBRWpEO0FBQ0E7QUFDQSx1QkFBdUIsNEVBQXVCO0FBQzlDO0FBQ0E7QUFDQSxrREFBa0QsMERBQWE7QUFDL0Q7O0FBRUEsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/NjM0OSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9iYXNlLW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvZG9tLWZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvZG9tLWludGVyZmFjZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL29iamVjdC1tYW5pcHVsYXRvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvcHJvamVjdC1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9wcm9qZWN0LW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvcHJvamVjdC1zdHJ1Y3R1cmVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9zZWxlY3RvckhvbGRlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvc3RydWN0dXJlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvdG9kby1jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy90b2RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NrLU1vZGVybmlzdC1SZWd1bGFyL1NrLU1vZGVybmlzdC1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU2stTW9kZXJuaXN0LVJlZ3VsYXIvU2stTW9kZXJuaXN0LVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ltYWdlcy90b2RheS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMTEsIDIwMSk7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDQ4LCA3OCwgNjgpO1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWZvbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kOnJnYigxNDQsIDE3NSwgMTYwKTsgXFxuICAgIC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxuICAgIC0tcG9wdXAtYnRuLWNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxuICAgIC0tY29udGVudC1iYWNrZ3JvdW5kOiB3aGl0ZTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9kZXJuaXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm5pc3RcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5tZW51LWljb24gcGF0aCxcXG4ubG9nby1pY29uIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDoxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmxpc3QgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5saXN0IHVsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDE1ZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5saXN0IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0LnByb2plY3QgbGksXFxuLmxpc3Qub3B0aW9ucyBsaSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubGlzdC50b2RvIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QudG9kbyBsaS5kb25lIHtcXG4gICAgZmlsdGVyOm9wYWNpdHkoMC41KTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5saXN0IGxpIGEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdCBsaTpob3ZlcixcXG4ubWVudSAuYWRkLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0LnRvZG8gbGk6aG92ZXIsXFxuI2NvbnRlbnQgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWhvdmVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ubGlzdCBsaTpob3ZlciAucmVtb3ZlLWljb24ge1xcbiAgICBkaXNwbGF5OmlubGluZTtcXG59XFxuXFxuLnJpZ2h0LWxpLnRvZG97XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvIGlucHV0IHtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XFxufVxcblxcbi50b2RvLmlucHV0LXRpdGxlIHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxufVxcblxcbi50b2RvLmlucHV0LWRhdGU6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4udG9kby5pbnB1dC10aXRsZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IDAuNXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubGlzdCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmxpc3QgaW1nIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLnJlbW92ZS1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0IGgyLFxcbiNjb250ZW50IGgxIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1wb3B1cCB7XFxuICAgIHdpZHRoOiAxMDAlOztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG5ib2R5IC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5ib2R5IC5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5IC5zZWxlY3RlZCB7XFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjg1KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5hZGQtcG9wdXAgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hZGQtcG9wdXAgaW5wdXQge1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4uYWRkLXBvcHVwIGlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcG9wdXAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDI1NSwgMTcwKTtcXG59XFxuXFxuLmFkZC1wb3B1cC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxOTApO1xcbn1cXG5cXG4uYWRkLXBvcHVwLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMzYsIDE0NCk7XFxufVxcblxcbi5hZGQtcG9wdXAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWIyYjI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMmVtIDEwZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2Nyb2xsIGJhciovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuICBcXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDLDhDQUE4QztJQUM5QyxxQ0FBcUM7SUFDckMsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCOzhEQUNpRjtJQUNqRixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBOztJQUVJLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksOENBQThDO0FBQ2xEOztBQUVBOztJQUVJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlEQUE0QztBQUNoRDs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7SUFDZCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osVUFBVTtJQUNWLE9BQU87QUFDWDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQSxhQUFhO0FBQ2IsVUFBVTtBQUNWO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtJQUNqRCxtQkFBbUI7QUFDdkI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksbUNBQW1DO0lBQ25DLG1CQUFtQjtBQUN2Qjs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxnREFBZ0Q7QUFDcERcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIxMSwgMjAxKTtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNzgsIDY4KTtcXG4gICAgLS1oZWFkZXItZm9udC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1tZW51LWhvdmVyLWJhY2tncm91bmQ6cmdiKDE0NCwgMTc1LCAxNjApOyBcXG4gICAgLS1jb250ZW50LWhvdmVyLWJhY2tncm91bmQ6IHJnYigyMjYsIDIzNSwgMjMwKTtcXG4gICAgLS1wb3B1cC1idG4tY29sb3I6IHJnYigyMjYsIDIzNSwgMjMwKTtcXG4gICAgLS1jb250ZW50LWJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm5pc3RcXFwiO1xcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvU2stTW9kZXJuaXN0LVJlZ3VsYXIvU2stTW9kZXJuaXN0LVJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksXFxuICAgICAgICB1cmwoJy4uL2ZvbnRzL1NrLU1vZGVybmlzdC1SZWd1bGFyL1NrLU1vZGVybmlzdC1SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vZGVybmlzdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm1lbnUtaWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcXG59XFxuXFxuLm1lbnUtaWNvbiBwYXRoLFxcbi5sb2dvLWljb24gcGF0aCB7XFxuICAgIGZpbGw6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OjE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4ubGlzdCAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmxpc3QgdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMTVlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmxpc3QgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QucHJvamVjdCBsaSxcXG4ubGlzdC5vcHRpb25zIGxpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5saXN0LnRvZG8gbGkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250ZW50LWJhY2tncm91bmQpO1xcbn1cXG5cXG4ubGlzdC50b2RvIGxpLmRvbmUge1xcbiAgICBmaWx0ZXI6b3BhY2l0eSgwLjUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLmxpc3QgbGkgYSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0IGxpOmhvdmVyLFxcbi5tZW51IC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QudG9kbyBsaTpob3ZlcixcXG4jY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0IGxpOmhvdmVyIC5yZW1vdmUtaWNvbiB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbn1cXG5cXG4ucmlnaHQtbGkudG9kb3tcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8gaW5wdXQge1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLnRvZG8uaW5wdXQtdGl0bGUge1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG59XFxuXFxuLnRvZG8uaW5wdXQtZGF0ZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi50b2RvLmlucHV0LXRpdGxlOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMC41cHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5saXN0IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubGlzdCBpbWcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4ucmVtb3ZlLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QgaDIsXFxuI2NvbnRlbnQgaDEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4uYWRkLWJ0biB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uYWRkLXBvcHVwIHtcXG4gICAgd2lkdGg6IDEwMCU7O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGdhcDogMC41ZW07XFxufVxcblxcbmJvZHkgLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmJvZHkgLmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHkgLnNlbGVjdGVkIHtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuODUpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmFkZC1wb3B1cCA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1wb3B1cCBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5hZGQtcG9wdXAgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG46Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1hZ2VzL3RvZGF5LnBuZ1xcXCIpO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtcG9wdXAuYWRkLWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDI1NSwgMTcwKTtcXG59XFxuXFxuLmFkZC1wb3B1cC5jYW5jZWwtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxOTApO1xcbn1cXG5cXG4uYWRkLXBvcHVwLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ0LCAyMzYsIDE0NCk7XFxufVxcblxcbi5hZGQtcG9wdXAuY2FuY2VsLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWIyYjI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMmVtIDEwZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2Nyb2xsIGJhciovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuICBcXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGNyZWF0ZUJhc2VPYmplY3QodHlwZSwgdGl0bGUsIGljb24sIGNyZWF0ZUxpRWxlbWVudEZ1bmN0aW9uKXtcblxuICAgIGNvbnN0IHRpdGxlVG9DbGFzc05hbWUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBcImNcIiArIHRpdGxlLnJlcGxhY2UoL1xcVy9nLCBcIi1cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0eXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCB0aXRsZShuZXdUaXRsZSl7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0aXRsZVRvQ2xhc3NOYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlVG9DbGFzc05hbWUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgbGlFbGVtZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUxpRWxlbWVudEZ1bmN0aW9uKHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQmFzZU9iamVjdCB9OyIsImZ1bmN0aW9uIGNyZWF0ZURvbUZ1bmN0aW9ucygpe1xuICAgIGZ1bmN0aW9uIGNyZWF0ZURvbUVsZW1lbnQobmFtZSwgY2xhc3Nlcyl7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpdihjbGFzc2VzKXtcbiAgICAgICAgY29uc3QgZGl2ID0gY3JlYXRlRG9tRWxlbWVudChcImRpdlwiLCBjbGFzc2VzKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVJbWcoY2xhc3Nlcywgc3JjLCBoZWlnaHQsIHdpZHRoKXtcbiAgICAgICAgY29uc3QgaW1nID0gY3JlYXRlRG9tRWxlbWVudChcImltZ1wiLCBjbGFzc2VzKTtcbiAgICAgICAgaW1nLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgaW1nLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgIHJldHVybiBpbWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5wdXQoY2xhc3NlcywgbmFtZSwgdHlwZSl7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRG9tRWxlbWVudChcImlucHV0XCIsIGNsYXNzZXMpO1xuICAgICAgICBpbnB1dC50eXBlID0gdHlwZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiBpbnB1dDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVCdG4oY2xhc3NlcywgdGV4dENvbnRlbnQpe1xuICAgICAgICBjb25zdCBidG4gPSBjcmVhdGVEb21FbGVtZW50KFwiYnV0dG9uXCIsIGNsYXNzZXMpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICByZXR1cm4gYnRuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbGxlY3RJbnB1dChmb3JtKXtcbiAgICAgICAgY29uc3QgcGFyYW1ldGVycyA9IHt9O1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgICAgICAgcGFyYW1ldGVyc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBwYXJhbWV0ZXJzXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW5JbnB1dChmb3JtKXtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNob3dFbGVtZW50KGVsZW1lbnQpe1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaWRlRWxlbWVudChlbGVtZW50KXtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxlbVRvU2hvdywgZWxlbVRvSGlkZSkge1xuICAgICAgICBzaG93RWxlbWVudChlbGVtVG9TaG93KTtcbiAgICAgICAgaGlkZUVsZW1lbnQoZWxlbVRvSGlkZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlRGl2LFxuICAgICAgICBjcmVhdGVCdG4sXG4gICAgICAgIGNyZWF0ZUltZyxcbiAgICAgICAgY3JlYXRlSW5wdXQsXG4gICAgICAgIGNvbGxlY3RJbnB1dCxcbiAgICAgICAgcmVwbGFjZUVsZW1lbnQsXG4gICAgICAgIGNsZWFuSW5wdXQsXG4gICAgfVxufVxuXG5leHBvcnQgeyBjcmVhdGVEb21GdW5jdGlvbnMgfTsiLCJpbXBvcnQgUmVtb3ZlSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3JlbW92ZS10YXNrLnBuZ1wiO1xuaW1wb3J0IEFkZEljb24gZnJvbSBcIi4uL2ltYWdlcy9hZGQtaWNvbi5wbmdcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUZ1bmN0aW9ucyB9IGZyb20gXCIuL2RvbS1mdW5jdGlvbnNcIjtcbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9ySG9sZGVyIH0gZnJvbSBcIi4vc2VsZWN0b3JIb2xkZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlRG9tSW50ZXJmYWNlcigpe1xuICAgIGNvbnN0IGRvbUZ1bmN0aW9ucyA9IGNyZWF0ZURvbUZ1bmN0aW9ucygpO1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IGNyZWF0ZVNlbGVjdG9ySG9sZGVyKCk7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0RWxlbWVudChvYmplY3Qpe1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChgJHtvYmplY3QudGl0bGVUb0NsYXNzTmFtZX1gLCBvYmplY3QudHlwZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5ocmVmID0gYCMke29iamVjdC50aXRsZVRvQ2xhc3NOYW1lfWA7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbGVtSWNvbiA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVJbWcoW3NlbGVjdG9ycy5saUljb24sIG9iamVjdC50eXBlXSwgb2JqZWN0Lmljb24sIFwiMTZcIiwgXCIxNlwiKTtcbiAgICBcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IG9iamVjdC50aXRsZTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHJpZ2h0TGkgPSBkb21GdW5jdGlvbnMuY3JlYXRlRGl2KFtzZWxlY3RvcnMucmlnaHRMaSwgb2JqZWN0LnR5cGVdKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZUljb24gPSBkb21GdW5jdGlvbnMuY3JlYXRlSW1nKFtzZWxlY3RvcnMucmVtb3ZlTGlJY29uXSwgUmVtb3ZlSWNvbiwgXCIxNlwiLCBcIjE2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGluay5hcHBlbmQoZWxlbUljb24sIHNwYW4pO1xuICAgICAgICByaWdodExpLmFwcGVuZENoaWxkKHJlbW92ZUljb24pO1xuICAgICAgICBsaS5hcHBlbmQobGluaywgcmlnaHRMaSk7XG4gICAgXG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9kb0xpc3RFbGVtZW50KHRvZG8pe1xuICAgICAgICBjb25zdCBsaSA9IGNyZWF0ZUxpc3RFbGVtZW50KHRvZG8pO1xuICAgICAgICBjb25zdCBhID0gbGkucXVlcnlTZWxlY3RvcihcImFcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb21GdW5jdGlvbnMuY3JlYXRlSW5wdXQoW3NlbGVjdG9ycy50b2RvLCBzZWxlY3RvcnMuaW5wdXRUaXRsZSwgc2VsZWN0b3JzLmhpZGRlbl0sIFwidGl0bGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIGNvbnN0IHJpZ2h0TGkgPSBsaS5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvcnMucmlnaHRMaX0uJHtzZWxlY3RvcnMudG9kb31gKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9tRnVuY3Rpb25zLmNyZWF0ZUlucHV0KFtzZWxlY3RvcnMudG9kbywgc2VsZWN0b3JzLmlucHV0RGF0ZV0sIFwiZGF0ZVwiLCBcImRhdGVcIik7XG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG8uZGF0ZTtcbiAgICAgICAgYS5hcHBlbmQodGl0bGVJbnB1dCk7XG4gICAgICAgIHJpZ2h0TGkucHJlcGVuZChkYXRlSW5wdXQpO1xuICAgICAgICByZXR1cm4gbGlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0KG9iamVjdCkge1xuICAgICAgICBjb25zdCBkaXYgPSBkb21GdW5jdGlvbnMuY3JlYXRlRGl2KFtzZWxlY3RvcnMubGlzdCwgb2JqZWN0LmNvbnRhaW5UeXBlXSlcbiAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0LmNvbnRhaW5lcikge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IG9iamVjdC5jb250YWluZXJba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZWxlbWVudC5saUVsZW1lbnQ7XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodWwpO1xuICAgICAgICByZXR1cm4gZGl2XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkQnRuKG9iamVjdFR5cGUpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9tRnVuY3Rpb25zLmNyZWF0ZUJ0bihbc2VsZWN0b3JzLmFkZEJ0biwgb2JqZWN0VHlwZSwgc2VsZWN0b3JzLmFjdGl2ZV0sIGBBZGQgJHtvYmplY3RUeXBlfWApO1xuICAgICAgICBjb25zdCBidG5JY29uID0gZG9tRnVuY3Rpb25zLmNyZWF0ZUltZyhbXSxBZGRJY29uLCBcIjE2XCIsIFwiMTZcIik7XG4gICAgICAgIGJ0bi5wcmVwZW5kKGJ0bkljb24pO1xuXG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkUG9wdXAoYWRkVHlwZSl7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVEaXYoW3NlbGVjdG9ycy5hZGRQb3B1cCwgYWRkVHlwZSwgc2VsZWN0b3JzLmhpZGRlbl0pO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvbUZ1bmN0aW9ucy5jcmVhdGVJbnB1dChbc2VsZWN0b3JzLmFkZFBvcHVwLCBzZWxlY3RvcnMuaW5wdXRUaXRsZV0sIFwidGl0bGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb21GdW5jdGlvbnMuY3JlYXRlRGl2KFtzZWxlY3RvcnMuYnRuQ29udGFpbmVyXSlcblxuICAgICAgICBjb25zdCBhZGRCdG4gPSBkb21GdW5jdGlvbnMuY3JlYXRlQnRuKFtzZWxlY3RvcnMuYWRkUG9wdXAsIHNlbGVjdG9ycy5hZGRCdG5dLCBcIkFkZFwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9tRnVuY3Rpb25zLmNyZWF0ZUJ0bihbc2VsZWN0b3JzLmFkZFBvcHVwLCBzZWxlY3RvcnMuY2FuY2VsQnRuXSwgXCJDYW5jZWxcIik7XG5cbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZChhZGRCdG4sIGNhbmNlbEJ0bik7XG4gICAgICAgIGRpdi5hcHBlbmQoaW5wdXQsIGJ0bkNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIGRpdlxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RQYWdlKHByb2plY3QpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICAgICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcblxuICAgICAgICBjb25zdCB1bCA9IGNyZWF0ZUxpc3QocHJvamVjdCk7XG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGNyZWF0ZUFkZEJ0bihcInRvZG9cIik7XG4gICAgICAgIGNvbnN0IGFkZFBvcHVwID0gY3JlYXRlQWRkUG9wdXAoXCJ0b2RvXCIpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKGgxLCB1bCwgYWRkQnRuLCBhZGRQb3B1cCk7XG5cbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VsZWN0T2JqZWN0RWxlbWVudChvYmplY3Qpe1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7b2JqZWN0LnRpdGxlVG9DbGFzc05hbWV9LiR7b2JqZWN0LnR5cGV9YCk7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvcnMuc2VsZWN0ZWR9LiR7b2JqZWN0LnR5cGV9YCk7XG4gICAgICAgIGlmIChwcmV2aW91c1NlbGVjdGVkKSBwcmV2aW91c1NlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoYCR7c2VsZWN0b3JzLnNlbGVjdGVkfWApO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRMaXN0SW50ZXJmYWNlKGxpc3RDb250YWluZXIpe1xuICAgICAgICBjb25zdCBhZGRCdG4gPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ycy5hZGRCdG59YCk7XG4gICAgICAgIGNvbnN0IGFkZFBvcHVwID0gbGlzdENvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvcnMuYWRkUG9wdXB9YCk7XG4gICAgICAgIGNvbnN0IGNsb3NlUG9wdXBCdG4gPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ycy5hZGRQb3B1cH0gLiR7c2VsZWN0b3JzLmNhbmNlbEJ0bn1gKTtcbiAgICAgICAgY29uc3QgdWwgPSBsaXN0Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ycy5saXN0fSB1bGApO1xuICAgICAgICBjb25zdCBhZGRQb3B1cEJ0biA9IGxpc3RDb250YWluZXIucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JzLmFkZFBvcHVwfS4ke3NlbGVjdG9ycy5hZGRCdG59YCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFkZEJ0biwgYWRkUG9wdXAsIGFkZFBvcHVwQnRuLCBjbG9zZVBvcHVwQnRuLCB1bFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TGlJbnRlcmZhY2UobGkpe1xuICAgICAgICBjb25zdCBsaUljb24gPSBsaS5xdWVyeVNlbGVjdG9yKGAuJHtzZWxlY3RvcnMubGlJY29ufWApO1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gbGkucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JzLnJlbW92ZUxpSWNvbn1gKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gbGkucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JzLmlucHV0RGF0ZX1gKTtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGxpLnF1ZXJ5U2VsZWN0b3IoYC4ke3NlbGVjdG9ycy5pbnB1dFRpdGxlfWApO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGxpLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsaUljb24sIHJlbW92ZUljb24sIGRhdGVJbnB1dCwgdGl0bGVJbnB1dCwgdGl0bGVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZUxpc3RFbGVtZW50LFxuICAgICAgICBjcmVhdGVUb2RvTGlzdEVsZW1lbnQsXG4gICAgICAgIGNyZWF0ZVByb2plY3RQYWdlLFxuICAgICAgICBjb2xsZWN0SW5wdXQ6IGRvbUZ1bmN0aW9ucy5jb2xsZWN0SW5wdXQsXG4gICAgICAgIHJlcGxhY2VFbGVtZW50OiBkb21GdW5jdGlvbnMucmVwbGFjZUVsZW1lbnQsXG4gICAgICAgIGNsZWFuSW5wdXQ6IGRvbUZ1bmN0aW9ucy5jbGVhbklucHV0LFxuICAgICAgICBzZWxlY3RPYmplY3RFbGVtZW50LFxuICAgICAgICBnZXRMaXN0SW50ZXJmYWNlLFxuICAgICAgICBnZXRMaUludGVyZmFjZSxcbiAgICAgICAgZ2V0IGluYm94KCl7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7c2VsZWN0b3JzLmluYm94fS4ke3NlbGVjdG9ycy5wcm9qZWN0fWApXG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVEb21JbnRlcmZhY2VyIH07IiwiaW1wb3J0IHsgY3JlYXRlRG9tSW50ZXJmYWNlciB9IGZyb20gXCIuL2RvbS1pbnRlcmZhY2VyXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1hbmlwdWxhdG9yKCl7XG4gICAgY29uc3QgZG9tSW50ZXJmYWNlciA9IGNyZWF0ZURvbUludGVyZmFjZXIoKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZU9iamVjdChvYmplY3QsIG9iamVjdExpc3QsIG9iamVjdENvbnRhaW5lcil7XG4gICAgICAgIGNvbnN0IG9iamVjdEVsZW1lbnQgPSBvYmplY3RMaXN0LnF1ZXJ5U2VsZWN0b3IoYC4ke29iamVjdC50aXRsZVRvQ2xhc3NOYW1lfWApO1xuICAgICAgICBvYmplY3RMaXN0LnJlbW92ZUNoaWxkKG9iamVjdEVsZW1lbnQpO1xuICAgICAgICBvYmplY3RDb250YWluZXIucmVtb3ZlKG9iamVjdCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0KGlucHV0Rm9ybSwgY3JlYXRlRnVuY3Rpb24sIHByb2plY3RTdHJ1Y3R1cmVyKSB7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSBkb21JbnRlcmZhY2VyLmNvbGxlY3RJbnB1dChpbnB1dEZvcm0pO1xuICAgICAgICBjb25zdCBvYmogPSBjcmVhdGVGdW5jdGlvbihwYXJhbWV0ZXJzKTtcbiAgICAgICAgaWYgKCFwcm9qZWN0U3RydWN0dXJlci5hZGQob2JqKSkgcmV0dXJuO1xuICAgICAgICByZXR1cm4gb2JqXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkT2JqZWN0KG9iamVjdCwgb2JqZWN0TGlzdCwgc2V0dXBGdW5jdGlvbil7XG4gICAgICAgIC8vIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdEVsZW1lbnQgPSBvYmplY3QubGlFbGVtZW50O1xuICAgICAgICAgICAgc2V0dXBGdW5jdGlvbihvYmplY3QsIG9iamVjdEVsZW1lbnQsIG9iamVjdExpc3QpO1xuICAgICAgICAgICAgb2JqZWN0TGlzdC5hcHBlbmRDaGlsZChvYmplY3RFbGVtZW50KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjYXRjaCB7XG4gICAgICAgIC8vICAgICBhbGVydChcIkFscmVkeSBleGlzdHMhXCIpO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlT2JqZWN0LFxuICAgICAgICBhZGRPYmplY3QsXG4gICAgICAgIHJlbW92ZU9iamVjdCxcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU9iamVjdE1hbmlwdWxhdG9yIH0iLCJpbXBvcnQge1xuICAgIGNyZWF0ZVByb2plY3RTdHJ1Y3R1cmVyXG59IGZyb20gXCIuL3Byb2plY3Qtc3RydWN0dXJlclwiO1xuaW1wb3J0IHtcbiAgICBjcmVhdGVEb21JbnRlcmZhY2VyXG59IGZyb20gXCIuL2RvbS1pbnRlcmZhY2VyXCI7XG5pbXBvcnQge1xuICAgIGNyZWF0ZVNlbGVjdG9ySG9sZGVyXG59IGZyb20gXCIuL3NlbGVjdG9ySG9sZGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVPYmplY3RNYW5pcHVsYXRvciB9IGZyb20gXCIuL29iamVjdC1tYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90b2RvLWNvbnRyb2xsZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdENvbnRyb2xsZXIocHJvamVjdFdpbmRvdykge1xuICAgIC8vY3JlYXRlIG9iamVjdHNcbiAgICBjb25zdCBkb21JbnRlcmZhY2VyID0gY3JlYXRlRG9tSW50ZXJmYWNlcigpO1xuICAgIGNvbnN0IHByb2plY3RTdHJ1Y3R1cmVyID0gY3JlYXRlUHJvamVjdFN0cnVjdHVyZXIoKTtcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBjcmVhdGVTZWxlY3RvckhvbGRlcigpO1xuICAgIGNvbnN0IG9iamVjdE1hbmlwdWxhdG9yID0gY3JlYXRlT2JqZWN0TWFuaXB1bGF0b3IoKTtcbiAgICBjb25zdCB0b2RvQ29udHJvbGxlciA9IGNyZWF0ZVRvZG9Db250cm9sbGVyKG9iamVjdE1hbmlwdWxhdG9yLCBkb21JbnRlcmZhY2VyLHByb2plY3RTdHJ1Y3R1cmVyKTtcblxuICAgIGZ1bmN0aW9uIHNob3dBY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdFN0cnVjdHVyZXIuYWN0aXZlUHJvamVjdDtcbiAgICAgICAgY29uc3QgcHJvamVjdFBhZ2UgPSBkb21JbnRlcmZhY2VyLmNyZWF0ZVByb2plY3RQYWdlKHByb2plY3QpO1xuICAgICAgICBzZXRMaXN0RXZlbnRMaXN0ZW5lcnMocHJvamVjdFBhZ2UsIHRvZG9Db250cm9sbGVyLmNyZWF0ZVRvZG8sIHRvZG9Db250cm9sbGVyLnNldHVwVG9kb0xpc3RlbmVycyk7XG4gICAgICAgIHByb2plY3RXaW5kb3cuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgcHJvamVjdFdpbmRvdy5hcHBlbmRDaGlsZChwcm9qZWN0UGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TGlzdEV2ZW50TGlzdGVuZXJzKGxpc3RDb250YWluZXIsIGNyZWF0ZUZ1bmN0aW9uLCBzZXR1cEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxpc3RJbnRlcmZhY2UgPSBkb21JbnRlcmZhY2VyLmdldExpc3RJbnRlcmZhY2UobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGxpc3RJbnRlcmZhY2UuYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBkb21JbnRlcmZhY2VyLmNsZWFuSW5wdXQobGlzdEludGVyZmFjZS5hZGRQb3B1cCk7XG4gICAgICAgICAgICBkb21JbnRlcmZhY2VyLnJlcGxhY2VFbGVtZW50KGxpc3RJbnRlcmZhY2UuYWRkUG9wdXAsIGxpc3RJbnRlcmZhY2UuYWRkQnRuKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdEludGVyZmFjZS5jbG9zZVBvcHVwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBcbiAgICAgICAgICAgIGRvbUludGVyZmFjZXIucmVwbGFjZUVsZW1lbnQuYmluZChudWxsLCAgbGlzdEludGVyZmFjZS5hZGRCdG4sbGlzdEludGVyZmFjZS5hZGRQb3B1cCkpO1xuXG4gICAgICAgIGxpc3RJbnRlcmZhY2UuYWRkUG9wdXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9iamVjdCA9IG9iamVjdE1hbmlwdWxhdG9yLmNyZWF0ZU9iamVjdChsaXN0SW50ZXJmYWNlLmFkZFBvcHVwLCBjcmVhdGVGdW5jdGlvbiwgcHJvamVjdFN0cnVjdHVyZXIpXG4gICAgICAgICAgICBvYmplY3RNYW5pcHVsYXRvci5hZGRPYmplY3Qob2JqZWN0LCBsaXN0SW50ZXJmYWNlLnVsLCBzZXR1cEZ1bmN0aW9uKTtcbiAgICAgICAgICAgIGxpc3RJbnRlcmZhY2UuY2xvc2VQb3B1cEJ0bi5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9vc2VQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0U3RydWN0dXJlci5nZXRPYmplY3RCeVRpdGxlKHRpdGxlKTtcbiAgICAgICAgcHJvamVjdFN0cnVjdHVyZXIuYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIGRvbUludGVyZmFjZXIuc2VsZWN0T2JqZWN0RWxlbWVudChwcm9qZWN0KTtcbiAgICAgICAgc2hvd0FjdGl2ZVByb2plY3QoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cFJlbW92ZUljb24oZWxlbWVudCwgb2JqZWN0LCBvYmplY3RMaXN0LCBvYmplY3RDb250YWluZXIpe1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gZG9tSW50ZXJmYWNlci5nZXRMaUludGVyZmFjZShlbGVtZW50KS5yZW1vdmVJY29uO1xuICAgICAgICByZW1vdmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb2JqZWN0TWFuaXB1bGF0b3IucmVtb3ZlT2JqZWN0KG9iamVjdCwgb2JqZWN0TGlzdCwgb2JqZWN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhgJHtzZWxlY3RvcnMuc2VsZWN0ZWR9YCkpIGNob29zZVByb2plY3QuYmluZChkb21JbnRlcmZhY2VyLmluYm94KSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXR1cFByb2plY3RMaXN0ZW5lcnMocHJvamVjdCwgcHJvamVjdEVsZW1lbnQsIHByb2plY3RMaXN0KXtcbiAgICAgICAgc2V0dXBSZW1vdmVJY29uKHByb2plY3RFbGVtZW50LCBwcm9qZWN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdFN0cnVjdHVyZXIpO1xuICAgICAgICBwcm9qZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hvb3NlUHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2hvb3NlUHJvamVjdCxcbiAgICAgICAgc2V0TGlzdEV2ZW50TGlzdGVuZXJzLFxuICAgICAgICBzZXR1cFByb2plY3RMaXN0ZW5lcnMsXG4gICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVQcm9qZWN0Q29udHJvbGxlclxufTsiLCJpbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vc3RydWN0dXJlclwiO1xuaW1wb3J0IHsgY3JlYXRlQmFzZU9iamVjdCB9IGZyb20gXCIuL2Jhc2Utb2JqZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVEb21JbnRlcmZhY2VyIH0gZnJvbSBcIi4vZG9tLWludGVyZmFjZXJcIjtcbmltcG9ydCBQcm9qZWN0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3Byb2plY3QucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocGFyYW1ldGVyc09iamVjdCkge1xuICAgIGxldCB0aXRsZSA9IFwiRGVmYXVsdCBwcm9qZWN0XCI7XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAxKXtcbiAgICAgICAgdGl0bGUgPSBwYXJhbWV0ZXJzT2JqZWN0LnRpdGxlO1xuICAgICAgICBpZiAodGl0bGUgPT09IFwiXCIpIHRpdGxlID0gXCJEZWZhdWx0IHRpdGxlXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdG9kb0xpc3QgPSB7fTtcbiAgICBjb25zdCBjb250YWluVHlwZSA9IFwidG9kb1wiO1xuICAgIGNvbnN0IGRvbUludGVyYWNlciA9IGNyZWF0ZURvbUludGVyZmFjZXIoKVxuICAgIGNvbnN0IHByb3RvMSA9IGNyZWF0ZVN0cnVjdHVyZXIodG9kb0xpc3QsIGNvbnRhaW5UeXBlKTtcbiAgICBjb25zdCBwcm90bzIgPSBjcmVhdGVCYXNlT2JqZWN0KFwicHJvamVjdFwiLCB0aXRsZSwgUHJvamVjdEljb24sIGRvbUludGVyYWNlci5jcmVhdGVMaXN0RWxlbWVudCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8xLCBwcm90bzIgKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdCB9OyIsImltcG9ydCB7IGNyZWF0ZVN0cnVjdHVyZXIgfSBmcm9tIFwiLi9zdHJ1Y3R1cmVyXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1vYmplY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdFN0cnVjdHVyZXIoKSB7XG4gICAgY29uc3QgcHJvamVjdHMgPSB7fTtcbiAgICBjb25zdCBjb250YWluVHlwZSA9IFwicHJvamVjdFwiO1xuICAgIGNvbnN0IHByb3RvID0gY3JlYXRlU3RydWN0dXJlcihwcm9qZWN0cywgY29udGFpblR5cGUpO1xuICAgICAvL2NyZWF0ZSBkZWZhdWx0IHByb2plY3RzXG4gICAgIGNvbnN0IGluYm94ID0gY3JlYXRlUHJvamVjdCh7XG4gICAgICAgIFwidGl0bGVcIjogXCJJbmJveFwiXG4gICAgfSk7XG4gICAgcHJvdG8uYWRkKGluYm94KTtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvdG8uZ2V0T2JqZWN0QnlUaXRsZShpbmJveC50aXRsZSk7XG5cbiAgICBmdW5jdGlvbiBhZGQob2JqZWN0KXtcbiAgICAgICAgaWYgKG9iamVjdC50eXBlICE9PSBjb250YWluVHlwZSl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVQcm9qZWN0LmFkZChvYmplY3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByb3RvLmFkZChvYmplY3QpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKG9iamVjdCl7XG4gICAgICAgIGlmIChvYmplY3QudHlwZSAhPT0gY29udGFpblR5cGUpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlUHJvamVjdC5yZW1vdmUob2JqZWN0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcm90by5yZW1vdmUob2JqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90bywge1xuICAgICAgICBnZXQgYWN0aXZlUHJvamVjdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVQcm9qZWN0O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBhY3RpdmVQcm9qZWN0KHRpdGxlKXtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm90by5nZXRPYmplY3RCeVRpdGxlKHRpdGxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkLFxuICAgICAgICByZW1vdmVcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdFN0cnVjdHVyZXIgfTsiLCJmdW5jdGlvbiBjcmVhdGVTZWxlY3RvckhvbGRlcigpe1xuICAgIFxuICAgIHJldHVybiB7XG4gICAgLy9saXN0IHNlbGVjdG9yc1xuICAgIGxpc3QgOiBcImxpc3RcIixcbiAgICAvL2xpIHNlbGVjdG9yc1xuICAgIGxpSWNvbiA6IFwibGlzdC1pY29uXCIsXG4gICAgcmlnaHRMaSA6IFwicmlnaHQtbGlcIixcbiAgICByZW1vdmVMaUljb24gOiBcInJlbW92ZS1pY29uXCIsXG4gICAgLy90b2RvIGxpXG4gICAgaW5wdXREYXRlIDogXCJpbnB1dC1kYXRlXCIsXG4gICAgaW5wdXRUaXRsZTogXCJpbnB1dC10aXRsZVwiLFxuICAgIC8vcG9wdXAgc2VsZWN0b3JzXG4gICAgYWRkUG9wdXAgOiBcImFkZC1wb3B1cFwiLFxuICAgIGJ0bkNvbnRhaW5lciA6IFwiYnRuLWNvbnRhaW5lclwiLFxuICAgIC8vc3BlY2lhbCBzZWxlY3RvcnNcbiAgICBhZGRCdG4gOiBcImFkZC1idG5cIixcbiAgICBjYW5jZWxCdG4gOiBcImNhbmNlbC1idG5cIixcbiAgICBhY3RpdmUgOiBcImFjdGl2ZVwiLFxuICAgIGhpZGRlbiA6IFwiaGlkZGVuXCIsXG4gICAgc2VsZWN0ZWQgOiBcInNlbGVjdGVkXCIsXG4gICAgdG9kbyA6IFwidG9kb1wiLFxuICAgIHByb2plY3QgOiBcInByb2plY3RcIixcbiAgICBpbmJveCA6IFwiY0luYm94XCIsXG4gICAgZG9uZTogXCJkb25lXCJcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNlbGVjdG9ySG9sZGVyIH07IiwiZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlcihjb250YWluZXIsIGNvbnRhaW5UeXBlKSB7XG4gICAgY29uc3QgYWRkID0gKG9iamVjdCkgPT4ge1xuICAgICAgICBpZiAob2JqZWN0LnRpdGxlIGluIGNvbnRhaW5lcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb250YWluZXJbb2JqZWN0LnRpdGxlXSA9IG9iamVjdDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKG9iamVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgY29udGFpbmVyW29iamVjdC50aXRsZV07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2JqZWN0QnlUaXRsZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lIGluIGNvbnRhaW5lcikgcmV0dXJuIGNvbnRhaW5lcltuYW1lXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBnZXRPYmplY3RCeVRpdGxlLFxuXG4gICAgICAgIGdldCBjb250YWluZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBjb250YWluVHlwZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250YWluVHlwZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0cnVjdHVyZXIgfTsiLCJpbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kby1vYmplY3RcIjtcbmltcG9ydCBOb3REb25lSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3VuZmluaXNoZWQtdGFzay5wbmdcIjtcbmltcG9ydCBEb25lSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2ZpbmlzaGVkLXRhc2sucG5nXCI7XG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvckhvbGRlciB9IGZyb20gXCIuL3NlbGVjdG9ySG9sZGVyXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG9Db250cm9sbGVyKG9iamVjdE1hbmlwdWxhdG9yLCBkb21JbnRlcmZhY2VyLCBwcm9qZWN0U3RydWN0dXJlcil7XG4gICAgY29uc3Qgc2VsZWN0b3JzID0gY3JlYXRlU2VsZWN0b3JIb2xkZXIoKTtcbiAgICBcbiAgICBmdW5jdGlvbiBzZXR1cFJlbW92ZUljb24oZWxlbWVudCwgb2JqZWN0LCBvYmplY3RMaXN0LCBvYmplY3RDb250YWluZXIpe1xuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gZG9tSW50ZXJmYWNlci5nZXRMaUludGVyZmFjZShlbGVtZW50KS5yZW1vdmVJY29uO1xuICAgICAgICByZW1vdmVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgb2JqZWN0TWFuaXB1bGF0b3IucmVtb3ZlT2JqZWN0KG9iamVjdCwgb2JqZWN0TGlzdCwgb2JqZWN0Q29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0dXBUaXRsZUlucHV0KHRvZG8sIGxpLCBkb21JbnRlcmZhY2VyKXtcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGxpLnRpdGxlSW5wdXQ7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gbGkudGl0bGU7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZG9tSW50ZXJmYWNlci5yZXBsYWNlRWxlbWVudCh0aXRsZUlucHV0LCB0aXRsZSk7XG4gICAgICAgICAgICB0aXRsZUlucHV0LnZhbHVlID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKXtcbiAgICAgICAgICAgICAgICB0b2RvLnRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlSW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgZG9tSW50ZXJmYWNlci5yZXBsYWNlRWxlbWVudCh0aXRsZSwgdGl0bGVJbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwVG9kb0ljb24obGkpe1xuICAgICAgICBjb25zdCBsaUljb24gPSBsaS5saUljb247XG4gICAgICAgIGxpSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAobGkuY2xhc3NMaXN0LmNvbnRhaW5zKHNlbGVjdG9ycy5kb25lKSl7XG4gICAgICAgICAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZShzZWxlY3RvcnMuZG9uZSk7XG4gICAgICAgICAgICAgICAgbGlJY29uLnNyYyA9IE5vdERvbmVJY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlJY29uLnNyYyA9IERvbmVJY29uO1xuICAgICAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoc2VsZWN0b3JzLmRvbmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldHVwVG9kb0xpc3RlbmVycyh0b2RvLCB0b2RvRWxlbWVudCwgdG9kb0xpc3Qpe1xuICAgICAgICBjb25zdCBsaSA9IGRvbUludGVyZmFjZXIuZ2V0TGlJbnRlcmZhY2UodG9kb0VsZW1lbnQpO1xuICAgICAgICBzZXR1cFJlbW92ZUljb24odG9kb0VsZW1lbnQsIHRvZG8sIHRvZG9MaXN0LCBwcm9qZWN0U3RydWN0dXJlci5hY3RpdmVQcm9qZWN0KVxuICAgICAgICBzZXR1cFRpdGxlSW5wdXQodG9kbywgbGksIGRvbUludGVyZmFjZXIpO1xuICAgICAgICBzZXR1cFRvZG9JY29uKGxpKTtcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gbGkuZGF0ZUlucHV0O1xuICAgICAgICBkYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRvZG8uZGF0ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXR1cFRvZG9MaXN0ZW5lcnMsXG4gICAgICAgIGNyZWF0ZVRvZG9cbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9Db250cm9sbGVyIH07IiwiaW1wb3J0IHsgY3JlYXRlQmFzZU9iamVjdCB9IGZyb20gXCIuL2Jhc2Utb2JqZWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVEb21JbnRlcmZhY2VyIH0gZnJvbSBcIi4vZG9tLWludGVyZmFjZXJcIjtcbmltcG9ydCBUb2RvSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL3VuZmluaXNoZWQtdGFzay5wbmdcIjtcblxuZnVuY3Rpb24gY3JlYXRlVG9kbyhwYXJhbWV0ZXJzT2JqZWN0KSB7XG4gICAgbGV0IHRpdGxlID0gXCJEZWZhdWx0IHRpdGxlXCI7XG4gICAgbGV0IGRhdGUgPSBcIlwiO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XG4gICAgICAgIHRpdGxlID0gcGFyYW1ldGVyc09iamVjdC50aXRsZTtcbiAgICAgICAgaWYgKHRpdGxlID09PSBcIlwiKSB0aXRsZSA9IFwiRGVmYXVsdCB0aXRsZVwiO1xuICAgIH1cblxuICAgIGNvbnN0IGRvbUludGVyYWNlciA9IGNyZWF0ZURvbUludGVyZmFjZXIoKVxuICAgIGNvbnN0IHByb3RvID0gY3JlYXRlQmFzZU9iamVjdChcInRvZG9cIiwgdGl0bGUsIFRvZG9JY29uLCBkb21JbnRlcmFjZXIuY3JlYXRlVG9kb0xpc3RFbGVtZW50KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90bywgeyBcblxuICAgICAgICBnZXQgZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBkYXRlKG5ld0RhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXdEYXRlO1xuICAgICAgICB9LFxuXG4gICAgfSk7XG5cbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvamVjdC1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdC1vYmplY3RcIjtcblxuZnVuY3Rpb24gY3JlYXRlU3RhcnRQYWdlKCkge1xuICAgIGNvbnN0IHByb2plY3RXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgY29udHJvbGxlciA9IGNyZWF0ZVByb2plY3RDb250cm9sbGVyKHByb2plY3RXaW5kb3cpO1xuICAgXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QucHJvamVjdFwiKTtcbiAgICBjb250cm9sbGVyLnNldExpc3RFdmVudExpc3RlbmVycyhwcm9qZWN0TGlzdCwgY3JlYXRlUHJvamVjdCwgY29udHJvbGxlci5zZXR1cFByb2plY3RMaXN0ZW5lcnMpO1xufVxuXG5jcmVhdGVTdGFydFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=