document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');
    showProducts();
});

// ARRAY OF PRODUCTS //

let products = [
    {
        name: "Standard Small", 
        price: 799.00, 
        image: "kk-website-images/standard-small.png",
    },
    {
        name: "Standard Medium", 
        price: 999.00,
        image: "kk-website-images/standard-medium.png",
    },
    {
        name: "Standard Large", 
        price: 1299.00,
        image: "kk-website-images/standard-large.png",
    },
    {
        name: "Standard X Large", 
        price: 1499.00,
        image: "kk-website-images/standard-x-large.png",
    },
    {
        name: "Standard XX Large", 
        price: 1899.00,
        image: "kk-website-images/standard-xx-large.png",
    },
    {
        name: "Klassic", 
        price: 899.00,
        image: "kk-website-images/klassic-SML.png",
    },
    {
        name: "Cottage", 
        price: 2999.00,
        image: "kk-website-images/cottage-kennel.png",
    },
    {
        name: "Bungalow", 
        price: 2199.00,
        image: "kk-website-images/bungalow-kennel.png",
    },
    {
        name: "Deluxe", 
        price: 2499.00,
        image: "kk-website-images/deluxe-kennel.png",
    },
    {
        name: "Bungalow Large", 
        price: 3499.00,
        image: "kk-website-images/large-bungalow.png",
    },
    {
        name: "Double Medium", 
        price: 1599.00,
        image: "kk-website-images/double-medium.png",
    },
    {
        name: "Double Large", 
        price: 1999.00,
        image: "kk-website-images/double-large.png",
    },

]




// ADD A PRODUCT CARD //
function addCard(image, name, price, cardName) {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create empty div and append to shop grid
    let newDiv = document.createElement('div')
    newDiv.classList.add(cardName);
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

function showProducts() {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create a card for each product of the array
    for (product of products) {

        addCard(product.image, product.name, product.price, "product-card")

    }
    
}

/*
// ADD A CARD TO PRODUCT DESC //

function addCard(image, name, price, cardName) {

    // find the empty section
    let productDesc = document.querySelector('#product-desc')

    // create empty div and append to product description
    let newDiv = document.createElement('div')
    newDiv.classList.add(cardName);
    productDesc.appendChild(newDiv)

    // create new image and append to div 
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

// RENDER PRODUCT DESCRIPTION //

function showDescription() {

    // find the empty main (parent)
    let shopDesc = document.querySelector('#product-desc')

    // display product details for each product of the array
    for (product of products) {

        

    }

}

*/