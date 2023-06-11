// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar utk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Animasi
document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll(
    ".hero .paragraph, .about .content, .benefit .title, .benefit .content, .qualification .title, .qualification .experience-card, .gallery .title, .gallery .gallery-content, .kontak .title, .kontak .contact_information, .kontak .contact_container"
  );

  function animateElements() {
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var elementPosition = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (elementPosition < windowHeight) {
        element.classList.add("animate-in");
      }
    }
  }

  animateElements();

  window.addEventListener("scroll", animateElements);
});
