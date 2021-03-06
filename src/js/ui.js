
/*this function allow add or remove class from element*/

export const replace = elem => (removeClass, addClass) => {
    elem.classList.remove(removeClass);
    elem.classList.add(addClass);
};

export const limitWords = (text, limit) => {

    return text.split(" ").splice(0,limit).join(" ")+"...";

};

export const toggleClass = (elem, clase) => {

    return elem.classList.toggle(clase);
};

export const formatDate = date => {

    return date.substr(0, 10);

};

const loader = document.querySelector("#loader");

export const renderLoader = replace(loader);

/*menu UI*/
const menuOpen = document.querySelector("#open-menu-icon");
const menuClose = document.querySelector("#close-menu-icon");
const menuOverlay = document.querySelector("#menu-container");


const handleMenuOpen = replace(menuOpen);
const handleMenuClose = replace(menuClose);
const handleMenuOverlay = replace(menuOverlay);

menuOpen.addEventListener("click", () => {

    handleMenuOverlay("d-none", "d-flex");
    handleMenuOpen("show", "hide");
    handleMenuClose("hide", "show");

});

menuClose.addEventListener("click", () => {
    handleMenuOverlay("d-flex", "d-none");
    handleMenuOpen("hide", "show");
    handleMenuClose("show", "hide");
});

/*intersection Observer Search mobile, this function hide or shows mobile search*/

const searchMobileContainer = document.querySelector(".search-mobile__container");
const handleMobileContainer = replace(searchMobileContainer);

const options = {
    treshold: 1
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
      if(entry.isIntersecting){
          handleMobileContainer("d-flex", "d-none");
      }else{
          handleMobileContainer("d-none", "d-flex");
      }
  });
};

const inters = new IntersectionObserver(callback, options);
const headForm = document.querySelector(".head-page");

inters.observe(headForm);