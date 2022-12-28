import './style.css';
import {createDisplay, tabStatus} from './display'
import loadAllList from './all';
import loadStarredList from './starred';

const builtInList = {
  allList: [],
  starredList: []
};

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
};

function createTask() {

  const addTaskBtn = document.querySelector('.add-task-btn');
  const taskForm = document.querySelector('.task-form');
  const taskFormSubmitBtn = document.querySelector('.task-submit-btn');
  
  const taskTitle = document.querySelector("#title");
  const taskDescription = document.querySelector("#description");
  const taskDueDate = document.querySelector("#dueDate");

  let isAddBtnClicked = false;

  addTaskBtn.addEventListener('click', () => {
    if (isAddBtnClicked) {
      taskForm.style.visibility = 'hidden';
      isAddBtnClicked = false;
    } else {
      taskForm.style.visibility = 'visible';
      isAddBtnClicked = true;
    }
  })

  taskFormSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = new Task(taskTitle.value, taskDescription.value, 
    taskDueDate.value);

    console.log(builtInList);

    addTaskToDisplay(newTask);
    isAddBtnClicked = false;
    taskForm.style.visibility = 'hidden';
  })

};

function addTaskToDisplay(task) {

  const listContainer = document.querySelector('.list-container');

  const taskCardContainer = document.createElement("div");
  taskCardContainer.classList.add("task-card-container");

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  const taskCardInfo = document.createElement("div");
  taskCardInfo.classList.add("card-info");
  taskCardInfo.innerHTML = `Title: ${task.title}<br/> Description: ${task.description}<br/> Due Date: ${task.dueDate}`;

  const taskCardDelBtn = document.createElement("button");
  taskCardDelBtn.classList.add("card-delete-btn");
  taskCardDelBtn.textContent = "X";

  taskCard.append(taskCardInfo, taskCardDelBtn);
  taskCardContainer.append(taskCard);
  listContainer.append(taskCardContainer);

  taskCardDelBtn.addEventListener('click', () => {
    removeTaskFromDisplay(taskCardContainer);
  });

  return taskCardContainer;

};

function removeTaskFromDisplay(taskCardContainer) {

  taskCardContainer.remove();

};


function loadWebsite() {

  createDisplay();

  loadAllList();
  loadStarredList();
  createTask();

  const allList = document.querySelector('.all-list');
  tabStatus(allList);
  
};

export default loadWebsite;