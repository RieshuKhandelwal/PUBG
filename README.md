
<div align="center">
  <br />
  <img src="./public/img/logo.png" alt="PUBG Mobile Project Logo" width="120" />
  <br />
  <h1>PUBG Mobile Inspired Website</h1>
  <p>
    <b>Scroll-based animations, 3D effects, video transitions, interactive audio system, and authentication — built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.</b>
  </p>
</div>

---

## 🚀 Live Demo & Article
- **🌐 Live Website:** [pubg-phi.vercel.app](https://pubg-phi.vercel.app/)

- **📄 LinkedIn Article (with Demo Video):** https://www.linkedin.com/pulse/pubgthemedwebsite-rishu-khandelwal-tof0c 

PUBG-themed website launch & walkthrough
Check out the live site for the full interactive experience, and explore the LinkedIn article to see a video demo showcasing all animations and audio features in action

---
## 🚀 Features

- **Scroll-Based Animations:** Dynamic, GSAP-powered animations triggered by scrolling for a highly engaging user experience.
- **Clip Path Shaped Animations:** Unique geometric transitions using CSS clip-paths for visually stunning section reveals.
- **3D Hover Effects:** Interactive 3D transformations and tilts that respond to user interaction, adding a modern, immersive feel.
- **Video Transitions:** Seamlessly integrated video elements and transitions to enhance storytelling and flow.
- **Interactive Audio System:** Gaming-style UI sounds with background music and smart audio management.
- **User Authentication:** Animated login/signup forms with validation and immersive video backgrounds.
- **PUBG-Themed Design:** Authentic orange, yellow, and blue gradient color schemes throughout.
- **Enhanced Navigation:** Dynamic navbar with audio controls and PUBG-themed hover effects.
- **Smooth UI/UX:** Polished, buttery-smooth interfaces and transitions for an intuitive user journey.
- **Completely Responsive:** Flawless adaptation across all devices, ensuring a consistent experience on mobile, tablet, and desktop.
- **Reusable Components:** Modular, composable React components for easy extension and maintenance.
- **Modern Code Architecture:** Clean separation of concerns, utility-first styling, and scalable structure.
- **Accessible & Performant:** Optimized for fast load times and keyboard navigation.

---

## 🎵 Audio & Sound System

- **Background Music Integration:** Looping ambient music with smart pause/resume logic
- **Interactive Sound Effects:** Gaming-style UI sounds for buttons, hovers, and interactions
- **Audio Toggle Control:** Visual audio indicator with animated bars in navigation
- **Context-Aware Audio:** Automatic music management during video playback
- **Sound-Enhanced UX:** Audio feedback for all user interactions

---

## 🔐 Authentication System

- **Animated Forms:** Framer Motion powered login/signup transitions
- **Form Validation:** Real-time validation with visual feedback and error handling
- **Background Video:** Immersive video backgrounds in authentication forms
- **Sound Integration:** Audio feedback for form interactions and validation
- **Responsive Design:** Mobile-optimized authentication experience

---

## 🏗️ Code Architecture & Reusability

```

src/
├── App.jsx            \# Main app layout and routing
├── main.jsx           \# Entry point, React root
├── index.css          \# Tailwind, custom fonts, animations, and utility classes
├── utils/
│     └── soundManager.js     \# Global sound management system
└── components/
├── Navbar.jsx         \# Enhanced navigation with audio controls and PUBG theming
├── Hero.jsx           \# Hero section with animated video transitions and PUBG effects
├── About.jsx          \# About section with scroll-triggered animations
├── Features.jsx       \# Feature grid with 3D hover, video cards, and sound integration
├── Story.jsx          \# Storytelling section with YouTube integration
├── Contact.jsx        \# Contact section with animated titles
├── Footer.jsx         \# Social links with intense hover effects and sounds
├── Register.jsx       \# Complete authentication system with validation
├── Button.jsx         \# Sound-enabled, animated button component
├── AnimatedTitle.jsx  \# Reusable animated headline/title
└── VideoPreview.jsx   \# 3D video preview hover effect

```

- **Component-Driven:** Each UI section is a dedicated, reusable React component with integrated sound effects.
- **Audio Management:** Centralized sound system with context-aware audio control across all components.
- **Animation Logic:** GSAP, ScrollTrigger, and Framer Motion for scroll-based and interactive animations.
- **Routing:** React Router integration for multi-page navigation with smooth transitions.
- **Styling:** Tailwind CSS with PUBG-themed gradients and custom animations.
- **Form Handling:** Advanced form validation with real-time feedback and error handling.

---

## 🎮 Gaming Experience Features

- **PUBG-Themed Design:** Authentic color schemes (orange, yellow, blue gradients) and visual effects
- **Immersive Audio:** Multi-layered sound system for authentic gaming feel
- **Interactive Feedback:** Visual and audio responses to all user actions
- **Enhanced Hover Effects:** Intense scaling, glow, and rotation effects on interactive elements
- **Performance Optimized:** Smooth 60fps animations and transitions
- **Battle Royale Aesthetics:** Design elements inspired by PUBG's iconic visual style

---

## 🎵 Audio Assets Required

```

public/audio/
├── loop.mp3          \# Background ambient music
├── button.mp3        \# Button hover sounds
├── click.mp3         \# Navigation click sounds
├── sci-fi-4.mp3      \# Special button effects
├── sci-fi-7.mp3      \# Social media sounds
├── synth-shot.mp3    \# Action button sounds
└── ui-pop.mp3        \# UI interaction sounds

```

---

## 📁 Video Assets Structure

```

public/videos/
├── hero-1.mp4        \# Hero section background videos
├── hero-2.mp4
├── hero-3.mp4
├── hero-4.mp4
├── feature-1.mp4     \# Feature section videos
├── feature-2.mp4
├── feature-3.mp4
├── feature-4.mp4
├── feature-5.mp4
└── LoginSignup.mp4   \# Authentication background video

```

---

## ⚡ Quick Start

1. Clone the repository:

```

git clone <your-repo-url>
cd pubg-inspired-website

```

2. Install dependencies:

```

npm install

```

3. Add required media files into the `public/audio` and `public/videos` folders as outlined above.

4. Run the development server:

```

npm run dev

```

5. Open your browser and visit http://localhost:5173

---

## Dependencies

- React
- React Router DOM
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Framer Motion
- React Icons
- Clsx (conditional classNames)
- React Use (hooks)

---

## Deployment

- **Vercel:** Preferred for seamless deployment; connect repo and deploy with standard build settings.
- **GitHub Pages:** Set base path and deploy the `dist` folder with gh-pages.
- **Netlify:** Connect repository and configure build/publish directories.

---

## License & Disclaimer

This project is for educational and demonstration purposes only. It is not affiliated with PUBG Corporation or its affiliates. All PUBG-related branding and assets are property of their respective owners.

---

## Extend & Customize

- Add pages and routes in `App.jsx`.
- Replace audio and video assets with your custom files.
- Customize colors and animations in Tailwind and GSAP configs.
- Enhance with social logins, leaderboards, or other features.

---

Enjoy building your immersive PUBG Mobile inspired website! For questions or contributions, feel free to open an issue or pull request.

<div align="center">
  <b>Happy coding and good luck on the battleground!</b>
</div>
```
