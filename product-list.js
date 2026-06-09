document.addEventListener("DOMContentLoaded", () => {

    showProducts()

    displayProducts(products)

    document
        .querySelector("#searchBar")
        .addEventListener("input", applyFilters)

    document
        .querySelector("#sortBy")
        .addEventListener("change", applyFilters)

    document
        .querySelectorAll(".shopCheckboxes input")
        .forEach(box => {
            box.addEventListener("change", applyFilters)
        })

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

        const cart = document.querySelector('#cart-overlay')
        cart.classList.add("open-cart")

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



// FUNCTION TO RENDER NEW GRID BASED ON filteredProducts ARRAY //

function displayProducts(productList) {

    const shopGrid = document.querySelector("#shop-grid")

    shopGrid.innerHTML = ""

    productList.forEach(product => {

        addCard(
            product.image,
            product.name,
            product.price,
            product.id,
            "product-card"
        );

    });

}


// FUNCTION TO FILTER OUT THE SHOP GRID - SEARCH/FILTER/SORT //

function applyFilters() {

    let filteredProducts = [...products]

    // SEARCH
    const searchText = document
        .querySelector("#searchBar")
        .value
        .toLowerCase()

    filteredProducts = filteredProducts.filter(product =>
        product.name.toLowerCase().includes(searchText)
    )

    // FILTERS
    const selectedCategories = []

    if (document.querySelector("#standardKennels").checked)
        selectedCategories.push("standard")

    if (document.querySelector("#klassicKennels").checked)
        selectedCategories.push("klassic")

    if (document.querySelector("#cottageKennels").checked)
        selectedCategories.push("cottage")

    if (document.querySelector("#bungalowKennels").checked)
        selectedCategories.push("bungalow")

    if (document.querySelector("#deluxeKennels").checked)
        selectedCategories.push("deluxe")

    if (document.querySelector("#doubleKennels").checked)
        selectedCategories.push("double")

    if (selectedCategories.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedCategories.includes(product.category)
        );
    }

    // SORT
    const sortValue = document.querySelector("#sortBy").value

    if (sortValue === "lowest") {
        filteredProducts.sort((a, b) => a.price - b.price)
    }

    if (sortValue === "highest") {
        filteredProducts.sort((a, b) => b.price - a.price)
    }

    displayProducts(filteredProducts)

}