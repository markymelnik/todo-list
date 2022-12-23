import './style.css';
import loadAllList from './all.js';
import loadTodayList from './today.js';
import loadScheduledList from './scheduled.js';
import loadStarredList from './starred.js';
import loadCompletedList from './completed.js';

const builtInList = {
  allList: [],
  todayList: [],
  scheduledList: [],
  starredList: [],
  completedList: []
};

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
};

function createTopper() {

  const topper = document.createElement('div');
  topper.classList.add('topper');

  topper.append(createSidebar(), createMain(), createButtons());

  return topper;
  
}

function createSidebar() {

  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');

  const logoText = document.createElement('div');
  logoText.classList.add('logo-text');
  logoText.textContent = 'Logo';

  logoContainer.append(logoText);
  
  sidebar.append(logoContainer, createSidebarTasks(), createSidebarLists());

  return sidebar;

}

function createSidebarTasks() {

  const sidebarTasksContainer = document.createElement('div');
  sidebarTasksContainer.classList.add('sidebar-tasks-container');

  const sidebarTasksHeader = document.createElement('div');
  sidebarTasksHeader.classList.add('sidebar-header');
  sidebarTasksHeader.textContent = 'Tasks';

  const sidebarTasks = document.createElement('div');
  sidebarTasks.classList.add('sidebar-tasks');

  const sidebarAll = document.createElement('div');
  sidebarAll.classList.add('sidebar-tasks-tab', 'all-list');
  sidebarAll.textContent = 'All';
  sidebarAll.addEventListener('click', (tab) => {
    if (tab.target.classList.contains('active')) return;
    tabStatus(sidebarAll);
    loadAllList();
  })

  const sidebarToday = document.createElement('div');
  sidebarToday.classList.add('sidebar-tasks-tab', 'today-list');
  sidebarToday.textContent = 'Today';
  sidebarToday.addEventListener('click', (tab) => {
    if (tab.target.classList.contains('active')) return;
    tabStatus(sidebarToday);
    loadTodayList();
  })

  const sidebarScheduled = document.createElement('div');
  sidebarScheduled.classList.add('sidebar-tasks-tab', 'scheduled-list');
  sidebarScheduled.textContent = 'Scheduled';
  sidebarScheduled.addEventListener('click', (tab) => {
    if (tab.target.classList.contains('active')) return;
    tabStatus(sidebarScheduled);
    loadScheduledList();
  })

  const sidebarStarred = document.createElement('div');
  sidebarStarred.classList.add('sidebar-tasks-tab', 'starred-list');
  sidebarStarred.textContent = 'Starred';
  sidebarStarred.addEventListener('click', (tab) => {
    if (tab.target.classList.contains('active')) return;
    tabStatus(sidebarStarred);
    loadStarredList();
  })

  const sidebarCompleted = document.createElement('div');
  sidebarCompleted.classList.add('sidebar-tasks-tab', 'completed-list');
  sidebarCompleted.textContent = 'Completed';
  sidebarCompleted.addEventListener('click', (tab) => {
    if (tab.target.classList.contains('active')) return;
    tabStatus(sidebarCompleted);
    loadCompletedList();
  })

  sidebarTasks.append(sidebarAll, sidebarToday, sidebarScheduled, sidebarStarred, sidebarCompleted);

  sidebarTasksContainer.append(sidebarTasksHeader, sidebarTasks);

  return sidebarTasksContainer;

}

function createSidebarLists() {

  const sidebarListsContainer = document.createElement('div');
  sidebarListsContainer.classList.add('sidebar-lists-container');

  const sidebarListsHeader = document.createElement('div');
  sidebarListsHeader.classList.add('sidebar-header');
  sidebarListsHeader.textContent = 'Lists';

  const sidebarLists = document.createElement('div');
  sidebarLists.classList.add('sidebar-lists');

  sidebarListsContainer.append(sidebarListsHeader, sidebarLists);

  return sidebarListsContainer;

}

function createMain() {

  const main = document.createElement('div');
  main.classList.add('main');

  main.append(createHeader(), createListContainer());
  return main;
}

function createHeader() {

  const header = document.createElement('div');
  header.classList.add('header');

  const headerText = document.createElement('div');
  headerText.classList.add('header-text');
  headerText.textContent = 'Task At Hand';

  header.append(headerText);

  return header;

}

function createListContainer() {

  const listContainer = document.createElement('div');
  listContainer.classList.add('list-container');

  return listContainer;
}

function createButtons() {

  const addBtns = document.createElement('div');
  addBtns.classList.add('add-btns-container');

  const addListBtn = document.createElement('button');
  addListBtn.classList.add('add-list-btn');
  addListBtn.textContent = '+List';

  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('add-task-btn');
  addTaskBtn.textContent = '+Task';

  addBtns.append(addListBtn, addTaskBtn);

  return addBtns;

}

function createFooter() {

  const footer = document.createElement('div');
  footer.classList.add('footer');

  const footerText = document.createElement('div');
  footerText.classList.add('footer-text');
  footerText.textContent = "Created by Mark Melnik";

  footer.append(footerText);

  return footer;

}

function createTaskForm() {

  const taskForm = document.createElement('div');
  taskForm.classList.add('task-form');

  const titleSection = document.createElement('div');
  titleSection.classList.add('input-field');

  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'title');
  titleLabel.textContent = 'Title';

  const titleField = document.createElement('input');
  titleField.setAttribute('type', 'text');
  titleField.setAttribute('id', 'title');
  titleField.setAttribute('name', 'title');

  titleSection.append(titleLabel, titleField);

  const descriptionSection = document.createElement('div');
  descriptionSection.classList.add('input-field');

  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', 'description');
  descriptionLabel.textContent = 'Description';

  const descriptionField = document.createElement('input');
  descriptionField.setAttribute('type', 'text');
  descriptionField.setAttribute('id', 'description');
  descriptionField.setAttribute('name', 'description');

  descriptionSection.append(descriptionLabel, descriptionField);

  const dueDateSection = document.createElement('div');
  dueDateSection.classList.add('input-field');

  const dueDateLabel = document.createElement('label');
  dueDateLabel.setAttribute('for', 'dueDate');
  dueDateLabel.textContent = 'Due Date';

  const dueDateField = document.createElement('input');
  dueDateField.setAttribute('type', 'text');
  dueDateField.setAttribute('id', 'dueDate');
  dueDateField.setAttribute('name', 'dueDate');

  dueDateSection.append(dueDateLabel, dueDateField);

  const submitBtnSection = document.createElement('div');
  
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.classList.add('task-submit-btn');
  submitBtn.textContent = 'Submit';

  submitBtnSection.append(submitBtn);

  taskForm.append(titleSection, descriptionSection, dueDateSection, submitBtnSection);

  return taskForm;

}

function tabStatus(tab) {
  const taskTabs = document.querySelectorAll('.sidebar-tasks-tab');
  taskTabs.forEach((tab) => {
    if (tab !== this) {
      tab.classList.remove('active');
    }
  })
  tab.classList.add('active');
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

    builtInList.allList.push(newTask);
    console.log(builtInList);


    taskDisplay(newTask);
    isAddBtnClicked = false;
    taskForm.style.visibility = 'hidden';
  })
}

function taskDisplay(task) {

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
  listContainer.firstChild.append(taskCardContainer);

  taskCardDelBtn.addEventListener('click', () => {
    removeTask(taskCardContainer);
  });

  return taskCardContainer;

};

function removeTask(taskCardContainer) {

  taskCardContainer.remove();

};

function taskSorter(taskCardContainer) {

  const taskTabs = document.querySelectorAll('.sidebar-tasks-tab');

  taskTabs.forEach((tab) => {
    if (tab.getAttribute('active')) {
      tab.appendChild(taskCardContainer);
    }
  })
};

function loadWebsite() {

  const container = document.querySelector('.container');
  container.append(createTopper(), createFooter(), createTaskForm());

  loadAllList();
  createTask();

  const allList = document.querySelector('.all-list');
  tabStatus(allList);

  return container;
  
};

export default loadWebsite;