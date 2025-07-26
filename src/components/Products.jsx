import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const passes = [
  {
    title: "Royale Pass Season 14",
    image: "/img/rpa14.webp",
    price: "₹799",
    perks: ["Exclusive outfits", "Weapon skins", "Emotes"],
    type: "Elite Pass",
  },
  {
    title: "Royale Pass Season 15",
    image: "/img/rpa15.webp",
    price: "₹899",
    perks: ["Upgraded missions", "New vehicle skins", "Outfit rewards"],
    type: "Elite Pass",
  },
  {
    title: "Royale Pass Season 19", // Updated title to match video mapping
    image: "/img/rpa19.webp",
    price: "₹1,199",
    perks: ["Unlock up to Rank 25", "High-tier cosmetics", "Bonus crates"],
    type: "Plus Edition",
  },
  {
    title: "Royale Pass Season 11",
    image: "/img/rpa11.webp",
    price: "₹749",
    perks: ["Theme outfits", "RP missions", "Crate rewards"],
    type: "Standard Pass",
  },
];

export default function Products() {
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  /* ========== animations ========== */
  useEffect(() => {
    /* title fade-down */
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
    );

    /* cards fly-in + 3-D hover */
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, y: 80, scale: 0.85 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      /* subtle tilt on hover */
      const enter = () =>
        gsap.to(card, { scale: 1.06, rotateY: 5, duration: 0.3 });
      const leave = () =>
        gsap.to(card, { scale: 1, rotateY: 0, duration: 0.3 });

      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      return () => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      };
    });
  }, []);

  /* ========== render ========== */
  return (
    <div className="min-h-screen bg-black text-white px-8 py-12">
      <h1
        ref={titleRef}
        className="text-4xl font-bold text-center mb-12 text-yellow-400"
      >
        Choose Your Royale Pass
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {passes.map((pass, index) => (
          <Link
            key={index}
            to={`/products/${index}`}
            state={{ product: pass }}
            className="block"
          >
            <div
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden
                         shadow-lg cursor-pointer transform-gpu"
            >
              <img
                src={pass.image}
                alt={pass.title}
                className="w-full h-56 object-cover transition-transform duration-300
                           group-hover:scale-110"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-yellow-300 mb-2">
                  {pass.title}
                </h2>
                <p className="text-sm text-gray-300 mb-2">Type: {pass.type}</p>

                <ul className="text-sm text-white mb-4 list-disc list-inside space-y-1">
                  {pass.perks.map((perk, idx) => (
                    <li key={idx}>{perk}</li>
                  ))}
                </ul>

                <p className="text-lg font-bold text-yellow-400">{pass.price}</p>

                <div className="mt-4 w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded text-center transition-colors">
                  View Details →
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
