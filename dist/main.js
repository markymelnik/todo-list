/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-size: 18px;\\n  box-sizing: border-box;\\n  border: 1px dotted red;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.container {\\n  position: relative;\\n  display: flex;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100vh;\\n}\\n\\n.topper {\\n  position: relative;\\n  display: flex;\\n  flex: 1;\\n}\\n\\n.sidebar {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 50px;\\n  width: 300px;\\n  padding: 15px;\\n  border-right: 1px solid black;\\n}\\n\\n.logo-text {\\n  font-size: 28px;\\n}\\n\\n.sidebar-header {\\n  border-bottom: 1px solid black;\\n  font-size: 24px;\\n}\\n\\n.sidebar-tasks-container {\\n  margin-top: 50px;\\n}\\n\\n.sidebar-tasks {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding: 10px;\\n}\\n\\n.sidebar-tasks-tab {\\n  cursor: pointer;\\n}\\n\\n.sidebar-tasks-tab:hover {\\n  background-color: azure;\\n}\\n\\n.sidebar-lists {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding: 10px;\\n}\\n\\n.main {\\n  display: flex;\\n  flex-direction: column;\\n  flex: 1;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100px;\\n  border-bottom: 1px solid black;\\n}\\n\\n.header-text {\\n  font-size: 36px;\\n}\\n\\n\\n.task-card-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding: 10px;\\n}\\n\\n.task-card {\\n  display: flex;\\n  gap: 20px;\\n  padding: 10px;\\n  border: 1px solid black;\\n}\\n\\n.card-delete-btn {\\n  color: red;\\n  background-color: white;\\n  width: 40px;\\n  height: 40px;\\n  cursor: pointer;\\n}\\n\\n.card-delete-btn:hover {\\n  background-color: rgb(255, 120, 120);\\n}\\n\\n.card-info {\\n  flex: 1;\\n}\\n\\n.add-btns-container {\\n  position: fixed;\\n  display: flex;\\n  gap: 40px;\\n  bottom: 20px;\\n  right: 20px;\\n  padding: 20px;\\n}\\n\\n.add-task-btn, .add-list-btn {\\n  font-size: 24px;\\n  height: 100px;\\n  width: 100px;\\n  border: 1px solid black;\\n  border-radius: 50%;\\n  background-color: white;\\n  cursor: pointer;\\n}\\n\\n.add-task-btn:hover, .add-list-btn:hover {\\n  background-color:azure;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 50px;\\n  width: inherit;\\n  border-top: 1px solid black;\\n}\\n\\n.footer-text {\\n  font-size: 16px;\\n}\\n\\n.task-form {\\n  position: absolute;\\n  top: 40%;\\n  left: 40%;\\n  background-color: azure;\\n  width: 300px;\\n  height: 200px;\\n  visibility: hidden;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/all.js":
/*!********************!*\
  !*** ./src/all.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createAllList() {\n\n  const allListContainer = document.createElement('div');\n  allListContainer.classList.add('all-list-container');\n  allListContainer.classList.add('list');\n\n  return allListContainer;\n\n}\n\nfunction loadAllList() {\n\n  const listContainer = document.querySelector('.list-container');\n\n  return listContainer;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAllList);\n\n//# sourceURL=webpack://todo-list/./src/all.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nfunction createTopper() {\n\n  const topper = document.createElement('div');\n  topper.classList.add('topper');\n\n  topper.append(createSidebar(), createMain());\n\n  return topper;\n\n}\n\nfunction createSidebar() {\n\n  const sidebar = document.createElement('div');\n  sidebar.classList.add('sidebar');\n\n  const logoContainer = document.createElement('div');\n  logoContainer.classList.add('logo-container');\n\n  const logoText = document.createElement('div');\n  logoText.classList.add('logo-text');\n  logoText.textContent = 'Logo';\n\n  logoContainer.append(logoText);\n  \n  sidebar.append(logoContainer, createSidebarTasks(), createSidebarLists());\n\n  return sidebar;\n\n}\n\nfunction createSidebarTasks() {\n\n  const sidebarTasksContainer = document.createElement('div');\n  sidebarTasksContainer.classList.add('sidebar-tasks-container');\n\n  const sidebarTasksHeader = document.createElement('div');\n  sidebarTasksHeader.classList.add('sidebar-header');\n  sidebarTasksHeader.textContent = 'Tasks';\n\n  const sidebarTasks = document.createElement('div');\n  sidebarTasks.classList.add('sidebar-tasks');\n\n  const sidebarAll = document.createElement('div');\n  sidebarAll.classList.add('sidebar-tasks-tab', 'sidebar-all-list');\n  sidebarAll.textContent = 'All';\n\n  const sidebarStarred = document.createElement('div');\n  sidebarStarred.classList.add('sidebar-tasks-tab', 'sidebar-starred-list');\n  sidebarStarred.textContent = 'Starred';\n\n  sidebarTasks.append(sidebarAll, sidebarStarred);\n\n  sidebarTasksContainer.append(sidebarTasksHeader, sidebarTasks);\n\n  return sidebarTasksContainer;\n\n}\n\nfunction createSidebarLists() {\n\n  const sidebarListsContainer = document.createElement('div');\n  sidebarListsContainer.classList.add('sidebar-lists-container');\n\n  const sidebarListsHeader = document.createElement('div');\n  sidebarListsHeader.classList.add('sidebar-header');\n  sidebarListsHeader.textContent = 'Lists';\n\n  const sidebarLists = document.createElement('div');\n  sidebarLists.classList.add('sidebar-lists');\n\n  sidebarListsContainer.append(sidebarListsHeader, sidebarLists);\n\n  return sidebarListsContainer;\n\n}\n\nfunction createMain() {\n\n  const main = document.createElement('div');\n  main.classList.add('main');\n\n  main.append(createHeader(), createListContainer());\n\n  return main;\n\n}\n\nfunction createHeader() {\n\n  const header = document.createElement('div');\n  header.classList.add('header');\n\n  const headerText = document.createElement('div');\n  headerText.classList.add('header-text');\n  headerText.textContent = 'Task At Hand';\n\n  header.append(headerText);\n\n  return header;\n\n}\n\nfunction createListContainer() {\n\n  const listContainer = document.createElement('div');\n  listContainer.classList.add('list-container');\n\n  return listContainer;\n}\n\nfunction createButtons() {\n\n  const addBtns = document.createElement('div');\n  addBtns.classList.add('add-btns-container');\n\n  const addListBtn = document.createElement('button');\n  addListBtn.classList.add('add-list-btn');\n  addListBtn.textContent = '+List';\n\n  const addTaskBtn = document.createElement('button');\n  addTaskBtn.classList.add('add-task-btn');\n  addTaskBtn.textContent = '+Task';\n\n  addBtns.append(addListBtn, addTaskBtn);\n\n  return addBtns;\n\n}\n\nfunction createTaskForm() {\n\n  const taskForm = document.createElement('div');\n  taskForm.classList.add('task-form');\n\n  const titleSection = document.createElement('div');\n  titleSection.classList.add('input-field');\n\n  const titleLabel = document.createElement('label');\n  titleLabel.setAttribute('for', 'title');\n  titleLabel.textContent = 'Title';\n\n  const titleField = document.createElement('input');\n  titleField.setAttribute('type', 'text');\n  titleField.setAttribute('id', 'title');\n  titleField.setAttribute('name', 'title');\n\n  titleSection.append(titleLabel, titleField);\n\n  const descriptionSection = document.createElement('div');\n  descriptionSection.classList.add('input-field');\n\n  const descriptionLabel = document.createElement('label');\n  descriptionLabel.setAttribute('for', 'description');\n  descriptionLabel.textContent = 'Description';\n\n  const descriptionField = document.createElement('input');\n  descriptionField.setAttribute('type', 'text');\n  descriptionField.setAttribute('id', 'description');\n  descriptionField.setAttribute('name', 'description');\n\n  descriptionSection.append(descriptionLabel, descriptionField);\n\n  const dueDateSection = document.createElement('div');\n  dueDateSection.classList.add('input-field');\n\n  const dueDateLabel = document.createElement('label');\n  dueDateLabel.setAttribute('for', 'dueDate');\n  dueDateLabel.textContent = 'Due Date';\n\n  const dueDateField = document.createElement('input');\n  dueDateField.setAttribute('type', 'text');\n  dueDateField.setAttribute('id', 'dueDate');\n  dueDateField.setAttribute('name', 'dueDate');\n\n  dueDateSection.append(dueDateLabel, dueDateField);\n\n  const submitBtnSection = document.createElement('div');\n  \n  const submitBtn = document.createElement('button');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.classList.add('task-submit-btn');\n  submitBtn.textContent = 'Submit';\n\n  submitBtnSection.append(submitBtn);\n\n  taskForm.append(titleSection, descriptionSection, dueDateSection, submitBtnSection);\n\n  return taskForm;\n\n}\n\nfunction createFooter() {\n\n  const footer = document.createElement('div');\n  footer.classList.add('footer');\n\n  const footerText = document.createElement('div');\n  footerText.classList.add('footer-text');\n  footerText.textContent = \"Created by Mark Melnik\";\n\n  footer.append(footerText);\n\n  return footer;\n\n}\n\nfunction createDisplay() {\n\n  const container = document.querySelector('.container');\n  container.append(createTopper(), createFooter(), createTaskForm(), createButtons());\n\n  return container;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplay);\n\n//# sourceURL=webpack://todo-list/./src/display.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site */ \"./src/site.js\");\n\n\n(0,_site__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/site.js":
/*!*********************!*\
  !*** ./src/site.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all */ \"./src/all.js\");\n/* harmony import */ var _starred__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./starred */ \"./src/starred.js\");\n\n\n\n\n\nconst builtInList = {\n  allList: [],\n  starredList: []\n};\n\n\nclass Task {\n  constructor(title, description, dueDate) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n  }\n};\n\nconst taskController = (() => {\n\n  let isAddBtnClicked = false;\n\n  const initiateTaskForm = () => {\n\n    const addTaskBtn = document.querySelector('.add-task-btn');\n    const taskForm = document.querySelector('.task-form');\n    \n    addTaskBtn.addEventListener('click', () => {\n      if (isAddBtnClicked) {\n        taskForm.style.visibility = 'hidden';\n        isAddBtnClicked = false;\n      } else {\n        taskForm.style.visibility = 'visible';\n        isAddBtnClicked = true;\n      }\n    })\n  }\n\n  const submitTaskForm = () => {\n\n    const submitTaskFormBtn = document.querySelector('.task-submit-btn');\n    const taskForm = document.querySelector('.task-form');\n    const taskTitle = document.querySelector(\"#title\");\n    const taskDescription = document.querySelector(\"#description\");\n    const taskDueDate = document.querySelector(\"#dueDate\");\n    \n    submitTaskFormBtn.addEventListener('click', (e) => {\n      e.preventDefault();\n      const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value);\n      addTaskToDisplay(newTask);\n      isAddBtnClicked = false;\n      taskForm.style.visibility = 'hidden';\n    })\n  }\n\n  const addTaskToDisplay = (newTask) => {\n  \n    const listContainer = document.querySelector('.list-container');\n\n    const taskCardContainer = document.createElement(\"div\");\n    taskCardContainer.classList.add(\"task-card-container\");\n\n    const taskCard = document.createElement(\"div\");\n    taskCard.classList.add(\"task-card\");\n\n    const taskCardInfo = document.createElement(\"div\");\n    taskCardInfo.classList.add(\"card-info\");\n    taskCardInfo.innerHTML = `Title: ${newTask.title}<br/> Description: ${newTask.description}<br/> Due Date: ${newTask.dueDate}`;\n\n    const taskCardDelBtn = document.createElement(\"button\");\n    taskCardDelBtn.classList.add(\"card-delete-btn\");\n    taskCardDelBtn.textContent = \"X\";\n\n    taskCard.append(taskCardInfo, taskCardDelBtn);\n    taskCardContainer.append(taskCard);\n\n    listContainer.append(taskCardContainer);\n\n    taskCardDelBtn.addEventListener('click', () => {\n      taskCardContainer.remove();\n    })\n  }\n\n  return {\n    initiateTaskForm,\n    submitTaskForm,\n    addTaskToDisplay\n  }\n\n})();\n\nconst listSelector = (() => {\n\n  const listStatus = () => {\n\n    const sidebarAllList = document.querySelector('.sidebar-all-list');\n    const sidebarStarredList = document.querySelector('.sidebar-starred-list');\n\n    sidebarAllList.addEventListener('click', (tab) => {\n      if (tab.target.classList.contains('active')) return;\n      tabStatus(sidebarAllList);\n    })\n\n    sidebarStarredList.addEventListener('click', (tab) => {\n      if (tab.target.classList.contains('active')) return;\n      tabStatus(sidebarStarredList);\n    })\n  }\n\n  return {\n    listStatus\n  }\n\n})();\n\nfunction tabStatus(tab) {\n\n  const taskTabs = document.querySelectorAll('.sidebar-tasks-tab');\n\n  taskTabs.forEach((tab) => {\n    if (tab !== this) {\n      tab.classList.remove('active');\n    }\n  })\n  tab.classList.add('active');\n};\n\nfunction loadWebsite() {\n\n  (0,_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  (0,_all__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  const sidebarAllList = document.querySelector('.sidebar-all-list');\n  tabStatus(sidebarAllList);\n  listSelector.listStatus();\n\n  taskController.initiateTaskForm();\n  taskController.submitTaskForm();\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadWebsite);\n\n//# sourceURL=webpack://todo-list/./src/site.js?");

/***/ }),

/***/ "./src/starred.js":
/*!************************!*\
  !*** ./src/starred.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createStarredList() {\n\n  const starredList = document.createElement('div');\n  starredList.classList.add('starred-list-container');\n  starredList.classList.add('list');\n  return starredList;\n\n}\n\nfunction loadStarredList() {\n\n  const listContainer = document.querySelector('.list-container');\n\n  return listContainer;\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadStarredList);\n\n//# sourceURL=webpack://todo-list/./src/starred.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;