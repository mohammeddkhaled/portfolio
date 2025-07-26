// Like (heart) functionality
const heartIcon = document.querySelector(".heart-icon");
heartIcon.addEventListener("click", () => {
  heartIcon.classList.toggle("liked");
});

// Share functionality
const shareBtn = document.querySelector(".share");
shareBtn.addEventListener("click", async () => {
  const shareData = {
    title: "Mohammed Khaled – Frontend Developer",
    text: "Check out this awesome developer profile!",
    url: window.location.href, // share current page
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      alert("Share not supported on this device/browser.");
    }
  } catch (err) {
    console.error("Share failed:", err);
  }
});

// Modal logic
const openBtn = document.getElementById("openProfile");
const modal = document.getElementById("profileModal");
const closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
