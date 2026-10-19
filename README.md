# Md Shakib Chowdhury — Project Manager Portfolio

A modern, responsive front-end portfolio built with React.js, TailwindCSS, Framer Motion, and Hugeicons.

## Tech Stack

- **Framework**: React 18 + Vite 5
- **Styling**: TailwindCSS 3 + PostCSS + Autoprefixer
- **Animations**: Framer Motion 11 (with reduced-motion accessibility support)
- **Icons**: Hugeicons React & Core Free Icons
- **Design System**: Dark slate aesthetic (`#07111F`) with vibrant aqua (`#55E6CF`) and sky blue accents

---

## How to Run in VS Code

### Option 1: Using VS Code Built-in Task / Debugger (Easiest)
1. Open this folder in VS Code (`d:\Shakib portfolio\shakib-project-manager-portfolio`).
2. Press **`F5`** (or go to the **Run & Debug** tab and click **Launch Portfolio in Edge / Chrome**).
   - Alternatively, go to menu **Terminal > Run Task... > npm: dev**.
3. The app is live at:
   ```text
   http://localhost:5173
   ```

### Option 2: Using the Integrated Terminal
1. In VS Code, open a new terminal: **Terminal > New Terminal** (or press ``Ctrl + ` ``).
2. Start the development server:
   ```bash
   npm run dev
   ```
   *(Or run `npm run dev:open` to automatically launch your default browser!)*
3. Open the URL shown in the terminal:
   ```text
   http://localhost:5173
   ```

> **Note on Windows PowerShell:**
> If PowerShell ever gives an execution policy error on `npm`, PowerShell script execution policy has already been set for `CurrentUser` (`RemoteSigned`), and `.vscode/settings.json` is configured to run PowerShell with `-ExecutionPolicy Bypass`. You can also run `npm.cmd run dev` anytime.

---

## Production Build

To create an optimized production bundle:

```bash
npm run build
```

The output will be placed in the `dist` folder. To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure & File Guide

- [`src/App.jsx`](./src/App.jsx) — Core component containing the navigation bar, hero banner, about section, capabilities grid, featured project showcase (including the ongoing *Smart Elder-Care Management System* and *Student Academic Performance ML*), delivery operating rhythm, credentials, co-curricular activities, contact section, and footer.
- [`src/data/portfolio.js`](./src/data/portfolio.js) — Core data definitions for capability items, professional certifications, 5-step delivery methodology, and co-curricular activities.
- [`src/components/`](./src/components/) — Reusable UI components:
  - [`Icon.jsx`](./src/components/Icon.jsx) — Wrapper for Hugeicons.
  - [`Reveal.jsx`](./src/components/Reveal.jsx) — Viewport reveal animation component with reduced-motion support.
  - [`SectionHeading.jsx`](./src/components/SectionHeading.jsx) — Consistent typography and eyebrow accents for sections.
- [`src/index.css`](./src/index.css) — Global Tailwind styles, custom scrollbars, and dark theme settings.
- [`public/favicon.svg`](./public/favicon.svg) — Custom branded SVG favicon.
- [`public/Shakib_CV.pdf`](./public/Shakib_CV.pdf) — Downloadable CV linked in the hero section.
- [`.vscode/`](./.vscode/) — Pre-configured VS Code settings, launch profiles, and tasks.
