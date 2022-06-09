import fetchDrinks from "./fetchDrinks_26.js";
import displayDrinks from "./displayDrinks_26.js";
import setDrink from './setDrink_26.js';

const presentDrinks = async(url) => {
    const data = await fetchDrinks(url);
 //console.log(data);
 const section = await displayDrinks(data);
 if(section) {
     setDrink(section);
 }
};

export default presentDrinks;