import { createElement, $id } from './utils.js';

function sortByName(arr: Array<Ani>): Array<Ani> {
  return arr.sort((a: Ani, b: Ani) => {
    return a.names[0] < b.names[0] ? -1 : 1;
  });
}

function createItem(ani, index): HTMLDivElement {
  const name: HTMLElement = document.createElement(`span`);
  name.classList.add(`dib`, `name-box`);
  name.textContent = ani.names[index];

  const date: HTMLElement = createElement(`span`);
  date.classList.add(`dib`, `date-box`);
  date.textContent = ani.dates[index];

  const item: HTMLDivElement = <HTMLDivElement>createElement(`div`);
  item.appendChild(name);
  item.appendChild(date);

  return item;
}

export function createList(data: Array<Ani>): Array<HTMLLIElement> {
  sortByName(data);
  const list: Array<HTMLLIElement> = data.map((ani: Ani) => {
    const li: HTMLLIElement = createElement(`li`) as HTMLLIElement;
    for (let i = 0; i < ani.names.length; i++) {
      const item: HTMLDivElement = createItem(ani, i);
      li.appendChild(item);
    }
    li.classList.add(...ani.tags);
    return li;
  });
  const ol: HTMLElement = document.createElement(`ol`);
  for (const item of list) {
    ol.appendChild(item);
  }
  document
    .getElementsByTagName(`main`)
    .item(0)
    .appendChild(ol);
  return list;
}

export function updateList(list: Array<HTMLLIElement>, filter: string): void {
  list.forEach((li) => {
    let classname = ``;
    switch (filter) {
      case `General`:
        classname = `ignore`;
        if (li.classList.contains(classname)) {
          li.classList.add(`dn`);
        } else {
          li.classList.remove(`dn`);
        }
        break;
      case `Nice`:
        classname = `nice`;
        if (li.classList.contains(classname)) {
          li.classList.remove(`dn`);
        } else {
          li.classList.add(`dn`);
        }
        break;
      case `Favour`:
        classname = `favour`;
        if (li.classList.contains(classname)) {
          li.classList.remove(`dn`);
        } else {
          li.classList.add(`dn`);
        }
        break;
      default:
        li.classList.remove(`dn`);
    }
  });
}
