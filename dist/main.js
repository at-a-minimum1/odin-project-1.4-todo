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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ \"./src/modules/items/item.js\");\n/* harmony import */ var _dom_domControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/domControl.js */ \"./src/modules/dom/domControl.js\");\n// @collappse\n// import itemList from \"./itemList.js\";\n\n\n\n\nclass Card extends HTMLElement {\n\tconstructor(item) {\n\t\tsuper();\n\t\tthis.attachShadow({ mode: \"open\" });\n\n\t\t// this.item = item;\n\t\tconst itemTitle = \"item.getTitle()\";\n\t\tconst itemDate = \"item.getDate()\";\n\t\tconst itemPriority = \"item.getPriority()\";\n\t\tconst itemDescription = \"item.getDescription()\";\n\n\t\tthis.classList.add(\"collapsible-card\");\n\n\t\t// Outside wrappers and classes in them\n\t\tconst leftWrap = document.createElement(\"div\");\n\t\tconst centerWrap = document.createElement(\"div\");\n\t\tconst rightWrap = document.createElement(\"div\");\n\t\tconst formActionWrapper = document.createElement(\"div\");\n\t\tleftWrap.classList.add(\"left-wrapper\", \"priority-high\");\n\t\tcenterWrap.classList.add(\"center-wrapper\");\n\t\trightWrap.classList.add(\"right-wrapper\");\n\t\tformActionWrapper.classList.add(\"form-action-wrapper\", \"priority-high\");\n\n\t\t// Elements in leftWrap and classes in them\n\t\tconst inputWrap = document.createElement(\"div\");\n\t\tinputWrap.classList.add(\"input-wrapper\");\n\t\tconst labelContainer = document.createElement(\"label\");\n\t\tlabelContainer.classList.add(\"container\");\n\t\tconst checkbox = document.createElement(\"input\");\n\t\tconst checkmark = document.createElement(\"span\");\n\t\tcheckbox.setAttribute(\"type\", \"checkbox\");\n\t\tinputWrap.append(labelContainer, checkbox, checkmark);\n\t\tleftWrap.append(inputWrap);\n\n\t\t// Elements in centerWrap and classes in them\n\t\tconst header = document.createElement(\"div\");\n\t\theader.classList.add(\"collapsible-header\");\n\t\tconst titleWrap = document.createElement(\"div\");\n\t\ttitleWrap.classList.add(\"collapsible-title\");\n\t\tconst taskTitle = document.createElement(\"h3\");\n\t\ttaskTitle.textContent = \"Title\";\n\t\theader.append(titleWrap);\n\t\ttitleWrap.append(taskTitle);\n\t\tconst content = document.createElement(\"div\");\n\t\tcontent.classList.add(\"collapsible-content\", \"hide\");\n\t\tconst formWrap = document.createElement(\"div\");\n\t\tformWrap.classList.add(\"form_wrapper\");\n\n\t\t// Form elements go here\n\t\tconst title = document.createElement(\"label\");\n\t\ttitle.setAttribute(\"for\", \"title\");\n\t\ttitle.textContent = \"Title\";\n\t\tconst inputTitle = document.createElement(\"input\");\n\t\tinputTitle.setAttribute(\"type\", \"text\");\n\t\tinputTitle.value = \"Sample Task\";\n\t\tconst priority = document.createElement(\"label\");\n\t\tpriority.setAttribute(\"for\", \"priorityDropdown\");\n\t\tpriority.textContent = \"Priority\";\n\t\tconst selectPriority = document.createElement(\"select\");\n\t\tselectPriority.setAttribute(\"id\", \"priorityDropdown\");\n\t\tselectPriority.textContent = \"Priority\";\n\t\t// Create the High priority option\n\t\tconst priorityHigh = document.createElement(\"option\");\n\t\tpriorityHigh.setAttribute(\"value\", \"priorityHigh\");\n\t\tpriorityHigh.textContent = \"High\";\n\t\t// Create the Normal priority option (and set it as selected)\n\t\tconst priorityNormal = document.createElement(\"option\");\n\t\tpriorityNormal.setAttribute(\"value\", \"priorityMedium\");\n\t\tpriorityNormal.setAttribute(\"selected\", \"\");\n\t\tpriorityNormal.textContent = \"Normal\";\n\t\t// Create the Low priority option\n\t\tconst priorityLow = document.createElement(\"option\");\n\t\tpriorityLow.setAttribute(\"value\", \"priorityLow\");\n\t\tpriorityLow.textContent = \"Low\";\n\t\tselectPriority.append(priorityHigh, priorityNormal, priorityLow);\n\t\tformWrap.append(title, inputTitle, priority, selectPriority);\n\n\t\tconst dueDate = document.createElement(\"label\");\n\t\tdueDate.setAttribute(\"for\", \"dueDate\");\n\t\tdueDate.textContent = \"Due Date\";\n\t\t// dueDate.textContent = item.get\n\t\tconst inputDueDate = document.createElement(\"input\");\n\t\tinputDueDate.setAttribute(\"type\", \"date\");\n\t\tinputDueDate.setAttribute(\"id\", \"dueDate\");\n\t\tinputDueDate.setAttribute(\"value\", \"2050-07-02\");\n\n\t\tformWrap.append(dueDate, inputDueDate);\n\t\tcontent.append(formWrap);\n\t\tcenterWrap.append(header, content);\n\t\t// Create new div element with class \"date\"\n\t\tconst dateDiv = document.createElement(\"div\");\n\t\tdateDiv.classList.add(\"date\");\n\n\t\t// Create new h3 element with text \"Date\"\n\t\tconst dateHeader = document.createElement(\"h3\");\n\t\tdateHeader.textContent = \"Date\";\n\n\t\t// Append the dateHeader to the dateDiv\n\t\tdateDiv.appendChild(dateHeader);\n\n\t\t// Create new h3 element with class \"description-header hide\" and text \"Description:\"\n\t\tconst descriptionHeader = document.createElement(\"h3\");\n\t\tdescriptionHeader.classList.add(\"description-header\", \"hide\");\n\t\tdescriptionHeader.textContent = \"Description:\";\n\n\t\t// Create new textarea element with class \"description hide\"\n\t\tconst descriptionTextarea = document.createElement(\"textarea\");\n\t\tdescriptionTextarea.classList.add(\"description\", \"hide\");\n\n\t\t// Append the descriptionHeader and descriptionTextarea to the rightWrapper\n\t\trightWrap.append(dateDiv, descriptionHeader, descriptionTextarea);\n\n\t\t// Elements in formActionWrapper and classes in them\n\n\t\t// Create expand button\n\t\tconst expandButton = document.createElement(\"button\");\n\t\texpandButton.classList.add(\"collapsible-btn\");\n\t\texpandButton.textContent = \"Expand\";\n\n\t\t// Create save-delete-wrapper element with class \"hide\"\n\t\tconst saveDeleteWrapper = document.createElement(\"div\");\n\t\tsaveDeleteWrapper.classList.add(\"edit-delete-wrapper\", \"hide\");\n\n\t\t// Create save button\n\t\tconst saveButton = document.createElement(\"button\");\n\t\tsaveButton.classList.add(\"edit\");\n\t\tsaveButton.textContent = \"Save\";\n\n\t\t// Create delete button\n\t\tconst deleteButton = document.createElement(\"button\");\n\t\tdeleteButton.classList.add(\"delete\");\n\t\tdeleteButton.textContent = \"Delete\";\n\n\t\t// Append buttons to save-delete-wrapper element\n\t\tsaveDeleteWrapper.append(saveButton, deleteButton);\n\n\t\t// Append elements to form-action-wrapper element\n\t\tformActionWrapper.append(expandButton, saveDeleteWrapper);\n\n\t\t// Append wrappers to card\n\t\t// this.append(leftWrap, centerWrap, rightWrap, formActionWrapper);\n\t\t// const shadowCard = this;\n\t\tthis.shadowRoot.append(leftWrap, centerWrap, rightWrap, formActionWrapper);\n\t}\n\n\t// Modifiers\n\n\tgetTitle() {\n\t\treturn this.titleText;\n\t}\n\tsetTitle(title) {\n\t\tthis.title.textContent = title;\n\t}\n\tgetDate() {\n\t\treturn this.date;\n\t}\n\tsetDate(date) {\n\t\tthis.date = date;\n\t}\n\tcardStyle() {\n\t\treturn `<style>\n\t\t\t.collapsible-container {\n\t\t\tmargin: 20px;\n\t\t\t}\n\n\t\t\th3{\n\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.priority-high{\n\t\t\tbackground-color: red; \n\t\t\t}\n\n\t\t\t.collapsible-card{\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 100px 1fr 0.5fr 100px;\n\t\t\tbackground-color: #fff;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n\t\t\tmargin-bottom: 20px;\n\t\t\t}\n\t\t\t.border{\n\t\t\t\tborder: solid red;\n\t\t\t\n\t\t\t}\n\n\n\t\t\t/* .collapsible-card { */\n\t\t\t/*   display: grid; */\n\t\t\t/*   grid-template-columns: 1fr 1fr; */\n\t\t\t/*   background-color: #fff;\n\t\t\tborder-radius: 4px;\n\t\t\tbox-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n\t\t\tmargin-bottom: 20px; */\n\t\t\t/* } */\n\n\t\t\t.collapsible-header {\n\t\t\t\n\t\t\talign-items: center;\n\t\t\tjustify-content: space-between;\n\t\t\tpadding: 0 10px;\n\t\t\t\n\t\t\t/*   cursor: pointer; */\n\t\t\t}\n\n\t\t\t.collapsible-title {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 80px 1fr 120px;\n\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.collapsible-btn {\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tfont-size: 16px;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: flex;\n\t\t\talign-content: flex-end;\n\t\t\tjustify-content: flex-end;\n\t\t\twidth: 100%;\n\t\t\tpadding: 10px;\n\t\t\t}\n\n\t\t\t.edit{\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tfont-size: 16px;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: flex;\n\t\t\talign-content: flex-end;\n\t\t\tjustify-content: flex-end;\n\t\t\twidth: 100%;\n\t\t\tpadding: 10px;\n\t\t\t}\n\n\t\t\t.delete{\n\t\t\tborder: none;\n\t\t\tbackground-color: transparent;\n\t\t\tfont-size: 16px;\n\t\t\tcursor: pointer;\n\t\t\tdisplay: flex;\n\t\t\talign-content: flex-end;\n\t\t\tjustify-content: flex-end;\n\t\t\twidth: 100%;\n\t\t\tpadding: 10px;\n\t\t\t}\n\n\n\n\t\t\t.collapsible-content {\n\t\t\tpadding: 10px;\n\t\t\t/*   transition: height 0.5s ease; */\n\t\t\ttransition: height;\n\t\t\toverflow: hidden;\n\t\t\t}\n\n\t\t\t.collapsible-card.expanded .collapsible-content {\n\t\t\theight: auto;\n\t\t\t}\n\t\t\t/* Use this for the arrow */\n\t\t\t/* .collapsible-card.expanded .collapsible-btn {\n\t\t\ttransform: rotate(180deg);\n\t\t\t} */\n\n\t\t\t.collapsible-card + .collapsible-card {\n\t\t\tmargin-top: 20px;\n\t\t\t}\n\n\t\t\t.hide{\n\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t/* My stuff from here */\n\n\t\t\t.form_wrapper{\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t}\n\n\t\t\t.form-action-wrapper{\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-content: space-between; \n\t\t\tjustify-content: space-between;\n\t\t\t}\n\n\t\t\t.description-wrapper {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\theight: 100%;\n\t\t\t}\n\n\t\t\t.description {\n\t\t\tflex-grow: 1;\n\t\t\twidth: 98%;\n\t\t\theight: 70%;\n\t\t\tbox-sizing: border-box;\n\t\t\tpadding: 10px;\n\t\t\tborder: 1px solid #ccc;\n\t\t\tborder-radius: 4px;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tresize: none;\n\t\t\t}\n\n\n\t\t\t/* Custom element checkmark input */\n\t\t\t.container {\n\t\t\tdisplay: block;\n\t\t\tposition: relative;\n\t\t\tpadding-left: 35px;\n\t\t\tmargin-bottom: 12px;\n\t\t\tcursor: pointer;\n\t\t\tfont-size: 22px;\n\t\t\t-webkit-user-select: none;\n\t\t\t-moz-user-select: none;\n\t\t\t-ms-user-select: none;\n\t\t\tuser-select: none;\n\t\t\t}\n\n\t\t\t/* Hide the browser's default checkbox */\n\t\t\t.container input {\n\t\t\tposition: absolute;\n\t\t\topacity: 0;\n\t\t\tcursor: pointer;\n\t\t\theight: 0;\n\t\t\twidth: 0;\n\t\t\t}\n\n\t\t\t/* Create a custom checkbox */\n\t\t\t.checkmark {\n\t\t\tposition: absolute;\n\t\t\ttop: 0;\n\t\t\tleft: 0;\n\t\t\theight: 30px;\n\t\t\twidth: 30px;\n\t\t\tbackground-color: #eee;\n\t\t\tborder-radius: 50px;\n\t\t\ttransform: translateX(20px);\n\t\t\t/*   transform: translateY(-3px); */\n\t\t\t}\n\n\t\t\t/* On mouse-over, add a grey background color */\n\t\t\t.container:hover input ~ .checkmark {\n\t\t\tbackground-color: #ccc;\n\t\t\t}\n\n\t\t\t/* When the checkbox is checked, add a blue background */\n\t\t\t.container input:checked ~ .checkmark {\n\t\t\tbackground-color: #2196F3;\n\t\t\t}\n\n\t\t\t/* Create the checkmark/indicator (hidden when not checked) */\n\t\t\t.checkmark:after {\n\t\t\tcontent: \"\";\n\t\t\tposition: absolute;\n\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\t/* Show the checkmark when checked */\n\t\t\t.container input:checked ~ .checkmark:after {\n\t\t\tdisplay: block;\n\t\t\t}\n\t\t\t</style> `;\n\t}\n}\n\ncustomElements.define(\"custom-card\", Card);\n\n// display: grid;\n// \tgrid-template-columns: 70px 1fr 0.5fr 40px;\n// \tbackground-color: white;\n// \twidth: 100%;\n// \theight: 70px;\n// \tjustify-content: center;\n// \talign-items: center;\n// \tposition: relative;\n// \tmargin-top: 15px;\n// \tmargin-bottom: 20px;\n// \tbox-shadow: 0 4px 2px 0 #5a6161;\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/card.js?");

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