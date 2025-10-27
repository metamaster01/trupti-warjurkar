// "use client";

// import { easeInOut, motion } from "framer-motion";
// import Image from "next/image";

// const textVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.3 + i * 0.1,
//       duration: 0.6,
//       ease : easeInOut,
//     },
//   }),
// };

// const buttonVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.7 + i * 0.1,
//       duration: 0.5,
//     },
//   }),
// };

// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center px-6 lg:px-12 py-24">
//       <div className="relative z-10 w-full max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-[58%_42%] gap-12 lg:gap-16 items-center">
//           {/* LEFT SECTION - Text Content */}
//           <div className="text-white space-y-6 flex flex-col justify-center min-h-[500px]">
//             <motion.h1
//               custom={0}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[100%] tracking-tight"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Become the communicator you're born to be.
//             </motion.h1>

//             <motion.p
//               custom={1}
//               initial="hidden"
//               animate="visible"
//               variants={textVariants}
//               className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Join a community of bold storytellers ready to make every word
//               count
//             </motion.p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-2">
//               <motion.button
//                 custom={0}
//                 initial="hidden"
//                 animate="visible"
//                 variants={buttonVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3.5 bg-[#C68FE6] hover:bg-[#B77DD9] text-white font-semibold rounded-lg text-lg shadow-xl transition-all duration-300"
//               >
//                 Explore Course
//               </motion.button>

//               <motion.button
//                 custom={1}
//                 initial="hidden"
//                 animate="visible"
//                 variants={buttonVariants}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="relative px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg text-lg overflow-hidden group transition-all duration-300"
//               >
//                 <span className="relative z-10 group-hover:text-purple-100 transition-colors">
//                   Join talk Tuesday
//                 </span>
//                 <motion.div
//                   className="absolute inset-0 bg-white"
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 0.1 }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             </div>
//           </div>

//           {/* RIGHT SECTION - Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, x: 50, scale: 0.95 }}
//             animate={{ opacity: 1, x: 0, scale: 1 }}
//             transition={{
//               duration: 0.8,
//               delay: 0.4,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="relative flex justify-center lg:justify-end h-full"
//           >
//             <motion.div
//               animate={{
//                 y: [0, -15, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="relative w-full max-w-[540px] lg:max-w-[780px]"
//             >
//               {/* Image Container - Full height, no shadow */}
//               <div className="relative rounded-2xl overflow-hidden h-full">
//                 <Image
//                   src="/hero-img-2.png"
//                   alt="Professional Communicator"
//                   width={600}
//                   height={720}
//                   priority
//                   className="w-full h-auto object-cover"
//                 />
//                 {/* Gradient Overlay */}
//                 {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" /> */}
//               </div>

//               {/* Decorative Glow Effect */}
//               <motion.div
//                 animate={{
//                   scale: [1, 1.05, 1],
//                   opacity: [0.5, 0.7, 0.5],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { easeInOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.6,
      ease: easeInOut,
    },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7 + i * 0.1,
      duration: 0.5,
    },
  }),
};

/**
 * TypingWord - types + deletes a list of words in loop.
 * Speeds are set slightly slower as requested earlier.
 */
function TypingWord({
  words,
  typingSpeed = 140,
  deletingSpeed = 70,
  holdDelay = 2000,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdDelay?: number;
}) {
  const [display, setDisplay] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!mounted.current) return;

    const currentWord = words[wordIndex];
    let timeout: number;

    if (!isDeleting) {
      const next = currentWord.slice(0, display.length + 1);
      timeout = window.setTimeout(() => {
        if (!mounted.current) return;
        setDisplay(next);
        if (next === currentWord) {
          window.setTimeout(() => {
            if (!mounted.current) return;
            setIsDeleting(true);
          }, holdDelay);
        }
      }, typingSpeed);
    } else {
      const next = currentWord.slice(0, display.length - 1);
      timeout = window.setTimeout(() => {
        if (!mounted.current) return;
        setDisplay(next);
        if (next === "") {
          setIsDeleting(false);
          setWordIndex((p) => (p + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, holdDelay]);

  return (
    <span aria-live="polite" className="inline-flex items-center">
      <span>{display}</span>
      <motion.span
        aria-hidden
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="ml-1"
        style={{ fontWeight: 700 }}
      >
        |
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const words = [
    "speaker",
    "communicator",
    "storyteller",
    "confident self",
    "leader",
  ];

  return (
    <section className="relative min-h-screen flex items-center px-6 lg:px-12 py-24">
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 lg:gap-16 items-center">
          {/* LEFT SECTION - Text Content */}
          <div className="text-white space-y-6 flex flex-col justify-center min-h-[500px]">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-5xl sm:text-6xl lg:text-[64px] font-bold leading-[100%] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {/* First line fixed */}
              <span className="block">Become the</span>

              {/* Second line: dynamic word only */}
              <span className="block">
                <span className="inline-block align-middle">
                  <TypingWord typingSpeed={140} deletingSpeed={70} holdDelay={2000} words={words} />
                </span>
              </span>

              {/* Third line: rest of sentence */}
              <span className="block">you're born to be.</span>
            </motion.h1>

            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg sm:text-xl text-white/90 max-w-xl leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Join a community of bold storytellers ready to make every word
              count
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <motion.button
                custom={0}
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 bg-[#C68FE6] hover:bg-[#B77DD9] text-white font-semibold rounded-lg text-lg shadow-xl transition-all duration-300"
                
              >
                <a href="#courses">
                Explore Course

                </a>
              </motion.button>

              <motion.button
                custom={1}
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-3.5 border-2 border-white text-white font-semibold rounded-lg text-lg overflow-hidden group transition-all duration-300"
              >
                <span className="relative z-10 group-hover:text-purple-100 transition-colors">
                  <a href="/contact">

                  Join talk Today
                  </a>
                </span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </div>
          </div>

          {/* RIGHT SECTION - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center lg:justify-end h-full"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-[540px] lg:max-w-[800px]"
            >
              {/* Image Container - Full height, no shadow */}
              <div className="relative rounded-2xl overflow-hidden h-full">
                <Image
                  src="/hero-image-2.png"
                  alt="Professional Communicator"
                  width={680}
                  height={760}
                  priority
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

