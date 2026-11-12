(() => {
  const themeButton = document.querySelector("#th");
  if (!(themeButton instanceof HTMLButtonElement)) {
    return;
  }

  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.dataset.theme = isDark ? "dark" : "light";
    themeButton.textContent = isDark ? "Light mode" : "Dark mode";
    themeButton.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    themeButton.setAttribute("aria-pressed", String(isDark));
  };

  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  } catch {
    setTheme("light");
  }

  themeButton.addEventListener("click", () => {
    const theme = document.body.dataset.theme === "dark" ? "light" : "dark";
    setTheme(theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still applies for this page view.
    }
  });
})();
