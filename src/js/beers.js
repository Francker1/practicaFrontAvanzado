import api from './api.js';

/*this variable get beers from api:*/
const { getBeers } = api();

/*this JS controls the beers elements grid*/

const templateBeer = beer => {

    return `<a href="/beer/${beer.beerId}">
            <div class="card ${beer.principal ? 'card__principal' : 'card__secondary card-closed'}">
                <div class="card-title mb-0">
                    <h5 class="title mb-0">${beer.name}</h5>
                    <i class="material-icons card__icon card__icon-more">keyboard_arrow_down</i>
                    <i class="material-icons card__icon card__icon-remove">keyboard_arrow_up</i>
                </div>
                <div class="card-container">
                    <div class="img-card-container">
                        <img class="card-img-top" src="${beer.image ? beer.image : './src/img/no-img-compressor.jpg'}" alt="${beer.name}">
                    </div>
                    <div class="card-body">
                        <p class="card-text">${beer.description}</p>
                        <button class="btn btn-primary">Ver cerveza</button>
                    </div>
                </div>
            </div>
        </a>`;
};

export const renderBeer = (elem, items) => {

    /*por cada item un template en la variable, y eso se recorre*/
    const htmlBeers = items.map( (beer, index) =>  {
        if(index < 3){
            return templateBeer({ ...beer, principal: true});
        }
        return templateBeer({ ...beer, principal: false})
    }).join('');

    elem.innerHTML = htmlBeers;
};

const renderBeersHome = async text => {

    try{
        const beers = await getBeers(text);
        const beerGrid = document.getElementById('grid-beers');
        /*render Beer cards in grid:*/
        renderBeer(beerGrid, beers);

    } catch (err){
        console.log(err);
    }

};

export default renderBeersHome;