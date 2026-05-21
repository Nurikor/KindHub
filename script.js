const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "kindhub-theme";

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    if (themeToggle) themeToggle.textContent = "Светлая тема";
  } else {
    document.body.classList.remove("dark-theme");
    if (themeToggle) themeToggle.textContent = "Тёмная тема";
  }
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved || (prefersDark ? "dark" : "light");
  setTheme(theme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-theme");
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem(THEME_KEY, newTheme);
    setTheme(newTheme);
  });
}

initTheme();