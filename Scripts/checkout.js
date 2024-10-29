import { cart, removeFromCart } from '../Data/cart.js';
import { products, productITEM, productLIST, productsHTML4 } from '../Data/products.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct = '';

    products.forEach((product) => {
        if(product.id === productId) {
            matchingProduct = product;
        }
    });
    productITEM.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    productLIST.forEach((product) => {
        if (product.id === productId) {
            matchingProduct = product;
        }
    });
    productsHTML4.forEach((product) => {
        if(product.id === productId) {
            matchingProduct = product;
        }
    });
    
    cartSummaryHTML += `
    <div class="container js-container  js-cart-item-${matchingProduct.id}">
        <div class="photo">
            <img src="${matchingProduct.image}">
        </div>
        <div class="details">
            <p class="product-name">${matchingProduct.name}</p>
            <div class="rating">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
            </div>
            <div class="price">${matchingProduct.price}</div>
            <span> Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            <button class="remove-button js-delete-link" data-product-id="${matchingProduct.id}">Remove from cart</button>
        </div>
    </div>
    `;
});

console.log(cartSummaryHTML);  
document.querySelector('.container').innerHTML = `${cartSummaryHTML}`;



document.querySelectorAll('.js-delete-link')
    .forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-${productId}`);
            container.remove();
        });
        JSON.parse(localStorage.getItem('cart'));
    });





