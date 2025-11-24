// // import Image from "next/image";

// // export default function KeynotesWorkshops() {
// //   const talks = [
// //     {
// //       type: "Keynotes",
// //       title: "Speak to Lead",
// //       description:
// //         "Equip yourself with the communication tools and presence to inspire teams, influence decisions, and lead with authority — every time you speak.",
// //       img: "/note1.png",
// //     },
// //     {
// //       type: "Workshops",
// //       title: "Confidence on Cue Lab",
// //       description:
// //         "Transform theory into practice with immersive, interactive sessions designed to sharpen your skills and boost your confidence in real time.",
// //       img: "/note2.png",
// //     },
// //     {
// //       type: "Keynotes",
// //       title: "Lead with Impact",
// //       description:
// //         "Develop the presence and persuasive ability to inspire others and make change happen.",
// //       img: "/note3.png",
// //     },
// //   ];

// //   return (
// //     <section className="py-12 bg-white">
// //       {/* ✅ Heading + underline */}
// //       <div className="px-6 md:px-16 inline-block">
// //         <h2
// //           className="text-3xl md:text-4xl font-bold mb-2"
// //           style={{ color: "#945CAD" }}
// //         >
// //           Key notes & workshops
// //         </h2>
// //         <div className="h-0.5 w-full bg-purple-400 mb-8"></div>
// //       </div>

// //       {/* ✅ Cards Grid */}
// //       <div className="px-6 md:px-16 grid gap-6 md:grid-cols-3">
// //         {talks.map((talk, i) => (
// //           <div
// //             key={i}
// //             className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col"
// //           >
// //             <span className="text-sm text-[#945CAD] font-medium mb-2">
// //               {talk.type}
// //             </span>
// //             <h3 className="text-xl font-semibold mb-2">{talk.title}</h3>
// //             <p className="text-gray-700 mb-4">{talk.description}</p>

// //             <div className="relative w-full aspect-[4/3]">
// //               <Image
// //                 src={talk.img}
// //                 alt={talk.title}
// //                 fill
// //                 sizes="(max-width: 768px) 100vw, 33vw"
// //                 className="object-cover rounded-xl"
// //               />
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* ✅ Button Outside Cards with Same Padding */}
// //       <div className="px-6 md:px-16 mt-8">
// //         <button className="border border-[#945CAD] text-[#945CAD] px-8 py-3 rounded-lg font-semibold hover:bg-[#f8f3fb] transition">
// //           Book this talk
// //         </button>
// //       </div>
// //     </section>
// //   );
// // }



// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import Image from "next/image"
// import { ArrowRight } from "lucide-react"
// import { CardContainer, CardBody, CardItem } from "./ui/3d-card-container"

// const coursesData = [
//   {
//     id: 1,
//     type: "Courses",
//     title: "Mastering Communication: From Basics to Brilliance",
//     description: "Comprehensive spoken and non-verbal communication skills for personal and professional success.",
//     img: "/note1.png",
//   },
//   {
//     id: 2,
//     type: "Courses",
//     title: "The Art & Science of Personality Development",
//     description: "Self-discovery, confidence building, grooming, and professional image.",
//     img: "/note2.png",
//   },
//   {
//     id: 3,
//     type: "Courses",
//     title: "Psychology of Influence: Unlocking Human Behavior",
//     description: "Understand the psychological principles and emotional intelligence powering effective communication.",
//     img: "/note3.png",
//   },
//   {
//     id: 4,
//     type: "Courses",
//     title: "Leadership Communication & Executive Presence",
//     description: "Advanced techniques for public speaking, persuasion, and developing a commanding personality.",
//     img: "/note1.png",
//   },
//   {
//     id: 5,
//     type: "Courses",
//     title: "Emotional Intelligence & Resilience Masterclass",
//     description: "Boost self-awareness, empathy, and coping strategies—transforming mindsets for sustainable growth.",
//     img: "/note2.png",
//   },
//   {
//     id: 6,
//     type: "Courses",
//     title: "The Confident You: Building Self-Belief and Charisma",
//     description: "Techniques to boost self-esteem, body language, and influence.",
//     img: "/note3.png",
//   },
//   {
//     id: 7,
//     type: "Courses",
//     title: "Business Communication Excellence",
//     description: "Professional writing, email etiquette, meeting communication, and stakeholder management.",
//     img: "/note1.png",
//   },
//   {
//     id: 8,
//     type: "Courses",
//     title: "Persuasion & Influence: The Psychology of Communication",
//     description: "Techniques for ethically persuading and influencing others in professional and personal life.",
//     img: "/note2.png",
//   },
// ]

// export default function CoursesCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isHovering, setIsHovering] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const [isDragging, setIsDragging] = useState(false)
//   const [dragStart, setDragStart] = useState(0)
//   const carouselRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768)
//     }
//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   useEffect(() => {
//     if (isHovering || isDragging) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % coursesData.length)
//     }, 5000)

//     return () => clearInterval(interval)
//   }, [isHovering, isDragging])

//   const handleMouseDown = (e: React.MouseEvent) => {
//     setIsDragging(true)
//     setDragStart(e.clientX)
//   }

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!isDragging) return
//     const diff = dragStart - e.clientX
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         setCurrentIndex((prev) => (prev + 1) % coursesData.length)
//       } else {
//         setCurrentIndex((prev) => (prev - 1 + coursesData.length) % coursesData.length)
//       }
//       setIsDragging(false)
//     }
//   }

//   const handleMouseUp = () => {
//     setIsDragging(false)
//   }

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setIsDragging(true)
//     setDragStart(e.touches[0].clientX)
//   }

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!isDragging) return
//     const diff = dragStart - e.touches[0].clientX
//     if (Math.abs(diff) > 50) {
//       if (diff > 0) {
//         setCurrentIndex((prev) => (prev + 1) % coursesData.length)
//       } else {
//         setCurrentIndex((prev) => (prev - 1 + coursesData.length) % coursesData.length)
//       }
//       setIsDragging(false)
//     }
//   }

//   const itemsPerPage = isMobile ? 2 : 3
//   const visibleCourses = []

//   for (let i = 0; i < itemsPerPage + 1; i++) {
//     visibleCourses.push(coursesData[(currentIndex + i) % coursesData.length])
//   }

//   return (
//     <section className="py-12 bg-white">
//       <div className="px-6 md:px-16 inline-block">
//         <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#945CAD" }}>
//           Courses and workshops
//         </h2>
//         <div className="h-0.5 w-full bg-purple-400 mb-8"></div>
//       </div>

//       <div
//         ref={carouselRef}
//         className="px-6 md:px-16 overflow-hidden"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => { setIsHovering(false); handleMouseUp(); }}
//         onMouseDown={handleMouseDown}
//         onMouseMove={handleMouseMove}
//         onMouseUp={handleMouseUp}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={() => setIsDragging(false)}
//       >
//         <div className="grid gap-6 md:grid-cols-3 grid-cols-2 transition-transform duration-700 ease-out">
//           {visibleCourses.slice(0, itemsPerPage + 1).map((course, i) => (
//             <CardContainer key={`${course.id}-${currentIndex}`} className="w-full" containerClassName="py-0">
//               <CardBody className="h-full">
//                 <div
//                   className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col transition-all duration-500 ease-out transform hover:shadow-lg group h-full"
//                   style={{
//                     animation: `slideIn 0.6s ease-out ${i * 0.1}s both`,
//                   }}
//                 >
//                   <span className="text-sm text-[#945CAD] font-medium mb-2">{course.type}</span>
//                   <h3 className="text-xl font-semibold mb-2 line-clamp-2">{course.title}</h3>
//                   <p className="text-gray-700 mb-4 text-sm line-clamp-2">{course.description}</p>

//                   <CardItem
//                     as="div"
//                     translateZ={20}
//                     className="relative w-full aspect-[4/3] mb-4 rounded-xl overflow-hidden"
//                   >
//                     <Image
//                       src={course.img || "/placeholder.svg"}
//                       alt={course.title}
//                       fill
//                       sizes="(max-width: 768px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-300 group-hover:scale-110"
//                     />
//                   </CardItem>

//                   <div className="relative h-12 -mx-6 -mb-6 mt-auto">
//                     <button className="absolute bottom-0 right-0 bg-[#945CAD] hover:bg-[#a66bb8] text-white px-6 py-3 rounded-tl-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:translate-x-1 hover:translate-y-1 shadow-lg">
//                       Enroll Now
//                       <ArrowRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </CardBody>
//             </CardContainer>
//           ))}
//         </div>
//       </div>

//       <div className="px-6 md:px-16 mt-12 flex justify-center gap-2">
//         {coursesData.map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => setCurrentIndex(idx)}
//             className={`h-2 rounded-full transition-all duration-300 ${
//               idx === currentIndex ? "bg-[#945CAD] w-8" : "bg-gray-300 w-2 hover:bg-gray-400"
//             }`}
//             aria-label={`Go to course ${idx + 1}`}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </section>
//   )
// }


// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const coursesData = [
//   {
//     id: 1,
//     type: "Courses",
//     title: "Mastering Communication: From Basics to Brilliance",
//     description:
//       "Comprehensive spoken and non-verbal communication skills for personal and professional success.",
//     img: "/note1.png",
//   },
//   {
//     id: 2,
//     type: "Courses",
//     title: "The Art & Science of Personality Development",
//     description:
//       "Self-discovery, confidence building, grooming, and professional image.",
//     img: "/note2.png",
//   },
//   {
//     id: 3,
//     type: "Courses",
//     title: "Psychology of Influence: Unlocking Human Behavior",
//     description:
//       "Understand the psychological principles and emotional intelligence powering effective communication.",
//     img: "/note3.png",
//   },
//   {
//     id: 4,
//     type: "Courses",
//     title: "Leadership Communication & Executive Presence",
//     description:
//       "Advanced techniques for public speaking, persuasion, and developing a commanding personality.",
//     img: "/note1.png",
//   },
//   {
//     id: 5,
//     type: "Courses",
//     title: "Emotional Intelligence & Resilience Masterclass",
//     description:
//       "Boost self-awareness, empathy, and coping strategies—transforming mindsets for sustainable growth.",
//     img: "/note2.png",
//   },
//   {
//     id: 6,
//     type: "Courses",
//     title: "The Confident You: Building Self-Belief and Charisma",
//     description:
//       "Techniques to boost self-esteem, body language, and influence.",
//     img: "/note3.png",
//   },
//   {
//     id: 7,
//     type: "Courses",
//     title: "Business Communication Excellence",
//     description:
//       "Professional writing, email etiquette, meeting communication, and stakeholder management.",
//     img: "/note1.png",
//   },
//   {
//     id: 8,
//     type: "Courses",
//     title: "Persuasion & Influence: The Psychology of Communication",
//     description:
//       "Techniques for ethically persuading and influencing others in professional and personal life.",
//     img: "/note2.png",
//   },
// ];

// export function CoursesSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

//   // Detect mobile screen
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-play functionality (Desktop only)
//   useEffect(() => {
//     if (isMobile) return; // No auto-play on mobile

//     if (!isHovering) {
//       autoPlayRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % coursesData.length);
//       }, 3500);
//     }

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [isHovering, isMobile]);

//   // Get visible courses for desktop (3 cards)
//   const getVisibleCourses = () => {
//     if (isMobile) {
//       return coursesData; // Show all cards on mobile
//     }

//     const visibleCourses = [];
//     for (let i = 0; i < 3; i++) {
//       visibleCourses.push(coursesData[(currentIndex + i) % coursesData.length]);
//     }
//     return visibleCourses;
//   };

//   const visibleCourses = getVisibleCourses();

//   return (
//     <section className="py-16 lg:py-20 bg-white overflow-hidden">
//       {/* Header */}
//       <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
//             style={{
//               color: "#945CAD",
//               fontFamily: "'Space Grotesk', sans-serif",
//             }}
//           >
//             Courses and workshops
//           </h2>
//           <div className="h-1 w-48 bg-[#945CAD] rounded-full"></div>
//         </motion.div>
//       </div>

//       {/* Desktop View - Auto Swipe Carousel */}
//       {!isMobile && (
//         <div className="px-6 lg:px-12 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             <AnimatePresence mode="popLayout">
//               {visibleCourses.map((course, index) => (
//                 <motion.div
//                   key={`${course.id}-${currentIndex}-${index}`}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.1,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => setIsHovering(false)}
//                   className="group"
//                 >
//                   <CourseCard course={course} />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center gap-2.5 mt-10">
//             {coursesData.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   idx === currentIndex
//                     ? "bg-[#945CAD] w-10"
//                     : "bg-gray-300 w-2.5 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Mobile View - 2 Column Grid (All Cards) */}
//       {isMobile && (
//         <div className="px-6 max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 gap-4">
//             {coursesData.map((course) => (
//               <motion.div
//                 key={course.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <CourseCard course={course} isMobile={true} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// // Course Card Component
// function CourseCard({
//   course,
//   isMobile = false,
// }: {
//   course: (typeof coursesData)[0];
//   isMobile?: boolean;
// }) {
//   return (
//     <div
//       className={`bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100 ${
//         isMobile ? "" : "group"
//       }`}
//     >
//       {/* Card Content */}
//       <div className={`${isMobile ? "p-3" : "p-6"} flex flex-col flex-1`}>
//         {/* Type Badge */}
//         <span
//           className={`inline-block text-[#945CAD] font-semibold mb-2 ${
//             isMobile ? "text-xs" : "text-sm"
//           }`}
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           {course.type}
//         </span>

//         {/* Title */}
//         <h3
//           className={`font-bold text-gray-900 mb-2 line-clamp-2 ${
//             isMobile ? "text-sm leading-tight" : "text-xl"
//           }`}
//           style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//         >
//           {course.title}
//         </h3>

//         {/* Description */}
//         <p
//           className={`text-gray-600 mb-4 line-clamp-2 ${
//             isMobile ? "text-xs" : "text-sm"
//           }`}
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           {course.description}
//         </p>

//         {/* Image */}
//         <div
//           className={`relative w-full rounded-xl overflow-hidden mb-4 ${
//             isMobile ? "aspect-[4/3]" : "aspect-[16/10]"
//           }`}
//         >
//           <Image
//             src={course.img}
//             alt={course.title}
//             fill
//             sizes={isMobile ? "50vw" : "33vw"}
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>
//       </div>

//       {/* Enroll Button */}
//       <div className="relative h-12 mt-auto">
//         <motion.button
//           whileHover={{ scale: isMobile ? 1 : 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className={`absolute bottom-0 right-0 bg-[#945CAD] hover:bg-[#7d4a94] text-white rounded-tl-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg ${
//             isMobile ? "px-3 py-2 text-xs" : "px-6 py-3 text-base"
//           }`}
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           <span>Enroll Now</span>
//           <ArrowRight className={isMobile ? "w-3 h-3" : "w-4 h-4"} />
//         </motion.button>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card-container";

// const coursesData = [
//   {
//     id: 1,
//     type: "Courses",
//     title: "Mastering Communication: From Basics to Brilliance",
//     description:
//       "Comprehensive spoken and non-verbal communication skills for personal and professional success.",
//     img: "/note1.png",
//   },
//   {
//     id: 2,
//     type: "Courses",
//     title: "The Art & Science of Personality Development",
//     description:
//       "Self-discovery, confidence building, grooming, and professional image.",
//     img: "/note2.png",
//   },
//   {
//     id: 3,
//     type: "Courses",
//     title: "Psychology of Influence: Unlocking Human Behavior",
//     description:
//       "Understand the psychological principles and emotional intelligence powering effective communication.",
//     img: "/note3.png",
//   },
//   {
//     id: 4,
//     type: "Courses",
//     title: "Leadership Communication & Executive Presence",
//     description:
//       "Advanced techniques for public speaking, persuasion, and developing a commanding personality.",
//     img: "/note1.png",
//   },
//   {
//     id: 5,
//     type: "Courses",
//     title: "Emotional Intelligence & Resilience Masterclass",
//     description:
//       "Boost self-awareness, empathy, and coping strategies—transforming mindsets for sustainable growth.",
//     img: "/note2.png",
//   },
//   {
//     id: 6,
//     type: "Courses",
//     title: "The Confident You: Building Self-Belief and Charisma",
//     description:
//       "Techniques to boost self-esteem, body language, and influence.",
//     img: "/note3.png",
//   },
//   {
//     id: 7,
//     type: "Courses",
//     title: "Business Communication Excellence",
//     description:
//       "Professional writing, email etiquette, meeting communication, and stakeholder management.",
//     img: "/note1.png",
//   },
//   {
//     id: 8,
//     type: "Courses",
//     title: "Persuasion & Influence: The Psychology of Communication",
//     description:
//       "Techniques for ethically persuading and influencing others in professional and personal life.",
//     img: "/note2.png",
//   },
// ];

// export function CoursesSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

//   // Detect mobile screen
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Auto-play functionality (Desktop only)
//   useEffect(() => {
//     if (isMobile) return;

//     if (!isHovering) {
//       autoPlayRef.current = setInterval(() => {
//         setCurrentIndex((prev) => (prev + 1) % coursesData.length);
//       }, 3500);
//     }

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [isHovering, isMobile]);

//   // Get visible courses for desktop (3 cards)
//   const getVisibleCourses = () => {
//     if (isMobile) {
//       return coursesData;
//     }

//     const visibleCourses = [];
//     for (let i = 0; i < 3; i++) {
//       visibleCourses.push(coursesData[(currentIndex + i) % coursesData.length]);
//     }
//     return visibleCourses;
//   };

//   const visibleCourses = getVisibleCourses();

//   return (
//     <section id="courses" className="py-16 lg:py-20 bg-white overflow-hidden">
//       {/* Header */}
//       <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
//             style={{
//               color: "#945CAD",
//               fontFamily: "'Space Grotesk', sans-serif",
//             }}
//           >
//             Courses & workshops
//           </h2>
//           <div className="h-1 w-48 bg-[#945CAD] rounded-full"></div>
//         </motion.div>
//       </div>

//       {/* Desktop View - Auto Swipe Carousel with 3D Cards */}
//       {!isMobile && (
//         <div className="px-6 lg:px-12 max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
//             <AnimatePresence mode="popLayout">
//               {visibleCourses.map((course, index) => (
//                 <motion.div
//                   key={`${course.id}-${currentIndex}-${index}`}
//                   initial={{ opacity: 0, x: 100 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -100 }}
//                   transition={{
//                     duration: 0.5,
//                     delay: index * 0.1,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   onMouseEnter={() => setIsHovering(true)}
//                   onMouseLeave={() => setIsHovering(false)}
//                   className="w-full"
//                 >
//                   <CourseCard3D course={course} />
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center gap-2.5 mt-10">
//             {coursesData.map((_, idx) => (
//               <button
//                 key={idx}
//                 onClick={() => setCurrentIndex(idx)}
//                 className={`h-2.5 rounded-full transition-all duration-300 ${
//                   idx === currentIndex
//                     ? "bg-[#945CAD] w-10"
//                     : "bg-gray-300 w-2.5 hover:bg-gray-400"
//                 }`}
//                 aria-label={`Go to slide ${idx + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Mobile View - 2 Column Grid */}
//       {isMobile && (
//         <div className="px-6 max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 gap-4">
//             {coursesData.map((course) => (
//               <motion.div
//                 key={course.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.2 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 <CourseCard course={course} isMobile={true} />
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// // 3D Course Card Component (Desktop)
// function CourseCard3D({ course }: { course: (typeof coursesData)[0] }) {
//   return (
//     <CardContainer containerClassName="py-0">
//       <CardBody className="relative group/card w-full h-auto">
//         <CardItem
//           translateZ="100"
//           className="w-full"
//         >
//           <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100">
//             {/* Card Content */}
//             <div className="p-6 flex flex-col flex-1">
//               {/* Type Badge */}
//               <CardItem
//                 translateZ="50"
//                 className="w-fit"
//               >
//                 <span
//                   className="inline-block text-[#945CAD] font-semibold mb-2 text-sm"
//                   style={{ fontFamily: "'Poppins', sans-serif" }}
//                 >
//                   {course.type}
//                 </span>
//               </CardItem>

//               {/* Title */}
//               <CardItem
//                 translateZ="60"
//                 className="w-full"
//               >
//                 <h3
//                   className="font-bold text-gray-900 mb-2 line-clamp-2 text-xl"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   {course.title}
//                 </h3>
//               </CardItem>

//               {/* Description */}
//               <CardItem
//                 translateZ="40"
//                 className="w-full"
//               >
//                 <p
//                   className="text-gray-600 mb-4 line-clamp-2 text-sm"
//                   style={{ fontFamily: "'Poppins', sans-serif" }}
//                 >
//                   {course.description}
//                 </p>
//               </CardItem>

//               {/* Image with 3D effect */}
//               <CardItem
//                 translateZ="120"
//                 className="w-full"
//               >
//                 <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
//                   <Image
//                     src={course.img}
//                     alt={course.title}
//                     fill
//                     sizes="33vw"
//                     className="object-cover transition-transform duration-500 group-hover/card:scale-110"
//                   />
//                 </div>
//               </CardItem>
//             </div>

//             {/* Enroll Button with 3D effect */}
//             <CardItem
//               translateZ="80"
//               className="relative h-12 mt-auto ml-auto"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-[#945CAD] hover:bg-[#7d4a94] text-white rounded-tl-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg px-6 py-3 text-base"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 <span>Enroll Now</span>
//                 <ArrowRight className="w-4 h-4" />
//               </motion.button>
//             </CardItem>
//           </div>
//         </CardItem>
//       </CardBody>
//     </CardContainer>
//   );
// }

// // Regular Course Card (Mobile)
// function CourseCard({
//   course,
//   isMobile = false,
// }: {
//   course: (typeof coursesData)[0];
//   isMobile?: boolean;
// }) {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100">
//       {/* Card Content */}
//       <div className="p-3 flex flex-col flex-1">
//         {/* Type Badge */}
//         <span
//           className="inline-block text-[#945CAD] font-semibold mb-2 text-xs"
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           {course.type}
//         </span>

//         {/* Title */}
//         <h3
//           className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight"
//           style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//         >
//           {course.title}
//         </h3>

//         {/* Description */}
//         <p
//           className="text-gray-600 mb-4 line-clamp-2 text-xs"
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           {course.description}
//         </p>

//         {/* Image */}
//         <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
//           <Image
//             src={course.img}
//             alt={course.title}
//             fill
//             sizes="50vw"
//             className="object-cover transition-transform duration-500 hover:scale-110"
//           />
//         </div>
//       </div>

//       {/* Enroll Button */}
//       <div className="relative h-12 mt-auto">
//         <motion.button
//           whileTap={{ scale: 0.95 }}
//           className="absolute bottom-0 right-0 bg-[#945CAD] hover:bg-[#7d4a94] text-white rounded-tl-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg px-3 py-2 text-xs"
//           style={{ fontFamily: "'Poppins', sans-serif" }}
//         >
//           <span><a href="/courses">Enroll Now</a></span>
//           <ArrowRight className="w-3 h-3" />
//         </motion.button>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card-container";
import { coursesData } from "@/lib/courses-data";

export function CoursesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality (Desktop only)
  useEffect(() => {
    if (isMobile) return;

    if (!isHovering) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % coursesData.length);
      }, 3500);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovering, isMobile]);

  // Get visible courses for desktop (3 cards)
  const getVisibleCourses = () => {
    if (isMobile) {
      return coursesData;
    }

    const visibleCourses = [];
    for (let i = 0; i < 3; i++) {
      visibleCourses.push(coursesData[(currentIndex + i) % coursesData.length]);
    }
    return visibleCourses;
  };

  const visibleCourses = getVisibleCourses();

  return (
    <section id="courses" className="py-16 lg:py-20 bg-white overflow-hidden">
      {/* Header */}
      <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{
              color: "#945CAD",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Courses & workshops
          </h2>
          <div className="h-1 w-48 bg-[#945CAD] rounded-full"></div>
        </motion.div>
      </div>

      {/* Desktop View - Auto Swipe Carousel with 3D Cards */}
      {!isMobile && (
        <div className="px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleCourses.map((course, index) => (
                <motion.div
                  key={`${course.id}-${currentIndex}-${index}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full"
                >
                  <CourseCard3D course={course} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {coursesData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-[#945CAD] w-10"
                    : "bg-gray-300 w-2.5 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Mobile View - 2 Column Grid */}
      {isMobile && (
        <div className="px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {coursesData.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <CourseCard course={course} isMobile={true} />
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

// 3D Course Card Component (Desktop)
function CourseCard3D({ course }: { course: (typeof coursesData)[0] }) {
  return (
    <Link href={`/courses/${course.slug}`} className="block h-full">
      <CardContainer containerClassName="py-0">
        <CardBody className="relative group/card w-full h-auto">
          <CardItem
            translateZ="100"
            className="w-full"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100 hover:border-[#945CAD] cursor-pointer">
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Type Badge */}
                <CardItem
                  translateZ="50"
                  className="w-fit"
                >
                  <span
                    className="inline-block text-[#945CAD] font-semibold mb-2 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Courses
                  </span>
                </CardItem>

                {/* Title */}
                <CardItem
                  translateZ="60"
                  className="w-full"
                >
                  <h3
                    className="font-bold text-gray-900 mb-2 line-clamp-2 text-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {course.title}
                  </h3>
                </CardItem>

                {/* Description */}
                <CardItem
                  translateZ="40"
                  className="w-full"
                >
                  <p
                    className="text-gray-600 mb-4 line-clamp-2 text-sm"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {course.description}
                  </p>
                </CardItem>

                {/* Image with 3D effect */}
                <CardItem
                  translateZ="120"
                  className="w-full"
                >
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-110"
                    />
                  </div>
                </CardItem>
              </div>

              {/* Enroll Button with 3D effect */}
              <CardItem
                translateZ="80"
                className="relative h-12 mt-auto ml-auto"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#945CAD] hover:bg-[#7d4a94] text-white rounded-tl-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg px-6 py-3 text-base"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  <span>Enroll Now</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </CardItem>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </Link>
  );
}

// Regular Course Card (Mobile)
function CourseCard({
  course,
  isMobile = false,
}: {
  course: (typeof coursesData)[0];
  isMobile?: boolean;
}) {
  return (
    <Link href={`/courses/${course.slug}`} className="block h-full">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100 hover:border-[#945CAD] cursor-pointer">
        {/* Card Content */}
        <div className="p-3 flex flex-col flex-1">
          {/* Type Badge */}
          <span
            className="inline-block text-[#945CAD] font-semibold mb-2 text-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Courses
          </span>

          {/* Title */}
          <h3
            className="font-bold text-gray-900 mb-2 line-clamp-2 text-sm leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {course.title}
          </h3>

          {/* Description */}
          <p
            className="text-gray-600 mb-4 line-clamp-2 text-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {course.description}
          </p>

          {/* Image */}
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4">
            <Image
              src={course.image}
              alt={course.title}
              fill
              sizes="50vw"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Enroll Button */}
        <div className="relative h-12 mt-auto">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-0 right-0 bg-[#945CAD] hover:bg-[#7d4a94] text-white rounded-tl-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg px-3 py-2 text-xs"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </Link>
  );
}