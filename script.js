const waitlistBtn = document.getElementById("waitlist-btn");
const confirmationMsg = document.getElementById("waitlist-confirmation");

waitlistBtn.addEventListener("click", () => {
  confirmationMsg.textContent = "You're on the list! 🚀";
  confirmationMsg.style.display = "block";
});


// Toggle solutions
document.querySelectorAll(".show-solution").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.nextElementSibling;
    const isOpen = box.style.display === "block";
    box.style.display = isOpen ? "none" : "block";
    btn.textContent = isOpen ? "Show Solution" : "Hide Solution";
  });
});
