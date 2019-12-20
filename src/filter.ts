import { createElement } from './utils.js';

export const currentFilter: HTMLElement = createElement(`div`);
const typeList: Array<string> = [`All`, `General`, `Nice`, `Favour`];
const filterList: Array<HTMLElement> = [];

currentFilter.classList.add(`filter-type`);
currentFilter.textContent = `All`;
function toggleList(list: Array<HTMLElement>): void {
  list.forEach((item: HTMLElement): void => {
    item.classList.toggle(`dn`);
  });
}
currentFilter.addEventListener(`click`, () => toggleList(filterList));

export function buildFilter(filter: HTMLElement): void {
  filter.appendChild(currentFilter);

  for (const type of typeList) {
    const item: HTMLElement = createElement(`div`);
    item.classList.add(`filter-item`, `dn`);
    item.textContent = type;
    item.addEventListener(`click`, (ev) => {
      currentFilter.textContent = (<HTMLElement>ev.target).textContent;
      toggleList(filterList);
    });
    filterList.push(item);
    filter.appendChild(item);
  }
}
