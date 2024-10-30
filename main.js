
document.getElementById("name-prompt-btn").addEventListener("click", function () {
    const name = prompt("Please enter your name:");
    if (name) {
        document.getElementById("display-name").textContent = `Hello, ${name}! Welcome to my homepage.`;
    }
});


document.getElementById("profile-pic").addEventListener("click", function () {
    this.classList.toggle("enlarged");
});


const navLinks = document.querySelectorAll(".nav-menu > li > a");

navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
        link.style.color = "#2980b9";
    });
    link.addEventListener("mouseout", () => {
        link.style.color = "#2c3e50";
    });
});
