
/*Effect collapse in cards, add or quit */
const cardTitle = document.querySelectorAll('.card-title');

cardTitle.forEach((header, index) => {

    const card = header.parentNode;

    header.addEventListener('click', evt => {
        evt.preventDefault();
        card.classList.toggle('card-closed');
    });

});
