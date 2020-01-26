import { replace } from './ui.js';
import  renderBeersHome from './beers.js';
import storage from './storage.js';

export const INPUT_STORAGE_KEY = 'searchbar-input';
export const STORAGE_TYPE = 'lStorage';

/*this JS allow save input value from searchbar in localstorage*/
const { setItem, getItem } = storage(STORAGE_TYPE);


/*this JS has all code for searchbar:*/

/*get elements from mobile searchbar*/
const searchBarMobile = document.querySelector("#search-mobile-form");
const searchIconMobile = document.querySelector("#mob-search-icon");
const closeIconMobile = document.querySelector("#mob-close-icon");

/*get searchbar form elements*/
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

/*get searchbarMobile form elements*/
const searchFormMobile = document.querySelector('#search-form-mob');
const searchInputMobile = document.querySelector('#search-input-mob');


/*handler of classes mobile search button and form*/
const handleSearchbar = replace(searchBarMobile);
const handleSearchIcon = replace(searchIconMobile);
const handleCloseIcon = replace(closeIconMobile);

searchIconMobile.addEventListener('click', evt =>{

    handleSearchbar('no-search', 'search');
    handleSearchIcon('search','no-search');
    handleCloseIcon('no-search', 'search');
});

closeIconMobile.addEventListener('click', evt => {

    handleSearchbar('search', 'no-search');
    handleSearchIcon('no-search', 'search');
    handleCloseIcon('search','no-search');
});


/*Form search Beers:*/
searchForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if(searchInput.validity.valid){
        //1. pintar beers con el filtro en el form de búsqueda
        renderBeersHome(searchInput.value);
        window.location.replace("/");

        //2. save input value in localstorage
        setItem( INPUT_STORAGE_KEY, searchInput.value );
    }
});

/*Form search Beers by Mobile search form:*/
searchFormMobile.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if(searchInputMobile.validity.valid){
        //1. pintar beers con el filtro en el form de búsqueda
        renderBeersHome(searchInputMobile.value);
        window.location.replace("/");

        //2. save input value in localstorage
        setItem( INPUT_STORAGE_KEY, searchInputMobile.value );
    }
});

/*esta funcionalidad sirve para agilizar la búsqueda, clickando en los enlaces bajo la barra de búsqueda*/
const linkHeader = document.querySelectorAll(".link-header");

linkHeader.forEach( (link) => {

    link.addEventListener("click", evt => {
        evt.preventDefault();

        const searchLink = link.dataset.text;

        renderBeersHome(searchLink);
        window.location.replace("/");

        setItem( INPUT_STORAGE_KEY, searchLink );

    });
});