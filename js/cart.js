$(document).ready(() => {
    const cart = JSON.parse(window.localStorage.getItem("cart"))
    let count = 1
    cart.forEach(element => {
        $("#cart-products").append(` <tr>
        <th scope="row">${count++}</th>
        <td>${element.name}</td>
        <td>${element.price}</td>
      </tr>`)    
    });
       
    
    
})