const pageInit = () => {
    $(".main-card").hover(
        event => {
            const card = $(event.target).closest(".main-card");
            card.find(".item-name").hide()
            card.find(".button-row").show()
        },
        event => {
            const card = $(event.target).closest(".main-card");
            card.find(".item-name").show()
            card.find(".button-row").hide()
        }
    );
    $(".cart-qty-plus").click(
        event => {
            const qtyGroup = $(event.target).closest(".cart-qty-plus").parent();
            qtyGroup.find(".qty-input").val((index, value) => isNaN(parseInt(value)) ? 1 : parseInt(value) + 1);
            refreshCartTotal();
        }
    );
    $(".cart-qty-minus").click(
        event => {
            const qtyGroup = $(event.target).closest(".cart-qty-minus").parent();
            qtyGroup.find(".qty-input").val((index, value) => isNaN(parseInt(value)) ? 1 : parseInt(value) - 1);
            refreshCartTotal();
        }
    );
    $("#cart-close").click(event => $("#cart-modal").hide());
    $("#cart-fab").click(event => $("#cart-modal").show());
    $(".add-cart").click(
        event => {
            const main = $(event.target).closest(".main-card");
            console.log(main);
            const itemname = main.find(".item-name").text().trim();
            const itemprice = main.find(".item-price").text().trim();
            const itemimage = main.find(".shop-img").attr("src");

            const cartSearch = $(`#checkoutTable tr p.cart-item-name:contains('${itemname}')`);

            console.log(cartSearch);

            if (cartSearch.length > 0) {
                for (i = 0; i < cartSearch.length; i++) {
                    const itemTr = $(cartSearch[i]).closest("tr");
                    if (itemTr.find("p.cart-item-name").text() == itemname)
                        itemTr.find(".qty-input").val((index, value) => isNaN(parseInt(value)) ? 1 : parseInt(value) + 1);
                }
            }
            else {
                const carttr =
                    `<tr>
                        <td style="width: 100px;">
                            <div class="w3-container square">
                                <div class="square-contents">
                                    <img class="shop-img" src="${itemimage}">
                                </div>
                            </div>
                        </td>
                        <td style="width: 250px;">
                            <div class="cart-item-name">
                                <p class="cart-item-name">${itemname}</p>
                            </div>
                            <p class="cart-item-price">${itemprice}</p>
                        </td>
                        <td style="width: 120px; align-content: flex-end;">
                            <button class="cart-qty-minus" type="button" value="-" onclick="itemMinus(this)">-</button><input type="text"
                                name="qty" class="qty-input" min="0" value="1" /><button class="cart-qty-plus"
                                type="button" value="+" onclick="itemPlus(this)">+</button>
                        </td>
                    </tr>`;

                $("#checkoutTable").append(carttr);
            }
            refreshCartTotal();

            main.find(".add-cart-confirmation").removeClass("w3-hide");
            setTimeout(() => main.find(".add-cart-confirmation").addClass("w3-hide"), 2000)
        }
    )
    $(".buy-now")

    JSON.parse(localStorage.getItem("cartItems")).forEach(cartItem => {
        const carttr =
        `<tr>
            <td style="width: 100px;">
                <div class="w3-container square">
                    <div class="square-contents">
                        <img class="shop-img" src="${cartItem.img}">
                    </div>
                </div>
            </td>
            <td style="width: 250px;">
                <div class="cart-item-name">
                    <p class="cart-item-name">${cartItem.name}</p>
                </div>
                <p class="cart-item-price">₱${cartItem.price.toFixed(2)}</p>
            </td>
            <td style="width: 120px; align-content: flex-end;">
                <button class="cart-qty-minus" type="button" value="-" onclick="itemMinus(this)">-</button><input type="text"
                    name="qty" class="qty-input" min="0" value="${cartItem.qty}" /><button class="cart-qty-plus"
                    type="button" value="+" onclick="itemPlus(this)">+</button>
            </td>
        </tr>`;
        $("#checkoutTable").append(carttr);
    });
    refreshCartTotal();
}
const itemPlus = (target) => {
    const qtyGroup = $(target).closest(".cart-qty-plus").parent();
    qtyGroup.find(".qty-input").val((index, value) => isNaN(parseInt(value)) ? 1 : parseInt(value) + 1);
    refreshCartTotal();
};
const itemMinus = (target) => {
    const qtyGroup = $(target).closest(".cart-qty-minus").parent();
    qtyGroup.find(".qty-input").val((index, value) => {

        if (isNaN(parseInt(value)))
            return 1;
        else {
            if (parseInt(value) == 1) {
                qtyGroup.closest("tr").remove();
            }
            else
                return parseInt(value) - 1
        }
    });
    refreshCartTotal();
};
const refreshCartTotal = () => {
    const cartItems = $("#checkoutTable tr");
    let runningTotal = 0;
    let cartArray = [];
    for (i = 0; i < cartItems.length; i++) {
        const itemTr = $(cartItems[i]);
        const itemName = itemTr.find("p.cart-item-name").text().trim();
        const itemUnitPrice = parseFloat(itemTr.find("p.cart-item-price").text().substring(1));
        const itemQty = parseInt(itemTr.find(".qty-input").val());
        const itemImg = itemTr.find(".shop-img").attr("src");

        cartArray.push({
            name: itemName,
            price: itemUnitPrice,
            qty: itemQty,
            img: itemImg
        });

        if (!isNaN(itemUnitPrice) && !isNaN(itemQty))
            runningTotal += (itemUnitPrice * itemQty);
    }

    localStorage.clear();
    localStorage.setItem("cartItems", JSON.stringify(cartArray));
    $("#total").text(runningTotal);
}

