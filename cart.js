document.addEventListener("DOMContentLoaded", () => {

    // CART OVERLAY //
    // Create variables 1) open cart 2) show cart 3) close cart //
    const cartIcon = document.querySelector('#nav-cart')
    const cart = document.querySelector('#cart-overlay')
    const cartClose = document.querySelector('#cart-close-btn')

    // When cart icon is clicked, add class "open" to the overlay - this will make it visible
    cartIcon.addEventListener("click", (event) => {
        event.preventDefault()
        cart.classList.add("open-cart")
    })

    // When close overlay button is clicked, "open" class will be removed and overlay will disappear
    cartClose.addEventListener("click", () => {
        cart.classList.remove("open-cart")
    })

})

// ADD ITEM TO CART //
// empty array for products to be pushed // 
// gets items from local storage (strings) and parses them into arrays again
let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(productId) {
    // find product object id in products array and check whether the id matches the id of the button clicked
    const product = products.find(item => item.id === productId)

    // add product o the array
    const existingItem = cart.find(item => item.id === productId)

    if (existingItem) {
        existingItem.quantity += 1
    } else {
        cart.push({
            ...product,
            quantity: 1
        })
    }

    // convert array to string and store in local storage
    localStorage.setItem("cart", JSON.stringify(cart))

    // add to cart display
    displayInCart()
}

//DISPLAY IN CART //
function displayInCart() {

    const cartContainer = document.querySelector("#display-cart-items")

    // clear old cart HTML
    cartContainer.innerHTML = ""

    // loop through cart array
    cart.forEach(item => {

        cartContainer.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" width="100">

                <div class="cart-beside">
                    <div>
                        <h3>${item.name}</h3>
                        <h4>$${item.price}</h4>
                    </div>

                    <!-- Quantity -->
                    <ul id="quantity-buttons">
                        <li><button class="increase-quan" onclick="increaseQuan(${item.id})">+</button></li>
                        <li>${item.quantity}</li>
                        <li><button class="decrease-quan" onclick="decreaseQuan(${item.id})">-</button></li>
                    </ul>

                    <!-- Trash -->
                    <button class="cart-trash" onclick="removeItem(${item.id})"><img src="icons/trash-red.png" alt="Trash can icon"></button>
                </div>
            </div>
        `
    })
}

// SAVE CART INFO //
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
    displayInCart()
}

// INCREASE AND DECREASE QUANTITY //
function increaseQuan(id) {
    const item = cart.find(product => product.id === id)
    item.quantity += 1

    saveCart()
}

function decreaseQuan(id) {
    const item = cart.find(product => product.id === id)

    item.quantity -= 1

    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== id)
    }

    saveCart()
}

//REMOVE ITEMS WITH TRASH BUTTON //
function removeItem(id) {
    cart = cart.filter(p => p.id !== id)
    saveCart()
}