//Make Soup
//boil water 3 min
//chop carrots
//add carrots boil for 2 min
//chop onion 
//add onion boil for 2 min
//BROWSER!!!! Fetch Data, Get Geolocation, setTimeout, srtTimer,

boilingWater();
console.log(`chop carrots`);

function boilingWater() {
    console.log('boiling...');
  
    setTimeout(() => {
        console.log('boiling done.');
        console.log('add carrots');
        setTimeout(() => {
            console.log('carrots boiling done.');
            console.log('add onion');
            setTimeout(() => {
                console.log('onion boiling done.');
            }, 500);
        },  2000);
    }, 3000);
}