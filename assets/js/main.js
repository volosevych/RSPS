// page loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.remove();
    }, 300);
  }
});

const toggleBtn = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  toggleBtn.classList.toggle("open");
});

// Active link for header nav links
const links = document.querySelectorAll("header a");
const currentPath = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPath || (href === "index.html" && currentPath === "")) {
    link.parentElement.classList.add("active-link");
  }
});
