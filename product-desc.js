function showDetails() {

    const params = new URLSearchParams(window.location.search)

    const productId = params.get("id")

    const product = products[productId]

    console.log(product)
}