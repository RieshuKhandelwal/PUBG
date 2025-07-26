"use client"

// PUBG-themed Animated Login/Signup Component with Routing
import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { soundManager } from "../utils/soundManager"

export default function Register() {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [videoStarted, setVideoStarted] = useState(false)
  const videoRef = useRef(null)
  const navigate = useNavigate()

  const toggleForm = () => {
    soundManager.play("click")
    setIsLogin(!isLogin)
  }

  const handleClick = () => {
    if (videoRef.current && !videoStarted) {
      // Pause background music when video starts
      window.dispatchEvent(new Event("pause-music"))

      videoRef.current.muted = false
      videoRef.current.volume = 0.7 // Slightly lower volume
      videoRef.current.play().catch((err) => console.log("Play blocked:", err))
      setVideoStarted(true)
    }
  }

  // Handle component mount and unmount
  useEffect(() => {
    // Ensure sound manager is enabled when component mounts
    soundManager.enable()

    // Cleanup when component unmounts
    return () => {
      // Stop video and resume background music when leaving
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.muted = true
      }
      // Resume background music
      window.dispatchEvent(new Event("play-music"))
    }
  }, [])

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (isLoginForm) => {
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      soundManager.play("click") // Error sound
      alert("Please enter a valid email")
      return false
    }
    if (!formData.password.trim() || formData.password.length < 6) {
      soundManager.play("click") // Error sound
      alert("Password must be at least 6 characters")
      return false
    }
    if (!isLoginForm && (!formData.username.trim() || formData.username.length < 3)) {
      soundManager.play("click") // Error sound
      alert("Username must be at least 3 characters")
      return false
    }
    return true
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLoginClick = () => {
    if (validateForm(true)) {
      soundManager.play("sciFi4")
      // Stop video and resume background music before navigating
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.muted = true
      }
      window.dispatchEvent(new Event("play-music"))
      navigate("/")
    }
  }

  const handleSignupClick = () => {
    if (validateForm(false)) {
      soundManager.play("sciFi4")
      setIsLogin(true)
      // Reset form data
      setFormData({ username: "", email: "", password: "" })
    }
  }

  return (
    <div
      onClick={handleClick}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background video */}
      <video ref={videoRef} autoPlay muted loop playsInline className="absolute w-full h-full object-cover opacity-30">
        <source src="/videos/LoginSignup.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-60"></div>

      <div className="z-10 w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl text-white">
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-6">Welcome Back, Warrior</h2>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white focus:border-yellow-400 focus:outline-none transition-colors"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white focus:border-yellow-400 focus:outline-none transition-colors"
              />
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition p-2 rounded font-bold hover:scale-105 transform duration-200"
                onMouseEnter={() => soundManager.play("button")}
                onClick={handleLoginClick}
              >
                Log In
              </button>
              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <span
                  className="text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors"
                  onMouseEnter={() => soundManager.play("uiPop")}
                  onClick={toggleForm}
                >
                  Sign Up
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-center mb-6">Join the Battleground</h2>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white focus:border-yellow-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white focus:border-yellow-400 focus:outline-none transition-colors"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white focus:border-yellow-400 focus:outline-none transition-colors"
              />
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition p-2 rounded font-bold hover:scale-105 transform duration-200"
                onMouseEnter={() => soundManager.play("button")}
                onClick={handleSignupClick}
              >
                Sign Up
              </button>
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <span
                  className="text-yellow-400 cursor-pointer hover:text-yellow-300 transition-colors"
                  onMouseEnter={() => soundManager.play("uiPop")}
                  onClick={toggleForm}
                >
                  Log In
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
