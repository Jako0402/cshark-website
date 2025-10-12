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
        if (linkPath === currentPath) {
          link.classList.add("selected");
        } else {
          link.classList.remove("selected");
        }
      });
    };

    updateLinkHighlighting();

    // SPA navigation only for internal links
    headerPlaceholder.querySelectorAll("a[href]").forEach(link => {
      const href = link.getAttribute("href");

      // Skip external links or ones with target="_blank"
      if (
        link.target === "_blank" ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("#")
      ) {
        return; // don't attach SPA handler
      }

      // Internal SPA link handler
      link.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState({}, "", href);
        loadPage(href);
        updateLinkHighlighting();
      });
    });

    // Handle browser navigation
    window.addEventListener("popstate", () => {
      updateLinkHighlighting();
      loadPage(window.location.pathname);
    });

  } catch (err) {
    console.error("Failed to load header:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);
