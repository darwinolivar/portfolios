# Darwin Olivar — Portfolio (React)

This is the React.js conversion of the original static HTML/CSS portfolio.
All components are written as **arrow functions**.

## Structure

```
src/
  components/
    Header.jsx
    Hero.jsx
    About.jsx
    Projects.jsx
    ProjectCard.jsx
    Skills.jsx
    Experience.jsx
    Contact.jsx
    Footer.jsx
  data/
    portfolioData.js   # project, skills, experience, contact data
  hooks/
    useFadeInOnScroll.js  # replaces the original inline <script> IntersectionObserver
  assets/
    css/style.css       # original stylesheet, unchanged
    images/              # original images
  App.jsx
  main.jsx
index.html
package.json
vite.config.js
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Notes on the conversion

- Every section of the original single-page `index.html` (Header/Nav, Hero,
  About, Projects, Skills, Experience, Contact, Footer) is now its own
  React component, written with arrow function syntax
  (`const ComponentName = () => { ... }`).
- The project cards, skill groups, timeline entries, and contact links are
  data-driven (see `src/data/portfolioData.js`) and rendered with `.map()`,
  so adding/removing an item no longer requires touching JSX.
- The original inline `<script>` that used `IntersectionObserver` to fade
  in elements on scroll has been converted into a reusable custom hook,
  `useFadeInOnScroll`, using React's `useEffect`.
- All image `src` attributes now use imported assets so Vite bundles and
  hashes them correctly for production.
- The CSS file is untouched — all existing class names (`.hero`, `.wrap`,
  `.fade-in`, etc.) are preserved so the visual design is identical.
