document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.querySelector("body");

  const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";

  if (darkModeEnabled) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem(
      "darkModeEnabled",
      body.classList.contains("dark-mode")
    );
  });
});
