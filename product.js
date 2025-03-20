document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Lightbox Functionality
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const closeBtn = document.querySelector(".close");

  // Selecting all images inside .image-card
  document.querySelectorAll(".image-card").forEach((card) => {
    card.addEventListener("click", () => {
      const img = card.querySelector(".gallery-item");  // Get the image inside the clicked card
      const desc = card.querySelector(".image-description").textContent;  // Get the description

      if (img) {
        lightboxImg.src = img.getAttribute("data-src"); // Use getAttribute instead of dataset
        lightboxDesc.textContent = desc;  // Set the description
        lightbox.style.display = "flex";  // Show the lightbox
      }
    });
  });

  // Close the lightbox when clicking the close button or outside the image
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
});
