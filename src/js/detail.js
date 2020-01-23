/**
 * Created by Italo on 23/01/2020.
 */

import api from './api.js';
import { replace } from './ui.js';


const beerDetailTemplate = ({beerId, name, image, firstBrewed, description, brewersTips, price, likes} = {}) => {

    return ` <div class="row my-5 detail__container" id="${beerId}">
                <div class="col-12 mb-5">
                    <h2>${name}</h2>
                </div>
                <div class="col-12 col-md-5">
                 <div class="img-card-container">
                    <img class="img-fluid" src="${image}" alt="${name}">
                </div>
                    <div class="col-12 p-0 mt-3">
                        <div class="beer__data">
                            <dl class="d-flex">
                                <dt id="beer-year">Año: </dt>
                                <dd>${firstBrewed}</dd>
                            </dl>
                            <dl class="d-flex">
                                <dt id="beer-ingredients">Ingredientes: </dt>
                                <dd>malt</dd>
                                <dd>hops</dd>
                                <dd>yeast</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-6 offset-md-1">
                    <p>${description}</p>
                    <dl>
                        <dt>Tips: </dt>
                        <dd>${brewersTips}</dd>

                        <dt>Precio: </dt>
                        <dd>${price} €</dd>
                    </dl>

                    <dl class="d-flex align-items-center">
                        <dt><i class="material-icons">thumb_up_alt</i></dt>
                        <dd class="ml-3 mb-0">${likes}</dd>
                    </dl>

                    <div class="button-grid">
                        <a class="btn btn-primary" href="https://www.google.com/search?q=${name}+beer" rel="nofollow noopener" target="_blank">Comprar</a>
                        <a class="btn btn-primary" href="#">Añadir a favoritos</a>
                    </div>
                </div>

            </div>
    `;
};


const { getBeerDetail } = api();

const renderBeerDetail = async id => {
    try {

        const detail = await getBeerDetail(id);
        const template = beerDetailTemplate(detail);
        const containerDetail = document.getElementById('detail-container');

        /*this js controls for show or not grid beers container or only beer detail*/
        const beersGrid = document.querySelector("#beers-container");
        const handleBeersGrid = replace(beersGrid);

        const beerDetail = document.querySelector("#beer-detail");
        const handleDetailBeer = replace(beerDetail);

        handleBeersGrid("d-block", "d-none");
        handleDetailBeer("d-none", "d-block");

        /*display detail beer template*/
        containerDetail.innerHTML = template;

        /*scroll to top of beer detail container*/
        containerDetail.scrollIntoView();

    }catch (err) {
        console.log(err);
    }
};

export default renderBeerDetail;