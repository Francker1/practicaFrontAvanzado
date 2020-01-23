import renderBeersHome from './beers.js';
import { INPUT_STORAGE_KEY, STORAGE_TYPE } from './searchbar.js';
import storage from './storage.js';

/* get value saved in local storage, default is lStorage */
const { getItem } = storage(STORAGE_TYPE);

renderBeersHome( getItem(INPUT_STORAGE_KEY) );