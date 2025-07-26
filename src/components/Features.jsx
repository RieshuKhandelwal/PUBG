import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { soundManager } from "../utils/soundManager"

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const [shadowStyle, setShadowStyle] = useState("");
  const [borderGlow, setBorderGlow] = useState("");
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 20;
    const tiltY = (relativeX - 0.5) * -20;
    const scale = 1.06;
    setTransformStyle(
      `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale},${scale},${scale})`
    );
    const shadowX = (relativeX - 0.5) * 40;
    const shadowY = (relativeY - 0.5) * 40;
    setShadowStyle(
      `0px ${8 + shadowY}px ${32 + Math.abs(shadowX)}px 0px rgba(0,0,0,0.28)`
    );
    setParallax({
      x: (relativeX - 0.5) * 24,
      y: (relativeY - 0.5) * 24,
    });
    setBorderGlow(
      `0 0 0 4px rgba(101, 111, 226, 0.18), 0 0 32px 8px rgba(101, 111, 226, 0.18)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
    setShadowStyle("");
    setBorderGlow("");
    setParallax({ x: 0, y: 0 });
  };

  return (
    <div
      ref={itemRef}
      className={
        className +
        " transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] relative"
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        boxShadow: shadowStyle,
        outline: borderGlow ? "2px solid #656fe2" : undefined,
        outlineOffset: borderGlow ? "2px" : undefined,
        transition: "box-shadow 0.3s, outline 0.3s, transform 0.3s",
        willChange: "transform, box-shadow, outline",
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) =>
            child && typeof child.type === "function"
              ? {
                  ...child,
                  props: { ...child.props, parallax },
                }
              : child
          )
        : children && typeof children.type === "function"
        ? { ...children, props: { ...children.props, parallax } }
        : children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, parallax = { x: 0, y: 0 }, soundEnabled, cardIndex, hoveredCardIndex, setHoveredCardIndex }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const hoverButtonRef = useRef(null);

  // Play/pause logic for single video at a time
  // Play only if this card is hovered
  // Pause if not hovered
  // Do not reset currentTime
  // Pause Navbar music on hover, resume on leave
  
  // Play video if hovered
  if (hoveredCardIndex === cardIndex && videoRef.current && soundEnabled) {
    videoRef.current.muted = false;
    if (videoRef.current.paused) videoRef.current.play();
    window.dispatchEvent(new Event('pause-music'));
  } else if (videoRef.current && hoveredCardIndex !== cardIndex) {
    videoRef.current.pause();
    videoRef.current.muted = true;
  }

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleButtonMouseEnter = () => {
    setHoverOpacity(1)
    soundManager.play("button")
  }

  const handleButtonMouseLeave = () => setHoverOpacity(0)

  const handleButtonClick = () => {
    soundManager.play("sciFi4")
  }

  const handleCardMouseEnter = () => {
    setIsHovered(true);
    setHoveredCardIndex(cardIndex);
  };
  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setHoveredCardIndex(null);
    setTimeout(() => {
      if (hoveredCardIndex === null) {
        window.dispatchEvent(new Event('play-music'));
      }
    }, 10);
  };

  return (
    <div
      className={
        "relative size-full overflow-hidden group transition-all duration-300" +
        (isHovered ? " scale-105 bento-card-hovered" : "")
      }
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        className="absolute left-0 top-0 size-full object-cover object-center transition-transform duration-300"
        style={{
          transform: `translate3d(${parallax.x * -0.5}px, ${parallax.y * -0.5}px, 0) scale(1.08)`,
          filter: isHovered ? "brightness(1.08)" : "brightness(1)",
        }}
        playsInline
        preload="metadata"
        tabIndex={-1}
      />
      <div
        className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50"
        style={{
          transform: isHovered
            ? "translateY(-6px) scale(1.03)"
            : "translateY(0) scale(1)",
          transition: "transform 0.3s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        <div>
          <h1
            className="bento-title special-font transition-all duration-300"
            style={{
              textShadow: isHovered
                ? "0 2px 16px #656fe2, 0 0px 2px #000"
                : "0 1px 2px #000",
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-3 max-w-64 text-xs md:text-base transition-all duration-300"
              style={{
                opacity: isHovered ? 1 : 0.85,
                transform: isHovered ? "translateY(-2px) scale(1.03)" : "none",
              }}
            >
              {description}
            </p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            onClick={handleButtonClick}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20 transition-all duration-300"
            style={{
              boxShadow: isHovered
                ? "0 0 16px 4px #656fe2aa"
                : "0 0 0 0 #0000",
              border: isHovered ? "1.5px solid #656fe2" : undefined,
            }}
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            BATTLEGROUNDS
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          The battleground gives players tools to create rich and diverse stories. Jump into tense firefights with several expected and unexpected weapons, like frying pans!
          </p>
        </div>

        {!soundEnabled && (
          <button
            className="fixed bottom-6 right-6 z-50 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg animate-bounce"
            onClick={() => setSoundEnabled(true)}
          >
            🔊 Enable Sound
          </button>
        )}

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                Bug<b>a</b>ti
              </>
            }
            description="Experience the exclusive Bugatti collaboration—unlock limited-edition in-game vehicles and cosmetics, and race across new battlegrounds inspired by Bugatti's legendary design."
            isComingSoon
            soundEnabled={soundEnabled}
            cardIndex={0}
            hoveredCardIndex={hoveredCardIndex}
            setHoveredCardIndex={setHoveredCardIndex}
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  Spid<b>er m</b>an
                </>
              }
              description="Swing into action as Spider-Man—use web-slinging mechanics to traverse dynamic battlegrounds, unlock exclusive suits, and team up for epic superhero missions."
              isComingSoon
              soundEnabled={soundEnabled}
              cardIndex={1}
              hoveredCardIndex={hoveredCardIndex}
              setHoveredCardIndex={setHoveredCardIndex}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  Lam<b>or</b>gini
                </>
              }
              description="Unleash speed and style with the Lamborghini collect limited-edition skins inspired by the iconic supercar brand."
              isComingSoon
              soundEnabled={soundEnabled}
              cardIndex={2}
              hoveredCardIndex={hoveredCardIndex}
              setHoveredCardIndex={setHoveredCardIndex}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  F<b>A</b>MSS
                </>
              }
              description="Unleash your wild side with the Animal Mecha Style Set—exclusive futuristic animal-inspired armor to dominate the battleground in style."
              isComingSoon
              soundEnabled={soundEnabled}
              cardIndex={3}
              hoveredCardIndex={hoveredCardIndex}
              setHoveredCardIndex={setHoveredCardIndex}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
              </h1>

              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="videos/feature-5.mp4"
              title={null}
              description={null}
              isComingSoon={false}
              soundEnabled={soundEnabled}
              cardIndex={4}
              hoveredCardIndex={hoveredCardIndex}
              setHoveredCardIndex={setHoveredCardIndex}
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
