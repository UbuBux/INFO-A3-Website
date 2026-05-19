document.addEventListener("DOMContentLoaded", () => {

    showProducts()

    // CART OVERLAY //
    // Create variables 1) open cart 2) show cart 3) close cart //
    const cartIcon = document.querySelector('#nav-cart')
    const cart = document.querySelector('#cart-overlay')
    const cartClose = document.querySelector('#cart-close-btn')

    console.log(cartIcon)
    console.log(cart)
    console.log(cartClose)

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

// ARRAY OF PRODUCTS //

let products = [
    {
        id: 0,
        name: "Standard Small", 
        price: 799.00, 
        image: "kk-website-images/standard-small.png",
        description: "Insulated walls/roof (aircell foam) 12mm painted plyboard base, Hardwood plybraced walls, Rolled steel frame UNCHEWABLE, colorbond sheets and flashings, 300mm front overhang for weather protection. Optional extras for this model - Flip Top Lid,  Swing Door, dog flaps, castor wheels, merbua posts and merbua front verandah. If our set sizes do not suit your space please get in contact with us and we can make alterations.",
        kennelInfo: "Externally (mm) : 750w x 600d x 750h + 300mm front overhang. Internally: 50mm less all round. Weight: 15-20kg"
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

                <div>
                    <h3>${item.name}</h3>
                    <p>$${item.price}</p>
                </div>

                <!-- Quantity -->
                <ul id="quantity-buttons">
                    <li><button class="increase-quan">+</button></li>
                    <li>0</li>
                    <li><button class="decrease-quan">-</button></li>
                </ul>

                <!-- Trash -->
                <button id="cart-trash">trash</button>

            </div>
        `
    })
}

// ONCLICK FOR PRODUCT DESCRIPTION // 
// Add to cart button //



// NORMAL - RENDER PRODUCT GRID //

function showProducts() {

    // find the empty section
    let shopGrid = document.querySelector('#shop-grid')

    // create a card for each product of the array
    for (product of products) {

        addCard(product.image, product.name, product.price, product.id, "product-card")

    }
    
}

