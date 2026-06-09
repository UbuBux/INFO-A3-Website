document.addEventListener("DOMContentLoaded", () => {

    showDetails()

})

function showDetails() {

    const params = new URLSearchParams(window.location.search)

    const productId = Number(params.get("id"))

    const product = products.find(item => item.id === productId)

    if (!product) {
    console.error("Product not found")
    return
}

    console.log(product)


    document.getElementById("product-path-name-desktop").textContent = product.name
    document.getElementById("product-path-name-mobile").textContent = product.name
    document.getElementById("pro-img-1").src = product.image
    document.getElementById("pro-img-2").src = product.image
    document.getElementById("product-name").textContent = product.name
    document.getElementById("product-price").textContent = "$" + product.price
    document.getElementById("product-dimensions").textContent = product.dimensions

    let button = document.getElementById('addToCartBtn')
    button.onclick = function () {

        addToCart(productId)

        const cart = document.querySelector('#cart-overlay')
        cart.classList.add("open-cart")

    }
}

document.querySelectorAll(".acc-trigger").forEach(button => {
    button.addEventListener("click", () => {
        toggleAccordion(button);
    });
});

function toggleAccordion(button) {
    const currentItem = button.parentElement

    document.querySelectorAll(".acc-item").forEach(item => {
        if (item !== currentItem) {
            item.classList.remove("active")
            item.querySelector(".acc-body").style.maxHeight = null
        }
    })

    currentItem.classList.toggle("active")

    const body = currentItem.querySelector(".acc-body")

    if (currentItem.classList.contains("active")) {
        body.style.maxHeight = body.scrollHeight + "px"
    } else {
        body.style.maxHeight = null
    }
}



