// Smooth Scroll
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Form Validation
document.getElementById("service-form").addEventListener("submit", function (e) {
  let name = this.querySelector("input[name='name']").value.trim();
  let email = this.querySelector("input[name='email']").value.trim();

  if (!name || !email) {
    alert("Please fill in required fields.");
    e.preventDefault();
  }
});

