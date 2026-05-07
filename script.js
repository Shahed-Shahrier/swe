
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }
});

document.getElementById("getStartedBtn").addEventListener("click", () => {
  document.getElementById("register").scrollIntoView();
});

document.getElementById("demoBtn").addEventListener("click", () => {
  document.getElementById("demo").scrollIntoView();
});

document.getElementById("loginBtn").addEventListener("click", () => {
  document.getElementById("register").scrollIntoView();
});

document.getElementById("registerBtn").addEventListener("click", () => {
  document.getElementById("register").scrollIntoView();
});

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Registration Successful!");
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Login Successful!");
});
