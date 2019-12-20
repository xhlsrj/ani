import data from './data.js';
import { $id } from './utils.js';
import { currentFilter, buildFilter } from './filter.js';
import { createList, updateList } from './list.js';
const list = createList(data);
buildFilter($id(`filter`));
const observer = new MutationObserver((mutions, observer) => {
    mutions.forEach((mution) => {
        if (mution.type === `childList`) {
            updateList(list, mution.target.textContent);
        }
    });
});
observer.observe(currentFilter, {
    childList: true,
    attributes: false,
    characterData: false,
});
