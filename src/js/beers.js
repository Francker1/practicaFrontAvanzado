import api from "./api.js";
import { limitWords, toggleClass, replace, renderLoader } from "./ui.js";
import { resetFilter, getDateBeer} from "./filterbar.js";

/*this variable get beers from api:*/
const { getBeers } = api();


/*this JS controls the beers elements grid*/
const templateBeer = beer => {

    const newDescription = limitWords(beer.description, 15);

    return `<a href="/beer/${beer.beerId}">
                <div class="card ${beer.principal ? "card__principal" : "card__secondary card-closed"}">
                    <div class="card-title mb-0">
                        <h5 class="title mb-0">${beer.name}</h5>
                        <i class="material-icons card__icon card__icon-more">keyboard_arrow_down</i>
                        <i class="material-icons card__icon card__icon-remove">keyboard_arrow_up</i>
                    </div>
                    <div class="card-container">
                        <div class="img-card-container">
                            <img class="card-img-top" src="${beer.image ? beer.image : "./src/img/no-img-compressor.jpg"}" alt="${beer.name}">
                        </div>
                        <div class="card-body">
                            <p class="card-text">${newDescription}</p>
                            
                            <div class="row align-items-center">
                                <div class="col-6">
                                    <button class="btn btn-primary">Ver cerveza</button>
                                </div>
                                <div class="col-6 text-right">
                                    <i class="material-icons mr-3">thumb_up_alt</i>
                                    <span>${beer.likes}</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </a>`;
};


/*this function display templates cards from beers*/
export const renderBeer = (elem, items) => {

    /*por cada item un template en la variable, y eso se recorre*/
    const htmlBeers = items.map( (beer, index) =>  {
        if(index < 3){
            return templateBeer({ ...beer, principal: true});
        }
        return templateBeer({ ...beer, principal: false});
    }).join("");

    elem.innerHTML = htmlBeers;

    /*esta funcionalidad modifica el comportamiento de las cards*/
    const cardHeaders = document.querySelectorAll(".card .card-title");

    cardHeaders.forEach( (title, index) => {

        const card = title.parentNode;
        title.addEventListener("click", evt => {

            evt.preventDefault();
            toggleClass(card, "card-closed");
        });
    });
};






const renderBeersHome = async text => {

    try{

        renderLoader("d-none", "d-flex");

        /*get data beers by API*/
        const [ beers ] = await Promise.all([
            getBeers(text)
        ]);

        renderLoader("d-flex", "d-none");

        const beerGrid = document.getElementById("grid-beers");

        /*this js controls for show or not grid beers container or only beer detail*/
        const beersGrid = document.querySelector("#beers-container");
        const handleBeersGrid = replace(beersGrid);

        const beerDetail = document.querySelector("#beer-detail");
        const handleDetailBeer = replace(beerDetail);

        handleBeersGrid("d-none", "d-block");
        handleDetailBeer("d-block", "d-none");

        /*this js shows filter bar in home (beers)*/
        const dateFilterBar = document.querySelector("#filter-date-bar");
        const handleFilterBar = replace(dateFilterBar);
        handleFilterBar("d-none", "d-block");


        /*render Beer cards in grid:*/
        renderBeer(beerGrid, beers);


        /*this functions allow filter beers by date*/
        const dateForm = document.querySelector("#form-year");
        dateForm.addEventListener("change", () => {

            const date = document.querySelector("#form-year").value;
            const beersFiltered =  beers.filter( elem => {
                return elem.firstBrewed.includes(date);
            });

            renderBeer(beerGrid, beersFiltered);

        });

        getDateBeer(beers);
        resetFilter();

    } catch (err){
        console.log(err);
    }

};

export default renderBeersHome;