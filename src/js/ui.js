
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