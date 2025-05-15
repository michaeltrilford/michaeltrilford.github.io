# MUI Create App

A lightweight starter template for building accessible, fast-loading interfaces using native web components and MUI-inspired styling. No frameworks or build tools required — just HTML, CSS, and JavaScript.

---

## 🚀 Features

- **Zero Dependencies**  
  No need for React, Vue, or complex JavaScript tooling.

- **Accessible by Default**  
  Components follow inclusive design principles and semantic HTML standards.

- **Themeable Architecture**  
  Customise styles using design tokens and native CSS variables.

- **Modular and Flexible**  
  Use only the components you need. All elements work independently and are designed for progressive enhancement.

---

## 📁 Recommended Project Structure

```
Project Root:
    │
    ├── css/
    │    ├── mui-reset.css → Basic browser reset
    │    ├── mui-base.css → Base layout and type styles
    │    ├── author-tokens.css → Design tokens and Light/Dark themes
    │    ├── author.css → Add additional application styles
    │
    ├── assets/
    │    └── create-app-logo.js → Sample logo asset
    │
    ├── components/ → Prebuilt web components (replace as needed)
    │    ├── mui-container/
    │    │    └── index.js
    │    ├── mui-heading/
    │    │    └── index.js
    │    ├── mui-body/
    │    │    └── index.js
    │    ├── mui-link/
    │    │    └── index.js
    │    ├── mui-icons/
    │    │    └── mui-icon-sun.js
    │    │    └── mui-icon-moon.js
    │    └── mui-stack/
    │        └── mui-vstack/
    │            └── index.js
    │
    ├── js/
    │    └── mui-parts/
    │        └── index.js → Optional feature logic
    │    └── create-app-theme-toggle/
    │         └── index.js → Optional theme toggle
    │
    ├── public/
    │    ├── favicon.ico → Favicon for bookmarks and browser tabs
    │    └── logo192.png → Icon for Progressive Web App (PWA) installs
    │
    └── index.html → Main entry point
```

- ⚠️ **Note:** The component files in the `components/` folder are sample implementations only.
- You should replace these with components you intend to use in your project.
- Please refer to the latest component source code in the main [component library](#) as the included versions may be outdated.

---

🛠 Usage

1. Clone or download the project.
2. Open a terminal and navigate to the project folder.

```bash
mui-create-app
```

3. Run the following command to start the server:

```bash
python3 -m http.server 8000
```

4. Open your browser and navigate to:

```bash
http://localhost:8000
```

Note: This step is required because some browsers block custom elements and module-based scripts when opened directly from the filesystem (file://). Running a local server ensures everything loads correctly.

---

## 📦 What's Included?

- **Predefined Design Tokens** (spacing, typography, colors)
- **Light/Dark Theming Support**
- **Reset + Base Styles**
- **Starter Components** (heading, body, link, container, stack)
- **Optional JavaScript Features** (under `/js/mui-parts/`)

---

## 📚 Learn More

Refer to the main documentation for guidance on:

- Creating new components
- Using tokens
- Theming and layout strategies

---

## 📄 License

MIT — free to use, modify, and distribute.
