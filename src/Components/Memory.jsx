// src/Components/Memory.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
// Ensure case sensitivity when working with photos

// import photo1 from "../assets/Maraga/photo1.jpeg";
import photo2 from "../assets/Maraga/photo2.jpeg";
import photo3 from "../assets/Maraga/photo3.jpeg";
import photo4 from "../assets/Maraga/photo4.jpeg";
import photo5 from "../assets/Maraga/photo5.jpeg";
import photo6 from "../assets/Maraga/photo6.jpeg";
import photo7 from "../assets/Maraga/photo7.jpeg";
import photo8 from "../assets/Maraga/photo8.jpeg";
import photo9 from "../assets/Maraga/photo9.jpeg";
import photo10 from "../assets/Maraga/photo10.jpeg";
import photo11 from "../assets/Inattendance/photo11.jpeg";
import photo12 from "../assets/Inattendance/photo12.jpeg";
import photo13 from "../assets/Inattendance/photo13.jpeg";
import photo14 from "../assets/Inattendance/photo14.jpeg";
import photo15 from "../assets/Inattendance/photo15.jpeg";
import photo16 from "../assets/Inattendance/photo16.jpeg";
import photo17 from "../assets/Inattendance/photo17.jpeg";
import photo18 from "../assets/Inattendance/photo18.jpeg";
import photo19 from "../assets/Inattendance/photo19.jpeg";
import photo20 from "../assets/Inattendance/photo20.jpeg";
import photo21 from "../assets/Inattendance/photo21.jpeg";
import photo22 from "../assets/Inattendance/photo22.jpeg";
import photo23 from "../assets/Inattendance/photo23.jpeg";
import photo24 from "../assets/Inattendance/photo24.jpeg";
import photo25 from "../assets/Inattendance/photo25.jpeg";
import photo26 from "../assets/Inattendance/photo26.jpeg";



export default function Memory({ onContinue, onPrevious }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [selectedCard, setSelectedCard] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Some Amazing Memories 📸",
      subtitle: "Click to relive the moments ",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
      photos: [ photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10],
      showNames: false, 
    },
    {
      id: 2,
      title: "In Attendance ",
      subtitle: "Click to view",
      color: "bg-gradient-to-br from-purple-500 to-indigo-600",
      photos: [
        { src: photo11, name: "Ken" },
        { src: photo12, name: "Ken" },
        { src: photo13, name: "Victoria" },
        { src: photo14, name: "Dr. Sam" },
        { src: photo15, name: "Jorel" },
        { src: photo16, name: "Joe" },
        { src: photo17, name: "Mark" },
        { src: photo18, name: "Kelsey" },
        { src: photo19, name: "Kelsey" },
        { src: photo20, name: "Antwin" },
        { src: photo21, name: "Danny" },
        { src: photo22, name: "Ethan" },
        { src: photo23, name: "Dancun" },
        { src: photo24, name: "Kyalo" },
        { src: photo25, name: "Achilla" },
        { src: photo26, name: "Person 16" },
      ],
      showNames: true, // Show names for this gallery
    },
  ];

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    setCurrentPhotoIndex(0);
  };

  const handleCloseGallery = () => {
    setSelectedCard(null);
    setCurrentPhotoIndex(0);
  };

  const handleNextPhoto = () => {
    const card = cards.find((c) => c.id === selectedCard);
    if (card) {
      setCurrentPhotoIndex((prev) => (prev + 1) % card.photos.length);
    }
  };

  const handlePrevPhoto = () => {
    const card = cards.find((c) => c.id === selectedCard);
    if (card) {
      setCurrentPhotoIndex((prev) => 
        prev === 0 ? card.photos.length - 1 : prev - 1
      );
    }
  };

  const selectedCardData = cards.find((c) => c.id === selectedCard);
  
  // Helper function to get photo source
  const getPhotoSrc = (photo) => {
    return typeof photo === 'object' ? photo.src : photo;
  };

  // Helper function to get photo name
  const getPhotoName = (photo) => {
    return typeof photo === 'object' ? photo.name : null;
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white overflow-hidden px-4 py-8">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={100}
        recycle={true}
        colors={['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']}
      />

      <AnimatePresence mode="wait">
        {!selectedCard ? (
          /* Cards View */
          <motion.div
            key="cards"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full max-w-5xl"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-8 text-center"
              style={{ fontFamily: "'Mountains of Christmas', cursive" }}
            >
              Memory Path Gallery 📸
            </h2>

            <p
              className="mb-12 text-center text-lg md:text-xl px-2"
              style={{ fontFamily: "'Mountains of Christmas', cursive" }}
            >
              Click each card to view special photo memories!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cursor-pointer rounded-2xl shadow-2xl p-8 h-64 flex flex-col items-center justify-center transition-all ${card.color}`}
                >
                  <h3
                    className="text-2xl md:text-3xl font-bold mb-3 text-center"
                    style={{ fontFamily: "'Mountains of Christmas', cursive" }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-center text-lg opacity-90">
                    {card.subtitle}
                  </p>
                  <div className="mt-4 text-sm opacity-75">
                    {card.photos.length} photos
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex gap-6 justify-center">
              <motion.button
                onClick={onPrevious}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-lg font-bold shadow-md"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Previous
              </motion.button>

              <motion.button
                onClick={onContinue}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-red-700 hover:bg-red-600 rounded-full text-lg font-bold shadow-lg drop-shadow-xl"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        ) : (
          /* Photo Gallery View */
          <motion.div
            key="gallery"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-4xl"
          >
            <div className="flex justify-between items-center mb-6">
              <h2
                className="text-2xl md:text-3xl font-bold"
                style={{ fontFamily: "'Mountains of Christmas', cursive" }}
              >
                {selectedCardData?.title}
              </h2>
              <motion.button
                onClick={handleCloseGallery}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full text-lg font-bold"
              >
                ✕ Close
              </motion.button>
            </div>

            {/* Photo Display */}
            <div className="relative bg-black/40 rounded-2xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-sm">
              <motion.img
                key={currentPhotoIndex}
                src={getPhotoSrc(selectedCardData?.photos[currentPhotoIndex])}
                alt={`Memory ${currentPhotoIndex + 1}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Navigation Arrows */}
              {selectedCardData && selectedCardData.photos.length > 1 && (
                <>
                  <motion.button
                    onClick={handlePrevPhoto}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-3xl"
                  >
                    ◀
                  </motion.button>
                  <motion.button
                    onClick={handleNextPhoto}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 text-3xl"
                  >
                    ▶
                  </motion.button>
                </>
              )}

              {/* Photo Counter and Name */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full text-center">
                <div className="text-sm">
                  {currentPhotoIndex + 1} / {selectedCardData?.photos.length}
                </div>
                {selectedCardData?.showNames && getPhotoName(selectedCardData.photos[currentPhotoIndex]) && (
                  <div className="text-lg font-semibold mt-1" style={{ fontFamily: "'Mountains of Christmas', cursive" }}>
                    {getPhotoName(selectedCardData.photos[currentPhotoIndex])}
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-2 mt-6 justify-center overflow-x-auto pb-2">
              {selectedCardData?.photos.map((photo, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <motion.img
                    src={getPhotoSrc(photo)}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    whileHover={{ scale: 1.1 }}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all ${
                      index === currentPhotoIndex
                        ? "ring-4 ring-blue-500 opacity-100"
                        : "opacity-50 hover:opacity-75"
                    }`}
                  />
                  {selectedCardData?.showNames && getPhotoName(photo) && (
                    <div className="text-xs text-center max-w-[80px] truncate">
                      {getPhotoName(photo)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}