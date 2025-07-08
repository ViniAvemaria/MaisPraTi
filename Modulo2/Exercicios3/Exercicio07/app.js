function toggleMenu() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");

    navbar.classList.toggle("active");
    hamburger.classList.toggle("active");

    setTimeout(() => {
        navbar.classList.toggle("closing");
    }, 300);
}
