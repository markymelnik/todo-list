function createCompletedList() {

  const completedList = document.createElement('div');
  completedList.classList.add('completed-list');
  completedList.classList.add('list');
  return completedList;

}

function loadCompletedList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.append(createCompletedList());

}

export default loadCompletedList;