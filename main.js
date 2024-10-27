
function askUserName() {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
    }
}


function enlargeImage() {
    const image = document.getElementById("profileImage");
    image.classList.toggle("enlarged");
}


function setupNavigation() {
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.classList.add("hovered");
        });
        item.addEventListener("mouseout", () => {
            item.classList.remove("hovered");
        });
    });
}


document.addEventListener("DOMContentLoaded", setupNavigation);
