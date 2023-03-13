/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let {forEach, filter, map} = __webpack_require__(/*! ./lib */ \"./src/lib.js\");\n\nvar data = [5,4, 3,11,2,12];\n\n// forEach(data, console.log);\n\n//predicate (e) => e % 2 === 0\nlet evens = filter(data, e => e % 2 === 0);\n\nvar products = [\n    {\"name\": \"iPhone 13\", \"price\": 98000.00, \"category\" : \"mobile\"},\n    {\"name\": \"Sony Braiva\", \"price\": 145000.00, \"category\": \"tv\"},\n    {\"name\": \"Complete Ref JS\", \"price\": 1200.00, \"catgeory\" : \"book\"},\n    {\"name\": \"Samsung Fold\", \"price\": 158000.00, \"category\" : \"mobile\"},\n    {\"name\": \"LG OLED\", \"price\": 168000.00, \"category\" : \"tv\"}\n];\n\n// predicate e => e.category === 'mobile'\nvar mobiles = filter(products, e => e.category === 'mobile');\n\nforEach(evens, console.log);\nforEach(mobiles, console.log);\n\n//# sourceURL=webpack://webpackexample/./src/index.js?");

/***/ }),

/***/ "./src/lib.js":
/*!********************!*\
  !*** ./src/lib.js ***!
  \********************/
/***/ ((module) => {

eval("// HOF ==> functions which accept function as argument \n// [action is a function]\nfunction forEach(elems, action) {\n    for(i = 0 ; i < elems.length; i++) {\n        action(elems[i]);\n    }\n}\n\n// to get sub-set\nfunction filter(elems, predicate) {\n    var result = [];\n    for(i = 0 ; i < elems.length; i++) {\n       if(predicate(elems[i])) {\n        result.push(elems[i]);\n       }\n    }\n    return result;\n}\n\n// to transform data\nfunction map(elems, transformFn) {\n    var result = [];\n    for(i = 0 ; i < elems.length; i++) {\n        result.push(transformFn(elems[i]));\n    }\n    return result;\n}\n\nmodule.exports = {\n    forEach, filter, map\n}\n\n\n//# sourceURL=webpack://webpackexample/./src/lib.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;