
const mainContent = document.querySelector(".main-content");
const addTodoBtn = document.querySelector(".add-todo-btn");

const todoForm = document.querySelector(".todo-form");
const todoFormTitle = document.querySelector("#title");
const todoFormDescription = document.querySelector("#description");
const todoFormDueDate = document.querySelector("#dueDate");
const todoSubmitBtn = document.querySelector(".todo-submit-btn");


const listContainer = document.querySelector(".sidebar-lists");
const addListBtn = document.querySelector(".add-list-btn");

const listForm = document.querySelector(".list-form");
const listFormTitle = document.querySelector("#list-title");
const listSubmitBtn = document.querySelector(".list-submit-btn");


let addBtnClicked = false;
let listBtnClicked = false;

let allList = [];
let todayList = [];
let scheduledList = [];
let starredList = [];
let completedList = [];

class Todo {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
};

class List {
  constructor(title) {
    this.title = title;
  }
}


addTodoBtn.addEventListener("click", () => {
  if (addBtnClicked) {
    todoForm.style.visibility = "hidden";
    addBtnClicked = false;
  } else {
    todoForm.style.visibility = "visible";
    addBtnClicked = true;
  }
})

addListBtn.addEventListener("click", () => {
  if (listBtnClicked) {
    listForm.style.visibility = "hidden";
    listBtnClicked = false;
  } else {
    listForm.style.visibility = "visible";
    listBtnClicked = true;
    }
  })

todoSubmitBtn.addEventListener("click", createTodoItem);
listSubmitBtn.addEventListener("click", createList)

function createTodoItem (e) {

  e.preventDefault();
  const todoItem = new Todo(todoFormTitle.value, todoFormDescription.value, todoFormDueDate.value);
  allList.push(todoItem);
  displayTodoItem(todoItem);
  todoForm.style.visibility = "hidden";

};

function displayTodoItem (todoItem) {

  const todoCardContainer = document.createElement("div");
  todoCardContainer.classList.add("todo-card-container");

  const todoCard = document.createElement("div");
  todoCard.classList.add("todo-card");

  const cardIcon = document.createElement("div");
  cardIcon.classList.add("card-icon");

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  cardInfo.innerHTML = `Title: ${todoItem.title}<br/> Description: ${todoItem.description}<br/> Due Date: ${todoItem.dueDate}`;

  todoCard.append(cardIcon, cardInfo);
  todoCardContainer.append(todoCard);
  mainContent.append(todoCardContainer);

};

function createList (e) {

  e.preventDefault();
  const list = new List(listFormTitle.value);
  displayList(list);
  listForm.style.visibility = "hidden";

};

function displayList (listItem) {
  
  const list = document.createElement("div");
  list.classList.add('list');
  list.textContent = `${listItem.title}`;

  listContainer.append(list);

};