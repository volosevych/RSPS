const toggleBtn = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  toggleBtn.classList.toggle("open");
});
