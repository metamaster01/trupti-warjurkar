"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.8,
      ease: easeInOut,
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: easeInOut,
    },
  },
};

const ITEMS = [
  '1 on 1 Coaching',
  'Group Sessions',
  'Customized Coaching',
  'Goal Setting and Achieving Support',
  'Discipline and Consistency Management',
  'Scheduling Reminders',
  'Transformational Communication Coaching',
  'Confidence Building Programs',
  'Personality Development Workshops',
  'Public Speaking & Presentation Skills',
  'Conflict Resolution & Emotional Intelligence',
  'Personal Branding & Charisma Enhancement',
]

export function AboutSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const loop = [...ITEMS, ...ITEMS]


  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20 pb-32 overflow-hidden bg-gradient-to-br from-white via-pink-50/20 to-purple-50/30">
      {/* Background subtle overlay */}
      <div className="absolute inset-0 bg-white/95" />

      <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto relative z-10">
        {/* LEFT CONTENT */}
        <div className="space-y-5 pt-8">
          {/* About Me Title */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
          >
            <h2 className="text-[#945CAD] text-3xl md:text-4xl font-bold mb-2">
              About Me
            </h2>
            <div className="w-40 h-1 bg-[#945CAD] rounded-full"></div>
          </motion.div>

          {/* I'm text with Arizonia font */}
          <motion.h3
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="text-[#945CAD] text-6xl md:text-[79.95px] leading-[100%] italic"
            style={{ fontFamily: "'Arizonia', cursive" }}
          >
            I'm
          </motion.h3>

          {/* Name */}
          <motion.h1
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="text-5xl md:text-6xl lg:text-[70px] font-extrabold text-gray-900 leading-[110%]"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Trupti
            <br />
            Warjurkar
          </motion.h1>

          {/* Description Paragraphs */}
          <motion.p
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="text-base md:text-lg text-gray-700 leading-relaxed pt-2"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            I'm Trupti, a communication coach & speaker helping professionals
            find their voice, lead with impact, and win every room.
          </motion.p>

          <motion.p
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="text-base md:text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            I help you transform how you speak, so every word leaves an impact.
            Because confident communication changes everything.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-5 pt-6"
          >
            {/* My Story Button */}
            <motion.button
              onHoverStart={() => setHoveredButton("story")}
              onHoverEnd={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-3.5 rounded-xl font-semibold text-base overflow-hidden group transition-all duration-300 flex items-center justify-center gap-2.5 border-2 border-[#945CAD]"
              style={{
                backgroundColor:
                  hoveredButton === "story" ? "#945CAD" : "transparent",
                color: hoveredButton === "story" ? "white" : "#945CAD",
              }}
            >
              <span className="relative z-10"><a href="#speakingreel">My Story</a> </span>
              <motion.div
                animate={{
                  rotate: hoveredButton === "story" ? [0, -10, 10, 0] : 0,
                  scale: hoveredButton === "story" ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-5 h-5"
              >
                <Image
                  src="/emoji1.png"
                  alt="emoji"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.button>

            {/* More About Us Button */}
            <motion.button
              onHoverStart={() => setHoveredButton("about")}
              onHoverEnd={() => setHoveredButton(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-7 py-3.5 rounded-xl font-semibold text-base overflow-hidden group transition-all duration-300 flex items-center justify-center gap-2.5 border-2 border-[#945CAD]"
              style={{
                backgroundColor:
                  hoveredButton === "about" ? "#945CAD" : "transparent",
                color: hoveredButton === "about" ? "white" : "#945CAD",
              }}
            >
              <span className="relative z-10"><a href="/about">More about us</a></span>
              <motion.div
                animate={{
                  rotate: hoveredButton === "about" ? [0, 15, -15, 0] : 0,
                  scale: hoveredButton === "about" ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-5 h-5"
              >
                <Image
                  src="/emoji2.png"
                  alt="emoji"
                  width={20}
                  height={20}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariants}
          className="relative flex justify-center lg:justify-end pt-0"
        >
          {/* Pink Glow Ball Background - Behind image */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, rgba(192, 132, 252, 0.4) 40%, transparent 70%)",
              zIndex: 1,
            }}
          />

          {/* Secondary Pink Glow */}
          <motion.div
            animate={{
              scale: [1.15, 1, 1.15],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(219, 39, 119, 0.5) 0%, rgba(168, 85, 247, 0.3) 40%, transparent 70%)",
              zIndex: 0,
            }}
          />

          {/* Image Container */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative max-w-[520px] w-full"
            style={{ zIndex: 2 }}
          >
            <Image
              src="/about-sec-2.png"
              alt="Trupti Warjurkar"
              width={520}
              height={720}
              priority
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* FOLLOW ME STRIP - Positioned higher and tilted with proper visibility */}
      <div
      className="absolute left-0 w-[calc(100%+100px)] overflow-visible pointer-events-none"
      style={{ bottom: '100px', zIndex: 30, marginLeft: '-50px' }}
    >
      <div
        className="bg-[#945CAD] py-6 transform origin-left shadow-lg"
        style={{ width: '100%', transform: 'rotate(-2deg) translateY(0)' }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="flex gap-8 whitespace-nowrap"
          // pointer-events-none up top keeps ribbon non-interactive; keep items accessible
        >
          {loop.map((text, i) => (
            <React.Fragment key={`${text}-${i}`}>
              {i > 0 && (
                <span className="text-white text-2xl md:text-3xl lg:text-4xl">✦</span>
              )}
              <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
                {text}
              </span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
    </section>
  );
}