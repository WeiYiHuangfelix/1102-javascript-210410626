const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

// const changeColor = function(attribute, color, time) {
//     return new Promise(function(resolve, reject) {
//         if(attribute) {
//             setTimeout(() => {
//             const helloworldBth = attribute; 
//             helloworldBth.style.color = `${color}`;
            
//             resolve(helloworldBth);
//             }, time * 1000); 
//         }else {
//             reject(new Error(`There is no such attirbut ${attribute}`));
//         }
//     });
// };

// btn.addEventListener('click', () => {
//  changeColor(helloworldRed, 'red', 1)
//  .then(() => {
//      changeColor(helloworldGreen, 'green', 2);
//  })
//  .then(() => {
//     changeColor(helloworldBlue, 'blue', 1);
// })
// .catch(err => console.log(err));
// });

btn.addEventListener('click', () => {
    addColor(heading1, 1000, 'red')
    .then(() => addColor(heading2, 2000, 'green'))
    .then(() => addColor(heading3, 1000, 'blue'))
    .catch((err) => console.log(err));
});

const addColor = (element, time, color) => {
    return new Promise((resolve, reject) => {
        if(element) {
            setTimeout(() => {
                element.style.color = color;
                resolve();
            }, time);
        }else {
            reject(new Error(`There is no such element ${element}`));
        }
    });
};