const routes = {
  "/": {
    html: "/pages/home.html",
    title: "Home",
    description: "Welcome to Cshark!",
    js: "/js/home.js",
  },
  "/citater": {
    html: "/pages/citater.html",
    title: "Citater",
    description: "Se vores smukke citater!",
    js: "js/quotes.js",
  },
};

async function loadPage(path) {
  const route = routes[path] || routes["/"]; // fallback to home if not found

  // --- Load HTML ---
  try {
    const res = await fetch(route.html);
    if (!res.ok) throw new Error(`Failed to load ${route.html}`);
    const html = await res.text();
    console.log(html);
    document.getElementById("content").innerHTML = html;
  } catch (err) {
    document.getElementById(
      "content"
    ).innerHTML = `<h2>404: Page not found</h2>`;
    console.error(err);
    return;
  }

  // --- Optional CSS ---
  if (route.css) {
    loadCSS(route.css);
  } else {
    // remove any page-specific CSS if none is defined for this page
    document
      .querySelectorAll("link[data-page-style]")
      .forEach((el) => el.remove());
  }

  // --- Optional JS ---
  if (route.js) {
    loadScript(route.js);
  } else {
    // remove old scripts if needed
    document
      .querySelectorAll("script[data-page-script]")
      .forEach((s) => s.remove());
  }

  // --- Page Title and Meta ---
  document.title = route.title || "My SPA Default Title";
  setMeta("description", route.description || "Cshark");
}

function handleLinkClick(event) {
  if (event.target.matches("[data-link]")) {
    event.preventDefault();
    const path = event.target.getAttribute("href");
    history.pushState({}, "", path);
    loadPage(path);
  }
}

function loadCSS(href) {
  document
    .querySelectorAll("link[data-page-style]")
    .forEach((el) => el.remove());
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  link.dataset.pageStyle = true;
  document.head.appendChild(link);
}

function loadScript(src) {
  document
    .querySelectorAll("script[data-page-script]")
    .forEach((s) => s.remove());
  const script = document.createElement("script");
  script.src = src;
  script.dataset.pageScript = true;
  document.body.appendChild(script);
}

function setMeta(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

window.addEventListener("popstate", () => loadPage(location.pathname));
document.addEventListener("click", handleLinkClick);

document.addEventListener("DOMContentLoaded", () => {
  loadPage(location.pathname);
});
