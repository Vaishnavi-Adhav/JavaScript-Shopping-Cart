let cart = [];

export function addCat(cat) {
    const existingItem = cart.find(item => item.cat === cat);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({cat: cat, quantity: 1});
    }
}

export function updateQuantity(cat, quantity) {
    const existingItem = cart.find(item => item.cat === cat);
    if (existingItem) {
        existingItem.quantity = Number(quantity);
    }
}

export function clear() {
    cart = [];
}

export function getItems() {
    return cart;
}

export function getItemCount() {
    let count = 0;
    for (const item of cart) {
        count += item.quantity;
    }
    return count;
}

export function getTotal() {
    let total = 0;
    for (const item of cart) {
        total += item.cat.price * item.quantity;
    }
    return total;
}