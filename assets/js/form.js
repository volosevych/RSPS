function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alertBox");
  if (!alertBox) return;

  alertBox.textContent = message;
  alertBox.className = `alert alert-${type}`;
  alertBox.classList.remove("d-none");
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.add("hide");
    setTimeout(() => {
      alertBox.classList.remove("show", "hide");
      alertBox.classList.add("d-none");
    }, 300);
  }, 3000);
}

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const forgotForm = document.getElementById("forgotForm");
  const resetForm = document.getElementById("resetForm");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // Show/hide password (only if elements exist)
  if (passwordInput && togglePassword) {
    togglePassword.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
    });
  }

  // Forgot password
  if (forgotForm) {
    forgotForm.addEventListener("submit", function (e) {
      e.preventDefault();
      showAlert(
        "If your email exists in our system, a reset link will be sent."
      );
    });
  }

  // Reset Password
  if (resetForm) {
    const newPasswordInput = document.getElementById("newPassword");
    const confirmPasswordInput = document.getElementById("confirmPassword");

    resetForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const newPassword = newPasswordInput?.value;
      const confirmPassword = confirmPasswordInput?.value;

      if (!newPassword || !confirmPassword) {
        showAlert("Please fill in both password fields.", "warning");
        return;
      }

      if (newPassword !== confirmPassword) {
        showAlert("Passwords do not match!", "danger");
        return;
      }

      showAlert("Your password has been successfully reset!", "success");
      resetForm.reset();
    });
  }

  // Simulated Log In
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const email = emailInput?.value.trim();
      const password = passwordInput?.value.trim();

      if (!email || !password) {
        showAlert("Please fill in all fields.", "warning");
        return;
      }

      localStorage.setItem("loggedInUser", email);
      showAlert("Logged in successfully!", "success");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 300);
    });
  }

  // Simulated Register
  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const confirmPasswordInput = document.getElementById("confirmPassword");

      const email = emailInput?.value.trim();
      const password = passwordInput?.value.trim();
      const confirmPassword = confirmPasswordInput?.value.trim();

      if (!email || !password || !confirmPassword) {
        showAlert("Passwords do not match!", "danger");
        return;
      }

      // Simulate saving and login
      localStorage.setItem("loggedInUser", email);
      showAlert("Register successfully! Logging you in...", "success");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 300);
    });
  }
});
