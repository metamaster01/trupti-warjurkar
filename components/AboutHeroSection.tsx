"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BubbleBackground } from "@/components/ui/BubbleBackground"

// Follow Me Ticker Component
function FollowMeTicker() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#7c5ba6] via-[#8b6bb5] to-[#7c5ba6] py-5 md:py-6">
      {/* Seamless infinite scroll */}
      <div className="flex animate-scroll">
        {/* First set */}
        <div className="flex items-center shrink-0">
          {[...Array(15)].map((_, i) => (
            <div key={`first-${i}`} className="flex items-center">
              <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide px-8 whitespace-nowrap">
                Follow @Trupti_Warjurkar
              </span>
              <svg 
                className="w-7 h-7 md:w-8 md:h-8 text-white shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          ))}
        </div>
        
        {/* Duplicate for seamless loop */}
        <div className="flex items-center shrink-0">
          {[...Array(15)].map((_, i) => (
            <div key={`second-${i}`} className="flex items-center">
              <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide px-8 whitespace-nowrap">
                Follow me
              </span>
              <svg 
                className="w-7 h-7 md:w-8 md:h-8 text-white shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default function AboutHeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="h-[80vh] mt-10 sm:h-[70vh] sm:mt-10 md:mt-0 lg:mt-0 md:h-[100vh] lg:h-[110vh] relative flex flex-col">
      {/* Bubble Background with Content */}
      <BubbleBackground 
        interactive={true}
        className="relative"
        transition={{ stiffness: 100, damping: 20 }}
      >
        {/* Main Content Container - REDUCED BOTTOM PADDING */}
        <div className="relative z-10 min-h-[calc(100vh-80px)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-12 lg:pb-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left Side - Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6 md:space-y-8 text-white z-10"
              >
                {/* About me heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
                >
                  About me
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-xl"
                >
                  Helping You Speak with Confidence, Influence & Impact
                </motion.p>

                {/* Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white text-purple-700 px-7 py-3.5 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    More on keynotes
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Right Side - Image with Large Prop - INCREASED HEIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[880px]"
              >
                {/* Large Decorative Prop Behind - ADJUSTED POSITION */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    scale: isVisible ? 1 : 0.9,
                  }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0 z-0"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  {/* Prop positioned - slightly more to the right and higher up */}
                  <div 
                    className="absolute"
                    style={{
                      left: '40%',
                      top: '5%',
                      width: '150%',
                      height: '150%',
                      maxWidth: '941px',
                      maxHeight: '941px',
                    }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src="/prop3.png"
                        alt="Decorative prop"
                        fill
                        className="object-contain opacity-90"
                        priority
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Main Hero Image - Positioned in front */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ 
                    opacity: isVisible ? 1 : 0, 
                    scale: isVisible ? 1 : 0.95 
                  }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full w-full z-10"
                >
                  <Image
                    src="/hero-about-2.png"
                    alt="About me"
                    fill
                    className="object-contain object-bottom drop-shadow-2xl"
                    priority
                  />
                  
                  {/* Floating accent elements */}
                  <motion.div
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute top-8 right-8 lg:top-12 lg:right-12 w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-full backdrop-blur-sm"
                  />
                  
                  <motion.div
                    animate={{ 
                      y: [0, 20, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    className="absolute bottom-16 right-4 lg:bottom-24 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 bg-white/15 rounded-full backdrop-blur-sm"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </BubbleBackground>

      {/* Follow Me Ticker - Separate Section Below */}
      <FollowMeTicker />
    </section>
  )
}