// "use client";

// import React from "react";
// import { motion } from "framer-motion";

// export default function GalleryPage() {
//   return (
//     <div className="font-inter bg-white text-gray-900">
//       {/* ===================== GALLERY SECTION ===================== */}
//       <motion.section
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//         className="p-10 max-w-6xl mx-auto"
//       >
//         {/* Heading with Animated Underline */}
//         <div className="mb-10">
//           <motion.h2
//             initial={{ x: -50, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-4xl font-bold text-[#945CAD] text-left"
//           >
//             Gallery
//           </motion.h2>

//           {/* Motion Underline */}
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: [0, 1, 0] }}
//             transition={{
//               repeat: Infinity,
//               duration: 2.5,
//               ease: "easeInOut",
//             }}
//             className="h-1 w-28 bg-[#945CAD] origin-left rounded-full mt-2"
//           />
//         </div>

//         {/* Image Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.15 },
//             },
//           }}
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           {[
//             "/gallery1.png",
//             "/gallery2.png",
//             "/gallery3.png",
//             "/gallery4.png",
//             "/gallery5.png",
//             "/gallery6.png",
//           ].map((src, index) => (
//             <motion.div
//               key={index}
//               variants={{
//                 hidden: { opacity: 0, y: 30 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 8px 30px rgba(148, 92, 173, 0.5)",
//               }}
//               transition={{ type: "spring", stiffness: 150 }}
//               className="overflow-hidden rounded-2xl border-4 border-purple-200 hover:border-[#945CAD] shadow-md cursor-pointer group"
//             >
//               <motion.img
//                 src={src}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 loading="lazy"
//               />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Follow Button - Left Aligned with Instagram Icon */}
//         <a
//   href="https://www.instagram.com/trupti_warjurkar/"
//   target="_blank"
//   rel="noopener noreferrer" 
//   >
//         <motion.button
//           whileHover={{
//             scale: 1.08,
//             boxShadow: "0 0 15px rgba(147,51,234,0.6)",
//           }}
//           whileTap={{ scale: 0.96 }}
//           className="mt-10 px-8 py-3 border-2 border-[#945CAD] text-[#945CAD] rounded-xl hover:bg-purple-50 transition-all duration-300 shadow-sm flex items-center gap-3"
//         >
//           {/* Instagram Gradient Icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-6 h-6"
//             viewBox="0 0 24 24"
//             fill="url(#instagramGradient)"
//           >
//             <defs>
//               <linearGradient id="instagramGradient" x1="0" y1="0" x2="1" y2="1">
//                 <stop offset="0%" stopColor="#F58529" />
//                 <stop offset="25%" stopColor="#FEDA77" />
//                 <stop offset="50%" stopColor="#DD2A7B" />
//                 <stop offset="75%" stopColor="#8134AF" />
//                 <stop offset="100%" stopColor="#515BD4" />
//               </linearGradient>
//             </defs>
//             <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
//           </svg>
//           <span className="font-semibold">Follow for more</span>
//         </motion.button>
//         </a>
//       </motion.section>
//       {/* ===================== NEWSLETTER SECTION ===================== */}
//       <motion.section
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="relative z-20 bg-gray-100 p-6 rounded-2xl max-w-3xl mx-auto -mb-24 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl hover:shadow-purple-300/50 transition-all duration-300 border border-purple-200 hover:border-purple-400"
//       >
//         <div className="text-left">
//           <h3 className="font-bold text-2xl text-purple-700 mb-1">
//             Subscribe Newsletter
//           </h3>
//           <p className="text-sm text-gray-600">
//             Every Tuesday, get practical tips to speak with clarity, confidence,
//             and charisma — straight to your inbox.
//           </p>
//         </div>

//         <div className="flex w-full sm:w-auto gap-2">
//           <motion.input
//             whileFocus={{ scale: 1.02 }}
//             type="email"
//             placeholder="Enter your email."
//             className="border-2 border-gray-300 rounded-lg p-2 w-full sm:w-64 focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 hover:border-purple-400"
//           />
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 0 15px rgba(147,51,234,0.6)",
//             }}
//             className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
//           >
//             Subscribe
//           </motion.button>
//         </div>
//       </motion.section>

//       {/* ===================== FOOTER SECTION ===================== */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="relative overflow-hidden text-white mt-32 sm:mt-24 md:mt-16 p-10 rounded-t-3xl shadow-2xl z-10 bg-[radial-gradient(circle_at_top_left,_#010101,_#1a0f1d_40%,_#945CAD_60%,_#010101_85%)] animate-[gradientMove_12s_ease-in-out_infinite]"
//       >
//         {/* Floating Particles */}
//         <div className="absolute inset-0 z-0">
//           {[...Array(20)].map((_, i) => (
//             <span
//               key={i}
//               className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 blur-[2px] animate-[float_6s_ease-in-out_infinite]"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 5}s`,
//                 animationDuration: `${5 + Math.random() * 5}s`,
//               }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10">
//           {/* Title + Button Side by Side */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.85 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
//           >
//             <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-wide bg-gradient-to-r from-white via-purple-300 to-purple-500 bg-clip-text text-transparent animate-[shine_3s_linear_infinite]">
//               LET’S TALK
//               <br />
//               WITH US
//             </h2>
//             <motion.button
//               whileHover={{
//                 scale: 1.12,
//                 boxShadow: "0 0 30px rgba(148, 92, 173, 1)",
//               }}
//               whileTap={{ scale: 0.95 }}
//               className="border-2 border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(148,92,173,0.6)] hover:shadow-[0_0_30px_rgba(148,92,173,1)] animate-[pulseGlow_3s_ease-in-out_infinite]"
//             >
//               Contact us
//             </motion.button>
//           </motion.div>

//           {/* Contact Info + Nav + Socials */}
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: { staggerChildren: 0.25 },
//               },
//             }}
//             className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-12 text-center sm:text-left"
//           >
//             {/* Name + Contact */}
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, x: -30 },
//                 visible: { opacity: 1, x: 0 },
//               }}
//               className="flex flex-col sm:flex-row sm:items-start sm:justify-center sm:gap-24 gap-6"
//             >
//               <p className="font-bold text-2xl sm:text-3xl">Trupti.W</p>
//               <div className="flex flex-col gap-3 text-gray-300 text-sm sm:text-base">
//                 <motion.p
//                   whileHover={{ x: 5, color: "#C084FC" }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className="cursor-pointer transition-all"
//                 >
//                   INFO@TRUPTI.COM
//                 </motion.p>
//                 <motion.p
//                   whileHover={{ x: 5, color: "#C084FC" }}
//                   transition={{ type: "spring", stiffness: 200 }}
//                   className="cursor-pointer transition-all"
//                 >
//                   (078) 12345 12112
//                 </motion.p>
//               </div>
//             </motion.div>

//             {/* Navigation */}
//             <motion.nav
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               className="flex flex-col gap-2"
//             >
//               {["Home", "About", "Courses", "Blog", "Contact"].map(
//                 (link, idx) => (
//                   <motion.a
//                     whileHover={{ x: 4, color: "#C084FC" }}
//                     key={idx}
//                     href="#"
//                     className="hover:underline transition-all duration-300"
//                   >
//                     {link}
//                   </motion.a>
//                 )
//               )}
//             </motion.nav>

//            {/* Social Links */}
// <motion.div
//   variants={{
//     hidden: { opacity: 0, x: 30 },
//     visible: { opacity: 1, x: 0 },
//   }}
//   className="flex flex-col gap-3 items-center sm:items-end"
// >
//   {[
//     { name: "Instagram", url: "https://www.instagram.com/trupti_warjurkar/" },
//     { name: "YouTube", url: "https://www.youtube.com/@TruptiWarjurkar" },
//     { name: "LinkedIn", url: "https://www.linkedin.com/in/trupti-warjurkar-393917a4/" },
//   ].map((social, idx) => (
//     <motion.a
//       key={idx}
//       whileHover={{
//         scale: 1.2,
//         backgroundColor: "rgba(148,92,173,0.3)",
//         boxShadow: "0 0 20px rgba(148,92,173,0.7)",
//       }}
//       href={social.url}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="border border-white px-3 py-2 rounded-full transition-all duration-300"
//     >
//       {social.name}
//     </motion.a>
//   ))}
// </motion.div>

//           </motion.div>

//           {/* Bottom Row */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400"
//           >
//             <p className="hover:text-purple-300 cursor-pointer">
//               Terms & Conditions
//             </p>
//             <p>Copyright © 2025. All Rights Reserved</p>
//             <p className="hover:text-purple-300 cursor-pointer">
//               Privacy Policy
//             </p>
//           </motion.div>
//         </div>

//         {/* Animations */}
//         <style jsx>{`
//           @keyframes gradientMove {
//             0% {
//               background-position: 0% 0%;
//             }
//             50% {
//               background-position: 100% 100%;
//             }
//             100% {
//               background-position: 0% 0%;
//             }
//           }
//           @keyframes shine {
//             0% {
//               background-position: -200% center;
//             }
//             100% {
//               background-position: 200% center;
//             }
//           }
//           @keyframes pulseGlow {
//             0%,
//             100% {
//               box-shadow: 0 0 15px rgba(148, 92, 173, 0.4);
//             }
//             50% {
//               box-shadow: 0 0 30px rgba(148, 92, 173, 0.9);
//             }
//           }
//           @keyframes float {
//             0%,
//             100% {
//               transform: translateY(0px);
//             }
//             50% {
//               transform: translateY(-10px);
//             }
//           }
//         `}</style>
//       </motion.footer>
//     </div>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function GallerySection() {
  const galleryImages = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
  ];

  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            style={{
              color: "#945CAD",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Gallery
          </h2>
          <div className="h-1 w-40 bg-[#945CAD] rounded-full"></div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border-2 border-gray-200 group-hover:border-[#945CAD] transition-colors duration-300">
                <Image
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#945CAD]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Follow Button with Instagram Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/trupti_warjurkar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-[#945CAD] text-[#945CAD] font-semibold rounded-xl hover:bg-[#945CAD] hover:text-white transition-all duration-300 flex items-center gap-3 shadow-md hover:shadow-lg"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z" />
              </svg>
              <span>Follow for more</span>
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
