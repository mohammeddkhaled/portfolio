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

// contact form
document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('form-status');

  if (!name || !email || !message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  status.textContent = "Sending...";
  status.style.color = "#ccc";

  try {
    const res = await fetch("https://portfolio-backend-2o6z.onrender.com", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message })
    });

    const data = await res.json();
    if (res.ok) {
      status.textContent = data.message;
      status.style.color = "#0f0";
      document.getElementById('contact-form').reset();
    } else {
      status.textContent = data.message || "Something went wrong!";
      status.style.color = "red";
    }
  } catch (err) {
    status.textContent = "Network error!";
    status.style.color = "red";
  }
});

//scroll to topUp 
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

