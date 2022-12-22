function createAllList() {

  const allList = document.createElement('div');
  allList.classList.add('list');
  return allList;

}

function loadAllList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  listContainer.append(createAllList());

}

export default loadAllList;