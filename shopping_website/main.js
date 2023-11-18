
/* function to add product in cart */

function addToCart(productId, productName, productprice, src) {
    const product = {
        id: productId,
        name: productName,
        price: productprice,
        source: src,
    };
    /* check cart array in local storage if not present create an array named as cart */
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);


    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
    alert("item added sucussfully go to cart page");
}
function orderplaced() {
    alert("Order placed Succussfully");
}


