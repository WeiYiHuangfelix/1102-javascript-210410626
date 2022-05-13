const helloworldRed = document.querySelector('.one');
const helloworldGreen = document.querySelector('.two');
const helloworldBlue = document.querySelector('.three');

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        helloworldRed.style.color = 'red';
        setTimeout(() => {
            helloworldGreen.style.color = 'Green';
        })
        setTimeout(() => {
            helloworldBlue.style.color = 'blue';
        })
    });
})

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