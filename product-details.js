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


    document.getElementById("product-path-name").textContent = product.name
    document.getElementById("pro-img-1").src = product.image
    document.getElementById("product-name").textContent = product.name
    document.getElementById("product-price").textContent = "$" + product.price

    let button = document.getElementById('addToCartBtn')
    button.onclick = () => addToCart(productId)
}