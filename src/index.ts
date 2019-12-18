import data from './data.js';

function sortByName(arr) {
  return arr.sort((a, b) => {
    return a.names[0] < b.names[0] ? -1 : 1;
  });
}

function createElement(tag) {
  return document.createElement(tag);
}

function createItem(item, index) {
  const name = document.createElement(`span`);
  name.classList.add(`dib`, `name-box`);
  name.textContent = item.names[index];

  const date = createElement(`span`);
  date.classList.add(`dib`, `date-box`);
  date.textContent = item.dates[index];

  const div = createElement(`div`);
  div.appendChild(name);
  div.appendChild(date);

  return div;
}

function createList(data) {
  const list = data.map((item) => {
    const div = createItem(item, 0);

    const li = createElement(`li`);
    li.appendChild(div);

    if (item.names.length > 1) {
      for (let i = 1; i < item.names.length; i++) {
        const div = createItem(item, i);
        li.appendChild(div);
      }
    }
    return li;
  });
  return list;
}

function updateList(ol, list, main) {
  ol.innerHTML = ``;
  for (let i = 0; i < list.length; i++) {
    ol.appendChild(list[i]);
  }
  main.appendChild(ol);
}

const ol = document.createElement(`ol`);
const list = createList(sortByName(data));
const main = document.getElementsByTagName(`main`).item(0);

updateList(ol, list, main);
