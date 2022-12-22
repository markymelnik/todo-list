function createTodayList() {

  const todayList = document.createElement('div');
  todayList.classList.add('today-list');
  return todayList;

}

function loadTodayList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  listContainer.append(createTodayList());

}

export default loadTodayList;