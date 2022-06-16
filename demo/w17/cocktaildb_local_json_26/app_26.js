import presentDrinks from './src/presentDrinks_26.js';

import './src/searchForm_26.js';

import {LOCAL_URL , hasNetwork, searchItme } from './api/search/config_26.js';
console.log(LOCAL_URL, hasNetwork, searchItme);

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h';

window.addEventListener('DOMContentLoaded', () => {
    if(hasNetwork) {
        presentDrinks(URL);
    }else {
        presentDrinks(LOCAL_URL + 'h.json');
    }
});
