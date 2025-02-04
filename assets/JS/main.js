// Add class active to header on scroll

let header = document.querySelector("header")

window.onscroll = function () {
    if (this.scrollY >= 50) {
        header.classList.add("active")
    }
    else {
        header.classList.remove("active")
    }
}


document.addEventListener("DOMContentLoaded", function () {
    var animation = lottie.loadAnimation({
        container: document.getElementById("lottie-container"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/assets/JSON/web-design-layout.json", // Ensure this file is in the correct path
    });
});

