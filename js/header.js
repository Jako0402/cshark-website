async function loadHeader() {
  const headerPlaceholder = document.getElementById("header");
  if (!headerPlaceholder) return;

  try {
    const response = await fetch("/components/header.html");
    const headerHTML = await response.text();
    headerPlaceholder.innerHTML = headerHTML;

    const updateLinkHighlighting = () => {
      const currentPath = window.location.pathname;
      headerPlaceholder.querySelectorAll("a[href]").forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Highlight the current page link
        if (linkPath === currentPath) {
          link.classList.add("selected");
        } else {
          link.classList.remove("selected");
        }
      });
    };

    // Initial highlighting
    updateLinkHighlighting();

    // Add click event for SPA navigation
    headerPlaceholder.querySelectorAll("a[href]").forEach(link => {
      const linkPath = new URL(link.href).pathname;

      link.addEventListener("click", (e) => {
        e.preventDefault(); // stop real navigation
        history.pushState({}, "", linkPath);
        loadPage(linkPath); // your SPA page loader

        // Update link highlighting after navigation
        updateLinkHighlighting();
      });
    });

    // Handle browser navigation (back/forward buttons)
    window.addEventListener("popstate", () => {
      updateLinkHighlighting();
      loadPage(window.location.pathname); // Load the page for the current path
    });

  } catch (err) {
    console.error("Failed to load header:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);