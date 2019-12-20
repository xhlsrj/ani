import data from './data.js';
import { $id } from './utils.js';
import { currentFilter, buildFilter } from './filter.js';
import { createList, updateList } from './list.js';
const list = createList(data);
buildFilter($id(`filter`));
const observer = new MutationObserver((mutions, observer) => {
    console.log(`mu`);
    mutions.forEach((mution) => {
        if (mution.type === `characterData`) {
            updateList(list, mution.target.textContent);
        }
    });
});
observer.observe(currentFilter, {
    childList: false,
    attributes: false,
    characterData: true,
});
