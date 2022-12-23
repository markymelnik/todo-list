function createAllList() {

  const allList = document.createElement('div');
  allList.classList.add('all-list');
  allList.classList.add('list');
  return allList;

}

function loadAllList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.append(createAllList());

}

export default loadAllList;