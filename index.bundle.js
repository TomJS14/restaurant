"use strict";
(self["webpackChunkrestaurant"] = self["webpackChunkrestaurant"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}


/* After CSS reset */

:root {
    font-size: 16px;
    --bg-color-main: #343330;
    --drab-dark-brown: #45462A;
    --field-drab: #7E5920;
    --fulvous: #DC851F;
    --orange-peel: #FFA737;
    --timber-wolf: #CCC5B9;
    --timber-wolf-transparent: #CCC5B940;
    font-family: "roboto", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    




}

html,
body {
    height: 100%;
    background-color: var(--bg-color-main);
    


}

body {

    display: flex;
    flex-direction: column;
}

#content {
    flex: 1;
    display: grid;
}

header {
    position: fixed;
    width: 100vw;
    top: 0;
    font-family: 'Dancing Script', cursive;
    font-size: 2rem;
    background-color: var(--drab-dark-brown);
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px 10px 5px;
}

.nav-list {
    display: flex;
    gap: 30px;
}

button {
    font-size: 2rem;
    background-color: transparent;
    border: none;
}

button:hover {
    border-radius: 6px;
    cursor: pointer;
    background-color: var(--timber-wolf-transparent);
    
}

main {
    gap: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

}

main>img {
    max-height: 100vh;
    width: 100%;
    margin: auto;
    
}


footer {
    position: fixed;
    bottom: 0;
    width: 100vw;
    margin-top: auto;
    height: 5rem;
    margin: 0;
    background-color: var(--drab-dark-brown);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-top: 10px;
}


/* menu styling */

.menu-container {
    width: 100%;
    
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));
    gap: 20px;
    justify-content: center;
    align-items: center;
}

.menu-card {
    max-height: 150px;
    background-color: var(--timber-wolf-transparent);
    border-radius: 5px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-bottom: 5px;
    ;
}

.menu-img {
    height: 100px;
    border-radius: 5px;
}

.map-img {
    height: 250px;
    border-radius: 5px;
}

.menu-card:hover {
    background-color: var(--timber-wolf);
}

/* About us styling */

.about-card {
    font-size: 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
}

.map-img {
    height: 250px;
    border-radius: 10px;
}

.map-img:hover {
    scale: 1.8;
    border-radius: 10px;
}

#selected {
    border: 1px white dotted;
    color: white;
    border-radius: 6px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiFI,SAAS;IACT,UAAU;IACV,SAAS;IACT,eAAe;IACf,aAAa;IACb,wBAAwB;AAC5B;;AAEA,gDAAgD;AAChD;;;;;;;;;;;IAWI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;;IAEI,gBAAgB;AACpB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;IAII,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;;AAGA,oBAAoB;;AAEpB;IACI,eAAe;IACf,wBAAwB;IACxB,0BAA0B;IAC1B,qBAAqB;IACrB,kBAAkB;IAClB,sBAAsB;IACtB,sBAAsB;IACtB,oCAAoC;IACpC,6JAA6J;;;;;;AAMjK;;AAEA;;IAEI,YAAY;IACZ,sCAAsC;;;;AAI1C;;AAEA;;IAEI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,OAAO;IACP,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,MAAM;IACN,sCAAsC;IACtC,eAAe;IACf,wCAAwC;IACxC,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,eAAe;IACf,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gDAAgD;;AAEpD;;AAEA;IACI,SAAS;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,YAAY;;AAEhB;;;AAGA;IACI,eAAe;IACf,SAAS;IACT,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,SAAS;IACT,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,iBAAiB;AACrB;;;AAGA,iBAAiB;;AAEjB;IACI,WAAW;;IAEX,aAAa;IACb,8DAA8D;IAC9D,SAAS;IACT,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,gDAAgD;IAChD,kBAAkB;IAClB,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,mBAAmB;;AAEvB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,oCAAoC;AACxC;;AAEA,qBAAqB;;AAErB;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;;AAEA;IACI,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n\n/* After CSS reset */\n\n:root {\n    font-size: 16px;\n    --bg-color-main: #343330;\n    --drab-dark-brown: #45462A;\n    --field-drab: #7E5920;\n    --fulvous: #DC851F;\n    --orange-peel: #FFA737;\n    --timber-wolf: #CCC5B9;\n    --timber-wolf-transparent: #CCC5B940;\n    font-family: \"roboto\", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    \n\n\n\n\n}\n\nhtml,\nbody {\n    height: 100%;\n    background-color: var(--bg-color-main);\n    \n\n\n}\n\nbody {\n\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    flex: 1;\n    display: grid;\n}\n\nheader {\n    position: fixed;\n    width: 100vw;\n    top: 0;\n    font-family: 'Dancing Script', cursive;\n    font-size: 2rem;\n    background-color: var(--drab-dark-brown);\n    height: 5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    padding: 15px 5px 10px 5px;\n}\n\n.nav-list {\n    display: flex;\n    gap: 30px;\n}\n\nbutton {\n    font-size: 2rem;\n    background-color: transparent;\n    border: none;\n}\n\nbutton:hover {\n    border-radius: 6px;\n    cursor: pointer;\n    background-color: var(--timber-wolf-transparent);\n    \n}\n\nmain {\n    gap: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n}\n\nmain>img {\n    max-height: 100vh;\n    width: 100%;\n    margin: auto;\n    \n}\n\n\nfooter {\n    position: fixed;\n    bottom: 0;\n    width: 100vw;\n    margin-top: auto;\n    height: 5rem;\n    margin: 0;\n    background-color: var(--drab-dark-brown);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n    padding-top: 10px;\n}\n\n\n/* menu styling */\n\n.menu-container {\n    width: 100%;\n    \n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 350px));\n    gap: 20px;\n    justify-content: center;\n    align-items: center;\n}\n\n.menu-card {\n    max-height: 150px;\n    background-color: var(--timber-wolf-transparent);\n    border-radius: 5px;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    padding-bottom: 5px;\n    ;\n}\n\n.menu-img {\n    height: 100px;\n    border-radius: 5px;\n}\n\n.map-img {\n    height: 250px;\n    border-radius: 5px;\n}\n\n.menu-card:hover {\n    background-color: var(--timber-wolf);\n}\n\n/* About us styling */\n\n.about-card {\n    font-size: 2rem;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n    align-items: center;\n    justify-content: center;\n}\n\n.map-img {\n    height: 250px;\n    border-radius: 10px;\n}\n\n.map-img:hover {\n    scale: 1.8;\n    border-radius: 10px;\n}\n\n#selected {\n    border: 1px white dotted;\n    color: white;\n    border-radius: 6px;\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutUsLoad: () => (/* binding */ aboutUsLoad)
/* harmony export */ });
/* harmony import */ var _src_aboutPage_map_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/aboutPage/map.png */ "./src/aboutPage/map.png");



function aboutUsLoad() {
    //clear main element first
    const element = document.querySelector("#content")
    const main = document.querySelector("main")
    main.textContent = ""

    //create card
    const aboutCard = document.createElement("div")

    const callText = document.createElement("p")
    callText.textContent = "Call us 📞 01289 731 901"

    const addressText = document.createElement("p")
    addressText.textContent = "Find us 🍕 121 Buckland End"

    const mapImage = new Image();
    mapImage.src = _src_aboutPage_map_png__WEBPACK_IMPORTED_MODULE_0__;

    mapImage.classList.add("map-img")

    const menuButton = document.querySelector(".menu-button")
    const aboutButton = document.querySelector(".about-button")
    const homeButton = document.querySelector(".home-button")
    

    //Set styling
    aboutCard.classList.add("about-card")

    //append
    aboutCard.appendChild(callText)
    aboutCard.appendChild(addressText)
    aboutCard.appendChild(mapImage)
    
    main.appendChild(aboutCard)

    aboutButton.setAttribute("id", "selected")
    menuButton.removeAttribute("id")
    homeButton.removeAttribute("id")

    return element

}





/***/ }),

/***/ "./src/homeLoad.js":
/*!*************************!*\
  !*** ./src/homeLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   homeLoad: () => (/* binding */ homeLoad)
/* harmony export */ });
/* harmony import */ var _src_indexPage_hero_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/indexPage/hero-image.jpg */ "./src/indexPage/hero-image.jpg");


function homeLoad() {
    //Clear Main element first
    const element = document.querySelector("#content")
    const main = document.querySelector("main")
    main.textContent = ""
    
    
    const menuButton = document.querySelector(".menu-button")
    const aboutButton = document.querySelector(".about-button")
    const homeButton = document.querySelector(".home-button")

    //Add content
    const myImage = new Image();
    myImage.src = _src_indexPage_hero_image_jpg__WEBPACK_IMPORTED_MODULE_0__
      

    //Append elements
    main.appendChild(myImage)

    homeButton.setAttribute("id", "selected")
    menuButton.removeAttribute("id")
    aboutButton.removeAttribute("id")
    

    return element
    
    }
    
    
    
    
    

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _initialPageLoad_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialPageLoad.js */ "./src/initialPageLoad.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_us_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-us.js */ "./src/about-us.js");
/* harmony import */ var _homeLoad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homeLoad */ "./src/homeLoad.js");






//select the content div
const content = document.querySelector("#content")

//Display the contents of PageLoad module
;(0,_initialPageLoad_js__WEBPACK_IMPORTED_MODULE_1__.pageLoad)()


//Add event listeners to tabs / pages
const menuButton = document.querySelector(".menu-button")
const aboutButton = document.querySelector(".about-button")
const homeButton = document.querySelector(".home-button")

menuButton.addEventListener("click", _menu_js__WEBPACK_IMPORTED_MODULE_2__.menuLoad);
aboutButton.addEventListener("click", _about_us_js__WEBPACK_IMPORTED_MODULE_3__.aboutUsLoad)
homeButton.addEventListener("click", _homeLoad__WEBPACK_IMPORTED_MODULE_4__.homeLoad)






/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pageLoad: () => (/* binding */ pageLoad)
/* harmony export */ });
/* harmony import */ var _src_indexPage_hero_image_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/indexPage/hero-image.jpg */ "./src/indexPage/hero-image.jpg");


function pageLoad() {
    //Select Content Div
    const element = document.querySelector("#content")
    
    //Create home page elements
    const header = document.createElement("header")
    const title = document.createElement("h1")
    const navlist = document.createElement("ul")
    const listItemOne = document.createElement("button")
    const listItemTwo = document.createElement("button")
    const listItemThree = document.createElement("button")
    const main = document.createElement("main")
    const myImage = new Image();
    const footer = document.createElement("footer")
    const footerText = document.createElement("p")
    const footerText2 = document.createElement("p")

    //add event listeners
    
    //Add content
    title.textContent = "Welcome to the restaurant"
    listItemOne.textContent = "Menu"
    listItemTwo.textContent = "Home"
    listItemThree.textContent = "About us"
    myImage.src = _src_indexPage_hero_image_jpg__WEBPACK_IMPORTED_MODULE_0__
    footerText.textContent = `${new Date().getFullYear()} Made by TomJS14`
    footerText2.textContent = `Another generic restaurant website`
    
    //set attributes
    header.classList.add("header")
    navlist.classList.add("nav-list")
    listItemOne.classList.add("menu-button")
    listItemTwo.classList.add("home-button")
    listItemThree.classList.add("about-button")
    
    //Append elements
    header.appendChild(title)
    header.appendChild(navlist)
    
    navlist.appendChild(listItemOne)
    navlist.appendChild(listItemTwo)
    navlist.appendChild(listItemThree)
    
    main.appendChild(myImage)
    
    footer.appendChild(footerText)
    footer.appendChild(footerText2)
    
    element.appendChild(header)
    element.appendChild(main)
    element.appendChild(footer)

    return element
    
    }
    
    
    
    
    

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuLoad: () => (/* binding */ menuLoad)
/* harmony export */ });
/* harmony import */ var _src_menuPage_pizza_bianca_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/menuPage/pizza-bianca.jpg */ "./src/menuPage/pizza-bianca.jpg");
/* harmony import */ var _src_menuPage_mushroom_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/menuPage/mushroom-pizza.jpg */ "./src/menuPage/mushroom-pizza.jpg");
/* harmony import */ var _src_menuPage_four_cheese_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/menuPage/four-cheese.jpg */ "./src/menuPage/four-cheese.jpg");
/* harmony import */ var _src_menuPage_napolotena_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/menuPage/napolotena.jpg */ "./src/menuPage/napolotena.jpg");





function menuLoad() {
    //clear main element first
    const element = document.querySelector("#content")
    const main = document.querySelector("main")
    main.textContent = ""
    
    const menuButton = document.querySelector(".menu-button")
    const aboutButton = document.querySelector(".about-button")
    const homeButton = document.querySelector(".home-button")
    
    /* menu container */

    const menuContainer = document.createElement("div")
    menuContainer.classList.add("menu-container")

    //menu items
    const card1 = document.createElement("div")
    const card2 = document.createElement("div")
    const card3 = document.createElement("div")
    const card4 = document.createElement("div")
    const card5 = document.createElement("div")
    const card6 = document.createElement("div")

    //menu content 
    card1.textContent = "Pizza bianca"
    card2.textContent = "Pizza ai funghi"
    card3.textContent = "Pizza quattro formaggi"
    card4.textContent = "Pizza Napoletana"
    card5.textContent = "Another Pizza"
    card6.textContent = "And another pizza"

    const pizzaBianca = new Image();
    pizzaBianca.src = _src_menuPage_pizza_bianca_jpg__WEBPACK_IMPORTED_MODULE_0__

    const pizzaFunghi = new Image();
    pizzaFunghi.src = _src_menuPage_mushroom_pizza_jpg__WEBPACK_IMPORTED_MODULE_1__;

    const quattroFormaggi = new Image();
    quattroFormaggi.src = _src_menuPage_four_cheese_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const napolotenaPizza = new Image();
    napolotenaPizza.src = _src_menuPage_napolotena_jpg__WEBPACK_IMPORTED_MODULE_3__;

    const pizza5 = new Image();
    pizza5.src = _src_menuPage_napolotena_jpg__WEBPACK_IMPORTED_MODULE_3__;

    const pizza6 = new Image();
    pizza6.src = _src_menuPage_napolotena_jpg__WEBPACK_IMPORTED_MODULE_3__;

    //menu styling
    card1.classList.add("menu-card")
    card2.classList.add("menu-card")
    card3.classList.add("menu-card")
    card4.classList.add("menu-card")
    card5.classList.add("menu-card")
    card6.classList.add("menu-card")

    pizzaBianca.classList.add("menu-img")
    pizzaFunghi.classList.add("menu-img")
    quattroFormaggi.classList.add("menu-img")
    napolotenaPizza.classList.add("menu-img")
    pizza5.classList.add("menu-img")
    pizza6.classList.add("menu-img")

    //appending cards
    card1.appendChild(pizzaBianca)
    card2.appendChild(pizzaFunghi)
    card3.appendChild(quattroFormaggi)
    card4.appendChild(napolotenaPizza)
    card5.appendChild(pizza5)
    card6.appendChild(pizza6)
    //appending menu
    
    menuContainer.appendChild(card1)
    menuContainer.appendChild(card2)
    menuContainer.appendChild(card3)
    menuContainer.appendChild(card4)
    menuContainer.appendChild(card5)
    menuContainer.appendChild(card6)

    main.appendChild(menuContainer)

    menuButton.setAttribute("id", "selected")
    aboutButton.removeAttribute("id")
    homeButton.removeAttribute("id")
    return element
    
    }
    
    
    
    
    

/***/ }),

/***/ "./src/aboutPage/map.png":
/*!*******************************!*\
  !*** ./src/aboutPage/map.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bb24c41dbe9a9af9fc86.png";

/***/ }),

/***/ "./src/indexPage/hero-image.jpg":
/*!**************************************!*\
  !*** ./src/indexPage/hero-image.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b507d796787e73745c8d.jpg";

/***/ }),

/***/ "./src/menuPage/four-cheese.jpg":
/*!**************************************!*\
  !*** ./src/menuPage/four-cheese.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87190b83cc83de7632f5.jpg";

/***/ }),

/***/ "./src/menuPage/mushroom-pizza.jpg":
/*!*****************************************!*\
  !*** ./src/menuPage/mushroom-pizza.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "334d3661cf39eaeb2e00.jpg";

/***/ }),

/***/ "./src/menuPage/napolotena.jpg":
/*!*************************************!*\
  !*** ./src/menuPage/napolotena.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cae39dd4723f274f34c.jpg";

/***/ }),

/***/ "./src/menuPage/pizza-bianca.jpg":
/*!***************************************!*\
  !*** ./src/menuPage/pizza-bianca.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c424983ea6d69223b86d.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwwREFBUztBQUMzQixnQ0FBZ0MsMEJBQTBCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFBR007QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEV3RDtBQUNFO0FBQ0o7QUFDRDs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDJEQUFXOztBQUVqQztBQUNBLHNCQUFzQiw2REFBVzs7QUFFakM7QUFDQSwwQkFBMEIsMERBQVU7O0FBRXBDO0FBQ0EsMEJBQTBCLHlEQUFVOztBQUVwQztBQUNBLGlCQUFpQix5REFBVTs7QUFFM0I7QUFDQSxpQkFBaUIseURBQVU7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQUFFTTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYWJvdXQtdXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9ob21lTG9hZC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cblxuLyogQWZ0ZXIgQ1NTIHJlc2V0ICovXG5cbjpyb290IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgLS1iZy1jb2xvci1tYWluOiAjMzQzMzMwO1xuICAgIC0tZHJhYi1kYXJrLWJyb3duOiAjNDU0NjJBO1xuICAgIC0tZmllbGQtZHJhYjogIzdFNTkyMDtcbiAgICAtLWZ1bHZvdXM6ICNEQzg1MUY7XG4gICAgLS1vcmFuZ2UtcGVlbDogI0ZGQTczNztcbiAgICAtLXRpbWJlci13b2xmOiAjQ0NDNUI5O1xuICAgIC0tdGltYmVyLXdvbGYtdHJhbnNwYXJlbnQ6ICNDQ0M1Qjk0MDtcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG9cIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XG4gICAgXG5cblxuXG5cbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvci1tYWluKTtcbiAgICBcblxuXG59XG5cbmJvZHkge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBncmlkO1xufVxuXG5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdG9wOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kcmFiLWRhcmstYnJvd24pO1xuICAgIGhlaWdodDogNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCA1cHggMTBweCA1cHg7XG59XG5cbi5uYXYtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDMwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWJlci13b2xmLXRyYW5zcGFyZW50KTtcbiAgICBcbn1cblxubWFpbiB7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxufVxuXG5tYWluPmltZyB7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufVxuXG5cbmZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgICBoZWlnaHQ6IDVyZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyYWItZGFyay1icm93bik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5cbi8qIG1lbnUgc3R5bGluZyAqL1xuXG4ubWVudS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDM1MHB4KSk7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW51LWNhcmQge1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWJlci13b2xmLXRyYW5zcGFyZW50KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICA7XG59XG5cbi5tZW51LWltZyB7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tYXAtaW1nIHtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm1lbnUtY2FyZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGltYmVyLXdvbGYpO1xufVxuXG4vKiBBYm91dCB1cyBzdHlsaW5nICovXG5cbi5hYm91dC1jYXJkIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDQwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hcC1pbWcge1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLm1hcC1pbWc6aG92ZXIge1xuICAgIHNjYWxlOiAxLjg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI3NlbGVjdGVkIHtcbiAgICBib3JkZXI6IDFweCB3aGl0ZSBkb3R0ZWQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUEsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztJQVdJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7O0lBSUksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOzs7QUFHQSxvQkFBb0I7O0FBRXBCO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyw2SkFBNko7Ozs7OztBQU1qSzs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osc0NBQXNDOzs7O0FBSTFDOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osTUFBTTtJQUNOLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2Ysd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0RBQWdEOztBQUVwRDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7O0FBRWhCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULHdDQUF3QztJQUN4QyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7O0FBR0EsaUJBQWlCOztBQUVqQjtJQUNJLFdBQVc7O0lBRVgsYUFBYTtJQUNiLDhEQUE4RDtJQUM5RCxTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnREFBZ0Q7SUFDaEQsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Qzs7QUFFQSxxQkFBcUI7O0FBRXJCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuXFxuLyogQWZ0ZXIgQ1NTIHJlc2V0ICovXFxuXFxuOnJvb3Qge1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIC0tYmctY29sb3ItbWFpbjogIzM0MzMzMDtcXG4gICAgLS1kcmFiLWRhcmstYnJvd246ICM0NTQ2MkE7XFxuICAgIC0tZmllbGQtZHJhYjogIzdFNTkyMDtcXG4gICAgLS1mdWx2b3VzOiAjREM4NTFGO1xcbiAgICAtLW9yYW5nZS1wZWVsOiAjRkZBNzM3O1xcbiAgICAtLXRpbWJlci13b2xmOiAjQ0NDNUI5O1xcbiAgICAtLXRpbWJlci13b2xmLXRyYW5zcGFyZW50OiAjQ0NDNUI5NDA7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwicm9ib3RvXFxcIiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxuICAgIFxcblxcblxcblxcblxcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yLW1haW4pO1xcbiAgICBcXG5cXG5cXG59XFxuXFxuYm9keSB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIHRvcDogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdEYW5jaW5nIFNjcmlwdCcsIGN1cnNpdmU7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZHJhYi1kYXJrLWJyb3duKTtcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDE1cHggNXB4IDEwcHggNXB4O1xcbn1cXG5cXG4ubmF2LWxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWJlci13b2xmLXRyYW5zcGFyZW50KTtcXG4gICAgXFxufVxcblxcbm1haW4ge1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG5tYWluPmltZyB7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgaGVpZ2h0OiA1cmVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRyYWItZGFyay1icm93bik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbn1cXG5cXG5cXG4vKiBtZW51IHN0eWxpbmcgKi9cXG5cXG4ubWVudS1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAzNTBweCkpO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1jYXJkIHtcXG4gICAgbWF4LWhlaWdodDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRpbWJlci13b2xmLXRyYW5zcGFyZW50KTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICA7XFxufVxcblxcbi5tZW51LWltZyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm1hcC1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5tZW51LWNhcmQ6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aW1iZXItd29sZik7XFxufVxcblxcbi8qIEFib3V0IHVzIHN0eWxpbmcgKi9cXG5cXG4uYWJvdXQtY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm1hcC1pbWcge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubWFwLWltZzpob3ZlciB7XFxuICAgIHNjYWxlOiAxLjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNzZWxlY3RlZCB7XFxuICAgIGJvcmRlcjogMXB4IHdoaXRlIGRvdHRlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYXBTY3JlZW5zaG90IGZyb20gXCIvc3JjL2Fib3V0UGFnZS9tYXAucG5nXCJcblxuXG5mdW5jdGlvbiBhYm91dFVzTG9hZCgpIHtcbiAgICAvL2NsZWFyIG1haW4gZWxlbWVudCBmaXJzdFxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuXG4gICAgLy9jcmVhdGUgY2FyZFxuICAgIGNvbnN0IGFib3V0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblxuICAgIGNvbnN0IGNhbGxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjYWxsVGV4dC50ZXh0Q29udGVudCA9IFwiQ2FsbCB1cyDwn5OeIDAxMjg5IDczMSA5MDFcIlxuXG4gICAgY29uc3QgYWRkcmVzc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGFkZHJlc3NUZXh0LnRleHRDb250ZW50ID0gXCJGaW5kIHVzIPCfjZUgMTIxIEJ1Y2tsYW5kIEVuZFwiXG5cbiAgICBjb25zdCBtYXBJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIG1hcEltYWdlLnNyYyA9IG1hcFNjcmVlbnNob3Q7XG5cbiAgICBtYXBJbWFnZS5jbGFzc0xpc3QuYWRkKFwibWFwLWltZ1wiKVxuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIilcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtYnV0dG9uXCIpXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idXR0b25cIilcbiAgICBcblxuICAgIC8vU2V0IHN0eWxpbmdcbiAgICBhYm91dENhcmQuY2xhc3NMaXN0LmFkZChcImFib3V0LWNhcmRcIilcblxuICAgIC8vYXBwZW5kXG4gICAgYWJvdXRDYXJkLmFwcGVuZENoaWxkKGNhbGxUZXh0KVxuICAgIGFib3V0Q2FyZC5hcHBlbmRDaGlsZChhZGRyZXNzVGV4dClcbiAgICBhYm91dENhcmQuYXBwZW5kQ2hpbGQobWFwSW1hZ2UpXG4gICAgXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dENhcmQpXG5cbiAgICBhYm91dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlbGVjdGVkXCIpXG4gICAgbWVudUJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxuICAgIGhvbWVCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcblxuICAgIHJldHVybiBlbGVtZW50XG5cbn1cblxuZXhwb3J0IHsgYWJvdXRVc0xvYWQgfVxuXG4iLCJpbXBvcnQgaGVyb0ltYWdlIGZyb20gXCIvc3JjL2luZGV4UGFnZS9oZXJvLWltYWdlLmpwZ1wiXG5cbmZ1bmN0aW9uIGhvbWVMb2FkKCkge1xuICAgIC8vQ2xlYXIgTWFpbiBlbGVtZW50IGZpcnN0XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgXG4gICAgXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIilcbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWJvdXQtYnV0dG9uXCIpXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idXR0b25cIilcblxuICAgIC8vQWRkIGNvbnRlbnRcbiAgICBjb25zdCBteUltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgbXlJbWFnZS5zcmMgPSBoZXJvSW1hZ2VcbiAgICAgIFxuXG4gICAgLy9BcHBlbmQgZWxlbWVudHNcbiAgICBtYWluLmFwcGVuZENoaWxkKG15SW1hZ2UpXG5cbiAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIilcbiAgICBtZW51QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpXG4gICAgYWJvdXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcbiAgICBcblxuICAgIHJldHVybiBlbGVtZW50XG4gICAgXG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIGV4cG9ydCB7IFxuICAgICAgICBob21lTG9hZCxcbiAgICBcbiAgICB9O1xuICAgICIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiXG5pbXBvcnQgeyBwYWdlTG9hZCB9ZnJvbSBcIi4vaW5pdGlhbFBhZ2VMb2FkLmpzXCJcbmltcG9ydCB7IG1lbnVMb2FkIH1mcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCB7YWJvdXRVc0xvYWR9IGZyb20gXCIuL2Fib3V0LXVzLmpzXCJcbmltcG9ydCB7IGhvbWVMb2FkIH0gZnJvbSBcIi4vaG9tZUxvYWRcIlxuXG4vL3NlbGVjdCB0aGUgY29udGVudCBkaXZcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcblxuLy9EaXNwbGF5IHRoZSBjb250ZW50cyBvZiBQYWdlTG9hZCBtb2R1bGVcbnBhZ2VMb2FkKClcblxuXG4vL0FkZCBldmVudCBsaXN0ZW5lcnMgdG8gdGFicyAvIHBhZ2VzXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKVxuY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LWJ1dHRvblwiKVxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idXR0b25cIilcblxubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWVudUxvYWQpO1xuYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFib3V0VXNMb2FkKVxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaG9tZUxvYWQpXG5cblxuXG5cbiIsImltcG9ydCBoZXJvSW1hZ2UgZnJvbSBcIi9zcmMvaW5kZXhQYWdlL2hlcm8taW1hZ2UuanBnXCJcblxuZnVuY3Rpb24gcGFnZUxvYWQoKSB7XG4gICAgLy9TZWxlY3QgQ29udGVudCBEaXZcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpXG4gICAgXG4gICAgLy9DcmVhdGUgaG9tZSBwYWdlIGVsZW1lbnRzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3QgbmF2bGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGNvbnN0IGxpc3RJdGVtT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGxpc3RJdGVtVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnN0IGxpc3RJdGVtVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpXG4gICAgY29uc3QgbXlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBjb25zdCBmb290ZXJUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgICAvL2FkZCBldmVudCBsaXN0ZW5lcnNcbiAgICBcbiAgICAvL0FkZCBjb250ZW50XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gdGhlIHJlc3RhdXJhbnRcIlxuICAgIGxpc3RJdGVtT25lLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICBsaXN0SXRlbVR3by50ZXh0Q29udGVudCA9IFwiSG9tZVwiXG4gICAgbGlzdEl0ZW1UaHJlZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgdXNcIlxuICAgIG15SW1hZ2Uuc3JjID0gaGVyb0ltYWdlXG4gICAgZm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IGAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gTWFkZSBieSBUb21KUzE0YFxuICAgIGZvb3RlclRleHQyLnRleHRDb250ZW50ID0gYEFub3RoZXIgZ2VuZXJpYyByZXN0YXVyYW50IHdlYnNpdGVgXG4gICAgXG4gICAgLy9zZXQgYXR0cmlidXRlc1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpXG4gICAgbmF2bGlzdC5jbGFzc0xpc3QuYWRkKFwibmF2LWxpc3RcIilcbiAgICBsaXN0SXRlbU9uZS5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIilcbiAgICBsaXN0SXRlbVR3by5jbGFzc0xpc3QuYWRkKFwiaG9tZS1idXR0b25cIilcbiAgICBsaXN0SXRlbVRocmVlLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1idXR0b25cIilcbiAgICBcbiAgICAvL0FwcGVuZCBlbGVtZW50c1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2bGlzdClcbiAgICBcbiAgICBuYXZsaXN0LmFwcGVuZENoaWxkKGxpc3RJdGVtT25lKVxuICAgIG5hdmxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW1Ud28pXG4gICAgbmF2bGlzdC5hcHBlbmRDaGlsZChsaXN0SXRlbVRocmVlKVxuICAgIFxuICAgIG1haW4uYXBwZW5kQ2hpbGQobXlJbWFnZSlcbiAgICBcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dDIpXG4gICAgXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChtYWluKVxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG4gICAgcmV0dXJuIGVsZW1lbnRcbiAgICBcbiAgICB9XG4gICAgXG4gICAgXG4gICAgXG4gICAgZXhwb3J0IHsgXG4gICAgICAgIHBhZ2VMb2FkLFxuICAgIFxuICAgIH07XG4gICAgIiwiaW1wb3J0IEJpYW5jYUltYWdlIGZyb20gXCIvc3JjL21lbnVQYWdlL3BpenphLWJpYW5jYS5qcGdcIlxuaW1wb3J0IGZ1bmdoaUltYWdlIGZyb20gXCIvc3JjL21lbnVQYWdlL211c2hyb29tLXBpenphLmpwZ1wiXG5pbXBvcnQgZm91ckNoZWVzZSBmcm9tIFwiL3NyYy9tZW51UGFnZS9mb3VyLWNoZWVzZS5qcGdcIlxuaW1wb3J0IG5hcG9sb3RlbmEgZnJvbSBcIi9zcmMvbWVudVBhZ2UvbmFwb2xvdGVuYS5qcGdcIlxuXG5mdW5jdGlvbiBtZW51TG9hZCgpIHtcbiAgICAvL2NsZWFyIG1haW4gZWxlbWVudCBmaXJzdFxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIilcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIilcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIFxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnV0dG9uXCIpXG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFib3V0LWJ1dHRvblwiKVxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWUtYnV0dG9uXCIpXG4gICAgXG4gICAgLyogbWVudSBjb250YWluZXIgKi9cblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIilcblxuICAgIC8vbWVudSBpdGVtc1xuICAgIGNvbnN0IGNhcmQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNhcmQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNhcmQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNhcmQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNhcmQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGNhcmQ2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuXG4gICAgLy9tZW51IGNvbnRlbnQgXG4gICAgY2FyZDEudGV4dENvbnRlbnQgPSBcIlBpenphIGJpYW5jYVwiXG4gICAgY2FyZDIudGV4dENvbnRlbnQgPSBcIlBpenphIGFpIGZ1bmdoaVwiXG4gICAgY2FyZDMudGV4dENvbnRlbnQgPSBcIlBpenphIHF1YXR0cm8gZm9ybWFnZ2lcIlxuICAgIGNhcmQ0LnRleHRDb250ZW50ID0gXCJQaXp6YSBOYXBvbGV0YW5hXCJcbiAgICBjYXJkNS50ZXh0Q29udGVudCA9IFwiQW5vdGhlciBQaXp6YVwiXG4gICAgY2FyZDYudGV4dENvbnRlbnQgPSBcIkFuZCBhbm90aGVyIHBpenphXCJcblxuICAgIGNvbnN0IHBpenphQmlhbmNhID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emFCaWFuY2Euc3JjID0gQmlhbmNhSW1hZ2VcblxuICAgIGNvbnN0IHBpenphRnVuZ2hpID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emFGdW5naGkuc3JjID0gZnVuZ2hpSW1hZ2U7XG5cbiAgICBjb25zdCBxdWF0dHJvRm9ybWFnZ2kgPSBuZXcgSW1hZ2UoKTtcbiAgICBxdWF0dHJvRm9ybWFnZ2kuc3JjID0gZm91ckNoZWVzZTtcblxuICAgIGNvbnN0IG5hcG9sb3RlbmFQaXp6YSA9IG5ldyBJbWFnZSgpO1xuICAgIG5hcG9sb3RlbmFQaXp6YS5zcmMgPSBuYXBvbG90ZW5hO1xuXG4gICAgY29uc3QgcGl6emE1ID0gbmV3IEltYWdlKCk7XG4gICAgcGl6emE1LnNyYyA9IG5hcG9sb3RlbmE7XG5cbiAgICBjb25zdCBwaXp6YTYgPSBuZXcgSW1hZ2UoKTtcbiAgICBwaXp6YTYuc3JjID0gbmFwb2xvdGVuYTtcblxuICAgIC8vbWVudSBzdHlsaW5nXG4gICAgY2FyZDEuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKVxuICAgIGNhcmQyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIilcbiAgICBjYXJkMy5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpXG4gICAgY2FyZDQuY2xhc3NMaXN0LmFkZChcIm1lbnUtY2FyZFwiKVxuICAgIGNhcmQ1LmNsYXNzTGlzdC5hZGQoXCJtZW51LWNhcmRcIilcbiAgICBjYXJkNi5jbGFzc0xpc3QuYWRkKFwibWVudS1jYXJkXCIpXG5cbiAgICBwaXp6YUJpYW5jYS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIilcbiAgICBwaXp6YUZ1bmdoaS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIilcbiAgICBxdWF0dHJvRm9ybWFnZ2kuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpXG4gICAgbmFwb2xvdGVuYVBpenphLmNsYXNzTGlzdC5hZGQoXCJtZW51LWltZ1wiKVxuICAgIHBpenphNS5jbGFzc0xpc3QuYWRkKFwibWVudS1pbWdcIilcbiAgICBwaXp6YTYuY2xhc3NMaXN0LmFkZChcIm1lbnUtaW1nXCIpXG5cbiAgICAvL2FwcGVuZGluZyBjYXJkc1xuICAgIGNhcmQxLmFwcGVuZENoaWxkKHBpenphQmlhbmNhKVxuICAgIGNhcmQyLmFwcGVuZENoaWxkKHBpenphRnVuZ2hpKVxuICAgIGNhcmQzLmFwcGVuZENoaWxkKHF1YXR0cm9Gb3JtYWdnaSlcbiAgICBjYXJkNC5hcHBlbmRDaGlsZChuYXBvbG90ZW5hUGl6emEpXG4gICAgY2FyZDUuYXBwZW5kQ2hpbGQocGl6emE1KVxuICAgIGNhcmQ2LmFwcGVuZENoaWxkKHBpenphNilcbiAgICAvL2FwcGVuZGluZyBtZW51XG4gICAgXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkMSlcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQyKVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDMpXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkNClcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQ1KVxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZDYpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpXG5cbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2VsZWN0ZWRcIilcbiAgICBhYm91dEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoXCJpZFwiKVxuICAgIGhvbWVCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiaWRcIilcbiAgICByZXR1cm4gZWxlbWVudFxuICAgIFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBleHBvcnQgeyBcbiAgICAgICAgbWVudUxvYWQsXG4gICAgfTtcbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=