
import presentDrinks from './src/presentDrinks_26.js';

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=h';

window.addEventListener('DOMContentLoaded', () => {
    presentDrinks(URL);
});
