const product = JSON.parse(window.localStorage.getItem("product"))

console.log(product)

$(document).ready(()=>{
    $('#details-img').attr('src', product.img)
    $('#product-name').text(product.name);
    $('#product-model').text(product.model);
    $('#product-price').text(product.price);
})