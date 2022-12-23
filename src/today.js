function createTodayList() {

  const todayList = document.createElement('div');
  todayList.classList.add('today-list');
  todayList.classList.add('list');
  return todayList;

}

function loadTodayList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.append(createTodayList());

}

export default loadTodayList;