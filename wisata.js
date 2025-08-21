document.addEventListener("DOMContentLoaded", function () {
  // === 1. Animasi fade-in saat elemen .wisata-card masuk viewport ===
  const cards = document.querySelectorAll(".wisata-card");
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach((card) => cardObserver.observe(card));

  // === 2. Smooth scroll ke anchor (link ke #id) ===
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // === 3. Animasi saat scroll untuk elemen dengan class .fade-in ===
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;
    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight - 100) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);

  // === 4. Scrollspy: menyorot link navigasi sesuai section yang sedang ditampilkan ===
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // === 5. Modal popup gambar saat gambar diklik ===
  const images = document.querySelectorAll(".wisata-card img, .galeri-item img");
  const modal = document.createElement("div");
  const modalImg = document.createElement("img");

  modal.classList.add("modal");
  modal.appendChild(modalImg);
  document.body.appendChild(modal);

  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("show");
    });
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});
// file: script.js
document.body.style.opacity = 0;
window.addEventListener("load", () => {
  document.body.style.transition = "opacity 1s ease-in-out";
  document.body.style.opacity = 1;
});
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("show");
        }, index * 200); // jeda animasi tiap elemen
    });
});
