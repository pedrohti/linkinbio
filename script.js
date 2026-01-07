// Theme management
function setTheme(theme) {
  const html = document.documentElement;

  document.querySelectorAll(".theme-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  if (theme === "auto") {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    html.setAttribute("data-theme", prefersDark ? "dark" : "light");
    document.getElementById("autoBtn").classList.add("active");
    localStorage.setItem("theme", "auto");
  } else if (theme === "dark") {
    html.setAttribute("data-theme", "dark");
    document.getElementById("darkBtn").classList.add("active");
    localStorage.setItem("theme", "dark");
  } else if (theme === "light") {
    html.setAttribute("data-theme", "light");
    document.getElementById("lightBtn").classList.add("active");
    localStorage.setItem("theme", "light");
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "auto";
  setTheme(savedTheme);
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "auto" || !savedTheme) {
      setTheme("auto");
    }
  });

// Page navigation
function showPage(pageName) {
  // Hide all pages
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });

  // Remove active from nav buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected page
  if (pageName === "links") {
    document.getElementById("linksPage").classList.add("active");
    document.querySelectorAll(".nav-btn")[0].classList.add("active");
  } else if (pageName === "shop") {
    document.getElementById("shopPage").classList.add("active");
    document.querySelectorAll(".nav-btn")[1].classList.add("active");
  }

  // Save current page
  localStorage.setItem("currentPage", pageName);
}

function loadPage() {
  const savedPage = localStorage.getItem("currentPage") || "links";
  showPage(savedPage);
}

// Initialize
loadTheme();
loadPage();
