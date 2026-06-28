const cartItems = [
    { name: 'Poster-Flower Neko', quantity: 2, price: 19.99 },
    { name: 'Puzzle-Autumn Neko', quantity: 1, price: 29.99 },
    { name: 'Photo-Bicycle Neko', quantity: 4, price: 19.99 },
    { name: 'MousePad-Star Neko', quantity: 3, price: 39.99 },
    { name: 'Photo-Elegant Neko', quantity: 1, price: 19.99 },
];

//to remove an item from the cart
function removeItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

//to update cart items in the HTML
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; 

    let subtotal = 0.00;

    cartItems.forEach((item, index) => {
        const total = item.quantity * item.price;
        subtotal += total;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-name">${item.name}</div>
            <div class="item-qtt"><input type="number" value="${item.quantity}" class="quantity-input"></div>
            <div class="item-total">${total.toFixed(2)}</div>
            <div class="item-remove"><button class="remove-button">X</button></div>
        `;
        cartItemsContainer.appendChild(cartItem);

        //quantity input changes
        const quantityInput = cartItem.querySelector('.quantity-input');
        quantityInput.addEventListener('input', () => {
            let newQuantity = parseInt(quantityInput.value, 10);
    
            if (newQuantity < 1 || isNaN(newQuantity)) {
            newQuantity = 1;
            }

            item.quantity = newQuantity;
            updateCart();
        });

        //remove button
        const removeButton = cartItem.querySelector('.remove-button');
        removeButton.addEventListener('click', () => {
            removeItem(index);
        });
    });

    // Update subtotal and total
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    subtotalElement.textContent = subtotal.toFixed(2);
    totalElement.textContent = (subtotal + 5.00).toFixed(2);
}

// Initial cart update
updateCart();

//checkout button
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    
    window.location.href = 'payment.html';
});
