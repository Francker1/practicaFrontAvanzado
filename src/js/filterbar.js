import  renderBeersHome from './beers.js';
import { INPUT_STORAGE_KEY, STORAGE_TYPE } from './searchbar.js';
import storage from './storage.js';

const { getItem } = storage(STORAGE_TYPE);


export const resetFilter = () => {

    const dateForm = document.querySelector("#reset-date");

    dateForm.addEventListener("click", () => {

        renderBeersHome( getItem(INPUT_STORAGE_KEY) );

    });

};

const templateDateOption = (text) => {
    return `<option value="${text}">${text}</option>`;
};

/*this function get only the years of beers array, then, returns one array cleaned of repeated years,
* then, maps these last array and display options's select*/
export const getDateBeer = (elem) => {

    const containerDate = document.getElementById('form-year');

    const data = elem.map((elem) => {
        return elem.firstBrewed.substr(3,6);
    });

    const dateForFilter = [...new Set(data)];

    const filterDraw = dateForFilter.sort().map((elem) => {
        return templateDateOption(elem);
    }).join("");

    containerDate.innerHTML = filterDraw;

};
