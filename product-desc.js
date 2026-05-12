document.addEventListener("DOMContentLoaded", () => {

    showDetails()

    // CART OVERLAY //
    // Create variables 1) open cart 2) show cart 3) close cart //
    const cartIcon = document.querySelector('#nav-cart')
    const cart = document.querySelector('#cart-overlay')
    const cartClose = document.querySelector('#cart-close-btn')

    console.log(cartIcon)
    console.log(cart)
    console.log(cartClose)

    // When cart icon is clicked, add class "open" to the overlay - this will make it visible
    cartIcon.addEventListener("click", () => {
        event.preventDefault()
        cart.classList.add("open-cart")
    })

    // When close overlay button is clicked, "open" class will be removed and overlay will disappear
    cartClose.addEventListener("click", () => {
        cart.classList.remove("open-cart")
    })

})

// ARRAY OF PRODUCTS //

let products = [
    {
        id: 0,
        name: "Standard Small", 
        price: 799.00, 
        image: "kk-website-images/standard-small.png",
    },
    {
        id: 1,
        name: "Standard Medium", 
        price: 999.00,
        image: "kk-website-images/standard-medium.png",
    },
    {
        id: 2,
        name: "Standard Large", 
        price: 1299.00,
        image: "kk-website-images/standard-large.png",
    },
    {
        id: 3,
        name: "Standard X Large", 
        price: 1499.00,
        image: "kk-website-images/standard-x-large.png",
    },
    {
        id: 4,
        name: "Standard XX Large", 
        price: 1899.00,
        image: "kk-website-images/standard-xx-large.png",
    },
    {
        id: 5,
        name: "Klassic", 
        price: 899.00,
        image: "kk-website-images/klassic-SML.png",
    },
    {
        id: 6,
        name: "Cottage", 
        price: 2999.00,
        image: "kk-website-images/cottage-kennel.png",
    },
    {
        id: 7,
        name: "Bungalow", 
        price: 2199.00,
        image: "kk-website-images/bungalow-kennel.png",
    },
    {
        id: 8,
        name: "Deluxe", 
        price: 2499.00,
        image: "kk-website-images/deluxe-kennel.png",
    },
    {
        id: 9,
        name: "Bungalow Large", 
        price: 3499.00,
        image: "kk-website-images/large-bungalow.png",
    },
    {
        id: 10,
        name: "Double Medium", 
        price: 1599.00,
        image: "kk-website-images/double-medium.png",
    },
    {
        id: 11,
        name: "Double Large", 
        price: 1999.00,
        image: "kk-website-images/double-large.png",
    },

]

function showDetails() {

    const params = new URLSearchParams(window.location.search)

    const productId = params.get("id")

    const product = products[productId]

    console.log(product)


    document.getElementById("product-path-name").textContent = product.name
    document.getElementById("pro-img-1").src = product.image
    document.getElementById("product-name").textContent = product.name
    document.getElementById("product-price").textContent = "$" + product.price
}



