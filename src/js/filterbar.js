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


export const getDateBeer = (elem) => {

    const data = elem.map((elem) => {

        return elem.firstBrewed.substr(3,6);

    });

    console.log([...new Set(data)]);
};

