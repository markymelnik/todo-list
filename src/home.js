import './style.css';

function createTopper() {

  const topper = document.createElement('div');
  topper.classList.add('topper');

  topper.append(createSidebar(), createMain());

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
  sidebarAll.classList.add('tasks');
  sidebarAll.textContent = 'All';

  const sidebarToday = document.createElement('div');
  sidebarToday.classList.add('tasks');
  sidebarToday.textContent = 'Today';

  const sidebarScheduled = document.createElement('div');
  sidebarScheduled.classList.add('tasks');
  sidebarScheduled.textContent = 'Scheduled';

  const sidebarStarred = document.createElement('div');
  sidebarStarred.classList.add('tasks');
  sidebarStarred.textContent = 'Starred';

  const sidebarCompleted = document.createElement('div');
  sidebarCompleted.classList.add('tasks');
  sidebarCompleted.textContent = 'Completed';

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

  const header = document.createElement('div');
  header.classList.add('header');

  const headerText = document.createElement('div');
  headerText.classList.add('header-text');
  headerText.textContent = 'Task At Hand';

  header.append(headerText);
  
  const mainContent = document.createElement('div');
  mainContent.classList.add('main-content');

  const addBtns = document.createElement('div');
  addBtns.classList.add('add-btns');

  const addListBtn = document.createElement('button');
  addListBtn.classList.add('add-list-btn');
  addListBtn.textContent = '+List';

  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-task-btn');
  addTodoBtn.textContent = '+Todo';

  addBtns.append(addListBtn, addTodoBtn);

  mainContent.append(addBtns);

  main.append(header, mainContent);

  return main;

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

let allTasks = [];

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
};

function taskFormDisplayController() {

  const addTaskBtn = document.querySelector('.add-task-btn');
  const taskForm = document.querySelector('.task-form');
  const taskFormSubmitBtn = document.querySelector('.task-submit-btn');
  
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

  const taskTitle = document.querySelector("#title");
  const taskDescription = document.querySelector("#description");
  const taskDueDate = document.querySelector("#dueDate");


  taskFormSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTask = new Task(taskTitle.value, taskDescription.value, 
    taskDueDate.value);
    allTasks.push(newTask);
    displayTask(newTask);
    isAddBtnClicked = false;
    taskForm.style.visibility = 'hidden';
  })
}

function displayTask(task) {

  const mainContent = document.querySelector('.main-content');

  const taskCardContainer = document.createElement("div");
  taskCardContainer.classList.add("task-card-container");

  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  const taskCardDelBtn = document.createElement("button");
  taskCardDelBtn.classList.add("card-delete-btn");
  taskCardDelBtn.textContent = "X";

  const taskCardInfo = document.createElement("div");
  taskCardInfo.classList.add("card-info");
  taskCardInfo.innerHTML = `Title: ${task.title}<br/> Description: ${task.description}<br/> Due Date: ${task.dueDate}`;

  taskCard.append(taskCardDelBtn, taskCardInfo);
  taskCardContainer.append(taskCard);
  mainContent.append(taskCardContainer);

  taskCardDelBtn.addEventListener('click', () => {
    taskCardContainer.remove();
  })

  return taskCardContainer;

};

function loadWebsite() {

  const container = document.querySelector('.container');
  
  container.append(createTopper(), createFooter(), createTaskForm());

  taskFormDisplayController();

  return container;
  
};

export default loadWebsite;