const product = JSON.parse(window.localStorage.getItem("product"))

console.log(product)

$(document).ready(() => {
    $('#details-img').attr('src', product.images)
    $('#product-name').text(product.name);
    $('#product-model').text(product.model);
    $('#product-price').text(product.price);
})

$('#adds').click(() => {
    const currCart = JSON.parse(window.localStorage.getItem("cart"))
    const pName = $('#product-name').text();
    const pPrice = parseInt($('#product-price').text());

    if (currCart == null) {
        const newCart = [];
        newCart.push({
            name: pName,
            price: pPrice,
        })
        window.localStorage.setItem("cart", JSON.stringify(newCart))
    } else {
        currCart.push({
            name: pName,
            price: pPrice,
        })
        window.localStorage.setItem("cart", JSON.stringify(currCart))
    }
})

let count = 0;
$('#adds1').click(function () {
    count += 1;
    $('#result').text(count);

});