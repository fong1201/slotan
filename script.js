// Smooth scroll for navigation links
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section[id]");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Update active nav link on scroll
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation
    if (name && email && message) {
      alert(
        `Thank you, ${name}! Your message has been received. We'll get back to you at ${email} soon.`,
      );
      contactForm.reset();
    }
  });
}

// Add smooth fade-in animation to cards on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

const cards = document.querySelectorAll(".feature-card, .stat-item");
cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Mobile menu toggle (if needed)
const navbarMenu = document.querySelector(".navbar-menu");
const navbarBrand = document.querySelector(".navbar-brand");

// Close menu when link is clicked
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

console.log("✨ Vigilant Potato static site loaded successfully!");
