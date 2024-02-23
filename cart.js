document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cartItems.forEach(product => {
            const item = document.createElement('div');
            item.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <p>${product.name} - ${product.description} - Cost: ${product.cost}</p>
            `;
            cartItemsContainer.appendChild(item);
        });
    }
});
