// Function to add items to the shopping cart
function addToCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Create a new list item for the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - $${itemPrice.toFixed(2)}`;
    cartItems.appendChild(listItem);

    // Update the cart total
    updateCartTotal(itemPrice);

    // If you're using an iframe for navigation, adjust its height
    adjustIFrameHeight();
}

// Function to remove items from the shopping cart
function removeFromCart(itemName, itemPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Find the item to remove and remove it
    const items = cartItems.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(itemName)) {
            cartItems.removeChild(items[i]);
            break; // Exit the loop after removing the first matching item
        }
    }

    // Update the cart total
    updateCartTotal(-itemPrice);

    // If you're using an iframe for navigation, adjust its height
    adjustIFrameHeight();
}

// Function to update the cart total
function updateCartTotal(change) {
    const cartTotal = document.getElementById('cart-total');
    const currentTotal = parseFloat(cartTotal.textContent) + change;
    if (currentTotal >= 0) {
        cartTotal.textContent = currentTotal.toFixed(2);
    } else {
        cartTotal.textContent = '0.00';
    }
}

// Function to adjust the height of the navigation iframe
function adjustIFrameHeight() {
    const iframe = parent.document.querySelector('iframe');
    if (iframe) {
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
    }
}
