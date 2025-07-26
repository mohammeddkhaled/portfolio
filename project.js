document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".toggle-details-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const details = card.querySelector(".project-details");

      details.classList.toggle("show");

      button.textContent = details.classList.contains("show")
        ? "Hide Details"
        : "View Details";
    });
  });
});
