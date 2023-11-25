/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;

document.addEventListener('DOMContentLoaded', () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartWrapper = document.querySelector('.totals');

// Переберите товары и отобразите их на странице корзины
    cartItems.forEach(productInfo => {
    const cartItemHTML = `
    <div class="product" data-id="${productInfo.id}">
        <div class="product-image">
        <img src="${productInfo.image}">
        </div>
        <div class="product-details">
        <div class="product-title">${productInfo.title}</div>
        <p class="product-description">The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.</p>
        </div>
        <div class="product-price">${productInfo.price}</div>
        <div class="product-quantity">
        <input type="number" value="1" min="1">
        </div>
        <div class="product-removal">
        <button class="remove-product">
            Remove
        </button>
        </div>
        <div class="product-line-price">${productInfo.price}</div>
    </div>
    `;
    cartWrapper.insertAdjacentHTML('beforebegin', cartItemHTML);
});
    recalculateCart();
    /* Assign actions */
    $('.product-quantity input').change( function() {
    updateQuantity(this);
    });

    $('.product-removal button').click( function() {
    removeItem(this);
    });


    /* Recalculate cart */
    function recalculateCart()
    {
    var subtotal = 0;
    
    /* Sum up row totals */
    $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
    });
    
    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;
    
    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if(total == 0){
        $('.checkout').fadeOut(fadeTime);
        }else{
        $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
    });
    }


    /* Update quantity */
    function updateQuantity(quantityInput)
    {
    /* Calculate line price */
    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;
    
    /* Update line price display and recalc cart totals */
    productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
        $(this).text(linePrice.toFixed(2));
        recalculateCart();
        $(this).fadeIn(fadeTime);
        });
    });  
    }


    /* Remove item from cart */
    function removeItem(removeButton) {
        /* Remove row from DOM and recalc cart total */
        var productRow = $(removeButton).parent().parent();
        var productId = productRow.data('id');

        // Удаляем товар из локальной памяти
        var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        var updatedCartItems = cartItems.filter(item => item.id !== productId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        // Удаляем строку товара из DOM и пересчитываем корзину
        productRow.slideUp(fadeTime, function() {
            productRow.remove();
            recalculateCart();
        });
    }

});