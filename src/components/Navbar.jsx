"use client"

import clsx from "clsx"
import gsap from "gsap"
import { useWindowScroll } from "react-use"
import { useEffect, useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"
import { Link, useNavigate } from "react-router-dom"

import Button from "./Button"

// Use anchor links for sections, route for About-Us and Register
const navItems = [
  { label: "Products", path: "/products" },
  { label: "About-Us", path: "/aboutus" },
  { label: "Register", path: "/register" },
]

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [isIndicatorActive, setIsIndicatorActive] = useState(false)

  // Refs for audio and navigation container
  const audioElementRef = useRef(null)
  const navContainerRef = useRef(null)
  const logoRef = useRef(null)
  const homeButtonRef = useRef(null)
  const navLinksRef = useRef([])

  const { y: currentScrollY } = useWindowScroll()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navigate = useNavigate()

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev)
  }

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
    }
  }, [isAudioPlaying])

  // Initial animations when component mounts
  useEffect(() => {
    // Animate logo entrance
    gsap.fromTo(
      logoRef.current,
      {
        scale: 0,
        rotation: -180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.2,
      },
    )

    // Animate Home button
    gsap.fromTo(
      homeButtonRef.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 0.5,
      },
    )

    // Animate navigation links with stagger
    gsap.fromTo(
      navLinksRef.current,
      {
        y: -50,
        opacity: 0,
        rotationX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.8,
      },
    )
  }, [])

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true)
      navContainerRef.current.classList.remove("floating-nav")
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false)
      navContainerRef.current.classList.add("floating-nav")
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true)
      navContainerRef.current.classList.add("floating-nav")
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    })
  }, [isNavVisible])

  useEffect(() => {
    function handlePauseMusic() {
      if (audioElementRef.current) {
        audioElementRef.current.pause()
      }
    }
    function handlePlayMusic() {
      if (isAudioPlaying && audioElementRef.current) {
        audioElementRef.current.play()
      }
    }
    window.addEventListener("pause-music", handlePauseMusic)
    window.addEventListener("play-music", handlePlayMusic)
    return () => {
      window.removeEventListener("pause-music", handlePauseMusic)
      window.removeEventListener("play-music", handlePlayMusic)
    }
  }, [isAudioPlaying])

  // Enhanced hover animations for nav links
  const handleNavLinkHover = (index, isEntering) => {
    const link = navLinksRef.current[index]
    if (!link) return

    if (isEntering) {
      gsap.to(link, {
        scale: 1.1,
        color: "#fb923c", // PUBG orange
        textShadow: "0 0 10px rgba(251, 146, 60, 0.5)",
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(link, {
        scale: 1,
        color: "#dbeafe", // Original blue-50
        textShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  // Logo hover animation
  const handleLogoHover = (isEntering) => {
    if (isEntering) {
      gsap.to(logoRef.current, {
        scale: 1.1,
        rotation: 5,
        filter: "drop-shadow(0 0 10px rgba(251, 146, 60, 0.6))",
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        filter: "none",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  // Home button hover animation
  const handleHomeButtonHover = (isEntering) => {
    if (isEntering) {
      gsap.to(homeButtonRef.current, {
        scale: 1.05,
        boxShadow: "0 0 20px rgba(251, 146, 60, 0.4)",
        duration: 0.3,
        ease: "power2.out",
      })
    } else {
      gsap.to(homeButtonRef.current, {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <Link to="/">
              <img
                ref={logoRef}
                src="/img/logo.png"
                alt="logo"
                className="w-16 cursor-pointer transition-all duration-300"
                onMouseEnter={() => handleLogoHover(true)}
                onMouseLeave={() => handleLogoHover(false)}
              />
            </Link>

            <div ref={homeButtonRef}>
              <Button
                id="product-button"
                title="Home"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-700 hover:from-blue-300 hover:to-cyan-400 md:flex hidden items-center justify-center gap-1 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-400/30 text-white font-semibold"
                onClick={() => navigate("/")}
                onMouseEnter={() => handleHomeButtonHover(true)}
                onMouseLeave={() => handleHomeButtonHover(false)}
              />
            </div>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  ref={(el) => (navLinksRef.current[index] = el)}
                  to={item.path}
                  className="nav-hover-btn transition-all duration-300"
                  onMouseEnter={() => handleNavLinkHover(index, true)}
                  onMouseLeave={() => handleNavLinkHover(index, false)}
                >
                  {item.label.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="inline-block transition-all duration-200"
                      style={{
                        animationDelay: `${letterIndex * 0.05}s`,
                      }}
                    >
                      {letter === "-" ? "-" : letter}
                    </span>
                  ))}
                </Link>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5 transition-all duration-300 hover:scale-110"
            >
              <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line transition-all duration-300", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
