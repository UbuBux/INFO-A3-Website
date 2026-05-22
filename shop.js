document.addEventListener("DOMContentLoaded", () => {

    showProducts()

})

// ADD A PRODUCT CARD //
function addCard(image, name, price, id, cardName) {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create empty div and append to shop grid
    let newDiv = document.createElement('div')
    newDiv.classList.add(cardName)
    shopGrid.appendChild(newDiv)

    /* create new image and append to div */
    let newImg = document.createElement('img')
    newImg.src = image
    newImg.alt = "Image of a " + name + " kennel."
    newDiv.appendChild(newImg)

    // create new h3 and append to div
    let newName = document.createElement('h3')
    newName.textContent = name
    newDiv.appendChild(newName)

    // create new h4 and append to div
    let newPrice = document.createElement('h4')
    newPrice.textContent = "$" + price + ".00"
    newDiv.appendChild(newPrice)

    // create new button (add to cart)
    let quickAdd = document.createElement('button')
    quickAdd.textContent = "Add To Cart"
    newDiv.appendChild(quickAdd)
    quickAdd.onclick = function (event) {
        // currently, clicking the whole card takes user to prod desc.
        event.stopPropagation()

        addToCart(id)
    }

    newDiv.onclick = function () {
        window.location.href = `product-desc.html?id=${id}`
}

}

// NORMAL - RENDER PRODUCT GRID //

function showProducts() {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create a card for each product of the array
    for (product of products) {

        addCard(product.image, product.name, product.price, product.id, "product-card")

    }
    
}