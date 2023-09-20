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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body,\nhtml {\n  height: 100%;\n}\n\nbody {\n  background-color: rgb(204, 255, 246);\n}\n\ndt {\n  margin-right: 10px;\n}\n\ndt::after {\n  content: \":\";\n}\n\nh1 {\n  text-align: center;\n  background-color: rgb(0, 183, 255);\n  padding: 10px;\n}\n\ninput.checkboxSmall {\n  height: 25px;\n  width: 25px;\n}\n\nlabel {\n  margin-right: 10px;\n}\n\nlabel::after {\n  content: \":\";\n}\n\nol {\n  list-style: none;\n  padding-left: 0;\n}\n\n.addView {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.addView > form {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.buttonLarge {\n  height: 40px;\n  width: 40px;\n  font-size: large;\n}\n\n.buttonSmall {\n  height: 25px;\n  width: 25px;\n}\n\n.headView {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n}\n\n.errorText {\n  color: red;\n}\n\n.metadataContainer {\n  display: flex;\n}\n\n.metadataContainer > div {\n  flex: 1;\n  margin-left: 20px;\n}\n\n.metadataContainer > div:not(:first-child) dt {\n  float: left;\n  clear: left;\n  text-align: right;\n}\n\n.primaryContainer {\n  border: 5px solid rgb(0, 183, 255);\n  background-color: rgb(164, 255, 238);\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.todoItem {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n  padding: 10px;\n  cursor: pointer;\n  border: 3px solid rgb(0, 187, 153);\n  background-color: rgb(187, 236, 255);\n}\n\n.todoItem:hover {\n  background-color: rgb(223, 246, 255);\n}\n\n.todoItem > div {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n}\n\n#content {\n  height: 90%;\n  display: flex;\n}\n\n#projectView {\n  width: 20%;\n  overflow: auto;\n}\n\n#projectViewBody li {\n  width: 80%;\n  margin: auto;\n  margin-bottom: 5px;\n  cursor: pointer;\n  border: 2px solid rgb(0, 187, 153);\n\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n#projectViewBody li:hover {\n  background-color: rgb(204, 255, 246);\n}\n\n#todoView {\n  width: 80%;\n  overflow: auto;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/addView.js":
/*!***************************!*\
  !*** ./src/js/addView.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAddProjectView: () => (/* binding */ createAddProjectView),\n/* harmony export */   createAddTodoItemView: () => (/* binding */ createAddTodoItemView)\n/* harmony export */ });\n/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectView */ \"./src/js/projectView.js\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoView */ \"./src/js/todoView.js\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ \"./src/js/logic.js\");\n/* harmony import */ var _formField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formField */ \"./src/js/formField.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n\n\n\n\n\n\nfunction createAddProjectView() {\n  const view = document.querySelector(\"#todoView\");\n  view.innerHTML = \"\";\n\n  const addView = document.createElement(\"div\");\n  addView.classList.add(\"addView\");\n\n  const header = document.createElement(\"h2\");\n  header.textContent = \"Add Project\";\n\n  const form = createAddForm(\"addProject\");\n  form.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const project = submittedTodoItem();\n\n    try {\n      _logic_js__WEBPACK_IMPORTED_MODULE_2__.todo.addToProjectList(project);\n      (0,_projectView__WEBPACK_IMPORTED_MODULE_0__.createProjectView)();\n      _logic_js__WEBPACK_IMPORTED_MODULE_2__.todo.setSelectedProjectIndex(_logic_js__WEBPACK_IMPORTED_MODULE_2__.todo.getProjectList().length - 1);\n      (0,_todoView__WEBPACK_IMPORTED_MODULE_1__.createTodoView)(project);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();\n    } catch (error) {\n      const errorText = document.querySelector(\".errorText\");\n      errorText.textContent = error.toString();\n    }\n  });\n\n  const errorText = document.createElement(\"p\");\n  errorText.classList.add(\"errorText\");\n\n  for (const el of [header, form, errorText]) {\n    addView.appendChild(el);\n  }\n\n  view.appendChild(addView);\n\n  return view;\n}\n\nfunction createAddTodoItemView(project) {\n  const view = document.querySelector(\"#todoViewBody\");\n  view.innerHTML = \"\";\n\n  const addView = document.createElement(\"div\");\n  addView.classList.add(\"addView\");\n\n  const header = document.createElement(\"h3\");\n  header.textContent = \"Add Todo Item\";\n\n  const form = createAddForm(\"addTodoItem\");\n  form.addEventListener(\"submit\", (event) => {\n    event.preventDefault();\n    const todoItem = submittedTodoItem();\n\n    try {\n      project.addToTodoList(todoItem);\n      todoItem.setProject(project);\n      (0,_todoView__WEBPACK_IMPORTED_MODULE_1__.createTodoView)(project);\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_4__.saveToLocalStorage)();\n    } catch (error) {\n      const errorText = document.querySelector(\".errorText\");\n      errorText.textContent = error.toString();\n    }\n  });\n\n  const errorText = document.createElement(\"p\");\n  errorText.classList.add(\"errorText\");\n\n  for (const el of [header, form, errorText]) {\n    addView.appendChild(el);\n  }\n\n  view.appendChild(addView);\n\n  return view;\n}\n\nfunction createAddForm(id) {\n  const form = document.createElement(\"form\");\n  form.id = id;\n\n  const titleInputField = (0,_formField__WEBPACK_IMPORTED_MODULE_3__.createInputField)(\"text\", \"title\", \"Title\");\n  const titleInput = titleInputField.querySelector(\"input\");\n  titleInput.required = true;\n\n  const descripInputField = (0,_formField__WEBPACK_IMPORTED_MODULE_3__.createTextareaField)(\"descrip\", \"Description\");\n  const dueDateInputField = (0,_formField__WEBPACK_IMPORTED_MODULE_3__.createInputField)(\"date\", \"dueDate\", \"Due Date\");\n  const prioritySelectorField = (0,_formField__WEBPACK_IMPORTED_MODULE_3__.createSelectField)(\n    _logic_js__WEBPACK_IMPORTED_MODULE_2__.todo.getPriorities(),\n    \"priority\",\n    \"Priority\",\n  );\n  const submitButton = document.createElement(\"button\");\n  submitButton.type = \"submit\";\n  submitButton.textContent = \"Submit\";\n\n  const els = [\n    titleInputField,\n    descripInputField,\n    dueDateInputField,\n    prioritySelectorField,\n    submitButton,\n  ];\n\n  for (const el of els) {\n    form.appendChild(el);\n  }\n\n  return form;\n}\n\nfunction submittedTodoItem() {\n  // only title and priority are required\n  const titleInput = document.querySelector(\"#titleInput\");\n  const title = titleInput.value;\n\n  const descripInput = document.querySelector(\"#descripTextarea\");\n  const descrip = descripInput.value ? descripInput.value : null;\n\n  const dueDateInput = document.querySelector(\"#dueDateInput\");\n  const dueDate = dueDateInput.value ? dueDateInput.value : null;\n\n  const prioritySelector = document.querySelector(\"#prioritySelector\");\n  const priority = prioritySelector.value;\n\n  const todoItem = _logic_js__WEBPACK_IMPORTED_MODULE_2__.todo.TodoItem(title, descrip, dueDate);\n  todoItem.setPriority(priority);\n\n  return todoItem;\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/addView.js?");

/***/ }),

/***/ "./src/js/formField.js":
/*!*****************************!*\
  !*** ./src/js/formField.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createInputField: () => (/* binding */ createInputField),\n/* harmony export */   createSelectField: () => (/* binding */ createSelectField),\n/* harmony export */   createTextareaField: () => (/* binding */ createTextareaField)\n/* harmony export */ });\nfunction createInputField(type, name, labelText) {\n  const inputDiv = document.createElement(\"div\");\n\n  const id = `${name}Input`;\n  const label = document.createElement(\"label\");\n  label.textContent = labelText;\n  label.for = id;\n  const input = document.createElement(\"input\");\n  input.type = type;\n  input.id = id;\n  input.name = name;\n\n  for (const el of [label, input]) {\n    inputDiv.appendChild(el);\n  }\n\n  return inputDiv;\n}\n\nfunction createTextareaField(name, labelText) {\n  const textareaDiv = document.createElement(\"div\");\n\n  const id = `${name}Textarea`;\n  const label = document.createElement(\"label\");\n  label.textContent = labelText;\n  label.for = id;\n  const textarea = document.createElement(\"textarea\");\n  textarea.id = id;\n  textarea.name = name;\n\n  for (const el of [label, textarea]) {\n    textareaDiv.appendChild(el);\n  }\n\n  return textareaDiv;\n}\n\nfunction createSelectField(options, name, labelText) {\n  const selectorDiv = document.createElement(\"div\");\n\n  const id = `${name}Selector`;\n  const label = document.createElement(\"label\");\n  label.textContent = labelText;\n  label.for = id;\n  const selector = document.createElement(\"select\");\n  selector.name = name;\n  selector.id = id;\n\n  for (const o of options) {\n    const option = document.createElement(\"option\");\n    option.value = o;\n    option.textContent = o;\n\n    selector.appendChild(option);\n  }\n\n  for (const el of [label, selector]) {\n    selectorDiv.appendChild(el);\n  }\n\n  return selectorDiv;\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/formField.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/js/storage.js\");\n/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectView */ \"./src/js/projectView.js\");\n/* harmony import */ var _addView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addView */ \"./src/js/addView.js\");\n\n\n\n\n\n(0,_storage__WEBPACK_IMPORTED_MODULE_1__.extractFromLocalStorage)();\n(0,_projectView__WEBPACK_IMPORTED_MODULE_2__.createProjectView)();\n\nconst addProjectBtn = document.querySelector(\"#addProjectButton\");\naddProjectBtn.onclick = function () {\n  (0,_addView__WEBPACK_IMPORTED_MODULE_3__.createAddProjectView)();\n};\n\n\n//# sourceURL=webpack://todolist/./src/js/index.js?");

/***/ }),

/***/ "./src/js/logic.js":
/*!*************************!*\
  !*** ./src/js/logic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todo: () => (/* binding */ todo)\n/* harmony export */ });\nconst todo = (() => {\n  const priorities = [\"Low\", \"Mid\", \"High\"];\n  const maxDepth = 1;\n  const projectList = [];\n  let selectedProjectIndex = null;\n\n  // todo items could be extended to have their own todo list\n  // Parameter project can be null or another TodoItem\n  function TodoItem(title, descrip = null, dueDate = null) {\n    // title also serves as ID\n    let _title = title;\n    let _descrip = descrip;\n    let _dueDate = dueDate;\n    let _priority = \"Low\";\n    let _project = null;\n    const _todoList = [];\n    let _depth = 0;\n    let _complete = false;\n\n    function getTitle() {\n      return _title;\n    }\n\n    function setTitle(newTitle) {\n      // not yet assigned to a project, so title need not be\n      // checked for uniqueness\n      if (!_project && !isRootProject()) {\n        _title = newTitle;\n        return;\n      }\n\n      let siblings = null;\n\n      if (_project) {\n        siblings = _project.getTodoList();\n      } else {\n        siblings = projectList;\n      }\n\n      for (const sibling of siblings) {\n        const siblingTitle = sibling.getTitle().toUpperCase();\n        const title = newTitle.toUpperCase();\n\n        if (siblingTitle === title) {\n          throw `New title '${newTitle}' already exists.`;\n        }\n      }\n\n      _title = newTitle;\n    }\n\n    function getDescrip() {\n      return _descrip;\n    }\n\n    function setDescrip(newDescrip) {\n      _descrip = newDescrip;\n    }\n\n    function getDueDate() {\n      return _dueDate;\n    }\n\n    function setDueDate(newDueDate) {\n      _dueDate = newDueDate;\n    }\n\n    function getPriority() {\n      return _priority;\n    }\n\n    function setPriority(newPriority) {\n      if (!priorities.includes(newPriority)) {\n        throw `'${newPriority}' is an invalid priority.`;\n      }\n\n      _priority = newPriority;\n    }\n\n    function getProject() {\n      return _project;\n    }\n\n    function setProject(todoItem) {\n      for (const child of todoItem.getTodoList()) {\n        if (equals(child)) {\n          _project = todoItem;\n          _depth = todoItem.getDepth() + 1;\n          return;\n        }\n      }\n\n      throw (\n        `Tried to set project of TodoItem '${_title}' to ` +\n        `'${todoItem.getTitle()}' without adding to todoList first.`\n      );\n    }\n\n    function getTodoList() {\n      return _todoList;\n    }\n\n    function getDepth() {\n      return _depth;\n    }\n\n    function getComplete() {\n      return _complete;\n    }\n\n    function setComplete(newComplete) {\n      _complete = newComplete;\n    }\n\n    function isRootProject() {\n      for (const project of projectList) {\n        if (equals(project)) {\n          return true;\n        }\n      }\n\n      return false;\n    }\n\n    function addToTodoList(todoItem) {\n      if (!_project && !isRootProject()) {\n        throw (\n          `Tried to add to todoList of TodoItem '${_title}' ` +\n          \"without defining project or making it a root project.\"\n        );\n      }\n\n      if (_depth === maxDepth) {\n        throw (\n          `Tried to add to TodoItem '${_title}', ` + \"which is at max depth.\"\n        );\n      }\n\n      const title = todoItem.getTitle().toUpperCase();\n\n      for (const item of _todoList) {\n        const existingTitle = item.getTitle().toUpperCase();\n\n        if (title === existingTitle) {\n          throw (\n            `Tried to add TodoItem '${todoItem.getTitle()}' ` +\n            `to todoList of TodoItem '${_title}', but title ` +\n            \"already exists.\"\n          );\n        }\n      }\n\n      _todoList.push(todoItem);\n    }\n\n    function removeFromTodoList(index) {\n      _todoList.splice(index, 1);\n    }\n\n    function equals(todoItem) {\n      let project = _project;\n      let otherProject = todoItem.getProject();\n\n      let title = _title.toUpperCase();\n      let otherTitle = todoItem.getTitle().toUpperCase();\n\n      while (title === otherTitle && title) {\n        title = null;\n        otherTitle = null;\n\n        if (project) {\n          title = project.getTitle().toUpperCase();\n          project = project.getProject();\n        }\n\n        if (otherProject) {\n          otherTitle = otherProject.getTitle().toUpperCase();\n          otherProject = otherProject.getProject();\n        }\n      }\n\n      return title === otherTitle;\n    }\n\n    return {\n      getTitle,\n      setTitle,\n      getDescrip,\n      setDescrip,\n      getDueDate,\n      setDueDate,\n      getPriority,\n      setPriority,\n      getProject,\n      setProject,\n      getTodoList,\n      getDepth,\n      getComplete,\n      setComplete,\n      addToTodoList,\n      removeFromTodoList,\n    };\n  }\n\n  function getProjectList() {\n    return projectList;\n  }\n\n  function addToProjectList(todoItem) {\n    const title = todoItem.getTitle().toUpperCase();\n\n    for (const item of projectList) {\n      const existingTitle = item.getTitle().toUpperCase();\n\n      if (title === existingTitle) {\n        throw (\n          `Tried to add TodoItem '${todoItem.getTitle()}' ` +\n          \"to projectList, but title already exists.\"\n        );\n      }\n    }\n\n    projectList.push(todoItem);\n  }\n\n  function removeFromProjectList(index) {\n    projectList.splice(index, 1);\n  }\n\n  function getSelectedProjectIndex() {\n    return selectedProjectIndex;\n  }\n\n  function setSelectedProjectIndex(index) {\n    selectedProjectIndex = index;\n  }\n\n  function getPriorities() {\n    return priorities;\n  }\n\n  return {\n    TodoItem,\n    getProjectList,\n    addToProjectList,\n    removeFromProjectList,\n    getSelectedProjectIndex,\n    setSelectedProjectIndex,\n    getPriorities,\n  };\n})();\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/logic.js?");

/***/ }),

/***/ "./src/js/projectView.js":
/*!*******************************!*\
  !*** ./src/js/projectView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProjectView: () => (/* binding */ createProjectView)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/js/logic.js\");\n/* harmony import */ var _todoView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoView */ \"./src/js/todoView.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n\n\n\n\nfunction createProjectView() {\n  const view = document.querySelector(\"#projectViewBody\");\n  view.innerHTML = \"\";\n\n  const container = document.createElement(\"ol\");\n  const projectList = _logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList();\n\n  for (let i = 0; i < projectList.length; i++) {\n    const project = projectList[i];\n\n    const header = document.createElement(\"h3\");\n    header.textContent = project.getTitle();\n\n    const delButton = document.createElement(\"button\");\n    delButton.classList.add(\"buttonSmall\");\n    delButton.textContent = \"-\";\n    delButton.onclick = function (event) {\n      _logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.removeFromProjectList(i);\n      createProjectView();\n\n      if (_logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.getSelectedProjectIndex() === i) {\n        (0,_todoView__WEBPACK_IMPORTED_MODULE_1__.createTodoView)(null);\n      }\n\n      event.stopPropagation();\n      (0,_storage_js__WEBPACK_IMPORTED_MODULE_2__.saveToLocalStorage)();\n    };\n\n    const li = document.createElement(\"li\");\n\n    for (const el of [header, delButton]) {\n      li.appendChild(el);\n    }\n\n    li.onclick = function () {\n      _logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.setSelectedProjectIndex(i);\n      (0,_todoView__WEBPACK_IMPORTED_MODULE_1__.createTodoView)(project);\n    };\n\n    container.appendChild(li);\n  }\n\n  view.appendChild(container);\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/projectView.js?");

/***/ }),

/***/ "./src/js/storage.js":
/*!***************************!*\
  !*** ./src/js/storage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractFromLocalStorage: () => (/* binding */ extractFromLocalStorage),\n/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ \"./src/js/logic.js\");\n\n\nfunction saveToLocalStorage() {\n  if (localStorageAvailable()) {\n    const data = [];\n\n    for (const project of _logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.getProjectList()) {\n      data.push(encodeTodoItem(project));\n    }\n\n    localStorage.projectList = JSON.stringify(data);\n  }\n}\n\nfunction extractFromLocalStorage() {\n  if (localStorageAvailable()) {\n    const data = localStorage.projectList;\n\n    if (data) {\n      const encodedTodoItems = JSON.parse(data);\n\n      for (const item of encodedTodoItems) {\n        decodeTodoItem(item);\n      }\n    }\n  }\n}\n\nfunction localStorageAvailable() {\n  const test = \"test\";\n\n  try {\n    localStorage.setItem(test, test);\n    localStorage.removeItem(test);\n\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n// Parameter project is null if parameter encodedTodoItem is root project\n// Does not return anything - data is placed directly into todo module\nfunction decodeTodoItem(encodedTodoItem, project) {\n  const todoItem = _logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.TodoItem(\n    encodedTodoItem.title,\n    encodedTodoItem.descrip,\n    encodedTodoItem.dueDate,\n  );\n  todoItem.setPriority(encodedTodoItem.priority);\n  todoItem.setComplete(encodedTodoItem.complete);\n\n  if (project) {\n    project.addToTodoList(todoItem);\n    todoItem.setProject(project);\n  } else {\n    _logic_js__WEBPACK_IMPORTED_MODULE_0__.todo.addToProjectList(todoItem);\n  }\n\n  for (const item of encodedTodoItem.todoList) {\n    decodeTodoItem(item, todoItem);\n  }\n}\n\nfunction encodeTodoItem(todoItem) {\n  const encodedTodoList = [];\n  const todoList = todoItem.getTodoList();\n\n  for (const item of todoList) {\n    encodedTodoList.push(encodeTodoItem(item));\n  }\n\n  return {\n    title: todoItem.getTitle(),\n    descrip: todoItem.getDescrip(),\n    dueDate: todoItem.getDueDate(),\n    priority: todoItem.getPriority(),\n    todoList: encodedTodoList,\n    complete: todoItem.getComplete(),\n  };\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/storage.js?");

/***/ }),

/***/ "./src/js/todoView.js":
/*!****************************!*\
  !*** ./src/js/todoView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodoView: () => (/* binding */ createTodoView)\n/* harmony export */ });\n/* harmony import */ var _addView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addView */ \"./src/js/addView.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/js/storage.js\");\n\n\n\nfunction createTodoView (project) {\n  const view = document.querySelector('#todoView')\n  view.innerHTML = ''\n\n  if (!project) {\n    return\n  }\n\n  const projectDiv = document.createElement('div')\n  projectDiv.classList.add('primaryContainer')\n\n  const headerDiv = document.createElement('div')\n  headerDiv.classList.add('headView')\n\n  const header = document.createElement('h2')\n  header.textContent = project.getTitle()\n  const addButton = document.createElement('button')\n  addButton.classList.add('buttonLarge')\n  addButton.textContent = '+'\n  addButton.onclick = function () {\n    ;(0,_addView__WEBPACK_IMPORTED_MODULE_0__.createAddTodoItemView)(project)\n  }\n\n  for (const el of [header, addButton]) {\n    headerDiv.appendChild(el)\n  }\n\n  const metaDiv = createMetaList(project)\n\n  for (const el of [headerDiv, metaDiv]) {\n    projectDiv.appendChild(el)\n  }\n\n  const itemListDiv = document.createElement('div')\n  itemListDiv.id = 'todoViewBody'\n  const itemList = document.createElement('ol')\n  const todoList = project.getTodoList()\n\n  for (let i = 0; i < todoList.length; i++) {\n    const todoItem = todoList[i]\n\n    const li = document.createElement('li')\n    li.classList.add('todoItem')\n\n    const metaList = createMetaList(todoItem)\n    metaList.style.display = 'none'\n\n    li.onclick = function () {\n      if (metaList.style.display === 'none') {\n        metaList.style.display = 'flex'\n      } else {\n        metaList.style.display = 'none'\n      }\n    }\n\n    const todoItemHead = document.createElement('div')\n\n    const input = document.createElement('input')\n    input.type = 'checkbox'\n    input.classList.add('checkboxSmall')\n    input.checked = todoItem.getComplete()\n    input.onclick = function (event) {\n      todoItem.setComplete(!todoItem.getComplete())\n      event.stopPropagation()\n      ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)()\n    }\n\n    const header = document.createElement('h3')\n    header.textContent = todoItem.getTitle()\n\n    const delButton = document.createElement('button')\n    delButton.classList.add('buttonSmall')\n    delButton.textContent = '-'\n    delButton.onclick = function (event) {\n      project.removeFromTodoList(i)\n      createTodoView(project)\n      event.stopPropagation()\n      ;(0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveToLocalStorage)()\n    }\n\n    for (const el of [input, header, delButton]) {\n      todoItemHead.appendChild(el)\n    }\n\n    for (const el of [todoItemHead, metaList]) {\n      li.appendChild(el)\n    }\n\n    itemList.appendChild(li)\n  }\n\n  itemListDiv.appendChild(itemList)\n\n  for (const el of [projectDiv, itemListDiv]) {\n    view.appendChild(el)\n  }\n}\n\nfunction createMetaList (todoItem) {\n  const metaList = document.createElement('dl')\n  metaList.classList.add('metadataContainer')\n\n  const descripDiv = document.createElement('div')\n\n  const descripLabel = document.createElement('dt')\n  descripLabel.textContent = 'Description'\n  const description = document.createElement('dd')\n  description.textContent = todoItem.getDescrip() ?? 'None'\n\n  for (const el of [descripLabel, description]) {\n    descripDiv.appendChild(el)\n  }\n\n  const otherDiv = document.createElement('div')\n  const otherData = {\n    'Due Date': todoItem.getDueDate() ?? 'None',\n    Priority: todoItem.getPriority()\n  }\n\n  for (const pair of Object.entries(otherData)) {\n    const label = document.createElement('dt')\n    label.textContent = pair[0]\n    const content = document.createElement('dd')\n    content.textContent = pair[1]\n\n    for (const el of [label, content]) {\n      otherDiv.appendChild(el)\n    }\n  }\n\n  for (const el of [descripDiv, otherDiv]) {\n    metaList.appendChild(el)\n  }\n\n  return metaList\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/js/todoView.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;