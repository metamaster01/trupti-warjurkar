// "use client";

// import { motion } from "framer-motion";
// import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

// export function FooterSection() {
//   const footerLinks = {
//     company: [
//       { name: "Home", href: "#home" },
//       { name: "About us", href: "#about" },
//       { name: "Gallery", href: "#gallery" },
//       { name: "Blog", href: "#blog" },
//       { name: "Contact", href: "#contact" },
//     ],
//     explore: [
//       { name: "Courses", href: "#courses" },
//       { name: "Key notes", href: "#keynotes" },
//     ],
//   };

//   const socialLinks = [
//     {
//       name: "Facebook",
//       icon: Facebook,
//       href: "https://www.facebook.com",
//       color: "hover:text-blue-400",
//     },
//     {
//       name: "Instagram",
//       icon: Instagram,
//       href: "https://www.instagram.com/trupti_warjurkar/",
//       color: "hover:text-pink-400",
//     },
//     {
//       name: "YouTube",
//       icon: Youtube,
//       href: "https://www.youtube.com/@TruptiWarjurkar",
//       color: "hover:text-red-400",
//     },
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       href: "https://www.linkedin.com/in/trupti-warjurkar-393917a4/",
//       color: "hover:text-blue-400",
//     },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-br from-[#1a0f2e] via-[#2d1b3d] to-[#1a0f2e] text-white pt-32 pb-8 mt-24 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
//             initial={{
//               x: Math.random() * 100 + "%",
//               y: Math.random() * 100 + "%",
//             }}
//             animate={{
//               y: [
//                 Math.random() * 100 + "%",
//                 Math.random() * 100 + "%",
//                 Math.random() * 100 + "%",
//               ],
//               opacity: [0.2, 0.5, 0.2],
//             }}
//             transition={{
//               duration: 5 + Math.random() * 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
//         {/* Top Section - CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-16 pb-16 border-b border-gray-700"
//         >
//           {/* Left - Let's Talk */}
//           <div>
//             <h2
//               className="text-4xl lg:text-6xl font-bold leading-tight mb-2"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               LET'S TALK
//               <br />
//               WITH US
//             </h2>
//           </div>

//           {/* Right - Contact Button */}
//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#1a0f2e] transition-all duration-300 shadow-lg"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             Contact us
//           </motion.a>
//         </motion.div>

//         {/* Middle Section - Links Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: {
//               opacity: 1,
//               transition: { staggerChildren: 0.1 },
//             },
//           }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
//         >
//           {/* Brand */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <h3
//               className="text-2xl font-bold mb-4"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Trupti.W
//             </h3>
//             <p
//               className="text-sm text-gray-400 mb-4"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Follow Us
//             </p>
//             {/* Social Icons */}
//             <div className="flex gap-3">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.2, y: -4 }}
//                   whileTap={{ scale: 0.9 }}
//                   className={`w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
//                 >
//                   <social.icon className="w-5 h-5" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Company Links */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <h4
//               className="text-lg font-semibold mb-4"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Company
//             </h4>
//             <ul className="space-y-2">
//               {footerLinks.company.map((link) => (
//                 <li key={link.name}>
//                   <motion.a
//                     href={link.href}
//                     whileHover={{ x: 5 }}
//                     className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
//                     style={{ fontFamily: "'Poppins', sans-serif" }}
//                   >
//                     {link.name}
//                   </motion.a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Explore Links */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <h4
//               className="text-lg font-semibold mb-4"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Explore
//             </h4>
//             <ul className="space-y-2">
//               {footerLinks.explore.map((link) => (
//                 <li key={link.name}>
//                   <motion.a
//                     href={link.href}
//                     whileHover={{ x: 5 }}
//                     className="text-gray-400 hover:text-white transition-all duration-300 text-sm"
//                     style={{ fontFamily: "'Poppins', sans-serif" }}
//                   >
//                     {link.name}
//                   </motion.a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 20 },
//               visible: { opacity: 1, y: 0 },
//             }}
//           >
//             <h4
//               className="text-lg font-semibold mb-4"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Contact info
//             </h4>
//             <div className="space-y-2 text-sm text-gray-400">
//               <motion.a
//                 href="mailto:info@trupti.com"
//                 whileHover={{ x: 5, color: "#fff" }}
//                 className="block hover:text-white transition-all duration-300"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 info@trupti.com
//               </motion.a>
//               <motion.a
//                 href="tel:+07812345121"
//                 whileHover={{ x: 5, color: "#fff" }}
//                 className="block hover:text-white transition-all duration-300"
//                 style={{ fontFamily: "'Poppins', sans-serif" }}
//               >
//                 (078) 12345 12112
//               </motion.a>
//             </div>
//             <div className="mt-4">
//               <h5
//                 className="text-sm font-semibold mb-2"
//                 style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//               >
//                 Legal
//               </h5>
//               <div className="space-y-1 text-sm text-gray-400">
//                 <motion.a
//                   href="#terms"
//                   whileHover={{ x: 5, color: "#fff" }}
//                   className="block hover:text-white transition-all duration-300"
//                   style={{ fontFamily: "'Poppins', sans-serif" }}
//                 >
//                   Terms of use
//                 </motion.a>
//                 <motion.a
//                   href="#privacy"
//                   whileHover={{ x: 5, color: "#fff" }}
//                   className="block hover:text-white transition-all duration-300"
//                   style={{ fontFamily: "'Poppins', sans-serif" }}
//                 >
//                   Privacy policy
//                 </motion.a>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom Section - Copyright */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
//         >
//           <p style={{ fontFamily: "'Poppins', sans-serif" }}>
//             Metamaster @ 2025. All rights Reserved.
//           </p>
//           <p style={{ fontFamily: "'Poppins', sans-serif" }}>
//             info@metamaster.in
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }

// components/FooterSection.tsx
// "use client";

// import { motion } from "framer-motion";
// import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
// import { NewsletterSection } from "@/components/newsletter-section";

// export function FooterSection() {
//   const footerLinks = {
//     company: [
//       { name: "Home", href: "#home" },
//       { name: "About us", href: "#about" },
//       { name: "Gallery", href: "#gallery" },
//       { name: "Blog", href: "#blog" },
//       { name: "Contact", href: "#contact" },
//     ],
//     explore: [
//       { name: "Courses", href: "#courses" },
//       { name: "Key notes", href: "#keynotes" },
//     ],
//   };

//   const socialLinks = [
//     { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/Trupti-Warjurkar-Talk-Win/61579787246070/", color: "hover:text-blue-400" },
//     { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/trupti_warjurkar/", color: "hover:text-pink-400" },
//     { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@truptiwarjurkar", color: "hover:text-red-400" },
//     { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/trupti-warjurkar-393917a4/", color: "hover:text-blue-400" },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-br from-[#190c2f] via-[#8c60b3] to-[#69386b] text-white pt-56 pb-12 overflow-hidden">
//       {/* Background glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] -z-0" />

//       {/* ✨ Newsletter floating section - perfectly placed */}
//       <div className="absolute  mt-2 sm:mt-2 lg:mt-8 top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <NewsletterSection />
//         </motion.div>
//       </div>

//       {/* Animated subtle gradient overlay */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <motion.div
//           initial={{ opacity: 0.05 }}
//           animate={{ opacity: [0.05, 0.12, 0.05] }}
//           transition={{ duration: 8, repeat: Infinity }}
//           className="absolute left-[-10%] top-0 w-[60%] h-full bg-gradient-to-b from-transparent to-black/40"
//         />
//       </div>

//       <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
//         {/* Top CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-16 pb-16 border-b border-gray-700"
//         >
//           <div>
//             <h2
//               className="text-4xl lg:text-6xl font-bold leading-tight mb-2"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               LET'S TALK
//               <br />
//               WITH US
//             </h2>
//           </div>

//           <motion.a
//             href="#contact"
//             whileHover={{ scale: 1.04 }}
//             className="px-6 lg:px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#1a0f2e] transition-all duration-300 shadow-sm"
//             style={{ fontFamily: "'Poppins', sans-serif" }}
//           >
//             Contact us
//           </motion.a>
//         </motion.div>

//         {/* Footer Links Grid */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
//           }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
//         >
//           {/* Brand */}
//           <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
//             <motion.img
//               src="/logo-2.png"
//               alt="Trupti Logo"
//               className="w-40 h-24 mb-4"
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.6 }}
//             />
//             <h2 className="font-bold text-lg text-gray-400 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
//               Follow Us
//             </h2>

//             <div className="flex gap-3">
//               {socialLinks.map((social) => (
//                 <motion.a
//                   key={social.name}
//                   href={social.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ scale: 1.15, y: -3 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`w-10 h-10 rounded-full bg-white/8 hover:bg-white/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
//                 >
//                   <social.icon className="w-4 h-4" />
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>

//           {/* Company */}
//           <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
//             <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//               Company
//             </h4>
//             <ul className="space-y-2">
//               {footerLinks.company.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-all duration-200 text-sm"
//                     style={{ fontFamily: "'Poppins', sans-serif" }}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Explore */}
//           <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
//             <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//               Explore
//             </h4>
//             <ul className="space-y-2">
//               {footerLinks.explore.map((link) => (
//                 <li key={link.name}>
//                   <a
//                     href={link.href}
//                     className="text-gray-400 hover:text-white transition-all duration-200 text-sm"
//                     style={{ fontFamily: "'Poppins', sans-serif" }}
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </motion.div>

//           {/* Contact info */}
//           <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}>
//             <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//               Contact info
//             </h4>
//             <div className="space-y-2 text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
//               <a href="mailto:trupti.speaks@gmail.com" className="block hover:text-white transition-all">
//                 trupti.speaks@gmail.com
//               </a>
//               <a href="tel:+919370125066" className="block hover:text-white transition-all">
//                 +91 93701 25066
//               </a>
//             </div>

//             <div className="mt-4">
//               <h5 className="text-sm font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
//                 Legal
//               </h5>
//               <div className="space-y-1 text-sm text-gray-400">
//                 <a href="#terms" className="block hover:text-white transition-all">
//                   Terms of use
//                 </a>
//                 <a href="#privacy" className="block hover:text-white transition-all">
//                   Privacy policy
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>

//         {/* Bottom */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5, delay: 0.25 }}
//           className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400"
//         >
//           <p style={{ fontFamily: "'Poppins', sans-serif" }}><a href="https://www.metamaster.in">Metamaster</a> @ 2025. All rights Reserved.</p>
//           <p style={{ fontFamily: "'Poppins', sans-serif" }}>info@metamaster.in</p>
//         </motion.div>
//       </div>
//     </footer>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { NewsletterSection } from "@/components/newsletter-section";

export function FooterSection() {
  const footerLinks = {
    company: [
      { name: "Home", href: "/" },
      { name: "About us", href: "/about" },
      { name: "Courses", href: "/courses" },
      { name: "Blog", href: "/blogs" },
      { name: "Contact", href: "/contact" },
    ],
    explore: [
      { name: "Courses", href: "/courses" },
       { name: "Featured Blogs", href: "/blogs" },
      // { name: "Speaking Reels", href: "#speaking" },
    ],
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/people/Trupti-Warjurkar-Talk-Win/61579787246070/", color: "hover:text-blue-400" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/trupti_warjurkar/", color: "hover:text-pink-400" },
    { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/@truptiwarjurkar", color: "hover:text-red-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/trupti-warjurkar-393917a4/", color: "hover:text-blue-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#923995] via-[#7c569d] to-[#311462] text-white pt-40 sm:pt-56 lg:pt-56 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[160px] -z-0" />

      {/* Newsletter floating section - ADJUSTED FOR MOBILE */}
      <div className="absolute  top-18 left-1/2 -translate-x-1/2 w-full max-w-6xl px-6 -translate-y-[45%] sm:-translate-y-[50%] lg:-translate-y-[50%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NewsletterSection />
        </motion.div>
      </div>

      {/* Animated subtle gradient overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0.05 }}
          animate={{ opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute left-[-10%] top-0 w-[60%] h-full bg-gradient-to-b from-transparent to-black/40"
        />
      </div>

      <div className="relative z-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Top CTA - CENTERED ON MOBILE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 mb-12 lg:mb-16 pb-12 lg:pb-16 border-b border-gray-700 mt-20 sm:mt-20 md:mt-0"
        >
          <div className="text-center lg:text-left">
            <h2
              className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              LET'S TALK
              <br />
              WITH US
            </h2>
          </div>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.04 }}
            className="px-6 lg:px-8 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#1a0f2e] transition-all duration-300 shadow-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Contact us
          </motion.a>
        </motion.div>

        {/* Footer Links Grid - MOBILE: 2 COLS, DESKTOP: 4 COLS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-1 gap-8 mb-12"
        >
          {/* Brand - CENTERED ON MOBILE, LEFT ON DESKTOP */}
          <motion.div 
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.img
              src="/logo-2.png"
              alt="Trupti Logo"
              className="w-40 h-24 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h2 className="font-bold text-lg text-gray-400 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Follow Us
            </h2>

            <div className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-full bg-white/8 hover:bg-white/20 flex items-center justify-center transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 4 SECTIONS IN 2x2 GRID ON MOBILE */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-center lg:text-left"
            >
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Explore */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-center lg:text-left"
            >
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Explore
              </h4>
              <ul className="space-y-2">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-200 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact info */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-center lg:text-left"
            >
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Contact info
              </h4>
              <div className="space-y-2 text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <a href="mailto:trupti.speaks@gmail.com" className="block hover:text-white transition-all">
                  trupti.speaks@gmail.com
                </a>
                <a href="tel:+919370125066" className="block hover:text-white transition-all">
                  +91 93701 25066
                </a>
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div 
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              className="text-center lg:text-left"
            >
              <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Legal
              </h4>
              <div className="space-y-2 text-sm text-gray-400" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <a href="/terms-of-use" className="block hover:text-white transition-all">
                  Terms of use
                </a>
                <a href="/privacy-policy" className="block hover:text-white transition-all">
                  Privacy policy
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom - CENTERED ON MOBILE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-8 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400 text-center sm:text-left"
        >
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>
            <a href="https://www.metamaster.in">Metamaster</a> @ 2025. All rights Reserved.
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif" }}>info@metamaster.in</p>
        </motion.div>
      </div>
    </footer>
  );
}