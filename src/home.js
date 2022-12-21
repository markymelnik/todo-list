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
  sidebarListsHeader.classList.add('sidebar-lists-header');
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
  addTodoBtn.classList.add('add-todo-btn');
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

function loadWebsite() {

  const container = document.querySelector('.container');

  container.append(createTopper(), createFooter());

  return container;
  
};

export default loadWebsite;