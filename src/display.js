
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
  sidebarAll.classList.add('sidebar-tasks-tab', 'sidebar-all-list');
  sidebarAll.textContent = 'All';

  const sidebarStarred = document.createElement('div');
  sidebarStarred.classList.add('sidebar-tasks-tab', 'sidebar-starred-list');
  sidebarStarred.textContent = 'Starred';

  sidebarTasks.append(sidebarAll, sidebarStarred);

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

function createFooter() {

  const footer = document.createElement('div');
  footer.classList.add('footer');

  const footerText = document.createElement('div');
  footerText.classList.add('footer-text');
  footerText.textContent = "Created by Mark Melnik";

  footer.append(footerText);

  return footer;

}

function createDisplay() {

  const container = document.querySelector('.container');
  container.append(createTopper(), createFooter(), createTaskForm(), createButtons());

  return container;

}

export default createDisplay;