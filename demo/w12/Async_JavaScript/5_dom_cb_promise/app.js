const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.three');

const btn = document.querySelector('.btn');

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

btn.addEventListener('click', () => {
    addColor(heading1, 1000, 'red')
    .then(() => addColor(heading2, 2000, 'green'))
    .then(() => addColor(heading3, 1000, 'blue'))
    .catch((err) => console.log(err));
});