// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form');
const alert = document.querySelector('.alert');
const grocery = document.querySelector('#grocery');
const submitBth = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const cleatBth = document.querySelector('.clear-btn');


// edit option

// ****** FUNCTIONS **********

const setBackToDefault = () => {
    grocery.value = '';
};

//display alert
const displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(() => {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`);
    }, 3000);
};

//add item
const addItem = (e) => {
    e.preventDefault();
    console.log('input', grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    console.log('id', id);
    if(value !== '') {
        //const element = document.createElement('div');
        //console.log('element', element);
        list.innerHTML += `
        <article data-id="${id}" class="grocery-item">
            <p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </article>
        `
        //list.appendChild(element);
    }
    console.log('list', list);
    displayAlert('item added to the list', 'success');
    container.classList.add('show-container');
    setBackToDefault();
};
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
const setupItems = () => {

};
// ****** EVENT LISTENERS **********

form.addEventListener('submit', addItem);
window.addEventListener('DOMContentLoaded', setupItems);