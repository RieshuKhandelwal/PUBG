import React, { useRef } from "react";

// 3D Card effect component
export function Card3D({ children, className = "", ...props }) {
  const cardRef = useRef(null);

  // Mouse move handler for 3D tilt
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Stronger effect: max 25deg
    const rotateX = ((y - centerY) / centerY) * 25;
    const rotateY = ((x - centerX) / centerX) * -25;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;
  };

  // Reset transform on mouse leave
  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className={
        "transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] rounded-xl shadow-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 " +
        className
      }
      style={{ willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

// Demo usage of Card3D with image
export default function Threed() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-zinc-900 dark:to-zinc-800">
      <Card3D className="w-96 h-64 flex flex-col items-center justify-center p-0 overflow-hidden group">
        <img
          src="/img/erangel.jpg"
          alt="Erangel Map"
          className="w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105 opacity-90"
          draggable="false"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-lg font-bold text-white mb-1 drop-shadow">Erangel</h2>
          <p className="text-sm text-zinc-200 drop-shadow">Experience the iconic battleground in 3D!</p>
        </div>
      </Card3D>
    </div>
  );
}

export const BentoCard = ({
  // ...other props
  cardIndex,
  hoveredCardIndex,
  setHoveredCardIndex,
  soundEnabled,
}) => {
  // ...existing code...
  const handleCardMouseEnter = () => {
    setIsHovered(true);
    setHoveredCardIndex(cardIndex);
    if (soundEnabled) {
      window.dispatchEvent(new Event('pause-music'));
    }
    if (videoRef.current) {
      videoRef.current.muted = !soundEnabled;
      videoRef.current.play();
    }
  };
  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setHoveredCardIndex(null);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // Only resume music if no other card is hovered
    setTimeout(() => {
      if (document.querySelectorAll('.bento-card-hovered').length === 0) {
        window.dispatchEvent(new Event('play-music'));
      }
    }, 10);
  };

  // Add a class to the card when hovered for the above check
  return (
    <div
      className={
        "relative size-full overflow-hidden group transition-all duration-300" +
        (isHovered ? " scale-105 bento-card-hovered" : "")
      }
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      {/* ... */}
    </div>
  );
};
