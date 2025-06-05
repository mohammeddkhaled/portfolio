// scroll to bottom
function scrollOneScreen() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}

// about me
function openPopup() {
  document.getElementById('aboutPopup').style.display = 'block';
}

function closePopup() {
  document.getElementById('aboutPopup').style.display = 'none';
}

//close popup on outside click
window.onclick = function (e) {
  const popup = document.getElementById('aboutPopup');
  if (e.target === popup) {
    popup.style.display = 'none';
  }
};

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


//scroll to topUp 
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

