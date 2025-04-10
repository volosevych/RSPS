// page loader
window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 300);
  }
});

const toggleBtn = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (toggleBtn && mobileMenu) {
  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    toggleBtn.classList.toggle("open");
  });
}

// Active link for header nav links
const links = document.querySelectorAll("header a");
const currentPath = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const href = link.getAttribute("href").split("/").pop();
  if (href === currentPath || (href === "index.html" && currentPath === "")) {
    link.parentElement.classList.add("active-link");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const authButtons = document.getElementById("authButtons");
  const mobileAuthButtons = document.getElementById("mobileAuthButtons");
  const user = localStorage.getItem("loggedInUser");

  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname === "/" ||
    window.location.pathname === "/index.html";

  const prefix = isHomePage ? "./pages/" : "./";

  // Function to render auth buttons
  const renderAuthButtons = (container, isMobile = false) => {
    if (!container) return;

    if (user) {
      container.innerHTML = `
        <div class="d-flex ${
          isMobile
            ? "flex-column align-items-start gap-3"
            : "gap-3 align-items-center"
        }">
          <p class="fw-bold color-darkBlue ${
            isMobile
              ? "text-start d-flex flex-column"
              : "d-flex align-items-center gap-2"
          }">
            <span>Logged in as:</span>
             <span class="color-blue">${user}</span>
          </p>
          <button class="white-button ${
            isMobile ? "w-auto" : ""
          }" onClick="logout()">Log Out</button>
        </div>
      `;
    } else {
      container.innerHTML = `
        <button class="white-button ${isMobile ? "w-100" : ""}">
          <a href="${prefix}logIn.html">Log In</a>
        </button>
        <button class="blue-button ${isMobile ? "w-100" : ""}">
          <a href="${prefix}signUp.html">Sign Up</a>
        </button>
      `;
    }
  };

  renderAuthButtons(authButtons);
  renderAuthButtons(mobileAuthButtons, true);
});

function logout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}
