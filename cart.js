document.addEventListener('DOMContentLoaded', () => {
    loadCartItems(); // Load existing cart items from localStorage
});

function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        addItemToCart(item.name, item.price, item.quantity);
    });
    updateCartSummary();
}

function addItemToCart(name, price, quantity) {
    const cartBody = document.getElementById('cart-body');

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>$${price.toFixed(2)}</td>
        <td>
            <input type="number" value="${quantity}" min="1" onchange="updateQuantity('${name}', this.value)">
        </td>
        <td>$${(price * quantity).toFixed(2)}</td>
        <td><button class="remove-btn" onclick="removeItem('${name}')">X</button></td>
    `;
    cartBody.appendChild(row);
}

function updateQuantity(productName, newQuantity) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = cartItems.findIndex(item => item.name === productName);

    if (itemIndex > -1) {
        cartItems[itemIndex].quantity = parseInt(newQuantity);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Refresh the cart display
        displayCartItems();
    }
}

function removeItem(productName) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems = cartItems.filter(item => item.name !== productName);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Refresh the cart display
    displayCartItems();
}

function displayCartItems() {
    const cartBody = document.getElementById('cart-body');
    cartBody.innerHTML = ''; // Clear existing items

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.forEach(item => {
        addItemToCart(item.name, item.price, item.quantity);
    });
    updateCartSummary();
}

function updateCartSummary() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalItems = 0;
    let totalPrice = 0;

    cartItems.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-items').textContent = totalItems;
    document.getElementById('total-price-summary').textContent = `$${totalPrice.toFixed(2)}`;
}
