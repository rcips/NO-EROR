const cartItems = JSON.parse(localStorage.getItem("cartItems"));
cartItems.forEach(cartItem => {
    const checkoutItemHtml = `<div class="w3-quarter w3-center OS"><img src="${cartItem.img}" style="height: 100px;"></div>
    <div class="w3-quarter w3-center w3-cell-midle OS">${cartItem.name}</div>
    <div class="w3-quarter w3-center w3-cell-midle OS">${cartItem.qty}</div>
    <div class="w3-quarter w3-center w3-cell-midle OS">₱${cartItem.price}</div>`
    $("#order-summary").append($.parseHTML(checkoutItemHtml));
});