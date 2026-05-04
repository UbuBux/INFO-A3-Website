document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM is ready!');
    showProducts();
});

// ARRAY OF PRODUCTS //

let products = [
    {name: "Standard Small", price: 799.00},
    {name: "Standard Medium", price: 999.00},
    {name: "Standard Large", price: 1299.00},

]




// ADD A PRODUCT CARD //
function addCard(parent, text) {
    let newCard = document.createElement('div')
    newCard.textContent = text
}

// NORMAL - RENDER PRODUCT GRID //

function showProducts () {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create a card for each product of the array
    for (product of products) {


    }
    
}