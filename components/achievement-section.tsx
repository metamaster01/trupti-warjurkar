"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function AchievementSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const youtubeVideoId = "kIpnOPzJ87w";
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePlay = () => {
    setShowPlayer(true);
    setIsPlaying(true);
  };

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{
              color: "#945CAD",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Runner-Up – Miss Maharashtra
          </h2>
          <div className="h-1 w-64 bg-[#945CAD] rounded-full mb-6"></div>
          <p
            className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Trupti was honored as Runner-Up at Miss Maharashtra, a prestigious
            state-level platform celebrating beauty, confidence, and grace. This
            achievement highlights her elegance, determination, and inspiring
            presence on and off the stage.
          </p>
        </motion.div>

        {/* Video Container with Custom Cursor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black cursor-none"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handlePlay}
          >
            {/* YouTube Player or Thumbnail */}
            {!showPlayer ? (
              <>
                {/* Thumbnail Image */}
                <img
                  src={thumbnailUrl}
                  alt="Miss Maharashtra Achievement"
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0`}
                title="Miss Maharashtra Achievement Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}

            {/* Custom Play Cursor */}
            <AnimatePresence>
              {isHovering && !showPlayer && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute pointer-events-none z-50"
                  style={{
                    left: cursorPosition.x,
                    top: cursorPosition.y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 5v14l11-7L8 5z"
                        fill="#945CAD"
                        stroke="#945CAD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-sm font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Play Video
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Explore Achievements Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#945CAD] text-[#945CAD] font-semibold rounded-xl hover:bg-[#945CAD] hover:text-white transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Explore Achievements
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}