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
/***/ (() => {

eval("\nconst mainContent = document.querySelector('.main-content');\nconst addTodoBtn = document.querySelector('.add-todo-btn');\nconst todoForm = document.querySelector('.todo-form');\nconst todoFormTitle = document.querySelector('#title');\nconst todoFormDescription = document.querySelector('#description');\nconst todoFormDueDate = document.querySelector('#dueDate');\nconst todoFormIsStarred = document.querySelector('#isStarred');\nconst submitBtn = document.querySelector('.submit-btn');\n\nlet formBtnClicked = false;\n\nlet todoItemList = [];\n\nclass Todo {\n  constructor(title, description, dueDate, isStarred) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.isStarred = isStarred;\n  }\n};\n\naddTodoBtn.addEventListener('click', () => {\n    if (formBtnClicked) {\n      todoForm.style.visibility = \"hidden\";\n      formBtnClicked = false;\n    } else {\n      todoForm.style.visibility = \"visible\";\n      formBtnClicked = true;\n    }\n});\n\n/* function createTodoItem(event) {\n  event.preventDefault();\n  const todoItem = new Todo(todoFormTitle.value, todoFormDescription.value, todoFormDueDate.value, todoFormIsStarred.value);\n  todoItemList.push(todoItem);\n  displayTodoItem(todoItem);\n  todoForm.style.visibility = \"hidden\";\n};\n\nfunction displayTodoItem(todoItem) {\n\n  const todoCardContainer = document.createElement('div');\n  todoCardContainer.classList.add('todo-card-container');\n\n  const todoCard = document.createElement('div');\n  todoCard.classList.add('todo-card');\n\n  const cardIcon = document.createElement('div');\n  cardIcon.classList.add('card-icon');\n\n  const cardInfo = document.createElement('div');\n  cardInfo.classList.add('card-info');\n  cardInfo.innerHTML = `Title: ${todoItem.title}<br/> Description: ${todoItem.description}<br/> Due Date: ${todoItem.dueDate}<br/> Is starred? ${isStarred}`;\n\n  todoCard.append(cardIcon, cardInfo);\n  todoCardContainer.append(todoCard);\n  mainContent.append(todoCardContainer);\n}\n\n*/\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;