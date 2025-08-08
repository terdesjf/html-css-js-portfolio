function toggleMenu() {
    // Toggle the menu visibility
    const menu = document.querySelector(".menu-links");
    menu.classList.toggle("open")

    // Toggle the hamburger icon state
    const icon = document.querySelector(".hamburger-icon");
    icon.classList.toggle("open")
}