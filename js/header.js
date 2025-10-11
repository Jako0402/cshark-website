async function loadHeader() {
  const headerPlaceholder = document.getElementById("header");
  if (!headerPlaceholder) return;

  try {
    const response = await fetch("/components/header.html");
    const headerHTML = await response.text();
    headerPlaceholder.innerHTML = headerHTML;

    // Highlight current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    headerPlaceholder.querySelectorAll("a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  } catch (err) {
    console.error("Failed to load header:", err);
  }
}

// Load when DOM is ready
document.addEventListener("DOMContentLoaded", loadHeader);
