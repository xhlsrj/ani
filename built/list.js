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
        let classname = ``;
        switch (filter) {
            case `General`:
                classname = `ignore`;
                if (li.classList.contains(classname)) {
                    li.classList.add(`dn`);
                }
                else {
                    li.classList.remove(`dn`);
                }
                break;
            case `Nice`:
                classname = `nice`;
                if (li.classList.contains(classname)) {
                    li.classList.remove(`dn`);
                }
                else {
                    li.classList.add(`dn`);
                }
            case `Favour`:
                classname = `favour`;
                if (li.classList.contains(classname)) {
                    li.classList.remove(`dn`);
                }
                else {
                    li.classList.add(`dn`);
                }
                break;
            default:
                li.classList.remove(`dn`);
        }
    });
}
