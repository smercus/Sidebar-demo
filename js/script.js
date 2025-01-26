const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const menuToggler = document.querySelector(".menu-toggler");

const collapsedSidebarHeight = "56px";
const fullSidebarHeight = "calc(100vh - 32px)";

// Toggle sidebar's collapsed estate
sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});

// Update sidebar height and menu toggle text
const toggleMenu = (isMenuActive) => {
    sidebar.style.height = isMenuActive ? `${sidebar.scrollHeight}px` : 
    collapsedSidebarHeight;
    menuToggler.querySelector("span").innerText = isMenuActive ? "close" : "menu";
}

// Toggle menu-active class and adjust height;
menuToggler.addEventListener("click", () => {
    toggleMenu(sidebar.classList.toggle("menu-active"));
});

// Adjust sidebar height on window resize
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        sidebar.style.height = fullSidebarHeight;
    } else {
        sidebar.classList.remove("collapsed");
        sidebar.style.height = "auto";
        toggleMenu(sidebar.classList.contains("menu-active"));
    }
});