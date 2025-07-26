// PUBG-themed Animated Login/Signup Component with Routing
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const toggleForm = () => setIsLogin(!isLogin);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      videoRef.current.play().catch((err) => console.log("Play blocked:", err));
    }
  };

  return (
    <div
      onClick={handleClick}
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute w-full h-full object-cover opacity-30"
      >
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
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white"
              />
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition p-2 rounded font-bold"
                onClick={() => navigate("/")}
              >
                Log In
              </button>
              <p className="text-center text-sm mt-4">
                Don't have an account?{' '}
                <span className="text-yellow-400 cursor-pointer" onClick={toggleForm}>Sign Up</span>
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
                placeholder="Username"
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-4 px-4 py-2 rounded bg-white/20 backdrop-blur border border-white/30 placeholder-white"
              />
              <button
                className="w-full bg-yellow-500 hover:bg-yellow-600 transition p-2 rounded font-bold"
                onClick={() => setIsLogin(true)}
              >
                Sign Up
              </button>
              <p className="text-center text-sm mt-4">
                Already have an account?{' '}
                <span className="text-yellow-400 cursor-pointer" onClick={toggleForm}>Log In</span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
