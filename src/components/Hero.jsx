"use client"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { TiLocationArrow } from "react-icons/ti"
import { useEffect, useRef, useState } from "react"

import Button from "./Button"
import VideoPreview from "./VideoPreview"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [showBackgroundImage, setShowBackgroundImage] = useState(false)

  const totalVideos = 4
  const nextVdRef = useRef(null)
  const backgroundVideoRef = useRef(null)
  const miniVideoRef = useRef(null)
  const heroRef = useRef(null)

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false)
    }
  }, [loadedVideos])

  // Intersection Observer to detect when hero section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)

        if (!entry.isIntersecting) {
          // Hero is not visible - pause videos and show background image
          setShowBackgroundImage(true)

          // Pause and mute all videos
          if (backgroundVideoRef.current) {
            backgroundVideoRef.current.pause()
            backgroundVideoRef.current.muted = true
          }
          if (nextVdRef.current) {
            nextVdRef.current.pause()
            nextVdRef.current.muted = true
          }
          if (miniVideoRef.current) {
            miniVideoRef.current.pause()
            miniVideoRef.current.muted = true
          }
        } else {
          // Hero is visible - resume videos and hide background image
          setShowBackgroundImage(false)

          // Resume background video
          if (backgroundVideoRef.current) {
            backgroundVideoRef.current.play()
          }

          // Resume other videos if they were playing
          if (hasClicked && nextVdRef.current) {
            nextVdRef.current.muted = false
            nextVdRef.current.volume = 0.7
            nextVdRef.current.play()
          }
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [hasClicked])

  // Cleanup effect when component unmounts
  useEffect(() => {
    return () => {
      // Pause and mute all videos when component unmounts
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.pause()
        backgroundVideoRef.current.muted = true
      }
      if (nextVdRef.current) {
        nextVdRef.current.pause()
        nextVdRef.current.muted = true
      }
      if (miniVideoRef.current) {
        miniVideoRef.current.pause()
        miniVideoRef.current.muted = true
      }
    }
  }, [])

  const handleMiniVdClick = () => {
    if (!isVisible) return // Don't allow clicks when not visible

    setHasClicked(true)
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1)

    // Tell Navbar (via global event) to pause site music
    window.dispatchEvent(new Event("pause-music"))

    // Unmute and play the mini (now fullscreen) video with sound
    if (nextVdRef.current && isVisible) {
      nextVdRef.current.muted = false
      nextVdRef.current.volume = 0.7
      nextVdRef.current.play()
    }
  }

  useGSAP(
    () => {
      if (hasClicked && isVisible) {
        gsap.set("#next-video", { visibility: "visible" })
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => {
            if (nextVdRef.current && isVisible) {
              nextVdRef.current.play()
            }
          },
        })
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        })
      }
    },
    {
      dependencies: [currentIndex, isVisible],
      revertOnUpdate: true,
    },
  )

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    })
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    })
  })

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`

  return (
    <div ref={heroRef} className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        {/* Background Image Fallback */}
        {showBackgroundImage && (
          <div
            className="absolute left-0 top-0 size-full z-30 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
            style={{
              backgroundImage: `url('/img/herobg.webp')`,
              opacity: showBackgroundImage ? 1 : 0,
            }}
          />
        )}

        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={miniVideoRef}
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                  style={{
                    opacity: showBackgroundImage ? 0 : 1,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
            style={{
              opacity: showBackgroundImage ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />

          <video
            ref={backgroundVideoRef}
            src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
            style={{
              opacity: showBackgroundImage ? 0 : 1,
              transition: "opacity 0.5s ease-in-out",
            }}
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              redefi<b>n</b>e
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
              onClick={() => window.open("https://www.youtube.com/watch?v=SFafi7eln9w", "_blank")}
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>
    </div>
  )
}

export default Hero
