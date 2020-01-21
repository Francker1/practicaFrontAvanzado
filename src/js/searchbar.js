import { replace } from './ui.js';
import  renderBeers from './beers.js';

/*this JS has all code for searchbar*/

/*get elements from mobile searchbar*/
const searchBarMobile = document.querySelector("#search-mobile-form");
const searchIconMobile = document.querySelector("#mob-search-icon");
const closeIconMobile = document.querySelector("#mob-close-icon");

/*get searchbar form elements*/
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');



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
        //1. pintar beers con el filtro
        renderBeers(searchInput.value);

        //2. almacenar en localstorage o cookie storage
    }
});