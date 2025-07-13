
// project slider
window.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper !== 'undefined') {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }


});
// Toggle project details
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-details-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const details = button.nextElementSibling;
      details.classList.toggle("show");

      button.textContent = details.classList.contains("show")
        ? "Hide Details"
        : "View Details";
    });
  });
});
