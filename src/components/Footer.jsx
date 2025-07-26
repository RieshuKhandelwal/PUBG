"use client"

import { useRef, useEffect } from "react"
import { FaDiscord, FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa"
import { Link } from "react-router-dom"
import gsap from "gsap"

const socialLinks = [
  { href: "https://discord.com/invite/battlegrounds", icon: <FaDiscord />, color: "#5865F2", name: "Discord" },
  { href: "https://x.com/PUBG", icon: <FaTwitter />, color: "#1DA1F2", name: "Twitter" },
  {
    href: "https://www.youtube.com/channel/UCnXDQbqIdp-HQuDyM4p12ng",
    icon: <FaYoutube />,
    color: "#FF0000",
    name: "YouTube",
  },
  { href: "https://facebook.com/PUBG.battlegrounds.global", icon: <FaFacebook />, color: "#1877F2", name: "Facebook" },
]

const Footer = () => {
  const socialIconsRef = useRef([])

  useEffect(() => {
    // Initial entrance animation for social icons
    gsap.fromTo(
      socialIconsRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.5,
      },
    )
  }, [])

  const handleSocialHover = (index, isEntering, color) => {
    const icon = socialIconsRef.current[index]
    if (!icon) return

    if (isEntering) {
      // INTENSIVE scale up and glow effect
      gsap.to(icon, {
        scale: 1.8,
        rotation: 15,
        y: -8,
        duration: 0.4,
        ease: "back.out(2)",
      })

      // Dynamic glow effect with brand color
      gsap.to(icon, {
        filter: `drop-shadow(0 0 20px ${color}) drop-shadow(0 0 40px ${color}) drop-shadow(0 0 60px ${color}80)`,
        duration: 0.3,
        ease: "power2.out",
      })

      // Pulsing animation
      gsap.to(icon, {
        scale: 2,
        duration: 0.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.2,
      })
    } else {
      // Reset to normal state
      gsap.killTweensOf(icon) // Stop all animations
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        y: 0,
        filter: "none",
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }

  const handleSocialClick = (index) => {
    const icon = socialIconsRef.current[index]
    if (!icon) return

    // Explosive click animation
    gsap.to(icon, {
      scale: 0.7,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    })
  }

  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black relative overflow-hidden">
      {/* Background particles for extra gaming feel */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-2 left-10 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-4 right-20 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-3 left-1/4 w-1 h-1 bg-white/10 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-2 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row relative z-10">
        <p className="text-center text-sm font-light md:text-left">©PUBG 2025. All rights reserved</p>

        <div className="flex justify-center gap-6 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              ref={(el) => (socialIconsRef.current[index] = el)}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-300 ease-in-out hover:text-white text-xl cursor-pointer relative"
              onMouseEnter={() => handleSocialHover(index, true, link.color)}
              onMouseLeave={() => handleSocialHover(index, false, link.color)}
              onClick={() => handleSocialClick(index)}
              style={{
                transformOrigin: "center",
                willChange: "transform, filter",
              }}
              title={`Follow us on ${link.name}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <Link
          to="/privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right transition-all duration-300 hover:text-white hover:scale-105"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  )
}

export default Footer
