
/*this function allow add or remove class from element*/

export const replace = elem => (removeClass, addClass) => {
    elem.classList.remove(removeClass);
    elem.classList.add(addClass);
};
