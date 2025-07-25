<div align="center">
  <br />
  <img src="/public/img/logo.png" alt="PUBG Mobile Project Logo" width="120" />
  <br />
  <h1>Award-Winning PUBG Mobile Inspired Website</h1>
  <p>
    <b>Scroll-based animations, 3D effects, video transitions, and more — built with React, Vite, Tailwind CSS, and GSAP.</b>
  </p>
</div>

---

## 🚀 Features

- **Scroll-Based Animations:** Dynamic, GSAP-powered animations triggered by scrolling for a highly engaging user experience.
- **Clip Path Shaped Animations:** Unique geometric transitions using CSS clip-paths for visually stunning section reveals.
- **3D Hover Effects:** Interactive 3D transformations and tilts that respond to user interaction, adding a modern, immersive feel.
- **Video Transitions:** Seamlessly integrated video elements and transitions to enhance storytelling and flow.
- **Smooth UI/UX:** Polished, buttery-smooth interfaces and transitions for an intuitive user journey.
- **Completely Responsive:** Flawless adaptation across all devices, ensuring a consistent experience on mobile, tablet, and desktop.
- **Reusable Components:** Modular, composable React components for easy extension and maintenance.
- **Modern Code Architecture:** Clean separation of concerns, utility-first styling, and scalable structure.
- **Accessible & Performant:** Optimized for fast load times and keyboard navigation.

---

## 🏗️ Code Architecture & Reusability

```
src/
  ├── App.jsx            # Main app layout and section composition
  ├── main.jsx           # Entry point, React root
  ├── index.css          # Tailwind, custom fonts, and utility classes
  └── components/
        ├── Navbar.jsx         # Responsive navigation bar with scroll/audio logic
        ├── Hero.jsx           # Hero section with animated video transitions
        ├── About.jsx          # About section with scroll-triggered clip-path animation
        ├── Features.jsx       # Feature grid with 3D hover and video cards
        ├── Story.jsx          # Storytelling section with 3D floating image
        ├── Contact.jsx        # Contact section with animated titles and clip-path images
        ├── Footer.jsx         # Social links and copyright
        ├── Button.jsx         # Reusable, animated button
        ├── AnimatedTitle.jsx  # Reusable animated headline/title
        └── VideoPreview.jsx   # 3D video preview hover effect
```

- **Component-Driven:** Each UI section is a dedicated, reusable React component. Shared UI (like `Button` and `AnimatedTitle`) is abstracted for maximum reusability.
- **Animation Logic:** GSAP and ScrollTrigger are used for scroll-based and interactive animations, encapsulated within components for maintainability.
- **Styling:** Tailwind CSS utility classes and custom layers in `index.css` provide a scalable, consistent design system. Custom fonts and clip-paths are defined for unique branding.
- **Media Assets:** All images, videos, and fonts are organized in the `public/` directory for easy reference and CDN compatibility.
- **Responsiveness:** Layouts use Tailwind’s responsive utilities and fluid sizing for seamless adaptation to any device.

---

## ⚡ Quick Start

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd award-winning-website-main
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

---

## 🌐 Deployment

- **Vercel:** Import your repo on [vercel.com](https://vercel.com/), set the build command to `vite build` and output directory to `dist`.
- **GitHub Pages:** Set `base` in `vite.config.js` to your repo name, build with `npm run build`, and deploy the `dist/` folder using [gh-pages](https://www.npmjs.com/package/gh-pages).

---

## 📦 Assets & Credits

- **Assets:** All images, videos, and fonts are for educational/demo use only. Replace with your own for production.

---

## 🤝 License & Disclaimer

This project is for educational/demo purposes only. Not affiliated with or endorsed by PUBG, Krafton, Tencent, or Zentry. All rights to referenced assets belong to their respective owners.

---

## 💡 Extend & Customize

- Add new sections or features by creating new components in `src/components/`.
- Swap out assets in `public/` for your own branding.
- Tweak animations by editing GSAP logic in each component.
- Use the modular structure to quickly adapt the site for other games or brands.

---

<div align="center">
  <b>Enjoy building! For questions or contributions, open an issue or pull request.</b>
</div>
