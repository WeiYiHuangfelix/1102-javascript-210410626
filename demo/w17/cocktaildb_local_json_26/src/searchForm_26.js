import get from './getElement.js';
import presentDrinks from './presentDrinks_26.js';

import {LOCAL_URL, hasNetwork, searchItme} from '../api/search/config_26.js'

const form = get('.search-form');

const input = get('[name="drink"]');

//console.log('form', form);
//console.log('input', input);
console.log('config_26', {LOCAL_URL, hasNetwork, searchItme});

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

form.addEventListener('keyup',e => {
    e.preventDefault();
    console.log('input', input.value);
    const value = input.value;
    if(!value) return;
    if(hasNetwork) {
        presentDrinks(`${baseURL}${value}`)
    }else {
        if(searchItme.find((item) => item === value)) {
            presentDrinks(`${LOCAL_URL}${value}.json`)
        }
    }
});