# Cshark Website
This SPA is held together by **duct tape, caffeine, and pure hope.**
Forged in the fires of **HCI despair**, we built this without interface libraries...because frameworks are for the weak.
> “Our affordances afford confusion.”

## Project Structure
```
.
├── assets/            # Static assets like images
├── components/        # Shared HTML components
├── css/               # Stylesheets for pages
├── js/                # JavaScript files for page-specific logic
├── pages/             # HTML files for individual pages
├── script.js          # Main SPA logic
└── index.html         # Template for all pages 
``` 


## Getting Started
> “We followed every HCI guideline...just not in this project.”
### Prerequisites
- **Node.js**: Install [Node.js](https://nodejs.org/).
- **Git**: Install [Git](https://git-scm.com/).

### Installation
1. **Clone the Repository**
2. `npm install` (Pray nothing breaks)
3. `npm run dev`

### Adding New Pages
1. **Create the HTML File**: Add a new file in the `pages/` directory (e.g., `newpage.html`).
2. **Add CSS and JS (Optional)**:
    - Add a CSS file in the `css/` directory (e.g., `newpage.css`).
    - Add a JavaScript file in the `js/` directory (e.g., `newpage.js`).
3. **Update the Routes**: Add the new route in `script.js`:
```
"/newpage": {
  html: "/pages/newpage.html",
  title: "New Page",
  description: "Description of the new page",
  css: "/css/newpage.css",
  js: "/js/newpage.js",
},
```
**Attribute Explanation**
| **Attribute**      | **Example**                     | **Description**                                                                                   |
| ------------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `newpage`    | `"/newpage"`                    | The **route** for the page (required).                    |
| `html`        | `"/pages/newpage.html"`         | The **location of the HTML file** (required).  |
| `title`       | `"New Page"`                    | The **title of the page** for the browser tab (optional).
| `description` | `"Description of the new page"` | A short **description of the page** (optional). For documentation.                  |
| `css`         | `"/css/newpage.css"`            | The **path to an extra CSS file** (optional). 
| `js`          | `"/js/newpage.js"`              | The **path to an extra JavaScript file** (optional).    |




4. **Link to the Page**: Add a link in the navigation bar or elsewhere:
```
<a href="/newpage">New Page</a>
``` 
> ⚠️ Pro tip: If your new page doesn’t load, it’s not you...it’s probably the router. 

### Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch.
4. Open a pull request.