"use client"

import clsx from "clsx"
import gsap from "gsap"
import { useWindowScroll } from "react-use"
import { useEffect, useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi"
import { Link, useNavigate } from "react-router-dom"
import { soundManager } from "../utils/soundManager"

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
  const [showTooltip, setShowTooltip] = useState(false)

  // Refs for audio and navigation container
  const audioElementRef = useRef(null)
  const navContainerRef = useRef(null)
  const logoRef = useRef(null)
  const homeButtonRef = useRef(null)
  const navLinksRef = useRef([])
  const audioButtonRef = useRef(null)

  const { y: currentScrollY } = useWindowScroll()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navigate = useNavigate()

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    const newAudioState = !isAudioPlaying
    setIsAudioPlaying(newAudioState)
    setIsIndicatorActive(newAudioState)

    // Enable/disable UI sounds based on main audio state
    if (newAudioState) {
      soundManager.enable()
    } else {
      soundManager.disable()
    }

    // Intense click animation
    gsap.to(audioButtonRef.current, {
      scale: 0.8,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    })
  }

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
    }
  }, [isAudioPlaying])

  // INTENSE Initial animations when component mounts
  useEffect(() => {
    // EXPLOSIVE logo entrance
    gsap.fromTo(
      logoRef.current,
      {
        scale: 0,
        rotation: -360,
        opacity: 0,
        y: -100,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        y: 0,
        duration: 1.8,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
      },
    )

    // POWERFUL Home button entrance
    gsap.fromTo(
      homeButtonRef.current,
      {
        x: -200,
        opacity: 0,
        scale: 0.5,
        rotation: -45,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2,
        ease: "back.out(2)",
        delay: 0.5,
      },
    )

    // DRAMATIC navigation links with intense stagger
    gsap.fromTo(
      navLinksRef.current,
      {
        y: -100,
        opacity: 0,
        rotationX: -180,
        scale: 0.3,
      },
      {
        y: 0,
        opacity: 1,
        rotationX: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "back.out(2.5)",
        delay: 0.8,
      },
    )

    // Audio button dramatic entrance
    gsap.fromTo(
      audioButtonRef.current,
      {
        scale: 0,
        rotation: 180,
        opacity: 0,
      },
      {
        scale: 1,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 1.2,
      },
    )
  }, [])

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true)
      navContainerRef.current.classList.remove("floating-nav")
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false)
      navContainerRef.current.classList.add("floating-nav")
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true)
      navContainerRef.current.classList.add("floating-nav")
    }

    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.4,
      ease: "power2.out",
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

  // INTENSE hover animations for nav links
  const handleNavLinkHover = (index, isEntering) => {
    const link = navLinksRef.current[index]
    if (!link) return

    if (isEntering) {
      // Play UI sound
      soundManager.play("button")

      gsap.to(link, {
        scale: 1.3,
        y: -8,
        color: "#fb923c",
        textShadow: "0 0 20px rgba(251, 146, 60, 0.8), 0 0 40px rgba(251, 146, 60, 0.4)",
        rotation: 2,
        duration: 0.4,
        ease: "back.out(1.7)",
      })

      const letters = link.querySelectorAll("span")
      letters.forEach((letter, letterIndex) => {
        gsap.to(letter, {
          y: -5,
          scale: 1.2,
          duration: 0.3,
          delay: letterIndex * 0.05,
          ease: "back.out(1.7)",
        })
      })
    } else {
      gsap.to(link, {
        scale: 1,
        y: 0,
        color: "#dbeafe",
        textShadow: "none",
        rotation: 0,
        duration: 0.4,
        ease: "power2.out",
      })

      const letters = link.querySelectorAll("span")
      letters.forEach((letter) => {
        gsap.to(letter, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    }
  }

  // EXPLOSIVE logo hover animation
  const handleLogoHover = (isEntering) => {
    if (isEntering) {
      soundManager.play("uiPop")
      gsap.to(logoRef.current, {
        scale: 1.4,
        rotation: 15,
        filter: "drop-shadow(0 0 25px rgba(251, 146, 60, 0.9)) drop-shadow(0 0 50px rgba(251, 146, 60, 0.5))",
        y: -5,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
    } else {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        filter: "none",
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
    }
  }

  // POWERFUL Home button hover animation
  const handleHomeButtonHover = (isEntering) => {
    if (isEntering) {
      soundManager.play("button")
      gsap.to(homeButtonRef.current, {
        scale: 1.2,
        y: -3,
        boxShadow: "0 10px 30px rgba(251, 146, 60, 0.6), 0 0 0 3px rgba(251, 146, 60, 0.3)",
        filter: "brightness(1.2)",
        duration: 0.4,
        ease: "back.out(1.7)",
      })
    } else {
      gsap.to(homeButtonRef.current, {
        scale: 1,
        y: 0,
        boxShadow: "none",
        filter: "brightness(1)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  // INTENSE Audio button hover animation
  const handleAudioButtonHover = (isEntering) => {
    if (isEntering) {
      setShowTooltip(true)
      soundManager.play("sciFi4")
      gsap.to(audioButtonRef.current, {
        scale: 1.3,
        rotation: 10,
        filter: "drop-shadow(0 0 15px rgba(251, 146, 60, 0.7))",
        duration: 0.3,
        ease: "back.out(1.7)",
      })
    } else {
      setShowTooltip(false)
      gsap.to(audioButtonRef.current, {
        scale: 1,
        rotation: 0,
        filter: "none",
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }

  // Handle nav link clicks
  const handleNavLinkClick = () => {
    soundManager.play("sciFi4")
  }

  // Handle home button click
  const handleHomeButtonClick = () => {
    soundManager.play("synthShot")
    navigate("/")
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
            <Link to="/" onClick={handleNavLinkClick}>
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
                containerClass="md:flex hidden items-center justify-center gap-1 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-400/30 text-white font-semibold"
                style={{
                  background: "linear-gradient(180deg, #FF9933 33%, #FFFFFF 34% 66%, #138808 67%)",
                  color: "#092047", // optimal contrast for text/icons
                  border: "2px solid #092047"
                }}
                onClick={handleHomeButtonClick}
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
                  className="nav-hover-btn transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => handleNavLinkHover(index, true)}
                  onMouseLeave={() => handleNavLinkHover(index, false)}
                  onClick={handleNavLinkClick}
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

            {/* Enhanced Audio Button with Sound Icon and Tooltip */}
            <div className="relative ml-10">
              <button
                ref={audioButtonRef}
                onClick={toggleAudioIndicator}
                className="flex items-center space-x-2 transition-all duration-300 p-2 rounded-full hover:bg-orange-400/10"
                onMouseEnter={() => handleAudioButtonHover(true)}
                onMouseLeave={() => handleAudioButtonHover(false)}
              >
                <audio ref={audioElementRef} className="hidden" src="/audio/loop.mp3" loop />

                {/* Sound Icon */}
                <div className="flex items-center space-x-1">
                  {isAudioPlaying ? (
                    <HiVolumeUp className="text-orange-400 text-xl" />
                  ) : (
                    <HiVolumeOff className="text-blue-50 text-xl" />
                  )}

                  {/* Visual Indicator Bars */}
                  <div className="flex items-center space-x-0.5">
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
                  </div>
                </div>
              </button>

              {/* Tooltip */}
              {showTooltip && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/90 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap backdrop-blur-sm border border-orange-400/20">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45 border-l border-t border-orange-400/20"></div>
                  {isAudioPlaying ? "🔊 Audio & UI Sounds ON" : "🔇 Click to Enable Audio & Sounds"}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
