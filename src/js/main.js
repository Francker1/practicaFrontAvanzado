import renderBeersHome from './beers.js';
import renderBeerDetail from './detail.js';
import { INPUT_STORAGE_KEY, STORAGE_TYPE } from './searchbar.js';
import storage from './storage.js';

/* get value saved in local storage, default is lStorage */
const { getItem } = storage(STORAGE_TYPE);


/*Routes system:*/
page("/", () => {
    //console.log("home route");
    renderBeersHome( getItem(INPUT_STORAGE_KEY) );
});

page("/beer/:id", (ctx) => {
    //console.log('detalle de cerveza');
    const { params: {id} } = ctx;
    //console.log(id);

    renderBeerDetail(id);
});

page();