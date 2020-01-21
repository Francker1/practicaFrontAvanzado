import { replace } from './ui.js';

/*get elements from mobile searchbar*/
const searchBarMobile = document.querySelector("#search-mobile-form");
const searchIconMobile = document.querySelector("#mob-search-icon");
const closeIconMobile = document.querySelector("#mob-close-icon");

console.log(searchIconMobile);

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
    handleCloseIcon('search','no-search');
    handleSearchIcon('no-search', 'search');
});