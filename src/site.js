import './style.css';
import createDisplay from './display'
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

const taskController = (() => {

  let isAddBtnClicked = false;

  const initiateTaskForm = () => {

    const addTaskBtn = document.querySelector('.add-task-btn');
    const taskForm = document.querySelector('.task-form');
    
    addTaskBtn.addEventListener('click', () => {
      if (isAddBtnClicked) {
        taskForm.style.visibility = 'hidden';
        isAddBtnClicked = false;
      } else {
        taskForm.style.visibility = 'visible';
        isAddBtnClicked = true;
      }
    })
  }

  const submitTaskForm = () => {

    const submitTaskFormBtn = document.querySelector('.task-submit-btn');
    const taskForm = document.querySelector('.task-form');
    const taskTitle = document.querySelector("#title");
    const taskDescription = document.querySelector("#description");
    const taskDueDate = document.querySelector("#dueDate");
    
    submitTaskFormBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const newTask = new Task(taskTitle.value, taskDescription.value, taskDueDate.value);
      addTaskToDisplay(newTask);
      isAddBtnClicked = false;
      taskForm.style.visibility = 'hidden';
    })
  }

  const addTaskToDisplay = (newTask) => {
  
    const listContainer = document.querySelector('.list-container');

    const taskCardContainer = document.createElement("div");
    taskCardContainer.classList.add("task-card-container");

    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");

    const taskCardInfo = document.createElement("div");
    taskCardInfo.classList.add("card-info");
    taskCardInfo.innerHTML = `Title: ${newTask.title}<br/> Description: ${newTask.description}<br/> Due Date: ${newTask.dueDate}`;

    const taskCardDelBtn = document.createElement("button");
    taskCardDelBtn.classList.add("card-delete-btn");
    taskCardDelBtn.textContent = "X";

    taskCard.append(taskCardInfo, taskCardDelBtn);
    taskCardContainer.append(taskCard);

    listContainer.append(taskCardContainer);

    taskCardDelBtn.addEventListener('click', () => {
      taskCardContainer.remove();
    })
  }

  return {
    initiateTaskForm,
    submitTaskForm,
    addTaskToDisplay
  }

})();

const listSelector = (() => {

  const listStatus = () => {

    const sidebarAllList = document.querySelector('.sidebar-all-list');
    const sidebarStarredList = document.querySelector('.sidebar-starred-list');

    sidebarAllList.addEventListener('click', (tab) => {
      if (tab.target.classList.contains('active')) return;
      tabStatus(sidebarAllList);
    })

    sidebarStarredList.addEventListener('click', (tab) => {
      if (tab.target.classList.contains('active')) return;
      tabStatus(sidebarStarredList);
    })
  }

  return {
    listStatus
  }

})();

function tabStatus(tab) {

  const taskTabs = document.querySelectorAll('.sidebar-tasks-tab');

  taskTabs.forEach((tab) => {
    if (tab !== this) {
      tab.classList.remove('active');
    }
  })
  tab.classList.add('active');
};

function loadWebsite() {

  createDisplay();
  loadAllList();

  const sidebarAllList = document.querySelector('.sidebar-all-list');
  tabStatus(sidebarAllList);
  listSelector.listStatus();

  taskController.initiateTaskForm();
  taskController.submitTaskForm();

};

export default loadWebsite;