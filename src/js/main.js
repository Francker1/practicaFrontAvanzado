/**
 * Created by Italo on 20/01/2020.
 */


/*Effect collapse in cards, add or quit */
const cardClosed = document.querySelectorAll('.card__secondary a');

cardClosed.forEach((header, index) => {

    const card = header.parentNode;
    const cardArrowMore = card.getElementsByClassName('card__icon-more');
    const cardArrowRemove = card.getElementsByClassName('card__icon-remove');

    header.addEventListener('click', evt => {
        evt.preventDefault();

        /*Functionality toggle clases icons and cards*/
        card.classList.toggle('card-closed');
        cardArrowMore[0].classList.toggle('d-none');
        cardArrowRemove[0].classList.toggle('d-block');
    });

});