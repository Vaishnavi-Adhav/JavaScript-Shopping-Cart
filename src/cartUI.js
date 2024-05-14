import {getTotal, getItems, updateQuantity, clear} from './cart.js';
import {renderHeader} from './header.js';

export function updateCartUI() {
    const cartContainer = document.querySelector('.cart');
    const cartList = cartContainer.querySelector('.cart-list');
    const cartTotal = cartContainer.querySelector('.cart-total');
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    const checkoutButton = cartContainer.querySelector('.checkout-button');

    cartList.innerHTML = '';

    if (getTotal() === 0) {
        emptyCartMessage.classList.add('show');
        checkoutButton.classList.add('show');
        cartTotal.classList.add('show');
    } else {
        cartTotal.classList.remove('show');
        checkoutButton.classList.remove('show');
        emptyCartMessage.classList.remove('show');
        getItems().map((item) => {
            if (item.quantity === 0) {
                return null;
            }
            const itemElement = document.createElement('li');
            const html = `
                <img src="${item.cat.image}" alt="${item.cat.name}">
                <p>${item.cat.name}</p>
                <button class="cart-quantity-decrement">-</button>
                <input type="number" min="0" value="${item.quantity}" class="cart-item-quantity">
                <button class="cart-quantity-increment">+</button>
                <p>$${(item.cat.price * item.quantity).toFixed(2)}</p>
              `;
            itemElement.innerHTML = html;
            const quantityInput = itemElement.querySelector('input[type="number"]');
            const incrementButton = itemElement.querySelector('.cart-quantity-increment');
            const decrementButton = itemElement.querySelector('.cart-quantity-decrement');

            cartList.addEventListener('click', (event) => {
                if (event.target === incrementButton) {
                    const newQuantity = Number(quantityInput.value) + 1;
                    updateQuantity(item.cat, newQuantity);
                    updateCartUI();
                    renderHeader();
                }
                else if (event.target === decrementButton) {
                    const newQuantity = Number(quantityInput.value) - 1;
                    updateQuantity(item.cat, newQuantity);
                    updateCartUI();
                    renderHeader();
                }
                else if (event.target === quantityInput) {
                    updateQuantity(item.cat, quantityInput.value);
                    updateCartUI();
                    renderHeader();
                }
            });

            cartList.appendChild(itemElement);
        });
        cartContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('checkout-button')) {
                clear();
                updateCartUI();
                renderHeader();
                cartTotal.classList.add('show');
            }
        });
        cartTotal.textContent = `Total: $${getTotal().toFixed(2)}`;
    }
}

