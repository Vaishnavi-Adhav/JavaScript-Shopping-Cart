import {getItemCount} from './cart.js';
import {updateCartUI} from './cartUI.js';

let cartVisible = false;
const headerEl = document.querySelector('.header');
const cartContainer = document.querySelector('.cart');

export function renderHeader() {
    const itemCount = getItemCount();
    const viewCartButtonText = `View Cart${itemCount > 0 ? ` (${itemCount})` : ''}`;

    const viewCartButtonClass = cartVisible ? 'show' : '';
    const hideCartButtonClass = cartVisible ? '' : 'show';

    headerEl.innerHTML = `
        <h1>Cat Shop</h1>
        <button class="view-cart-button ${viewCartButtonClass}">${viewCartButtonText}</button>
        <button class="hide-cart-button ${hideCartButtonClass}">Hide Cart</button>
    `;
}

headerEl.addEventListener('click', (event) => {
    if (event.target.classList.contains('view-cart-button')) {
        cartContainer.classList.toggle('show');
        event.target.classList.toggle('show');
        headerEl.querySelector('.hide-cart-button').classList.toggle('show');
        cartVisible = true;
        updateCartUI();
    } else if (event.target.classList.contains('hide-cart-button')) {
        cartContainer.classList.toggle('show');
        headerEl.querySelector('.view-cart-button').classList.toggle('show');
        event.target.classList.toggle('show');
        cartVisible = false;
    }
});
