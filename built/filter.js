import { createElement } from './utils.js';
export const currentFilter = createElement(`div`);
const typeList = [`All`, `General`, `Nice`, `Favour`];
const filterList = [];
currentFilter.classList.add(`filter-type`);
currentFilter.textContent = `All`;
function toggleList(list) {
    list.forEach((item) => {
        item.classList.toggle(`dn`);
    });
}
currentFilter.addEventListener(`click`, () => toggleList(filterList));
export function buildFilter(filter) {
    filter.appendChild(currentFilter);
    for (const type of typeList) {
        const item = createElement(`div`);
        item.classList.add(`filter-item`, `dn`);
        item.textContent = type;
        item.addEventListener(`click`, (ev) => {
            currentFilter.textContent = ev.target.textContent;
            toggleList(filterList);
        });
        filterList.push(item);
        filter.appendChild(item);
    }
}
