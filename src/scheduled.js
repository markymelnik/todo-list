function createdScheduledList() {

  const scheduledList = document.createElement('div');
  scheduledList.classList.add('scheduled-list');
  return scheduledList;

}

function loadScheduledList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.innerHTML = '';
  listContainer.append(createdScheduledList());

}

export default loadScheduledList;