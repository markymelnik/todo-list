function createAllList() {

  const allListContainer = document.createElement('div');
  allListContainer.classList.add('all-list-container');
  allListContainer.classList.add('list');

  return allListContainer;

}

function loadAllList() {

  const listContainer = document.querySelector('.list-container');

  return listContainer;

}

export default loadAllList;