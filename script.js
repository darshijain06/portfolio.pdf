console.log("JavaScript connected");
(function () {
  const yearEl = document.getElementById("year");
  const greetingEl = document.getElementById("greeting");
  const themeToggle = document.querySelector(".theme-toggle");
  const storageKey = "profile-theme";

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (greetingEl) {
    const hour = new Date().getHours();
    let greeting = "Hello";
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    greetingEl.textContent = greeting;
  }

  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
      themeToggle.textContent = isDark ? "Light theme" : "Dark theme";
    }
  }

  const stored = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const next =
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }
})();
