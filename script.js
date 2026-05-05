document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');
    showProducts();
});

// ARRAY OF PRODUCTS //

let products = [
    {name: "Standard Small", price: 799.00, image: "kk-website-images/standard-small.png"},
    {name: "Standard Medium", price: 999.00},
    {name: "Standard Large", price: 1299.00},

]




// ADD A PRODUCT CARD //
function addCard(image, name, price) {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create empty div and append to shop grid
    let newDiv = document.createElement('div')
    newDiv.classList.add("product-card");
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
}

// NORMAL - RENDER PRODUCT GRID //

function showProducts () {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create a card for each product of the array
    for (product of products) {

        addCard(product.image, product.name, product.price)

    }
    
}