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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --content-hover-background: rgb(226, 235, 230);\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff2'),\n        url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n#content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: var(--font-color);\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list li:hover,\n.add-project-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n.add-todo-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list ul {\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list h2,\n#content h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-project-btn,\n.add-todo-btn {\n    display: flex;\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}", "",{"version":3,"sources":["webpack://./src/styles/index.css"],"names":[],"mappings":"AAAA;IACI,sCAAsC;IACtC,6BAA6B;IAC7B,0CAA0C;IAC1C,+BAA+B;IAC/B,0CAA0C;IAC1C,8CAA8C;AAClD;;AAEA;IACI,wBAAwB;IACxB;8DACiF;IACjF,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;IACV,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,gDAAgD;AACpD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,+BAA+B;AACnC;;AAEA;;IAEI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,MAAM;IACN,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,yCAAyC;IACzC,wBAAwB;IACxB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,UAAU;IACV,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,oBAAoB;IACpB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;;IAEI,8CAA8C;AAClD;;AAEA;;IAEI,iDAAiD;AACrD;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,OAAO;AACX;;AAEA;;IAEI,WAAW;IACX,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,eAAe;IACf,WAAW;IACX,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,gDAAgD;IAChD,+BAA+B;AACnC;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,oCAAoC;IACpC,eAAe;AACnB;;AAEA,aAAa;AACb,UAAU;AACV;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA,UAAU;AACV;IACI,yCAAyC;IACzC,gBAAgB;IAChB,iDAAiD;IACjD,mBAAmB;AACvB;;AAEA,WAAW;AACX;IACI,mCAAmC;IACnC,mBAAmB;AACvB;;AAEA,oBAAoB;AACpB;IACI,gDAAgD;AACpD","sourcesContent":[":root {\n    --background-color: rgb(191, 211, 201);\n    --font-color: rgb(48, 78, 68);\n    --header-background-color: rgb(48, 78, 68);\n    --header-font-color: whitesmoke;\n    --menu-hover-background:rgb(144, 175, 160); \n    --content-hover-background: rgb(226, 235, 230);\n}\n\n@font-face {\n    font-family: \"Modernist\";\n    src: url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff2') format('woff2'),\n        url('../fonts/Sk-Modernist-Regular/Sk-Modernist-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: \"Modernist\", sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\n.header {\n    display: flex;\n    justify-content: space-between;\n    padding: 1em;\n    background-color: var(--header-background-color);\n}\n\n.menu-icon {\n    cursor: pointer;\n}\n\n.logo {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--header-font-color);\n}\n\n.menu-icon path,\n.logo-icon path {\n    fill: var(--header-font-color);\n}\n\n.main {\n    display: flex;\n    flex:1;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu {\n    width: 20%;\n    min-width: 200px;\n    height: 100%;\n    background-color: var(--background-color);\n    color: var(--font-color);\n    padding: 1em;\n}\n\n#content {\n    padding: 2em 10em;\n    height: 100%;\n    width: 70%;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    color: var(--font-color);\n}\n\n.list  {\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 1em;\n}\n\n.list ul {\n    width: 100%;\n}\n\n.list li {\n    list-style: none;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n}\n\n.list li:hover,\n.add-project-btn:hover {\n    background-color: var(--menu-hover-background);\n}\n\n.list.todo li:hover,\n.add-todo-btn:hover {\n    background-color: var(--content-hover-background);\n}\n\n.list li:hover .remove-icon {\n    display:inline;\n}\n\n.list a {\n    text-decoration: none;\n    color: inherit;\n}\n\n.list img {\n    margin-right: 0.5em;\n}\n\n.remove-icon {\n    margin-left: auto;\n    display: none;\n}\n\n.list ul {\n    overflow-y: auto;\n    max-height: 15em;\n    flex: 1;\n}\n\n.list h2,\n#content h1 {\n    width: 100%;\n    text-align: left;\n    padding-bottom: 0.5em;\n}\n\n.add-project-btn,\n.add-todo-btn {\n    display: flex;\n    align-items: center;\n    background-color: inherit;\n    color: inherit;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n    padding: 0.5em;\n    border-radius: 0.5em;\n    font-size: inherit;\n    gap: 0.5em;\n}\n\n.footer {\n    text-align: center;\n    font-size: 0.8em;\n    padding: 20px;\n    background-color: var(--header-background-color);\n    color: var(--header-font-color);\n}\n\n.footer img {\n    height: 24px;\n    width: auto;\n    transition: 0.5s;\n}\n\n.footer img:hover {\n    height: 24px;\n    width: auto;\n    transform: scale(1.2) rotate(360deg);\n    cursor: pointer;\n}\n\n/*scroll bar*/\n/* width */\n::-webkit-scrollbar {\n    width: 5px;\n    border-radius: 20px;\n}\n  \n/* Track */\n::-webkit-scrollbar-track {\n    background-color: var(--background-color);\n    box-shadow: none;\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n    border-radius: 10px;\n}\n  \n/* Handle */\n::-webkit-scrollbar-thumb {\n    background-color: var(--font-color);\n    border-radius: 10px;\n}\n  \n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n    background-color: var(--header-background-color);\n}"],"sourceRoot":""}]);
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

/***/ "./src/js/list-object.js":
/*!*******************************!*\
  !*** ./src/js/list-object.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createListObject": () => (/* binding */ createListObject)
/* harmony export */ });
function createListObject(type, title){

    const noSpaceTitle = () => {
        return title.replace(/\s/g, '-')
    }

    return {
        get type() {
            return type;
        },

        get title() {
            return title;
        },

        set title(newTitle){
            title = newTitle;
        },

        noSpaceTitle
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
/* harmony import */ var _list_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-object */ "./src/js/list-object.js");



function createProject(title = "Default project") {
    const todoList = {};

    const proto1 = (0,_structurer__WEBPACK_IMPORTED_MODULE_0__.createStructurer)(todoList);
    const proto2 = (0,_list_object__WEBPACK_IMPORTED_MODULE_1__.createListObject)("project", title);

    return Object.assign({}, proto1, proto2 );
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
function createStructurer(container) {
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
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem)
/* harmony export */ });
/* harmony import */ var _list_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-object */ "./src/js/list-object.js");



function createTodoItem(title = "Default title", description = "", date = "", priority = 0) {

    const proto = (0,_list_object__WEBPACK_IMPORTED_MODULE_0__.createListObject)("todo", title);

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
/* harmony import */ var _todo_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-object */ "./src/js/todo-object.js");
/* harmony import */ var _project_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-object */ "./src/js/project-object.js");




const item = (0,_todo_object__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)("some title", "some description", "2021/12/12", 2);
const project = (0,_project_object__WEBPACK_IMPORTED_MODULE_2__.createProject)("some project");

const anotherItem = (0,_todo_object__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)();
const anotherProject = (0,_project_object__WEBPACK_IMPORTED_MODULE_2__.createProject)();

project.add(item);
project.add(item);
anotherProject.add(anotherItem);
item.title = "new title";
anotherProject.add(item);

console.log(project);
console.log(anotherProject.container);

anotherProject.remove(item);
console.log(anotherProject.container);
console.log(anotherProject.getObjectByTitle(item.title));
console.log(anotherProject.getObjectByTitle(anotherItem.title));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckI2QjtBQUNrQjtBQUNFOztBQUVqRCxhQUFhLDREQUFjO0FBQzNCLGdCQUFnQiw4REFBYTs7QUFFN0Isb0JBQW9CLDREQUFjO0FBQ2xDLHVCQUF1Qiw4REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZXMvaW5kZXguY3NzPzYzNDkiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvbGlzdC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2pzL3Byb2plY3Qtb2JqZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy9zdHJ1Y3R1cmVyLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9qcy90b2RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1NrLU1vZGVybmlzdC1SZWd1bGFyL1NrLU1vZGVybmlzdC1SZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vZm9udHMvU2stTW9kZXJuaXN0LVJlZ3VsYXIvU2stTW9kZXJuaXN0LVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MSwgMjExLCAyMDEpO1xcbiAgICAtLWZvbnQtY29sb3I6IHJnYig0OCwgNzgsIDY4KTtcXG4gICAgLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ4LCA3OCwgNjgpO1xcbiAgICAtLWhlYWRlci1mb250LWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICAtLW1lbnUtaG92ZXItYmFja2dyb3VuZDpyZ2IoMTQ0LCAxNzUsIDE2MCk7IFxcbiAgICAtLWNvbnRlbnQtaG92ZXItYmFja2dyb3VuZDogcmdiKDIyNiwgMjM1LCAyMzApO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJNb2Rlcm5pc3RcXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpLFxcbiAgICAgICAgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vZGVybmlzdFxcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuLm1lbnUtaWNvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxvZ28ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcXG59XFxuXFxuLm1lbnUtaWNvbiBwYXRoLFxcbi5sb2dvLWljb24gcGF0aCB7XFxuICAgIGZpbGw6IHZhcigtLWhlYWRlci1mb250LWNvbG9yKTtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OjE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudSB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1pbi13aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMWVtO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDJlbSAxMGVtO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubGlzdCAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XFxuXFxuLmxpc3QgdWwge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmxpc3QgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpc3QgbGk6aG92ZXIsXFxuLmFkZC1wcm9qZWN0LWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0LnRvZG8gbGk6aG92ZXIsXFxuLmFkZC10b2RvLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRlbnQtaG92ZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5saXN0IGxpOmhvdmVyIC5yZW1vdmUtaWNvbiB7XFxuICAgIGRpc3BsYXk6aW5saW5lO1xcbn1cXG5cXG4ubGlzdCBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLmxpc3QgaW1nIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcXG59XFxuXFxuLnJlbW92ZS1pY29uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5saXN0IHVsIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMTVlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuLmxpc3QgaDIsXFxuI2NvbnRlbnQgaDEge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuLFxcbi5hZGQtdG9kby1idG4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgZ2FwOiAwLjVlbTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAwLjhlbTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4uZm9vdGVyIGltZyB7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxufVxcblxcbi5mb290ZXIgaW1nOmhvdmVyIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSgzNjBkZWcpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qc2Nyb2xsIGJhciovXFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgd2lkdGg6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuICBcXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICBcXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbiAgXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQ0FBc0M7SUFDdEMsNkJBQTZCO0lBQzdCLDBDQUEwQztJQUMxQywrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qjs4REFDaUY7SUFDakYsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtJQUNWLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQiwrQkFBK0I7QUFDbkM7O0FBRUE7O0lBRUksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLE1BQU07SUFDTix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLHdCQUF3QjtJQUN4QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksOENBQThDO0FBQ2xEOztBQUVBOztJQUVJLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixPQUFPO0FBQ1g7O0FBRUE7O0lBRUksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdEQUFnRDtJQUNoRCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7O0FBRUEsYUFBYTtBQUNiLFVBQVU7QUFDVjtJQUNJLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUEsVUFBVTtBQUNWO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixpREFBaUQ7SUFDakQsbUJBQW1CO0FBQ3ZCOztBQUVBLFdBQVc7QUFDWDtJQUNJLG1DQUFtQztJQUNuQyxtQkFBbUI7QUFDdkI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksZ0RBQWdEO0FBQ3BEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkxLCAyMTEsIDIwMSk7XFxuICAgIC0tZm9udC1jb2xvcjogcmdiKDQ4LCA3OCwgNjgpO1xcbiAgICAtLWhlYWRlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDc4LCA2OCk7XFxuICAgIC0taGVhZGVyLWZvbnQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kOnJnYigxNDQsIDE3NSwgMTYwKTsgXFxuICAgIC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kOiByZ2IoMjI2LCAyMzUsIDIzMCk7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIk1vZGVybmlzdFxcXCI7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Tay1Nb2Rlcm5pc3QtUmVndWxhci9Tay1Nb2Rlcm5pc3QtUmVndWxhci53b2ZmMicpIGZvcm1hdCgnd29mZjInKSxcXG4gICAgICAgIHVybCgnLi4vZm9udHMvU2stTW9kZXJuaXN0LVJlZ3VsYXIvU2stTW9kZXJuaXN0LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTW9kZXJuaXN0XFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubWVudS1pY29uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubG9nbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubWVudS1pY29uIHBhdGgsXFxuLmxvZ28taWNvbiBwYXRoIHtcXG4gICAgZmlsbDogdmFyKC0taGVhZGVyLWZvbnQtY29sb3IpO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6MTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tZW51IHtcXG4gICAgd2lkdGg6IDIwJTtcXG4gICAgbWluLXdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgcGFkZGluZzogMmVtIDEwZW07XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5saXN0ICB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG5cXG4ubGlzdCB1bCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGlzdCBsaTpob3ZlcixcXG4uYWRkLXByb2plY3QtYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWVudS1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QudG9kbyBsaTpob3ZlcixcXG4uYWRkLXRvZG8tYnRuOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGVudC1ob3Zlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmxpc3QgbGk6aG92ZXIgLnJlbW92ZS1pY29uIHtcXG4gICAgZGlzcGxheTppbmxpbmU7XFxufVxcblxcbi5saXN0IGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4ubGlzdCBpbWcge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcbn1cXG5cXG4ucmVtb3ZlLWljb24ge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmxpc3QgdWwge1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAxNWVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG4ubGlzdCBoMixcXG4jY29udGVudCBoMSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4sXFxuLmFkZC10b2RvLWJ0biB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBnYXA6IDAuNWVtO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDAuOGVtO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXItZm9udC1jb2xvcik7XFxufVxcblxcbi5mb290ZXIgaW1nIHtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuXFxuLmZvb3RlciBpbWc6aG92ZXIge1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMikgcm90YXRlKDM2MGRlZyk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypzY3JvbGwgYmFyKi9cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG4gIFxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4gIFxcbi8qIEhhbmRsZSAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuICBcXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWJhY2tncm91bmQtY29sb3IpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlTGlzdE9iamVjdCh0eXBlLCB0aXRsZSl7XG5cbiAgICBjb25zdCBub1NwYWNlVGl0bGUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiB0aXRsZS5yZXBsYWNlKC9cXHMvZywgJy0nKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldCB0eXBlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0IHRpdGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldCB0aXRsZShuZXdUaXRsZSl7XG4gICAgICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG5vU3BhY2VUaXRsZVxuICAgIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUxpc3RPYmplY3QgfTsiLCJpbXBvcnQgeyBjcmVhdGVTdHJ1Y3R1cmVyIH0gZnJvbSBcIi4vc3RydWN0dXJlclwiO1xuaW1wb3J0IHsgY3JlYXRlTGlzdE9iamVjdCB9IGZyb20gXCIuL2xpc3Qtb2JqZWN0XCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUgPSBcIkRlZmF1bHQgcHJvamVjdFwiKSB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSB7fTtcblxuICAgIGNvbnN0IHByb3RvMSA9IGNyZWF0ZVN0cnVjdHVyZXIodG9kb0xpc3QpO1xuICAgIGNvbnN0IHByb3RvMiA9IGNyZWF0ZUxpc3RPYmplY3QoXCJwcm9qZWN0XCIsIHRpdGxlKTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwcm90bzEsIHByb3RvMiApO1xufVxuXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0IH07IiwiZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlcihjb250YWluZXIpIHtcbiAgICBjb25zdCBhZGQgPSAob2JqZWN0KSA9PiB7XG4gICAgICAgIChvYmplY3QudGl0bGUgaW4gY29udGFpbmVyKSB8fCAoY29udGFpbmVyW29iamVjdC50aXRsZV0gPSBvYmplY3QpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKG9iamVjdCkgPT4ge1xuICAgICAgICBkZWxldGUgY29udGFpbmVyW29iamVjdC50aXRsZV07XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0T2JqZWN0QnlUaXRsZSA9IChuYW1lKSA9PiB7XG4gICAgICAgIGlmIChuYW1lIGluIGNvbnRhaW5lcikgcmV0dXJuIGNvbnRhaW5lcltuYW1lXTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZCxcbiAgICAgICAgcmVtb3ZlLFxuICAgICAgICBnZXRPYmplY3RCeVRpdGxlLFxuXG4gICAgICAgIGdldCBjb250YWluZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVN0cnVjdHVyZXIgfTsiLCJpbXBvcnQgeyBjcmVhdGVMaXN0T2JqZWN0IH0gZnJvbSBcIi4vbGlzdC1vYmplY3RcIjtcblxuXG5mdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSA9IFwiRGVmYXVsdCB0aXRsZVwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIGRhdGUgPSBcIlwiLCBwcmlvcml0eSA9IDApIHtcblxuICAgIGNvbnN0IHByb3RvID0gY3JlYXRlTGlzdE9iamVjdChcInRvZG9cIiwgdGl0bGUpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3RvLCB7IFxuXG4gICAgICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgZGF0ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmlvcml0eTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXQgYWxsRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHkgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQgZGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0IGRhdGUobmV3RGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ld0RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBzZXQgcHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgICAgIH1cblxuICAgIH0pO1xuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG9JdGVtIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0IHsgY3JlYXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvLW9iamVjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3Qtb2JqZWN0XCI7XG5cbmNvbnN0IGl0ZW0gPSBjcmVhdGVUb2RvSXRlbShcInNvbWUgdGl0bGVcIiwgXCJzb21lIGRlc2NyaXB0aW9uXCIsIFwiMjAyMS8xMi8xMlwiLCAyKTtcbmNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KFwic29tZSBwcm9qZWN0XCIpO1xuXG5jb25zdCBhbm90aGVySXRlbSA9IGNyZWF0ZVRvZG9JdGVtKCk7XG5jb25zdCBhbm90aGVyUHJvamVjdCA9IGNyZWF0ZVByb2plY3QoKTtcblxucHJvamVjdC5hZGQoaXRlbSk7XG5wcm9qZWN0LmFkZChpdGVtKTtcbmFub3RoZXJQcm9qZWN0LmFkZChhbm90aGVySXRlbSk7XG5pdGVtLnRpdGxlID0gXCJuZXcgdGl0bGVcIjtcbmFub3RoZXJQcm9qZWN0LmFkZChpdGVtKTtcblxuY29uc29sZS5sb2cocHJvamVjdCk7XG5jb25zb2xlLmxvZyhhbm90aGVyUHJvamVjdC5jb250YWluZXIpO1xuXG5hbm90aGVyUHJvamVjdC5yZW1vdmUoaXRlbSk7XG5jb25zb2xlLmxvZyhhbm90aGVyUHJvamVjdC5jb250YWluZXIpO1xuY29uc29sZS5sb2coYW5vdGhlclByb2plY3QuZ2V0T2JqZWN0QnlUaXRsZShpdGVtLnRpdGxlKSk7XG5jb25zb2xlLmxvZyhhbm90aGVyUHJvamVjdC5nZXRPYmplY3RCeVRpdGxlKGFub3RoZXJJdGVtLnRpdGxlKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9