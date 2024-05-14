import {addCat} from './cart.js';
import {updateCartUI} from "./cartUI";
import {renderHeader} from "./header";


const state = [{
    id: 0,
    name: 'Fluffball Burman',
    alt: 'Image of a cat from breed Fluffball',
    price: 0.99,
    image: 'http://placekitten.com/100/100?image=1',
    quantity: 0
},
    {
    id: 1,
    name: 'General Mayhem',
    alt: 'Image of a cat from breed General Mayhem',
    price: 3.14,
    image: 'http://placekitten.com/100/100?image=2',
    quantity: 0
},
    {
    id: 2,
    name: 'Fuzzy McFuzface',
    alt: 'Image of a cat from breed Fuzzy McFuzface',
    price: 2.73,
    image: 'http://placekitten.com/100/100?image=3',
    quantity: 0
},
];

export function renderCats() {
    const html = state.map((cat, index) => `<div class="product" data-index="${index}">
            <img src=${cat.image} alt=${cat.alt}>
            <h2>${cat.name}</h2>
            <p>$${cat.price.toFixed(2)}</p>
            <button class="add-to-cart-button">Add to Cart</button>
        </div>`).join('');

    const catsList = document.querySelector('.product-list')

    catsList.innerHTML = html;

    catsList.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart-button')) {
            const index = e.target.closest('.product').dataset.index;
            addCat(state[index]);
            updateCartUI();
            renderHeader();
        }
    });
}