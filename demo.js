const THEME_KEY = "kindhub-theme";
const themeToggle = document.getElementById("themeToggle");

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    themeToggle.textContent = "Светлая тема";
  } else {
    document.body.classList.remove("dark-theme");
    themeToggle.textContent = "Тёмная тема";
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(savedTheme || defaultTheme);
}

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark-theme") ? "light" : "dark";
  localStorage.setItem(THEME_KEY, nextTheme);
  setTheme(nextTheme);
});

initTheme();
