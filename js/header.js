async function loadHeader() {
  const headerPlaceholder = document.getElementById("header");
  if (!headerPlaceholder) return;

  try {
    const response = await fetch("/components/header.html");
    const headerHTML = await response.text();
    headerPlaceholder.innerHTML = headerHTML;

    const currentPage = document.body.dataset.page; // e.g. set <body data-page="about">
    headerPlaceholder
      .querySelectorAll("a[data-page]")
      .forEach(link => {
        if (link.dataset.page === currentPage) {
          link.classList.add("selected");
        }
      });
  } catch (err) {
    console.error("Failed to load header:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadHeader);
