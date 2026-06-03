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
            <h4>$${item.price.toFixed(2)}</h4>
            <ul id="quantity-buttons">
                <li><button class="increase-quan" onclick="increaseQuan(${item.id})">+</button></li>
                <li>${item.quantity}</li>
                <li><button class="decrease-quan" onclick="decreaseQuan(${item.id})">-</button></li>
            </ul>
            </div>

            <div class="cp-item-right">
            <span class="cp-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="cart-trash" onclick="removeItem(${item.id})"><img src="icons/trash-red.png" alt="Trash can icon"></button>
            </button>
            </div>

        </div>
        `
    })

    // ORDER SUMMARY //
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const tax      = subtotal * 0.1     // 10% tax
    const total    = subtotal + tax

    if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toFixed(2)
    if (totalEl)    totalEl.textContent    = "$" + total.toFixed(2)

}

