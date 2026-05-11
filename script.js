document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');
    showProducts();
});

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




// ADD A PRODUCT CARD //
function addCard(image, name, price, id, cardName) {

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

    newDiv.onclick = function () {
        window.location.href = `product-desc.html?id=${id}`
}
}

// 


// NORMAL - RENDER PRODUCT GRID //

function showProducts() {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create a card for each product of the array
    for (product of products) {

        addCard(product.image, product.name, product.price, product.id, "product-card")

    }
    
}

