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

  } catch (err) {
    console.error("Failed to load header:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);
