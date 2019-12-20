import { createElement } from './utils.js';
function sortByName(arr) {
    return arr.sort((a, b) => {
        return a.names[0] < b.names[0] ? -1 : 1;
    });
}
function createItem(ani, index) {
    const name = document.createElement(`span`);
    name.classList.add(`dib`, `name-box`);
    name.textContent = ani.names[index];
    const date = createElement(`span`);
    date.classList.add(`dib`, `date-box`);
    date.textContent = ani.dates[index];
    const item = createElement(`div`);
    item.appendChild(name);
    item.appendChild(date);
    return item;
}
export function createList(data) {
    sortByName(data);
    const list = data.map((ani) => {
        const li = createElement(`li`);
        for (let i = 0; i < ani.names.length; i++) {
            const item = createItem(ani, i);
            li.appendChild(item);
        }
        li.classList.add(...ani.tags);
        return li;
    });
    const ol = document.createElement(`ol`);
    for (const item of list) {
        ol.appendChild(item);
    }
    document
        .getElementsByTagName(`main`)
        .item(0)
        .appendChild(ol);
    return list;
}
export function updateList(list, filter) {
    list.forEach((li) => {
        li.classList.remove(`dn`);
        switch (filter) {
            case `General`:
                filter = `ignore`;
                if (li.classList.contains(filter)) {
                    li.classList.add(`dn`);
                }
                break;
            case `Nice`:
                filter = `nice`;
                if (li.classList.contains(filter)) {
                    li.classList.remove(`dn`);
                }
            case `Favour`:
                filter = `favour`;
                if (li.classList.contains(filter)) {
                    li.classList.remove(`dn`);
                }
                break;
        }
    });
}
