document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item.lazy");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  // Lazy Loading Images
  const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute("data-src");
        img.classList.add("loaded");
        img.removeAttribute("data-src"); // Remove once loaded
        observer.unobserve(img);
      }
    });
  };

  const observer = new IntersectionObserver(lazyLoad, {
    root: null,
    threshold: 0.1
  });

  galleryItems.forEach(img => observer.observe(img));

  // Lightbox Functionality
  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = item.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});
