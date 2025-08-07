const waitlistBtn = document.getElementById("waitlist-btn");
const confirmationMsg = document.getElementById("waitlist-confirmation");

waitlistBtn.addEventListener("click", () => {
  confirmationMsg.textContent = "You're on the list! 🚀";
  confirmationMsg.style.display = "block";
});
