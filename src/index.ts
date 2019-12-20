import data from './data.js';

function sortByName(arr: Array<Ani>): Array<Ani> {
  return arr.sort((a: Ani, b: Ani) => {
    return a.names[0] < b.names[0] ? -1 : 1;
  });
}

function createElement(tag: string): HTMLElement {
  return document.createElement(tag);
}

function createItem(item, index): HTMLElement {
  const name: HTMLElement = document.createElement(`span`);
  name.classList.add(`dib`, `name-box`);
  name.textContent = item.names[index];

  const date: HTMLElement = createElement(`span`);
  date.classList.add(`dib`, `date-box`);
  date.textContent = item.dates[index];

  const div: HTMLElement = createElement(`div`);
  div.appendChild(name);
  div.appendChild(date);

  return div;
}

function createList(data: Array<Ani>): Array<HTMLElement> {
  const list: Array<HTMLElement> = data.map((item: Ani) => {
    const div: HTMLElement = createItem(item, 0);

    const li: HTMLElement = createElement(`li`);
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

function updateList(
  ol: HTMLElement,
  list: Array<HTMLElement>,
  main: HTMLElement,
): void {
  ol.innerHTML = ``;
  for (let i = 0; i < list.length; i++) {
    ol.appendChild(list[i]);
  }
  main.appendChild(ol);
}

const ol: HTMLElement = document.createElement(`ol`);
const list: Array<HTMLElement> = createList(sortByName(data));
const main: HTMLElement = document.getElementsByTagName(`main`).item(0);

updateList(ol, list, main);
