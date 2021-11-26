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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package.json */ \"./package.json\");\n// import postcss from \"postcss\";\r\n\r\n\r\nconst plugin = (opts = {}) => {\r\n  return {\r\n    postcssPlugin: _package_json__WEBPACK_IMPORTED_MODULE_0__.name,\r\n    \r\n    Once(root) {\r\n      // Plugin code\r\n      let appliedClasses = new Set();\r\n      let applies = new Set();\r\n      \r\n      root.walkRules(function(rule) {\r\n        for (let node of rule.nodes) {\r\n          if (node.type === \"atrule\") {\r\n            appliedClasses.add(node.parent.selector);\r\n            let g = node.params.split(\" \");\r\n            g.forEach(cls => {\r\n              applies.add(cls);\r\n            });\r\n          }\r\n        }\r\n      });\r\n      \r\n      // find class  css that using @apply\r\n      let applyClassesCss = new Map;\r\n      root.walkDecls(function(decls) {\r\n        let selector = decls.parent.selector;\r\n        if (applies.has(selector.slice(1))) {\r\n          applyClassesCss.set(decls.prop, decls.value);\r\n        }\r\n      });\r\n      \r\n      // remove @apply custom attribute  add class css that applied.\r\n      root.walkRules(function(rule) {\r\n        let e = appliedClasses.has(rule.selector);\r\n        if (e) {\r\n          for (const applyCss of applyClassesCss) {\r\n            rule.append({ prop: applyCss[0], value: applyCss[1] });\r\n          }\r\n          \r\n          for (let n of rule.nodes) {\r\n            if (n.name === \"apply\") {\r\n              n.remove();\r\n            }\r\n          }\r\n        }\r\n      });\r\n    }\r\n  };\r\n};\r\n\r\n\r\n// function run(css) {\r\n//   let output = postcss([plugin()]).process(css);\r\n//   console.log(output.toString());\r\n// }\r\n\r\n// run(`\r\n//   .app{background: red}\r\n//   .title{\r\n//     @apply app\r\n//   }\r\n// `);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (plugin);\n\n//# sourceURL=webpack://postcss-class-apply/./src/index.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"postcss-class-apply\",\"version\":\"0.0.1\",\"description\":\"PostCSS plugin enabling custom class sets references\",\"keywords\":[\"css\",\"class apply\",\"apply\",\"@apply\",\"postcss\",\"postcss class @appy plugin\",\"postcss-plugin\"],\"author\":{\"name\":\"Rasel mahmud\",\"url\":\"https://github.com/rasel-code-dev\"},\"homepage\":\"https://github.com/rasel-code-dev/postcss-class-apply\",\"bugs\":\"https://github.com/rasel-code-dev/postcss-class-apply/issues\",\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/rasel-code-dev/postcss-class-apply.git\"},\"license\":\"Unlicense\",\"files\":[\"dist\",\"CHANGELOG.md\",\"index.js\",\"README.md\",\"UNLICENSE\"],\"scripts\":{\"build\":\"export NODE_ENV=production&&webpack\",\"lint\":\"eslint src/\",\"dev\":\"webpack --watch\",\"start\":\"nodemon dist/index.js\"},\"peerDependencies\":{\"postcss\":\"^8.4.1\"},\"devDependencies\":{\"jest\":\"^27.3.1\",\"nodemon\":\"^2.0.15\",\"webpack\":\"^5.64.4\",\"webpack-cli\":\"^4.9.1\",\"prettier\":\"^2.5.0\",\"eslint\":\"^8.3.0\",\"eslint-config-airbnb-base\":\"^15.0.0\",\"eslint-config-prettier\":\"^8.3.0\",\"eslint-plugin-import\":\"^2.25.3\",\"eslint-plugin-prettier\":\"^4.0.0\"}}');\n\n//# sourceURL=webpack://postcss-class-apply/./package.json?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;