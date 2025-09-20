// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
document.getElementById("chatbot-toggle").addEventListener("click", () => {
  document.getElementById("chatbot-widget").style.display = "flex";
  document.getElementById("chatbot-toggle").style.display = "none";
});

document.getElementById("chatbot-close").addEventListener("click", () => {
  document.getElementById("chatbot-widget").style.display = "none";
  document.getElementById("chatbot-toggle").style.display = "block";
});

