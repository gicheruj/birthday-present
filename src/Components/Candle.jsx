// src/Components/Tree.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

export default function Candle({ onContinue }) {
  const [isLit, setIsLit] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleBlowOut = () => {
    if (isLit) {
      setIsLit(false);
      setTimeout(() => {
        onContinue(); // go to final page automatically
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-purple-950 text-white relative overflow-hidden pt-12 pb-8 px-4">
      {/* Confetti when candle is blown out */}
      {!isLit && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={200}
          recycle={false}
          colors={['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']}
        />
      )}

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-4xl font-bold mb-16 text-center"
        style={{ fontFamily: "'Mountains of Christmas', cursive" }}
      >
        {isLit ? "Click the flame to blow out the candle! 🕯️ Remember to make a wish!" : "🎉 You did it! 🎉"}
      </motion.h1>

      {/* Candle Container - with extra top spacing for flame */}
      <div className="relative flex items-center justify-center mt-24 mb-12">
        <div className="relative">
          {/* Flame */}
          <AnimatePresence>
            {isLit && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-24 left-1/2 -translate-x-1/2 cursor-pointer z-10"
                onClick={handleBlowOut}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <svg width="80" height="100" viewBox="0 0 80 100">
                    {/* Outer flame glow */}
                    <ellipse
                      cx="40"
                      cy="50"
                      rx="35"
                      ry="45"
                      fill="url(#flameGradient)"
                      opacity="0.6"
                    />
                    {/* Main flame */}
                    <path
                      d="M 40 10 Q 50 30 45 50 Q 42 70 40 80 Q 38 70 35 50 Q 30 30 40 10 Z"
                      fill="url(#flameGradient)"
                    />
                    {/* Inner bright core */}
                    <ellipse
                      cx="40"
                      cy="55"
                      rx="12"
                      ry="20"
                      fill="#FFF9E6"
                      opacity="0.9"
                    />
                    <defs>
                      <radialGradient id="flameGradient">
                        <stop offset="0%" stopColor="#FFF9E6" />
                        <stop offset="30%" stopColor="#FFD700" />
                        <stop offset="60%" stopColor="#FF8C00" />
                        <stop offset="100%" stopColor="#FF4500" />
                      </radialGradient>
                    </defs>
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Smoke after blowing out */}
          <AnimatePresence>
            {!isLit && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: [0, 1, 0], y: -80 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none z-10"
              >
                <div className="text-6xl">💨</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wick */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-6 bg-gray-800 rounded-full" />

          {/* Candle body */}
          <motion.div
            animate={!isLit ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <svg width="120" height="300" viewBox="0 0 120 300">
              {/* Candle wax */}
              <defs>
                <linearGradient id="candleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B4513" />
                  <stop offset="50%" stopColor="#A0522D" />
                  <stop offset="100%" stopColor="#8B4513" />
                </linearGradient>
              </defs>
              
              {/* Main candle body */}
              <rect
                x="20"
                y="20"
                width="80"
                height="260"
                rx="8"
                fill="url(#candleGradient)"
              />
              
              {/* Wax drips */}
              <path
                d="M 30 80 Q 25 100 28 120"
                stroke="#A0522D"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M 90 100 Q 95 120 92 140"
                stroke="#A0522D"
                strokeWidth="3"
                fill="none"
                opacity="0.7"
              />
              
              {/* Candle highlights */}
              <rect
                x="30"
                y="30"
                width="8"
                height="240"
                rx="4"
                fill="white"
                opacity="0.2"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Celebration text */}
      {!isLit && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div
            className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-2"
            style={{ fontFamily: "'Mountains of Christmas', cursive" }}
          >
            ✨ Perfect! Make a wish! ✨
          </div>
          <div
            className="text-lg md:text-xl text-gray-300"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Preparing your final gift…
          </div>
        </motion.div>
      )}
    </div>
  );
}