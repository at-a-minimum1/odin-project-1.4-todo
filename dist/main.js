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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _modules_items_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/items/card */ \"./src/modules/items/card.js\");\n/* harmony import */ var _modules_items_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/items/item */ \"./src/modules/items/item.js\");\n/* harmony import */ var _modules_items_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/items/list */ \"./src/modules/items/list.js\");\n\n\n\n\n\nconst itemList = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List();\nconst cardList = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List();\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\tdocument.getElementById(\"addItem\").addEventListener(\"click\", () => {\n\t\tlet title = document.getElementById(\"title\").value;\n\t\tlet date = document.getElementById(\"dueDate\").value;\n\t\tconst item = new _modules_items_item__WEBPACK_IMPORTED_MODULE_2__.Item(title, date);\n\t\tconst card = new _modules_items_card__WEBPACK_IMPORTED_MODULE_1__.Card(item);\n\n\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addCard(\"resultsPanel\", card);\n\t\titemList.addToList(item);\n\t\tcardList.addToList(card);\n\n\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.clearForm();\n\t});\n\t\n\tconst taskModalWrapper = document.getElementById(\"modalWrapperTask\");\n\tconst projectModalWrapper = document.getElementById(\"modalWrapperProject\");\n\n\tconst addProject = document.getElementById(\"addProject\");\n\tconst addTask = document.getElementById(\"addTask\");\n\tconst taskModal = document.getElementById(\"taskModal\");\n\n\t// Pulls up the modal panel for adding projects\n\taddProject.addEventListener(\"click\", () => {\n\t\tprojectModalWrapper.classList.toggle(\"hide\");\n\t});\n\t// Brings up the modal panel for adding tasks\n\taddTask.addEventListener(\"click\", () => {\n\t\ttaskModalWrapper.classList.toggle(\"hide\");\n\t});\n\n\ttaskModalWrapper.addEventListener(\"click\", (event) => {\n\t\tif (event.target === taskModalWrapper) {\n\t\t\ttaskModalWrapper.classList.toggle(\"hide\");\n\t\t}\n\t});\n\tprojectModalWrapper.addEventListener(\"click\", (event) => {\n\t\tif (event.target === projectModalWrapper) {\n\t\t\tprojectModalWrapper.classList.toggle(\"hide\");\n\t\t}\n\t});\n\n\tdocument.getElementById(\"closeModalTask\").addEventListener(\"click\", () => {\n\t\ttaskModalWrapper.classList.toggle(\"hide\");\n\t});\n\tdocument.getElementById(\"closeModalProject\").addEventListener(\"click\", () => {\n\t\tprojectModalWrapper.classList.toggle(\"hide\");\n\t});\n});\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"expand\": () => (/* binding */ expand),\n/* harmony export */   \"removeCard\": () => (/* binding */ removeCard),\n/* harmony export */   \"strikeThrough\": () => (/* binding */ strikeThrough),\n/* harmony export */   \"updateDOM\": () => (/* binding */ updateDOM)\n/* harmony export */ });\n/* harmony import */ var _items_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/card */ \"./src/modules/items/card.js\");\n\n\nfunction addCard(id, card) {\n\tif (card == null) {\n\t\tconst card = new _items_card__WEBPACK_IMPORTED_MODULE_0__.Card(\"Error\", \"07/02/2050\");\n\t\tconsole.log(\"Card was null SAD!\");\n\t} else {\n\t\tthis.card = card;\n\t}\n\tconst target = document.getElementById(id);\n\ttarget.appendChild(card);\n}\n\nfunction removeCard() {\n\t// card.remove();\n\tconsole.log(\"remove card invoked\");\n}\n\nfunction clearForm() {\n\tlet title = document.getElementById(\"title\");\n\tlet priority = document.getElementById(\"priorityDropDown\");\n\tlet date = document.getElementById(\"dueDate\");\n\ttitle.value = \"-No Title-\";\n\tdate.value = \"2024-06-11\";\n}\n\nfunction strikeThrough(card) {\n\tthis.card.classList.toggle(\"strike_through\");\n}\n\nfunction expand(card) {\n\t// Access the child of the card element and unhide it.\n\tlet cardDetails = card.querySelector(\".cardDetails\");\n\tcardDetails.classList.toggle(\"show\");\n}\n\nfunction updateDOM(itemArray) {\n\tfor (item in itemArray) {\n\t\t// let cards = new Card(new Card(item.getTitle, item.getDate));\n\t\taddCard(\"resultPanel\", new _items_card__WEBPACK_IMPORTED_MODULE_0__.Card(item.getTitle, item.getDate));\n\t}\n}\n\n// clearDOM(id){\n// \tlet target = document.getElementById(id);\n// \ttarget.innerHTML = \"\";\n// }\n\n// export function updateDOM(itemList) {\n// \tclearDOM();\n// \tfor (let item of itemList) {\n// \t\tlet title = item.getTitle();\n// \t\tlet date = item.getDate();\n// \t\tcard = new Card(title, date);\n// \t\taddCard(card);\n// \t}\n// }\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/card.js":
/*!***********************************!*\
  !*** ./src/modules/items/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ \"./src/modules/items/item.js\");\n/* harmony import */ var _dom_domControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/domControl.js */ \"./src/modules/dom/domControl.js\");\n// @collappse\n// import itemList from \"./itemList.js\";\n\n\n\n\nclass Card extends HTMLElement {\n\tconstructor(...args) {\n\t\tsuper(...args);\n\n\t\tthis.attachShadow({ mode: \"open\" });\n\t\tconst expandWrapper = document.createElement(\"div\");\n\t\tconst dateWrapper = document.createElement(\"div\");\n\t\tconst title = document.createElement(\"h4\");\n\t\tconst date = document.createElement(\"h4\");\n\t\tconst expandButton = document.createElement(\"button\");\n\t\tconst cardDetailsWrapper = document.createElement(\"div\");\n\t\tconst cardDetails = document.createElement(\"div\");\n\t\tconst input = document.createElement(\"input\");\n\t\tconst checkmark = document.createElement(\"span\");\n\t\tconst container = document.createElement(\"label\");\n\n\t\tinput.setAttribute(\"type\", \"checkbox\");\n\n\t\t// Pull this out and make it a method\n\t\ttitle.classList.add(\"card-title\");\n\t\tdate.classList.add(\"date\");\n\t\tdateWrapper.classList.add(\"date-wrapper\");\n\t\texpandButton.classList.add(\"expand-btn\");\n\t\texpandWrapper.classList.add(\"expand-wrapper\");\n\t\t// cardDetailsWrapper.classList.add(\"card_details_wrapper\", \"hideDetails\");\n\t\tcardDetailsWrapper.classList.add(\"card_details_wrapper\");\n\t\tcardDetails.classList.add(\"card_details\");\n\n\t\t// TODO I need to update this to make sure it's receiving the values from the item it's referencing.I'm going to use getters from the item to instantiate the title, date, priority, etc\n\t\ttitle.textContent = args[0];\n\t\tdate.textContent = args[1];\n\t\texpandButton.innerHTML = `&darr;`;\n\t\tcardDetails.textContent = \"Card Expanded\";\n\t\tcardDetailsWrapper.textContent = \"Wrapper here\";\n\t\tthis.shadowRoot.innerHTML = this.cardStyle();\n\n\t\tinput.classList.add(\"inputs\");\n\t\tcheckmark.classList.add(\"checkmark\");\n\t\tcontainer.classList.add(\"container\");\n\n\t\tcontainer.appendChild(input);\n\t\tcontainer.appendChild(checkmark);\n\t\tdateWrapper.appendChild(date);\n\t\texpandWrapper.appendChild(expandButton);\n\n\t\tcardDetailsWrapper.appendChild(cardDetails);\n\n\t\tconst lineThrough = () => {\n\t\t\ttitle.classList.toggle(\"strike-through\");\n\t\t};\n\t\tinput.addEventListener(\"click\", lineThrough);\n\t\tconst expand = () => {\n\t\t\t// Expand the card\n\t\t\tthis.classList.toggle(\"expanded\");\n\t\t\t// cardDetailsWrapper.classList.toggle(\"hideDetails\");\n\t\t\t// cardDetailsWrapper.classList.toggle(\"show\");\n\t\t\t// this.style.height = \"200px\";\n\t\t\tconsole.log(\"Expand button pressed\");\n\t\t};\n\t\texpandButton.addEventListener(\"click\", expand);\n\n\t\t// container.appendChild(cardDetailsWrapper);\n\t\t// Appending the elements\n\t\tcontainer.appendChild(cardDetailsWrapper);\n\t\tthis.shadowRoot.appendChild(container);\n\t\tthis.shadowRoot.appendChild(title);\n\t\tthis.shadowRoot.appendChild(dateWrapper);\n\t\tthis.shadowRoot.appendChild(expandWrapper);\n\t\tthis.shadowRoot.appendChild(cardDetailsWrapper);\n\t}\n\n\t// Modifiers\n\n\tgetTitle() {\n\t\treturn this.titleText;\n\t}\n\tsetTitle(title) {\n\t\tthis.title.textContent = title;\n\t}\n\tgetDate() {\n\t\treturn this.date;\n\t}\n\tsetDate(date) {\n\t\tthis.date = date;\n\t}\n\tcardStyle() {\n\t\treturn `<style>\n\t\t\t.expand-btn {\n\t\t\t\theight: fit-content;\n\t\t\t}\n\t\t\t.expanded{\n\t\t\t\theight: 200px;\n\t\t\t}\n\t\t\t.container {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: relative;\n\t\t\t\tpadding-left: 35px;\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: 22px;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t\ttransform: translate(10px, -30px);\n\t\t\t}\n\n\t\t\t.show {\n\t\t\t\tdisplay: block;\n\t\t\t\theight: 200px;\n\t\t\t}\n\n\t\t\t.hideDetails {\n\t\t\t\t/* display: none !important; */\n\t\t\t\tdisplay: none;\n\t\t\t\ttransition: height 0.5s ease;\n\t\t\t}\n\n\t\t\t.card_details_wrapper {\n\t\t\t\tdisplay: none;\n\t\t\t\theight: 0;\n\t\t\t\tgrid-column-start: span 4;\n\t\t\t\tbackground-color: white;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 200px;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t\ttransform: translateY(-22px);\n\t\t\t\tbox-shadow: 0 1px 1px 0 #5a6161;\n\n\t\t\t\t/* margin-top: 15px; */\n\t\t\t\t/* margin-bottom: 20px; */\n\t\t\t\t/* box-shadow: 0 4px 2px 0 #5a6161; */\n\t\t\t}\n\t\t\t.card_details_wrapper {\n  \t\t\t\ttransition: height 0.5s ease;\n\t\t\t}\n\t\t\t.card_details {\n\t\t\t\tbackground-color: white;\n\t\t\t\twidth: 100%;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t}\n\n\t\t\t/* Hide the browser's default checkbox */\n\t\t\t.container input {\n\t\t\t\tposition: absolute;\n\t\t\t\topacity: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t\theight: 0;\n\t\t\t\twidth: 0;\n\t\t\t}\n\n\t\t\t/* Create a custom checkbox */\n\t\t\t.checkmark {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 50px;\n\t\t\t\twidth: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #eee;\n\t\t\t}\n\n\t\t\t/* On mouse-over, add a grey background color */\n\t\t\t.container:hover input ~ .checkmark {\n\t\t\t\tbackground-color: #ccc;\n\t\t\t}\n\n\t\t\t/* When the checkbox is checked, add a blue background */\n\t\t\t.container input:checked ~ .checkmark {\n\t\t\t\tbackground-color: #2196f3;\n\t\t\t}\n\n\t\t\t.card-title{\n\t\t\t\ttransform: translate(30px);\n\t\t\t}\n\t\t\t.strike-through{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t</style> `;\n\t}\n}\n\ncustomElements.define(\"custom-card\", Card);\n\n// display: grid;\n// \tgrid-template-columns: 70px 1fr 0.5fr 40px;\n// \tbackground-color: white;\n// \twidth: 100%;\n// \theight: 70px;\n// \tjustify-content: center;\n// \talign-items: center;\n// \tposition: relative;\n// \tmargin-top: 15px;\n// \tmargin-bottom: 20px;\n// \tbox-shadow: 0 4px 2px 0 #5a6161;\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/card.js?");

/***/ }),

/***/ "./src/modules/items/item.js":
/*!***********************************!*\
  !*** ./src/modules/items/item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\n\tconstructor(...args) {\n\t\tthis.title = args[0];\n\t\tthis.date = args[1];\n\t\tthis.type = args[2];\n\t\tthis.description = args[3];\n\t\tthis.priority = args[4];\n\t}\n\tset setTitle(title) {\n\t\ttitle = this.title;\n\t}\n\tget getTitle() {\n\t\treturn this.title;\n\t}\n\n\tset setTitle(date) {\n\t\tthis.date = date;\n\t}\n\tget getDate() {\n\t\treturn this.date;\n\t}\n\n\tset setDescription(description) {\n\t\tthis.description = description;\n\t}\n\tget getDescription() {\n\t\treturn this.description;\n\t}\n\n\tset setPriority(priority) {\n\t\tthis.priority = priority;\n\t}\n\tget getPriority() {\n\t\treturn this.priority;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/item.js?");

/***/ }),

/***/ "./src/modules/items/list.js":
/*!***********************************!*\
  !*** ./src/modules/items/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n// import \"item.js\";\n\nclass List {\n\tconstructor(list) {\n\t\tthis.list = list || [];\n\t}\n\tget getlist() {\n\t\treturn this.list;\n\t}\n\tset setlist(list) {\n\t\tthis.list = list;\n\t}\n\taddToList(item) {\n\t\tthis.list.push(item);\n\t}\n\tremoveFromList(item) {\n\t\tlet indexToRemove = this.list.indexOf(item);\n\t\t// if (indexToRemove >= 0) {\n\t\tthis.list.splice(indexToRemove, 1);\n\t\t// } else {\n\t\t// throw new console.error(\"item not found\");\n\t\tconsole.log(\"item not found\");\n\t\t// }\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/list.js?");

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