document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Select all image cards
  const imageCards = document.querySelectorAll(".image-card");

  // Ensure images load properly when the page loads
  imageCards.forEach((card) => {
    const img = card.querySelector(".gallery-item");
    if (img && img.getAttribute("data-src")) {
      img.src = img.getAttribute("data-src"); // Load the image on page load
    }
  });

  // Lightbox Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const closeBtn = document.querySelector(".close");

  imageCards.forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".gallery-item");
      const desc = card.querySelector(".image-description").textContent;

      if (img) {
        lightboxImg.src = img.src; // Set image source for lightbox
        lightboxDesc.textContent = desc;
        lightbox.style.display = "flex";
      }
    });
  });

  // Close the lightbox
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
