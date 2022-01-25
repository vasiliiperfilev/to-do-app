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
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --project-active-color: rgb(117, 151, 135); \n    --content-hover-background: rgb(226, 235, 230);\n    --popup-btn-color: rgb(226, 235, 230);\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list li a {\n    width: 100%;\n}\n\n.list li:hover,\n.menu .add-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n#content .add-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.project-active {\n    background-color: var(--menu-hover-background);\n    font-weight: bold;\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list h2,\n#content h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-btn {\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.add-popup {\n    width: 100%;;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    gap: 0.5em;\n}\n\n.add-popup-hidden,\n.add-btn-hidden {\n    display: none;\n}\n\n.add-popup-active,\n.add-btn-active {\n    display: flex;\n}\n\n.add-popup > * {\n    width: 100%;\n}\n\n.add-popup input {\n    border-radius: 0.5em;\n    height: 3em;\n    padding: 0.5em;\n    font-size: 16px;\n    border: 0.5px solid var(--header-background-color);\n}\n\n.add-popup input:focus {\n    outline: none;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.btn-container button {\n    width: 45%;\n    height: 3em;\n    border-radius: 0.5em;\n    font-size: 16px;\n    font-weight: bold;\n    border:none;\n    cursor: pointer;\n    color: inherit;\n}\n\n.add-btn-popup {\n    background-color: rgb(170, 255, 170);\n}\n\n.cancel-btn-popup {\n    background-color: rgb(255, 190, 190);\n}\n\n.add-btn-popup:hover {\n    background-color: rgb(144, 236, 144);\n}\n\n.cancel-btn-popup:hover {\n    background-color: #f5b2b2;\n}\n\n.content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n}\n\n#content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: var(--font-color);\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --project-active-color: rgb(117, 151, 135); \n    --content-hover-background: rgb(226, 235, 230);\n    --popup-btn-color: rgb(226, 235, 230);\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2') format('woff2'),\n        url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list li a {\n    width: 100%;\n}\n\n.list li:hover,\n.menu .add-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n#content .add-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.project-active {\n    background-color: var(--menu-hover-background);\n    font-weight: bold;\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list h2,\n#content h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-btn {\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.add-popup {\n    width: 100%;;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0.5em;\n    gap: 0.5em;\n}\n\n.add-popup-hidden,\n.add-btn-hidden {\n    display: none;\n}\n\n.add-popup-active,\n.add-btn-active {\n    display: flex;\n}\n\n.add-popup > * {\n    width: 100%;\n}\n\n.add-popup input {\n    border-radius: 0.5em;\n    height: 3em;\n    padding: 0.5em;\n    font-size: 16px;\n    border: 0.5px solid var(--header-background-color);\n}\n\n.add-popup input:focus {\n    outline: none;\n}\n\n.btn-container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.btn-container button {\n    width: 45%;\n    height: 3em;\n    border-radius: 0.5em;\n    font-size: 16px;\n    font-weight: bold;\n    border:none;\n    cursor: pointer;\n    color: inherit;\n}\n\n.add-btn-popup {\n    background-color: rgb(170, 255, 170);\n}\n\n.cancel-btn-popup {\n    background-color: rgb(255, 190, 190);\n}\n\n.add-btn-popup:hover {\n    background-color: rgb(144, 236, 144);\n}\n\n.cancel-btn-popup:hover {\n    background-color: #f5b2b2;\n}\n\n.content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n}\n\n#content {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: var(--font-color);\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}"],"sourceRoot":""}]);
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
function createBaseObject(type, title, icon){

    const noSpaceTitle = () => {
        return title.replace(/\s/g, '-')
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

        get noSpaceTitle() {
            return noSpaceTitle();
        }
    };
}



/***/ }),

/***/ "./src/js/controller.js":
/*!******************************!*\
  !*** ./src/js/controller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createController": () => (/* binding */ createController)
/* harmony export */ });
/* harmony import */ var _project_structurer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-structurer */ "./src/js/project-structurer.js");
/* harmony import */ var _dom_interfacer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-interfacer */ "./src/js/dom-interfacer.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");
/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-object */ "./src/js/todo-object.js");





function createController(){
    const domInteracer = (0,_dom_interfacer__WEBPACK_IMPORTED_MODULE_1__.createDomInterfacer)();
    const projectStructurer = (0,_project_structurer__WEBPACK_IMPORTED_MODULE_0__.createProjectStructurer)();
    const project = (0,_project_object__WEBPACK_IMPORTED_MODULE_2__.createProject)();
    const todo = (0,_todo_object__WEBPACK_IMPORTED_MODULE_3__.createTodo)()
    project.add(todo);
    projectStructurer.add(project);

    function showActiveProject(containerElement) {
        const project = projectStructurer.activeProject;
        const content = domInteracer.createProjectPage(project);
        containerElement.innerHTML = "";
        containerElement.appendChild(content);
    }

    function chooseProject(containerElement){
        const title = this.querySelector("span").textContent;
        const project = projectStructurer.getObjectByTitle(title);
        projectStructurer.activeProject = project;
        this.classList.add("project-active");

        showActiveProject(containerElement);
    }
    //openAddToListWindow
    //closeAddToListWindow
    //addProject
    //removeProject
    //addTodo
    //removeTodo
    //showProject
    return {
        chooseProject,
    };
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



function createDomInterfacer(){
    
    function createListElement(object){
        const li = document.createElement("li");
        li.classList.add(object.noSpaceTitle);
    
        const link = document.createElement("a");
        link.href = `#${object.noSpaceTitle}`;
    
        const elemIcon = document.createElement("img");
        elemIcon.classList.add("list-icon");
        elemIcon.src = object.icon;
        elemIcon.height = "16";
        elemIcon.width = "16";
    
        const span = document.createElement("span");
        span.textContent = object.title;
    
        const removeIcon = document.createElement("img");
        removeIcon.classList.add("remove-icon");
        removeIcon.src = _images_remove_task_png__WEBPACK_IMPORTED_MODULE_0__;
        removeIcon.height = "16";
        removeIcon.width = "16";
    
        link.appendChild(elemIcon);
        link.appendChild(span);
        li.appendChild(link);
        li.appendChild(removeIcon);
    
        return li;
    }


    function createList(object) {
        const div = document.createElement("div");
        const ul = document.createElement("ul");
        div.classList.add("list", object.containType);

        for (const key in object.container) {
            const element = object.container[key];
            const li = createListElement(element);
            ul.appendChild(li);
        }

        div.appendChild(ul);
        return div
    }

    function addElementToList(object){
        const parent = document.querySelector(`.list.${object.type}`);
        parent.appendChild(createListElement(object));
    }

    function removeElementFromList(object){
        const parent = document.querySelector(`.list.${object.type}`);
        const child = document.querySelector(`.list.${object.type} .${object.noSpaceTitle}`);
        parent.removeChild(child);
    }

    function createAddBtn(objectType) {
        const btn = document.createElement("button");
        btn.classList.add("add-btn", objectType, "add-btn-active");

        const btnIcon = document.createElement("img");
        btnIcon.src = _images_add_icon_png__WEBPACK_IMPORTED_MODULE_1__;
        btnIcon.height = "16";
        btnIcon.width = "16";

        const span = document.createElement("span");
        span.textContent = `Add ${objectType}`;
        btn.appendChild(btnIcon);
        btn.appendChild(span);

        return btn;
    }

    function createProjectPage(project) {
        const content = document.createElement("div");
        content.id = "content";
        const h1 = document.createElement("h1");
        h1.textContent = project.title;

        const ul = createList(project);
        const addBtn = createAddBtn("todo");

        content.appendChild(h1);
        content.appendChild(ul);
        content.appendChild(addBtn);

        return content;
    }

    function collectInput(form){
        const parameters = {};
        const inputs = form.querySelectorAll("input");
        inputs.forEach(input => {
            parameters[input.name] = input.value;
        })

        return parameters
    }

    function addClassToElement(selector, newClass){
        const elem = document.querySelector(selector);
        elem.classList.add(newClass);
    }

    function removeClassFromElement(selector, classToRemove){
        const elem = document.querySelector(selector);
        elem.classList.remove(classToRemove);
    }

    return {
        addElementToList,
        removeElementFromList,
        createProjectPage,
        collectInput,
        addClassToElement,
        removeClassFromElement
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
/* harmony import */ var _images_project_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/project.png */ "./src/images/project.png");




function createProject(title = "Default project") {
    const todoList = {};

    const proto1 = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(todoList, "todo");
    const proto2 = (0,_base_object__WEBPACK_IMPORTED_MODULE_1__.createBaseObject)("project", title, _images_project_png__WEBPACK_IMPORTED_MODULE_2__);

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


function createProjectStructurer() {
    const projects = {};
    const proto = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(projects, "project");
    const activeProject = null;

    return Object.assign({}, proto, {
        get activeProject() {
            return activeProject;
        },

        set activeProject(title){
            activeProject = proto.getObjectByTitle(title);
        }
    });
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
        (object.title in container) || (container[object.title] = object)
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
/* harmony import */ var _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/unfinished-task.png */ "./src/images/unfinished-task.png");



function createTodo(title = "Default title", description = "", date = "", priority = 0) {

    const proto = (0,_base_object__WEBPACK_IMPORTED_MODULE_0__.createBaseObject)("todo", title, _images_unfinished_task_png__WEBPACK_IMPORTED_MODULE_1__);

    return Object.assign({}, proto, { 

        get description() {
            return description;
        },

        get date() {
            return date;
        },

        get priority() {
            return priority;
        },

        get allData() {
            return { title, description, date, priority };
        },

        set description(newDescription) {
            description = newDescription;
        },

        set date(newDate) {
            date = newDate;
        },
        
        set priority(newPriority) {
            priority = newPriority;
        }

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

/***/ "./src/images/unfinished-task.png":
/*!****************************************!*\
  !*** ./src/images/unfinished-task.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "007e9867a60317af6626.png";

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
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ "./src/js/controller.js");



const a = "Default project";
const b = a.replace(/\s/g, '-');
console.log(b);
const controller = (0,_controller__WEBPACK_IMPORTED_MODULE_1__.createController)();
const li = document.querySelector(".default-project");
const content = document.querySelector(".content")
li.addEventListener("click", controller.chooseProject.bind(li, content));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQjZCO0FBQ21COztBQUVoRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkRBQWdCO0FBQ25DO0FBQ0E7QUFDQSx5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGVzL2luZGV4LmNzcz82MzQ5Iiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL2Jhc2Utb2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9kb20taW50ZXJmYWNlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvcHJvamVjdC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3Byb2plY3Qtc3RydWN0dXJlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvc3RydWN0dXJlci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvdG9kby1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9mb250cy9Tay1Nb2Rlcm5pc3QtUmVndWxhci9Tay1Nb2Rlcm5pc3QtUmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NrLU1vZGVybmlzdC1SZWd1bGFyL1NrLU1vZGVybmlzdC1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6IHJnYigxOTEsIDIxMSwgMjAxKTtcXG4gICAgLS1mb250LWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHJnYig0OCwgNzgsIDY4KTtcXG4gICAgLS1oZWFkZXItZm9udC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgLS1tZW51LWhvdmVyLWJhY2tncm91bmQ6cmdiKDE0NCwgMTc1LCAxNjApOyBcXG4gICAgLS1wcm9qZWN0LWFjdGl2ZS1jb2xvcjogcmdiKDExNywgMTUxLCAxMzUpOyBcXG4gICAgLS1jb250ZW50LWhvdmVyLWJhY2tncm91bmQ6IHJnYigyMjYsIDIzNSwgMjMwKTtcXG4gICAgLS1wb3B1cC1idG4tY29sb3I6IHJnYigyMjYsIDIzNSwgMjMwKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9kZXJuaXN0XFxcIjtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm5pc3RcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5tZW51LWljb24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sb2dvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5tZW51LWljb24gcGF0aCxcXG4ubG9nby1pY29uIHBhdGgge1xcbiAgICBmaWxsOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDoxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1lbnUge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLmxpc3QgIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbi5saXN0IHVsIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDE1ZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbi5saXN0IGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saXN0IGxpIGEge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QgbGk6aG92ZXIsXFxuLm1lbnUgLmFkZC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWhvdmVyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ubGlzdC50b2RvIGxpOmhvdmVyLFxcbiNjb250ZW50IC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QgbGk6aG92ZXIgLnJlbW92ZS1pY29uIHtcXG4gICAgZGlzcGxheTppbmxpbmU7XFxufVxcblxcbi5wcm9qZWN0LWFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtaG92ZXItYmFja2dyb3VuZCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGlzdCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmxpc3QgaW1nIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLnJlbW92ZS1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0IGgyLFxcbiNjb250ZW50IGgxIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1idG4ge1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1wb3B1cCB7XFxuICAgIHdpZHRoOiAxMDAlOztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uYWRkLXBvcHVwLWhpZGRlbixcXG4uYWRkLWJ0bi1oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYWRkLXBvcHVwLWFjdGl2ZSxcXG4uYWRkLWJ0bi1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uYWRkLXBvcHVwID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYWRkLXBvcHVwIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLmFkZC1wb3B1cCBpbnB1dDpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5idG4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJvcmRlcjpub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4uYWRkLWJ0bi1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDI1NSwgMTcwKTtcXG59XFxuXFxuLmNhbmNlbC1idG4tcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxOTAsIDE5MCk7XFxufVxcblxcbi5hZGQtYnRuLXBvcHVwOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0NCwgMjM2LCAxNDQpO1xcbn1cXG5cXG4uY2FuY2VsLWJ0bi1wb3B1cDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWIyYjI7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMmVtIDEwZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2Nyb2xsIGJhciovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuICBcXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQyw4Q0FBOEM7SUFDOUMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCOzhEQUNpRjtJQUNqRixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osZ0RBQWdEO0FBQ3BEOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFFQTs7SUFFSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsTUFBTTtJQUNOLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBQ3hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsT0FBTztBQUNYOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBOztJQUVJLDhDQUE4QztBQUNsRDs7QUFFQTs7SUFFSSxpREFBaUQ7QUFDckQ7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFVBQVU7SUFDVixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUEsYUFBYTtBQUNiLFVBQVU7QUFDVjtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUEsVUFBVTtBQUNWO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZ0RBQWdEO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMTEsIDIwMSk7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDQ4LCA3OCwgNjgpO1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWZvbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kOnJnYigxNDQsIDE3NSwgMTYwKTsgXFxuICAgIC0tcHJvamVjdC1hY3RpdmUtY29sb3I6IHJnYigxMTcsIDE1MSwgMTM1KTsgXFxuICAgIC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxuICAgIC0tcG9wdXAtYnRuLWNvbG9yOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vZGVybmlzdFxcXCI7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Tay1Nb2Rlcm5pc3QtUmVndWxhci9Tay1Nb2Rlcm5pc3QtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnLi4vZm9udHMvU2stTW9kZXJuaXN0LVJlZ3VsYXIvU2stTW9kZXJuaXN0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9kZXJuaXN0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubWVudS1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubWVudS1pY29uIHBhdGgsXFxuLmxvZ28taWNvbiBwYXRoIHtcXG4gICAgZmlsbDogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6MTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi5saXN0ICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ubGlzdCB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAxNWVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdCBsaSBhIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5saXN0IGxpOmhvdmVyLFxcbi5tZW51IC5hZGQtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QudG9kbyBsaTpob3ZlcixcXG4jY29udGVudCAuYWRkLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0IGxpOmhvdmVyIC5yZW1vdmUtaWNvbiB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbn1cXG5cXG4ucHJvamVjdC1hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZW51LWhvdmVyLWJhY2tncm91bmQpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpc3QgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi5saXN0IGltZyB7XFxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XFxufVxcblxcbi5yZW1vdmUtaWNvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubGlzdCBoMixcXG4jY29udGVudCBoMSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5hZGQtYnRuIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGdhcDogMC41ZW07XFxufVxcblxcbi5hZGQtcG9wdXAge1xcbiAgICB3aWR0aDogMTAwJTs7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmFkZC1wb3B1cC1oaWRkZW4sXFxuLmFkZC1idG4taGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFkZC1wb3B1cC1hY3RpdmUsXFxuLmFkZC1idG4tYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmFkZC1wb3B1cCA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFkZC1wb3B1cCBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbi5hZGQtcG9wdXAgaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4uYnRuLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJ0bi1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDQ1JTtcXG4gICAgaGVpZ2h0OiAzZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBib3JkZXI6bm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmFkZC1idG4tcG9wdXAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAyNTUsIDE3MCk7XFxufVxcblxcbi5jYW5jZWwtYnRuLXBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTkwLCAxOTApO1xcbn1cXG5cXG4uYWRkLWJ0bi1wb3B1cDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDQsIDIzNiwgMTQ0KTtcXG59XFxuXFxuLmNhbmNlbC1idG4tcG9wdXA6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjViMmIyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDJlbSAxMGVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMC44ZW07XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciBpbWcge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG5cXG4uZm9vdGVyIGltZzpob3ZlciB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoMzYwZGVnKTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKnNjcm9sbCBiYXIqL1xcbi8qIHdpZHRoICovXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcbiAgXFxuLyogVHJhY2sgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gIFxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVCYXNlT2JqZWN0KHR5cGUsIHRpdGxlLCBpY29uKXtcblxuICAgIGNvbnN0IG5vU3BhY2VUaXRsZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHRpdGxlLnJlcGxhY2UoL1xccy9nLCAnLScpXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcblxuICAgICAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0eXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCB0aXRsZShuZXdUaXRsZSl7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBub1NwYWNlVGl0bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9TcGFjZVRpdGxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVCYXNlT2JqZWN0IH07IiwiaW1wb3J0IHsgY3JlYXRlUHJvamVjdFN0cnVjdHVyZXIgfSBmcm9tIFwiLi9wcm9qZWN0LXN0cnVjdHVyZXJcIjtcbmltcG9ydCB7IGNyZWF0ZURvbUludGVyZmFjZXIgfSBmcm9tIFwiLi9kb20taW50ZXJmYWNlclwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3Qtb2JqZWN0XCJcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi90b2RvLW9iamVjdFwiXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyb2xsZXIoKXtcbiAgICBjb25zdCBkb21JbnRlcmFjZXIgPSBjcmVhdGVEb21JbnRlcmZhY2VyKCk7XG4gICAgY29uc3QgcHJvamVjdFN0cnVjdHVyZXIgPSBjcmVhdGVQcm9qZWN0U3RydWN0dXJlcigpO1xuICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KCk7XG4gICAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oKVxuICAgIHByb2plY3QuYWRkKHRvZG8pO1xuICAgIHByb2plY3RTdHJ1Y3R1cmVyLmFkZChwcm9qZWN0KTtcblxuICAgIGZ1bmN0aW9uIHNob3dBY3RpdmVQcm9qZWN0KGNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RTdHJ1Y3R1cmVyLmFjdGl2ZVByb2plY3Q7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb21JbnRlcmFjZXIuY3JlYXRlUHJvamVjdFBhZ2UocHJvamVjdCk7XG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgY29udGFpbmVyRWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaG9vc2VQcm9qZWN0KGNvbnRhaW5lckVsZW1lbnQpe1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcihcInNwYW5cIikudGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0U3RydWN0dXJlci5nZXRPYmplY3RCeVRpdGxlKHRpdGxlKTtcbiAgICAgICAgcHJvamVjdFN0cnVjdHVyZXIuYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcInByb2plY3QtYWN0aXZlXCIpO1xuXG4gICAgICAgIHNob3dBY3RpdmVQcm9qZWN0KGNvbnRhaW5lckVsZW1lbnQpO1xuICAgIH1cbiAgICAvL29wZW5BZGRUb0xpc3RXaW5kb3dcbiAgICAvL2Nsb3NlQWRkVG9MaXN0V2luZG93XG4gICAgLy9hZGRQcm9qZWN0XG4gICAgLy9yZW1vdmVQcm9qZWN0XG4gICAgLy9hZGRUb2RvXG4gICAgLy9yZW1vdmVUb2RvXG4gICAgLy9zaG93UHJvamVjdFxuICAgIHJldHVybiB7XG4gICAgICAgIGNob29zZVByb2plY3QsXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9OyIsImltcG9ydCBSZW1vdmVJY29uIGZyb20gXCIuLi9pbWFnZXMvcmVtb3ZlLXRhc2sucG5nXCI7XG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2FkZC1pY29uLnBuZ1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVEb21JbnRlcmZhY2VyKCl7XG4gICAgXG4gICAgZnVuY3Rpb24gY3JlYXRlTGlzdEVsZW1lbnQob2JqZWN0KXtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQob2JqZWN0Lm5vU3BhY2VUaXRsZSk7XG4gICAgXG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgbGluay5ocmVmID0gYCMke29iamVjdC5ub1NwYWNlVGl0bGV9YDtcbiAgICBcbiAgICAgICAgY29uc3QgZWxlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlbGVtSWNvbi5jbGFzc0xpc3QuYWRkKFwibGlzdC1pY29uXCIpO1xuICAgICAgICBlbGVtSWNvbi5zcmMgPSBvYmplY3QuaWNvbjtcbiAgICAgICAgZWxlbUljb24uaGVpZ2h0ID0gXCIxNlwiO1xuICAgICAgICBlbGVtSWNvbi53aWR0aCA9IFwiMTZcIjtcbiAgICBcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gb2JqZWN0LnRpdGxlO1xuICAgIFxuICAgICAgICBjb25zdCByZW1vdmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWljb25cIik7XG4gICAgICAgIHJlbW92ZUljb24uc3JjID0gUmVtb3ZlSWNvbjtcbiAgICAgICAgcmVtb3ZlSWNvbi5oZWlnaHQgPSBcIjE2XCI7XG4gICAgICAgIHJlbW92ZUljb24ud2lkdGggPSBcIjE2XCI7XG4gICAgXG4gICAgICAgIGxpbmsuYXBwZW5kQ2hpbGQoZWxlbUljb24pO1xuICAgICAgICBsaW5rLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQocmVtb3ZlSWNvbik7XG4gICAgXG4gICAgICAgIHJldHVybiBsaTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUxpc3Qob2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImxpc3RcIiwgb2JqZWN0LmNvbnRhaW5UeXBlKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmplY3QuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gb2JqZWN0LmNvbnRhaW5lcltrZXldO1xuICAgICAgICAgICAgY29uc3QgbGkgPSBjcmVhdGVMaXN0RWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIHJldHVybiBkaXZcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFbGVtZW50VG9MaXN0KG9iamVjdCl7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0LiR7b2JqZWN0LnR5cGV9YCk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjcmVhdGVMaXN0RWxlbWVudChvYmplY3QpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50RnJvbUxpc3Qob2JqZWN0KXtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3QuJHtvYmplY3QudHlwZX1gKTtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubGlzdC4ke29iamVjdC50eXBlfSAuJHtvYmplY3Qubm9TcGFjZVRpdGxlfWApO1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZEJ0bihvYmplY3RUeXBlKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJ0blwiLCBvYmplY3RUeXBlLCBcImFkZC1idG4tYWN0aXZlXCIpO1xuXG4gICAgICAgIGNvbnN0IGJ0bkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBidG5JY29uLnNyYyA9IEFkZEljb247XG4gICAgICAgIGJ0bkljb24uaGVpZ2h0ID0gXCIxNlwiO1xuICAgICAgICBidG5JY29uLndpZHRoID0gXCIxNlwiO1xuXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGBBZGQgJHtvYmplY3RUeXBlfWA7XG4gICAgICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JY29uKTtcbiAgICAgICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIHJldHVybiBidG47XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdFBhZ2UocHJvamVjdCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgICAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHVsID0gY3JlYXRlTGlzdChwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgYWRkQnRuID0gY3JlYXRlQWRkQnRuKFwidG9kb1wiKTtcblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb2xsZWN0SW5wdXQoZm9ybSl7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB7fTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXRcIik7XG4gICAgICAgIGlucHV0cy5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICAgIHBhcmFtZXRlcnNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcGFyYW1ldGVyc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZENsYXNzVG9FbGVtZW50KHNlbGVjdG9yLCBuZXdDbGFzcyl7XG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVDbGFzc0Zyb21FbGVtZW50KHNlbGVjdG9yLCBjbGFzc1RvUmVtb3ZlKXtcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUb1JlbW92ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkRWxlbWVudFRvTGlzdCxcbiAgICAgICAgcmVtb3ZlRWxlbWVudEZyb21MaXN0LFxuICAgICAgICBjcmVhdGVQcm9qZWN0UGFnZSxcbiAgICAgICAgY29sbGVjdElucHV0LFxuICAgICAgICBhZGRDbGFzc1RvRWxlbWVudCxcbiAgICAgICAgcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZURvbUludGVyZmFjZXIgfTsiLCJpbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vc3RydWN0dXJlclwiO1xuaW1wb3J0IHsgY3JlYXRlQmFzZU9iamVjdCB9IGZyb20gXCIuL2Jhc2Utb2JqZWN0XCI7XG5pbXBvcnQgUHJvamVjdEljb24gZnJvbSBcIi4uL2ltYWdlcy9wcm9qZWN0LnBuZ1wiXG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUgPSBcIkRlZmF1bHQgcHJvamVjdFwiKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSB7fTtcblxuICAgIGNvbnN0IHByb3RvMSA9IGNyZWF0ZVN0cnVjdHVyZXIodG9kb0xpc3QsIFwidG9kb1wiKTtcbiAgICBjb25zdCBwcm90bzIgPSBjcmVhdGVCYXNlT2JqZWN0KFwicHJvamVjdFwiLCB0aXRsZSwgUHJvamVjdEljb24pO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvMSwgcHJvdG8yICk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3QgfTsiLCJpbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vc3RydWN0dXJlclwiO1xuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0U3RydWN0dXJlcigpIHtcbiAgICBjb25zdCBwcm9qZWN0cyA9IHt9O1xuICAgIGNvbnN0IHByb3RvID0gY3JlYXRlU3RydWN0dXJlcihwcm9qZWN0cywgXCJwcm9qZWN0XCIpO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCB7XG4gICAgICAgIGdldCBhY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IGFjdGl2ZVByb2plY3QodGl0bGUpe1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb3RvLmdldE9iamVjdEJ5VGl0bGUodGl0bGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RTdHJ1Y3R1cmVyIH07IiwiZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlcihjb250YWluZXIsIGNvbnRhaW5UeXBlKSB7XG4gICAgY29uc3QgYWRkID0gKG9iamVjdCkgPT4ge1xuICAgICAgICAob2JqZWN0LnRpdGxlIGluIGNvbnRhaW5lcikgfHwgKGNvbnRhaW5lcltvYmplY3QudGl0bGVdID0gb2JqZWN0KVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZSA9IChvYmplY3QpID0+IHtcbiAgICAgICAgZGVsZXRlIGNvbnRhaW5lcltvYmplY3QudGl0bGVdO1xuICAgIH1cblxuICAgIGNvbnN0IGdldE9iamVjdEJ5VGl0bGUgPSAobmFtZSkgPT4ge1xuICAgICAgICBpZiAobmFtZSBpbiBjb250YWluZXIpIHJldHVybiBjb250YWluZXJbbmFtZV07XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQsXG4gICAgICAgIHJlbW92ZSxcbiAgICAgICAgZ2V0T2JqZWN0QnlUaXRsZSxcblxuICAgICAgICBnZXQgY29udGFpbmVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgY29udGFpblR5cGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpblR5cGU7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVyIH07IiwiaW1wb3J0IHsgY3JlYXRlQmFzZU9iamVjdCB9IGZyb20gXCIuL2Jhc2Utb2JqZWN0XCI7XG5pbXBvcnQgVG9kb0ljb24gZnJvbSBcIi4uL2ltYWdlcy91bmZpbmlzaGVkLXRhc2sucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRvZG8odGl0bGUgPSBcIkRlZmF1bHQgdGl0bGVcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBkYXRlID0gXCJcIiwgcHJpb3JpdHkgPSAwKSB7XG5cbiAgICBjb25zdCBwcm90byA9IGNyZWF0ZUJhc2VPYmplY3QoXCJ0b2RvXCIsIHRpdGxlLCBUb2RvSWNvbik7XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcHJvdG8sIHsgXG5cbiAgICAgICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBkYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHByaW9yaXR5O1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBhbGxEYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCBkZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgZGF0ZShuZXdEYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3RGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHNldCBwcmlvcml0eShuZXdQcmlvcml0eSkge1xuICAgICAgICAgICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn1cblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmNvbnN0IGEgPSBcIkRlZmF1bHQgcHJvamVjdFwiO1xuY29uc3QgYiA9IGEucmVwbGFjZSgvXFxzL2csICctJyk7XG5jb25zb2xlLmxvZyhiKTtcbmNvbnN0IGNvbnRyb2xsZXIgPSBjcmVhdGVDb250cm9sbGVyKCk7XG5jb25zdCBsaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVmYXVsdC1wcm9qZWN0XCIpO1xuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKVxubGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNvbnRyb2xsZXIuY2hvb3NlUHJvamVjdC5iaW5kKGxpLCBjb250ZW50KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9