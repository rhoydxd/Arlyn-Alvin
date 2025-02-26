document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-button-toggle");
  const mobileMenu = document.querySelector(".mobile-menu-container");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
