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
                        <a class="btn btn-primary" href="#">Like!</a>
                    </div>
                </div>

            </div>
    `;
};

const beerCommentsTemplate = ({quote, date}) => {
    return `<div class="list-item mt-3 pb-3 ">
                <p>${quote}</p>
                <p class="text-right"><i class="material-icons mr-3">calendar_today</i>${date}</p>
            </div>`;
};

const beerFormCommentDetail = `
    <form action="#" class="mt-5">

        <div class="form-group col p-0">
            <label for="exampleFormControlTextarea1">Sé libre de opinar!</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>
    </form>`;


const renderForm = () => {

    /*render comment's form*/
    const formCommentDetail = document.querySelector("#quote-form");

    /*display form comments*/
    return formCommentDetail.innerHTML = beerFormCommentDetail;
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

        /*display comment's form in detail beer*/
        renderForm();
        /*display detail beer template*/
        containerDetail.innerHTML = template;

        /*scroll to top of beer detail container*/
        containerDetail.scrollIntoView();

    }catch (err) {
        console.log(err);
    }
};

export default renderBeerDetail;