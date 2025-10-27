// import React from "react";
// import { Play } from "lucide-react";

// const SpeakingReel: React.FC = () => {
//   return (
//     <section className="flex flex-col items-center justify-center w-full py-8 sm:py-12 md:py-16 bg-white">
//       {/* Card */}
//       <div className="bg-gray-50 rounded-2xl shadow-md w-full max-w-6xl flex flex-col md:flex-row p-4 sm:p-8 md:p-12">
//         {/* Left: Heading + Image/Video Thumbnail */}
//         <div className="relative w-full md:w-1/2 flex flex-col items-start justify-center">
//           <h2
//             className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
//             style={{ color: "#945CAD" }}
//           >
//             Speaking Reel
//           </h2>
//           <p className="text-black font-bold mb-4 text-sm sm:text-base md:text-lg">
//             See Me in Action
//           </p>

//           <img
//             src="/speak.png"
//             alt="Speaking Reel"
//             className="rounded-xl w-full h-auto object-cover shadow-sm"
//           />
//         </div>

//         {/* Right: Text Content */}
//         <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0 md:pl-10">
//           <h3 className="text-lg sm:text-xl font-bold mb-2">
//             A sharp 1-minute reel showing:
//           </h3>
//           <p className="text-gray-600 mb-4 text-sm sm:text-base">
//             Experience the energy, confidence, and impact I bring to every stage.
//             Watch my highlights as I inspire audiences to communicate with
//             influence and win every room.
//           </p>

//           <ul className="space-y-2 mb-6 text-sm sm:text-base">
//             <li className="text-black font-bold">• Confident stage presence</li>
//             <li className="text-black font-bold">• Engaged audience reactions</li>
//             <li className="text-black font-bold">• Your voice, energy, and style</li>
//           </ul>

//           {/* CTA Button */}
//           <button
//             className="text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition w-fit"
//             style={{ backgroundColor: "#945CAD" }}
//           >
//             Watch full reel
//           </button>
//         </div>
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex gap-2 mt-4 sm:mt-6">
//         <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></span>
//         <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-purple-500"></span>
//         <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></span>
//       </div>
//     </section>
//   );
// };

// export default SpeakingReel;


"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ReelData {
  video: string
  title: string
  subtitle: string
  description: string
  points: string[]
  ctaText: string
}

const reelsData: ReelData[] = [
  {
    video: "/speaking1.mp4",
    title: "Beauty Redefined",
    subtitle: "See what Trupti says about True Beauty",
    description: "Watch as Trupti Warjurkar, Miss Maharashtra 1st Runner Up, shares her profound perspective on what beauty truly means. Her answer captivates with authenticity and wisdom.",
    points: [
      "• Authentic perspective on beauty",
      "• Confident & articulate expression",
      "• Inspiring wisdom from experience"
    ],
    ctaText: "Watch Trupti's answer"
  },
  {
    video: "/speaking2.mp4",
    title: "The Learning Journey",
    subtitle: "How Trupti views Achievement & Growth",
    description: "Discover Trupti's powerful insight: Achievement isn't the destination, the process is the real learning. Experience her compelling message about embracing the journey over the trophy.",
    points: [
      "• Process over achievement mindset",
      "• Growth-focused philosophy",
      "• Powerful message delivery"
    ],
    ctaText: "Watch her journey story"
  },
  {
    video: "/speaking3.mp4",
    title: "Gratitude in Learning",
    subtitle: "Trupti's approach to continuous growth",
    description: "Explore how Trupti embodies the art of learning from others with grace and gratitude. Her message on staying humble and open to wisdom will inspire your own growth journey.",
    points: [
      "• Gratitude-based learning approach",
      "• Humility in growth",
      "• Inspiring communication style"
    ],
    ctaText: "See her philosophy"
  }
]

const SpeakingReel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const currentReel = reelsData[currentIndex]

  // Handle mouse move for custom cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoContainerRef.current) return
    const rect = videoContainerRef.current.getBoundingClientRect()
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  // Auto-rotation logic (only when not playing)
  useEffect(() => {
    if (!isPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reelsData.length)
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [isPlaying])

  // Reset video when index changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
      setIsPlaying(false)
    }
  }, [currentIndex])

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
    // Move to next slide when video ends
    setCurrentIndex((prev) => (prev + 1) % reelsData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="speakingreel" className="flex flex-col items-center justify-center w-full py-8 sm:py-12 md:py-16 bg-white">
      {/* Card */}
      <div className="bg-gray-50 rounded-2xl shadow-md w-full max-w-6xl flex flex-col md:flex-row p-4 sm:p-8 md:p-12 relative overflow-hidden">
        {/* Left: Heading + Video */}
        <div className="relative w-full md:w-1/2 flex flex-col items-start justify-center">
          <motion.h2
            key={`title-${currentIndex}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2"
            style={{ color: "#945CAD" }}
          >
            Speaking Reel
          </motion.h2>
          <motion.p
            key={`subtitle-${currentIndex}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black font-bold mb-4 text-sm sm:text-base md:text-lg"
          >
            See Me in Action
          </motion.p>

          {/* Video Container with Custom Cursor - INCREASED HEIGHT */}
          <div
            ref={videoContainerRef}
            className="relative rounded-xl w-full overflow-hidden shadow-lg group cursor-none"
            style={{ height: "680px" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={handleVideoClick}
          >
            <AnimatePresence mode="wait">
              <motion.video
                key={currentIndex}
                ref={videoRef}
                src={currentReel.video}
                className="w-full h-full object-cover"
                onEnded={handleVideoEnded}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>

            {/* Custom Play Cursor - EXACT SAME AS YOUR CODE */}
            <AnimatePresence>
              {isHovering && !isPlaying && (
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
                    className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl"
                  >
                    <svg
                      width="20"
                      height="20"
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
                  >
                    Play Video
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: Text Content with Animation */}
        <div className="md:w-1/2 flex flex-col justify-center mt-6 md:mt-0 md:pl-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#945CAD" }}>
                {currentReel.title}
              </h3>
              <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-800">
                {currentReel.subtitle}
              </h4>
              <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                {currentReel.description}
              </p>

              <ul className="space-y-2 mb-6 text-sm sm:text-base">
                {currentReel.points.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    className="text-black font-bold"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleVideoClick}
                className="text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition w-fit shadow-lg"
                style={{ backgroundColor: "#945CAD" }}
              >
                {currentReel.ctaText}
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-4 sm:mt-6">
        {reelsData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-purple-500 w-8" : "bg-gray-300"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default SpeakingReel