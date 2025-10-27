// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Play, Pause } from "lucide-react";

// type Testimonial = {
//   id: number;
//   img: string;
//   name: string;
//   role: string;
//   text: string;
// };

// export default function Testimonials(): JSX.Element {
//   const videoRef = useRef<HTMLVideoElement | null>(null);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);
//   const [randomImage, setRandomImage] = useState<string>("");
//   const [page, setPage] = useState<number>(0);
//   const autoRef = useRef<number | null>(null);
//   const [expandedId, setExpandedId] = useState<number | null>(null); // Track expanded card

//   const images = ["/test1.png", "/test2.png", "/test3.png", "/placeholder.jpg"];

//   useEffect(() => {
//     const random = images[Math.floor(Math.random() * images.length)];
//     setRandomImage(random);
//   }, []);

//   const togglePlay = (): void => {
//     if (!videoRef.current) return;
//     if (isPlaying) {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     } else {
//       videoRef.current.play();
//       setIsPlaying(true);
//     }
//   };

//   const testimonialsData: Testimonial[] = [
//     {
//       id: 1,
//       img: "/test1.png",
//       name: "Shubham Shirbhate",
//       role: "Senior Software Engineer",
//       text:
//         "Trupti ma’am’s coaching boosted my confidence ✨ and helped me crack my interview successfully 🎯. I am now able to deliver my knowledge with clarity and give answers to the point ✅. Truly grateful 🙏.",
//     },
//     {
//       id: 2,
//       img: "/test1.png",
//       name: "Aakash Ubale",
//       role: "Cloud Engineer",
//       text:
//         "I really enjoyed my English speaking classes with Trupti mam. Mam was very nice, friendly, and supportive throughout the sessions. She explained everything clearly, right from very basics and practiced with us regularly, and always encouraged us to speak with confidence. I learned a lot and truly appreciate her teaching style. If someone thinks speaking English is difficult, then few sessions with mam will definitely change your perspective. Strongly recommended...",
//     },
//     {
//       id: 3,
//       img: "/test1.png",
//       name: "Sweety Khapre",
//       role: "Student",
//       text:
//         "I sincerely want to thank you for the incredible impact you've had on my English communication skills. Your guidance, patience, and encouragement have made a real difference in how I express myself, both in writing and speaking. You’ve not only taught me the rules of language but also helped me build the confidence to use them effectively",
//     },
//     {
//       id: 4,
//       img: "/test1.png",
//       name: "Akshata Shinde",
//       role: "DevOps Engineer",
//       text:
//         "The way you made us comfortable with English through simple, practical activities really helped me improve my speaking and confidence. Thank you for such a supportive learning experience!",
//     },
//     {
//       id: 5,
//       img: "/test1.png",
//       name: "Hemant Suresh Mendhe",
//       role: "Problem Solver in Amazon",
//       text:
//         "Your guidance has been incredibly helpful, and I can already see a significant improvement in my skills. I feel much more confident in my ability to communicate effectively. You have a fantastic way of making difficult concepts seem simple and clear. Your lessons are always so engaging, and you've made learning English a truly enjoyable experience for me. I truly appreciate all your effort and support.",
//     },
//     {
//       id: 6,
//       img: "/test1.png",
//       name: "Naresh Adikane",
//       role: "Production Engineer",
//       text:
//         "That was a very good time, because I was not able to speak even a single sentence, but now I can speak well, I can understand communication, I can speak confidently, because of your teaching thank you.",
//     },
//   ];

//   const pages: Testimonial[][] = [testimonialsData.slice(0, 3), testimonialsData.slice(3, 6)];

//   const startAuto = (): void => {
//     stopAuto();
//     autoRef.current = window.setInterval(() => {
//       setPage((p) => (p === 0 ? 1 : 0));
//     }, 3500);
//   };

//   const stopAuto = (): void => {
//     if (autoRef.current !== null) {
//       clearInterval(autoRef.current);
//       autoRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAuto();
//     return () => stopAuto();
//   }, []);

//   const handleDotClick = (p: number): void => {
//     setPage(p);
//     startAuto();
//   };

//   function Card({ t, index }: { t: Testimonial; index: number }): JSX.Element {
//     const [tilt, setTilt] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 });

//     const handleMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
//       const el = e.currentTarget as HTMLDivElement;
//       const rect = el.getBoundingClientRect();
//       const x = (e.clientX - rect.left) / rect.width;
//       const y = (e.clientY - rect.top) / rect.height;
//       const ry = (x - 0.5) * 10;
//       const rx = (0.5 - y) * 6;
//       setTilt({ rx, ry });
//     };

//     const handleLeave = (): void => setTilt({ rx: 0, ry: 0 });

//     const isExpanded = expandedId === t.id;
//     const toggleExpand = () => setExpandedId((cur) => (cur === t.id ? null : t.id));

//     return (
//       <motion.div
//         initial={{ opacity: 0, scale: 0.96, y: 8 }}
//         animate={{ opacity: 1, scale: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: index * 0.04 }}
//       >
//         <div
//           onMouseMove={handleMove}
//           onMouseLeave={handleLeave}
//           onClick={toggleExpand}
//           className={`rounded-2xl text-white shadow-xl transition-transform p-3 sm:p-4 flex flex-col cursor-pointer ${
//             isExpanded ? "h-auto" : "h-[180px]"
//           }`}
//           style={{
//             background: "linear-gradient(135deg,#7e4aa8 0%,#945CAD 45%,#c99ce0 100%)",
//             transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
//             willChange: "transform",
//           }}
//         >
//           <div className="flex items-center space-x-3 mb-2">
//             <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
//               <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
//             </div>
//             <div className="truncate">
//               <h3 className="font-semibold text-sm sm:text-base truncate">{t.name}</h3>
//               <p className="text-xs sm:text-sm opacity-80 truncate">{t.role}</p>
//             </div>
//           </div>

//           <div className="text-xs sm:text-sm leading-snug flex-1 relative overflow-hidden">
//             <motion.div
//               initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
//               animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
//               transition={{ duration: 0.7, delay: 0.06 + index * 0.01 }}
//             >
//               <p
//                 className={`break-words text-[13px] leading-tight ${
//                   isExpanded ? "" : "line-clamp-6"
//                 }`}
//               >
//                 {t.text}
//               </p>
//             </motion.div>

//             {!isExpanded && (
//               <motion.div
//                 key={t.id + "-shimmer-" + page}
//                 initial={{ x: "-110%", opacity: 0 }}
//                 animate={{ x: "120%", opacity: 0.12 }}
//                 transition={{ duration: 1.0, ease: "linear" }}
//                 className="absolute -left-28 top-0 bottom-0 w-24 pointer-events-none bg-gradient-to-r from-transparent via-white/30 to-transparent mix-blend-overlay"
//               />
//             )}

//             {!isExpanded && (
//               <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white/20 to-transparent" />
//             )}
//           </div>
//         </div>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="w-full bg-white flex flex-col items-center justify-center">
//       <div className="relative w-full max-w-[1320px] aspect-video mx-auto mt-6 overflow-hidden shadow-lg group rounded-xl bg-black">
//         {!isPlaying && randomImage && (
//           <img
//             src="/Fallback.png"
//             alt="Fallback"
//             className="w-full h-full object-cover object-[50%_20%]"
//           />
//         )}

//         <div
//           className={`absolute inset-0 flex items-center justify-center ${
//             isPlaying ? "bg-black" : "hidden"
//           }`}
//         >
//           <video
//             ref={videoRef}
//             src="/miss-maharashtra.mp4"
//             muted
//             loop
//             playsInline
//             className="h-full max-h-full w-auto object-contain"
//           />
//         </div>

//         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

//         <div className="absolute inset-0 flex items-center justify-end px-4 md:px-10 py-4">
//           <div className="text-right max-w-md sm:max-w-lg">
//             <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold mb-2">
//               Runner-Up – Miss Maharashtra
//             </h2>
//             <p className="text-white text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
//               Trupti was honored as Runner-Up at Miss Maharashtra, a prestigious state-level
//               platform celebrating beauty, confidence, and grace. This achievement highlights
//               her elegance, determination, and inspiring presence on and off the stage.
//             </p>
//             <button className="border border-white text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 rounded-lg hover:bg-white hover:text-black transition">
//               Explore Achievements
//             </button>
//           </div>
//         </div>

//         <button
//           onClick={togglePlay}
//           className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 shadow-md transition"
//         >
//           {isPlaying ? (
//             <Pause className="text-black w-4 h-4 sm:w-5 sm:h-5" />
//           ) : (
//             <Play className="text-black w-4 h-4 sm:w-5 sm:h-5" />
//           )}
//         </button>
//       </div>

//       <div className="w-full max-w-6xl mx-auto mt-10 px-4 sm:px-6">
//         <h2 className="text-2xl sm:text-3xl font-bold text-purple-700 text-center mb-8 sm:mb-10">
//           Testimonials
//         </h2>

//         <div className="relative w-full overflow-hidden" style={{ perspective: 1200 }}>
//           <motion.div
//             className="flex w-[200%]"
//             animate={{ x: `-${page * 50}%` }}
//             transition={{ type: "spring", stiffness: 88, damping: 20 }}
//             role="list"
//             aria-live="polite"
//           >
//             {pages.map((group, gpIndex) => (
//               <div key={gpIndex} className="w-1/2 p-2">
//                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                   {group.map((t, index) => (
//                     <Card key={t.id} t={t} index={index + gpIndex * 3} />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         <div className="flex items-center justify-center mt-6 space-x-3">
//           <div className="flex space-x-2">
//             <button
//               onClick={() => handleDotClick(0)}
//               aria-label="page-1"
//               className={`w-3.5 h-3.5 rounded-full transition-transform transform ${
//                 page === 0 ? "scale-110 bg-purple-700" : "bg-gray-300"
//               }`}
//             />
//             <button
//               onClick={() => handleDotClick(1)}
//               aria-label="page-2"
//               className={`w-3.5 h-3.5 rounded-full transition-transform transform ${
//                 page === 1 ? "scale-110 bg-purple-700" : "bg-gray-300"
//               }`}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Shubham Shirbhate",
    role: "Senior Software Engineer",
    text: "Trupti ma'am's coaching boosted my confidence ✨ and helped me crack my interview successfully 🎯. I am now able to deliver my knowledge with clarity and give answers to the point ✅. Truly grateful 🙏.",
  },
  {
    id: 2,
    name: "Aakash Ubale",
    role: "Cloud Engineer",
    text: "I really enjoyed my English speaking classes with Trupti mam. Mam was very nice, friendly, and supportive throughout the sessions. She explained everything clearly, right from very basics and practiced with us regularly, and always encouraged us to speak with confidence.",
  },
  {
    id: 3,
    name: "Sweety Khapre",
    role: "Student",
    text: "I sincerely want to thank you for the incredible impact you've had on my English communication skills. Your guidance, patience, and encouragement have made a real difference in how I express myself, both in writing and speaking.",
  },
  {
    id: 4,
    name: "Akshata Shinde",
    role: "DevOps Engineer",
    text: "The way you made us comfortable with English through simple, practical activities really helped me improve my speaking and confidence. Thank you for such a supportive learning experience!",
  },
  {
    id: 5,
    name: "Hemant Suresh Mendhe",
    role: "Problem Solver in Amazon",
    text: "Your guidance has been incredibly helpful, and I can already see a significant improvement in my skills. I feel much more confident in my ability to communicate effectively.",
  },
  {
    id: 6,
    name: "Naresh Adikane",
    role: "Production Engineer",
    text: "That was a very good time, because I was not able to speak even a single sentence, but now I can speak well, I can understand communication, I can speak confidently, because of your teaching thank you.",
  },
];

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isHovering) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovering]);

  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  const getCurrentTestimonials = () => {
    const start = currentPage * itemsPerPage;
    return testimonialsData.slice(start, start + itemsPerPage);
  };

  const currentTestimonials = getCurrentTestimonials();

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-white  to-pink-50/95 overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{
              color: "#945CAD",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Testimonials
          </h2>
          <div className="h-1 w-40 bg-[#945CAD] rounded-full mx-auto"></div>
        </motion.div>

        {/* Testimonials Grid */}
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`grid gap-6 ${
                isMobile ? "grid-cols-1" : "grid-cols-3"
              }`}
            >
              {currentTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentPage
                  ? "bg-[#945CAD] w-10"
                  : "bg-gray-300 w-3 hover:bg-gray-400"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonialsData)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative h-full"
    >
      <div
        className="rounded-2xl p-6 h-full flex flex-col gap-6 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #8b5cf6 0%, #945CAD 50%, #c084fc 100%)",
        }}
      >
        {/* Shimmer Effect */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "linear",
          }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />

        {/* Header */}
        <div className="relative z-10">
          <span
            className="text-white/70 text-xs uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Success Story
          </span>
          <div className="mt-3 mb-4 h-px w-12 bg-white/30 rounded-full" />
          <h3
            className="text-white font-semibold text-xl leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {testimonial.name}
          </h3>
          <p
            className="text-white/80 text-sm mt-1"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {testimonial.role}
          </p>
        </div>

        {/* Testimonial Text */}
        <div className="flex-1 relative z-10">
          <p
            className="text-white text-sm md:text-base leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {testimonial.text}
          </p>
        </div>

        {/* Decorative Quote */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
