function createCompletedList() {

  const completedList = document.createElement('div');
  completedList.classList.add('list');
  return completedList;

}

function loadCompletedList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  listContainer.append(createCompletedList());

}

export default loadCompletedList;