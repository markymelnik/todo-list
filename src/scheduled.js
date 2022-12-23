function createdScheduledList() {

  const scheduledList = document.createElement('div');
  scheduledList.classList.add('scheduled-list');
  scheduledList.classList.add('list');
  return scheduledList;

}

function loadScheduledList() {

  const listContainer = document.querySelector('.list-container');
  listContainer.append(createdScheduledList());

}

export default loadScheduledList;