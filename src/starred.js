function createStarredList() {

  const starredList = document.createElement('div');
  starredList.classList.add('starred-list-container');
  starredList.classList.add('list');
  return starredList;

}

function loadStarredList() {

  const listContainer = document.querySelector('.list-container');

  return listContainer;

}

export default loadStarredList;