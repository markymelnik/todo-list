function createStarredList() {

  const starredList = document.createElement('div');
  starredList.classList.add('starred-list');
  return starredList;

}

function loadStarredList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  listContainer.append(createStarredList());

}

export default loadStarredList;