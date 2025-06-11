// import { hello } from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
// hello();
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

import { cart, addToCart, Cart2, Cart3, Cart4 } from './Data/cart.js';
import { products, productITEM, productLIST, productsHTML4 } from './Data/products.js';

// const today = dayjs();
// const deliveryDate = today.add(7, 'days');
// console.log(deliveryDate.format('dddd, MMMM, D'));

let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
            <div>
                <p>${product.name}</p><br>
                <h4><small>₹</small>${product.price}</h4>
                <span id="rate">
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                    <p>⭐</p>
                </span>
                <img src="${product.image}" alt=""><br>
                <div class="js-added"></div>
                <button class="js-add-cart1" data-product-id="${product.id}">Add to Cart</button>
            </div>
`;
})

console.log(productsHTML);


function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-increment').innerHTML = cartQuantity;
}

document.querySelector('.js-products').innerHTML = productsHTML;

document.querySelectorAll('.js-add-cart1')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();


            let timeoutId;

            const addToCartButtons = document.querySelectorAll('.js-add-cart1');
            const messageElements = document.querySelectorAll('.js-added');

            addToCartButtons.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageElement = messageElements[index];

                    if (messageElement) {
                        messageElement.classList.add('added-visible');
                        messageElement.innerHTML = 'Added';

                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        timeoutId = setTimeout(() => {
                            messageElement.classList.remove('added-visible');
                            messageElement.innerHTML = '';
                        }, 2000);
                    }
                });
            });

            console.log(cart);

        });

    });


let productsHTML2 = '';

productITEM.forEach((product) => {
    productsHTML2 += `
    <div>
        <p id="blu" style="width: 110%;">${product.name})</p><br>
        <h4><small>₹</small>${product.price}</h4>
        <span id="rate">
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
        </span>
        <img id="blue" src="${product.image}" alt=""><br>
        <div class="js-display1"></div>
        <button class="js-add-cart2" data-product-id="${product.id}">Add to Cart</button>
    </div>
    `;
});

console.log(productsHTML2);

function updateQuantity2() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-increment').innerHTML = cartQuantity;
}

document.querySelector('.js-products2').innerHTML = productsHTML2;

document.querySelectorAll('.js-add-cart2')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            Cart2(productId);
            updateQuantity2();

            let timeoutId;

            const addCartButtons2 = document.querySelectorAll('.js-add-cart2');
            const messageElement2 = document.querySelectorAll('.js-display1');

            addCartButtons2.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageDisplay = messageElement2[index];

                    if (messageDisplay) {
                        messageDisplay.classList.add('added-visible-js');
                        messageDisplay.innerHTML = 'Added';


                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        timeoutId = setTimeout(() => {
                            messageDisplay.classList.remove('added-visible-js');
                            messageDisplay.innerHTML = '';
                        }, 2000);
                    }
                });
            });

            console.log(cart);
        });
    });


let productsHTML3 = '';


productLIST.forEach((product) => {
    productsHTML3 += `
    <div>
        <p>${product.name}</p><br>
        <h4><small>₹</small>${product.price}</h4>
        <span id="rate">
            <p>${'⭐'.repeat(product.rating.stars)}</p>
        </span>
        <img src="${product.image}" alt=""><br>
        <div class="js-display3"></div>
        <button class="js-add-cart3" data-product-id="${product.id}">Add to Cart</button>
    </div>
    `;
});

console.log(productsHTML3);


function updateQuantity3() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    document.querySelector('.js-increment').innerHTML = cartQuantity;
}

document.querySelector('.js-products3').innerHTML = productsHTML3;

document.querySelectorAll('.js-add-cart3')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            Cart3(productId);
            updateQuantity3();

            let timeoutId;

            const addToCartButtons3 = document.querySelectorAll('.js-add-cart3');
            const messageElement3 = document.querySelectorAll('.js-display3');

            addToCartButtons3.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageDisplay3 = messageElement3[index];

                    if (messageDisplay3) {
                        messageDisplay3.classList.add('added-visible-js3');
                        messageDisplay3.innerHTML = 'Added';


                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        timeoutId = setTimeout(() => {
                            messageDisplay3.classList.remove('added-visible-js3');
                            messageDisplay3.innerHTML = '';
                        }, 2000);
                    }
                });
            });

            console.log(cart);

        });
    });


let productlistHTMl = '';

productsHTML4.forEach((product) => {
    productlistHTMl += `
    <div>
        <p>${product.name}</p><br>
        <h4><small>₹</small>${product.price}</h4>
        <span id="rate">
            ${'⭐'.repeat(product.rating.stars)}
        </span>
        <img src="${product.image}" alt=""><br>
        <div class="js-display4"></div>
        <button class="js-add-cart4" data-product-id="${product.id}">Add to Cart</button>
    </div>
    `;
})

console.log(productlistHTMl);




function updateCart4() {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })

    document.querySelector('.js-increment').innerHTML = cartQuantity;
}

document.querySelector('.js-products4').innerHTML = productlistHTMl;

document.querySelectorAll('.js-add-cart4')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            Cart4(productId);
            updateCart4();

            let timeoutId;

            const addToCartButtons4 = document.querySelectorAll('.js-add-cart4');
            const messageElement4 = document.querySelectorAll('.js-display4');

            addToCartButtons4.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageDisplay4 = messageElement4[index];

                    if (messageDisplay4) {
                        messageDisplay4.classList.add('added-visible-js4');
                        messageDisplay4.innerHTML = 'Added';

                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        timeoutId = setTimeout(() => {
                            messageDisplay4.classList.remove('added-visible-js4');
                            messageDisplay4.innerHTML = '';
                        }, 2000);
                    }
                });
            });

            console.log(cart);

        });
    });


