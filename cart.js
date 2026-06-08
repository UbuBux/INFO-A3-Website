document.addEventListener("DOMContentLoaded", () => {

    // CART OVERLAY //
    // Create variables 1) open cart 2) show cart 3) close cart //
    // 4) add to cart btn (product list) 5) feedback to user
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

    // Close when clicking the dim backdrop
    cart.addEventListener("click", (e) => {
        if (e.target === cart) cart.classList.remove("open-cart")
    })
 
    // Kick off the display on page load
    displayInCart()

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

// Shipping //
const standardShippingCost  = 25      // standard   
const freeShippingThreshold = 1000    // spend 1000 get free shippoing
 

//DISPLAY IN CART //
function displayInCart() {

    const cartContainer = document.querySelector("#display-cart-items")
    const footerEl      = document.querySelector("#cart-footer")
    const countEl       = document.querySelector("#cart-count")

    // empty cart
    if (cart.length === 0) {
        if (countEl) countEl.textContent = ""
        cartContainer.innerHTML = `<div class="cart-empty">Your cart is empty. <br> <a href="product-list.html"     class="btn-continue">Continue shopping</a></div>`
    if (footerEl) footerEl.innerHTML = ""
    return
  }

    // Item count badge
    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0)
    if (countEl) countEl.textContent = totalQty + " item" + (totalQty !== 1 ? "s" : "")

    // loop through cart array
    cartContainer.innerHTML = ""
    cart.forEach(item => {

        cartContainer.innerHTML += `
            <div class="cart-item">

                <img src="${item.image}" alt="${item.name}" width="72" height="72">

                <div class="cart-beside">
                    <div>
                        <h3>${item.name}</h3>
                        <h4>$${item.price.toFixed(2)}</h4>
                    </div>

                    <!-- Quantity -->
                    <ul id="quantity-buttons">
                        <li><button class="decrease-quan" onclick="decreaseQuan(${item.id})">-</button></li>
                        <li>${item.quantity}</li>
                        <li><button class="increase-quan" onclick="increaseQuan(${item.id})">+</button></li>
                    </ul>

                
                </div>
            </div>
        `
    })

    const subtotal  = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping  = subtotal >= freeShippingThreshold ? 0 : standardShippingCost
    const total     = subtotal + shipping
    const remaining = freeShippingThreshold - subtotal

    if (footerEl) {
    footerEl.className = "cart-footer"
    footerEl.innerHTML = `
      <div class="cart-summary-row">
        <span>Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="cart-summary-row">
        <span>Shipping${shipping > 0 ? ` <span class="cart-summary-note">free over $${freeShippingThreshold}</span>` : ""}</span>
        <span style="${shipping === 0 ? "color:#3b6d11;font-weight:600;" : ""}">
          ${shipping === 0 ? "Free" : "$" + shipping.toFixed(2)}
        </span>
      </div>
      ${remaining > 0
        ? `<div class="cart-summary-row" style="font-size:12px;color:#ccc;">Add $${remaining.toFixed(2)} more for free shipping</div>`
        : `<div class="cart-free-shipping">✓ You've unlocked free shipping!</div>`
      }
      <hr class="cart-summary-divider">
      <div class="cart-total-row">
        <span>Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      <a href="cart.html" class="btn-checkout">Confirm order</a>
      <a href="product-list.html"     class="btn-continue">Continue shopping</a>
    `
  }
    
}

// SAVE CART INFO //
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart))
    displayInCart()
    if (typeof displayCartPage === "function") displayCartPage()
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