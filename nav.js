document.addEventListener("DOMContentLoaded", () => {

    // HAMB MOBILE OVERLAY //
    const hamburger = document.getElementById("hamburgerIcon")
    const menu = document.getElementById("mobileMenu")
    const overlay = document.getElementById("navOverlay")

    function toggleMenu() {
        menu.classList.toggle("active")
        overlay.classList.toggle("active")
        hamburger.classList.toggle("open")
    }

    if (hamburger && menu && overlay) {
        hamburger.addEventListener("click", toggleMenu)
        overlay.addEventListener("click", toggleMenu)
    }

    const shopBtn = document.getElementById("seeShop")

    if (shopBtn) {
        shopBtn.addEventListener("click", () => {
            window.location.href = "product-list.html"
        })
    }

})