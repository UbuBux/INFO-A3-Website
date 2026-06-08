document.addEventListener("DOMContentLoaded", () => {

    displayCartPage()

})

function displayCartPage() {

    // Re-read from localStorage each time so it's always in sync
    const cart = JSON.parse(localStorage.getItem("cart")) || []

    const itemsContainer = document.getElementById("cp-cart-items")
    const emptyState     = document.getElementById("cp-empty-state")
    const subtotalEl     = document.getElementById("subtotal-value")
    const totalEl        = document.getElementById("total-value")
    const shippingEl     = document.getElementById("shipping-value")

    // Only run on the cart page
    if (!itemsContainer) return

    // EMPTY STATE //
    if (cart.length === 0) {
        itemsContainer.innerHTML = ""
        if (emptyState) emptyState.style.display = "flex"
        if (subtotalEl) subtotalEl.textContent = "$0.00"
        if (totalEl)    totalEl.textContent    = "$0.00"
        return
    }

    
    if (emptyState) emptyState.style.display = "none"

    // RENDER PAGE //
    itemsContainer.innerHTML = ""
        
    cart.forEach(item => {
        itemsContainer.innerHTML += `
        <div class="cp-cart-item">

            <img src="${item.image}" alt="${item.name}">

            <div class="cart-beside">
            <h3>${item.name}</h3>
            <h4>($${item.price.toFixed(2)} x ${item.quantity})</h4>

            <div class="cp-item-right">
            <span class="cp-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>

        </div>
        `
    })

    // ORDER SUMMARY //
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax      = subtotal * 0.1     // 10% tax
    const shipping  = subtotal >= freeShippingThreshold ? 0 : standardShippingCost
    const total     = subtotal + shipping

    if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toFixed(2)
    if (shippingEl) shippingEl.textContent = "Free!"
    if (totalEl)    totalEl.textContent    = "$" + total.toFixed(2)

}

