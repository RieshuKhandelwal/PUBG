import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card3D } from "./Threed";

gsap.registerPlugin(ScrollTrigger);

const DESIGN = [
  {
    id: "land",
    backgroundVideo: "/videos/land.mp4",
    title: "LAND",
    subtitle: "Drop into unknown battlegrounds",
    animation: {
      type: "fade-in-slide-up",
      delay: 0.3,
      duration: 1.2,
    },
  },
  {
    id: "loot",
    backgroundVideo: "/videos/loot.mp4",
    title: "LOOT",
    subtitle: "Gear up with weapons & items",
    animation: {
      type: "slide-in-left",
      duration: 1,
      scrollTriggered: true,
    },
  },
  {
    id: "fight",
    backgroundVideo: "/videos/fight.mp4",
    title: "FIGHT",
    images: [
      "https://wstatic-prod.pubg.com/web/live/main_ec97e50/img/4537ba9.webp",
      "https://wstatic-prod.pubg.com/web/live/main_ec97e50/img/6491bb2.webp",
    ],
    animation: {
      type: "parallax-fade",
      layers: ["text", "image"],
      timing: "scroll",
    },
  },
  {
    id: "survive",
    backgroundVideo: "/videos/survive.mp4",
    title: "SURVIVE",
    subtitle: "Be the last one standing",
    animation: {
      type: "zoom-in-fade",
      delay: 0.2,
      duration: 1.5,
    },
  },
];

const FIGHT_IMAGES = DESIGN[2].images;

const Aboutus = () => {
  const containerRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // Play audio on mount
    if (audioRef.current) {
      audioRef.current.volume = 1;
      audioRef.current.play().catch(() => {});
    }

    // LAND: fade-in-slide-up (title & subtitle)
    gsap.fromTo(
      "#land-section .aboutus-title",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        delay: DESIGN[0].animation.delay,
        duration: DESIGN[0].animation.duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#land-section .aboutus-title",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      "#land-section .aboutus-subtitle",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        delay: DESIGN[0].animation.delay + 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#land-section .aboutus-subtitle",
          start: "top 85%",
        },
      }
    );

    // LOOT: slide-in-left (title & subtitle)
    gsap.fromTo(
      "#loot-section .aboutus-title",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: DESIGN[1].animation.duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#loot-section .aboutus-title",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      "#loot-section .aboutus-subtitle",
      { opacity: 0, x: -60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#loot-section .aboutus-subtitle",
          start: "top 85%",
        },
      }
    );

    // FIGHT: parallax-fade (title only)
    gsap.fromTo(
      "#fight-section .aboutus-title",
      { opacity: 0, scale: 0.8, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#fight-section .aboutus-title",
          start: "top 80%",
        },
      }
    );

    // SURVIVE: zoom-in-fade (title & subtitle)
    gsap.fromTo(
      "#survive-section .aboutus-title",
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        delay: DESIGN[3].animation.delay,
        duration: DESIGN[3].animation.duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#survive-section .aboutus-title",
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      "#survive-section .aboutus-subtitle",
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        delay: DESIGN[3].animation.delay + 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#survive-section .aboutus-subtitle",
          start: "top 85%",
        },
      }
    );

    // Pause audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-[#181c24] min-h-screen">
      {/* Audio element */}
      <audio
        ref={audioRef}
        src="/audio/aboutus.mp3"
        autoPlay={false}
        preload="auto"
      />
      {/* LAND */}
      <section
        id="land-section"
        className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center overflow-hidden"
      >
        <video
          src={DESIGN[0].backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="aboutus-content relative z-10 max-w-2xl mx-auto">
          <h1 className="aboutus-title text-5xl md:text-6xl font-extrabold text-yellow-400 mb-4 tracking-tight drop-shadow-lg">
            {DESIGN[0].title}
          </h1>
          <p className="aboutus-subtitle text-2xl md:text-3xl text-gray-200 mb-4 font-semibold">
            {DESIGN[0].subtitle}
          </p>
        </div>
      </section>

      {/* LOOT */}
      <section
        id="loot-section"
        className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center overflow-hidden"
      >
        <video
          src={DESIGN[1].backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="aboutus-content relative z-10 max-w-2xl mx-auto">
          <h1 className="aboutus-title text-5xl md:text-6xl font-extrabold text-blue-300 mb-4 tracking-tight drop-shadow-lg">
            {DESIGN[1].title}
          </h1>
          <p className="aboutus-subtitle text-2xl md:text-3xl text-gray-200 mb-4 font-semibold">
            {DESIGN[1].subtitle}
          </p>
        </div>
      </section>

      {/* FIGHT */}
      <section
        id="fight-section"
        className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center overflow-hidden"
      >
        <video
          src={DESIGN[2].backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
        />
        <div className="aboutus-content relative z-10 max-w-3xl mx-auto">
          <h1 className="aboutus-title text-5xl md:text-6xl font-extrabold text-red-400 mb-4 tracking-tight drop-shadow-lg">
            {DESIGN[2].title}
          </h1>
        </div>
      </section>

      {/* SURVIVE */}
      <section
        id="survive-section"
        className="relative flex flex-col items-center justify-center min-h-[80vh] py-16 px-4 text-center overflow-hidden"
        style={{ position: "relative" }}
      >
        <video
          src={DESIGN[3].backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        />
        {/* Fight images in corners */}
        <div className="pointer-events-none">
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              zIndex: 20,
              margin: "2rem",
            }}
          >
            <Card3D className="w-32 h-32 rounded-full overflow-hidden shadow-2xl bg-transparent border-none pointer-events-auto">
              <img
                src={FIGHT_IMAGES[0]}
                alt="Fight 1"
                className="w-full h-full object-cover rounded-full"
                draggable="false"
              />
            </Card3D>
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              zIndex: 20,
              margin: "2rem",
            }}
          >
            <Card3D className="w-32 h-32 rounded-full overflow-hidden shadow-2xl bg-transparent border-none pointer-events-auto">
              <img
                src={FIGHT_IMAGES[1]}
                alt="Fight 2"
                className="w-full h-full object-cover rounded-full"
                draggable="false"
              />
            </Card3D>
          </div>
        </div>
        <div className="aboutus-content relative z-10 max-w-2xl mx-auto">
          <h1 className="aboutus-title text-5xl md:text-6xl font-extrabold text-green-400 mb-4 tracking-tight drop-shadow-lg">
            {DESIGN[3].title}
          </h1>
          <p className="aboutus-subtitle text-2xl md:text-3xl text-gray-200 mb-4 font-semibold">
            {DESIGN[3].subtitle}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
