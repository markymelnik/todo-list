function createStarredList() {

  const starredList = document.createElement('div');
  starredList.classList.add('starred-list');
  starredList.classList.add('list');
  return starredList;

}

function loadStarredList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.append(createStarredList());

}

export default loadStarredList;