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
                <button class="js-add-cart1" data-product-name="${product.name}">Add to Cart</button>
            </div>
`;
})

console.log(productsHTML);


document.querySelector('.js-products').innerHTML = productsHTML;

document.querySelectorAll('.js-add-cart1')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const productName = button.dataset.productName;

            let matchingItem;

            cart.forEach((item) => {
                if (productName === item.productName) {
                    matchingItem = item;
                }
            })

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    productName: productName,
                    quantity: 1
                });
            }

            // alert('Item added to cart!');

            let cartQuantity = 0;


            cart.forEach((item) => {
                cartQuantity += item.quantity;
            });


            document.querySelector('.js-increment').innerHTML = cartQuantity;

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
        <button class="js-add-cart2" data-product-name="${product.name}">Add to Cart</button>
    </div>
    `;
});

console.log(productsHTML2);

document.querySelector('.js-products2').innerHTML = productsHTML2;

document.querySelectorAll('.js-add-cart2')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const valueName = button.dataset.valueName;

            let matchingItem;

            cart.forEach((item) => {
                if (valueName === item.valueName) {
                    matchingItem = item;
                }
            })

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    valueName: valueName,
                    quantity: 1
                });
            }


            // alert('Item added to cart!');

            let cartQuantity = 0;


            cart.forEach((item) => {
                cartQuantity += item.quantity;
            });


            document.querySelector('.js-increment').innerHTML = cartQuantity;

            let timeoutId;

            const addCartButtons2 = document.querySelectorAll('.js-add-cart2');
            const messageElement2 = document.querySelectorAll('.js-display1');

            addCartButtons2.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageDisplay = messageElement2[index]; // Use the specific element at the current index

                    if (messageDisplay) {  // Check if the specific messageDisplay element exists
                        messageDisplay.classList.add('added-visible-js');
                        messageDisplay.innerHTML = 'Added';

                        // Clear the previous timeout (if any) to reset the timer
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        // Set a new timeout to hide the message after 2 seconds
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


productLIST.forEach((value) => {
    productsHTML3 += `
    <div>
        <p>${value.name}</p><br>
        <h4><small>₹</small>${value.price}</h4>
        <span id="rate">
            <p>${'⭐'.repeat(value.rating.stars)}</p>
        </span>
        <img src="${value.image}" alt=""><br>
        <div class="js-display3"></div>
        <button class="js-add-cart3" data-value-name="${value.name}">Add to Cart</button>
    </div>
    `;
});


document.querySelector('.js-products3').innerHTML = productsHTML3;

document.querySelectorAll('.js-add-cart3')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const valueName = button.dataset.valueName;

            let matchingItem;

            cart.forEach((item) => {
                if (valueName === item.valueName) {
                    matchingItem = item;
                }
            })

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    valueName: valueName,
                    quantity: 1
                });
            }

            // alert('Item added to cart!');

            let cartQuantity = 0;


            cart.forEach((item) => {
                cartQuantity += item.quantity;
            });


            document.querySelector('.js-increment').innerHTML = cartQuantity;

            let timeoutId;

            const addToCartButtons3 = document.querySelectorAll('.js-add-cart3');
            const messageElement3 = document.querySelectorAll('.js-display3');

            addToCartButtons3.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageDisplay3 = messageElement3[index]; // Use the specific element at the current index

                    if (messageDisplay3) {  // Check if the specific messageDisplay element exists
                        messageDisplay3.classList.add('added-visible-js3');
                        messageDisplay3.innerHTML = 'Added';

                        // Clear the previous timeout (if any) to reset the timer
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        // Set a new timeout to hide the message after 2 seconds
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

productsHTML4.forEach((value) => {
    productlistHTMl += `
    <div>
        <p>${value.name}</p><br>
        <h4><small>₹</small>${value.price}</h4>
        <span id="rate">
            ${'⭐'.repeat(value.rating.stars)}
        </span>
        <img src="${value.image}" alt=""><br>
        <div class="js-display4"></div>
        <button class="js-add-cart4" data-value-name="${value.name}">Add to Cart</button>
    </div>
    `;
})


document.querySelector('.js-products4').innerHTML = productlistHTMl;

document.querySelectorAll('.js-add-cart4')
    .forEach((button) => {
        button.addEventListener('click', () => {
            const valueName = button.dataset.valueName;

            let matchingItem;

            cart.forEach((item) => {
                if (valueName === item.valueName) {
                    matchingItem = item;
                }
            })

            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                cart.push({
                    valueName: valueName,
                    quantity: 1
                });
            }

            // alert('Item added to cart!');

            let cartQuantity = 0;

            cart.forEach((item) => {
                cartQuantity += item.quantity;
            })

            document.querySelector('.js-increment').innerHTML = cartQuantity;

            let timeoutId;

            const addToCartButtons4 = document.querySelectorAll('.js-add-cart4');
            const messageElement4 = document.querySelectorAll('.js-display4');

            addToCartButtons4.forEach((button, index) => {
                button.addEventListener('click', () => {
                    const messageDisplay4 = messageElement4[index]; // Use the specific element at the current index

                    if (messageDisplay4) {  // Check if the specific messageDisplay element exists
                        messageDisplay4.classList.add('added-visible-js4');
                        messageDisplay4.innerHTML = 'Added';

                        // Clear the previous timeout (if any) to reset the timer
                        if (timeoutId) {
                            clearTimeout(timeoutId);
                        }

                        // Set a new timeout to hide the message after 2 seconds
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



