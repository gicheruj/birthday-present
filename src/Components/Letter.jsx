// src/Components/Letter.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

const Letter = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    // Handle window resize for confetti
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const letterContent = `Dear Mark,

As this special day comes to a close, we wanted to take a moment to tell you just how much you mean to all of us.

This year has been filled with so many beautiful moments, and you’ve been a bright light through it all. Your kindness, your laughter, and your genuine spirit make the world a better place for everyone around you.

We’re incredibly grateful to have you in our lives. Whether we’re sharing adventures, quiet conversations, or just being silly together, every moment with you is a gift we truly treasure.

May this new year bring you endless joy, exciting opportunities, and all the happiness your heart can hold. You deserve nothing but the best.

Thank you for being exactly who you are. Never change.

With all our love and warmest wishes,
Your People ❤️

P.S. Hope this little adventure brought a big smile to your face 😊!`;

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0a0f1c] via-[#0d1522] to-[#0a0f1c] text-white overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={90}
        recycle={true}
        colors={['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']}
      />

      {/* Glow Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="absolute w-[80%] max-w-3xl h-[60%] bg-amber-300/10 blur-[90px] rounded-full"
      />

      <div className="relative z-20 w-full max-w-3xl px-6 py-10 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: "'Mountains of Christmas', cursive" }}
        >
          A Special Message Just For You 🎁✨
        </motion.h2>

        <AnimatePresence mode="wait">
          {!showLetter ? (
            /* Button to reveal letter */
            <motion.div
              key="button"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-6"
            >
              {/* Envelope illustration */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-8xl md:text-9xl"
              >
                💌
              </motion.div>

              <motion.button
                onClick={() => setShowLetter(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-full text-xl md:text-2xl font-bold shadow-lg transition-all"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Click to View the Message
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-gray-300 max-w-md"
                style={{ fontFamily: "'Mountains of Christmas', cursive" }}
              >
                Open this envelope to read your heartfelt message
              </motion.p>
            </motion.div>
          ) : (
            /* Letter content */
            <motion.div
              key="letter"
              initial={{ scale: 0.8, opacity: 0, rotateX: -90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-200"
            >
              {/* Letter paper texture */}
              <div className="relative p-8 md:p-12">
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 text-2xl">✨</div>
                <div className="absolute top-4 right-4 text-2xl">✨</div>
                <div className="absolute bottom-4 left-4 text-2xl">🎄</div>
                <div className="absolute bottom-4 right-4 text-2xl">🎄</div>

                {/* Letter content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="text-gray-800 leading-relaxed whitespace-pre-line"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  <div className="text-lg md:text-xl mb-6">{letterContent}</div>
                </motion.div>
              </div>

              {/* Wax seal decoration at bottom */}
              <div className="bg-amber-200 p-4 flex justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-800">
                  <span className="text-2xl">❤️</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Letter;