// "use client";

// import { useState } from "react";
// import Button from "@/components/ui/button";
// import { Menu, X } from "lucide-react";

// export function Navigation() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="absolute top-0 left-0 w-full z-20 px-6 py-4 text-white bg-transparent">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">Trupti.W</div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-8 font-semibold">
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Home
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             About
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Courses
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Blog
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Contact
//           </a>
//         </div>

//         {/* CTA Button (Desktop) */}
//         <div className="hidden md:block">
//           <Button
//             className="bg-white font-semibold px-4 py-2"
//             style={{ color: "#945CAD" }}
//           >
//             Explore Course
//           </Button>
//         </div>

//         {/* Hamburger Menu (Mobile) */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           className="md:hidden mt-4 flex flex-col space-y-4 rounded-xl p-4"
//           style={{ backgroundColor: "#945CAD" }}
//         >
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Home
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             About
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Courses
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Blog
//           </a>
//           <a href="#" className="hover:text-white/80 transition-colors">
//             Contact
//           </a>

//           <Button
//             className="bg-white font-semibold px-4 py-2 w-full"
//             style={{ color: "#945CAD" }}
//           >
//             Explore Course
//           </Button>
//         </div>
//       )}
//     </nav>
//   );
// }


"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "#courses" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 lg:px-12 py-2 from-white/70 to-white/30 bg-gradient-to-b backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          aria-label="Trupti W - Home"
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 22, duration: 0.5 }}
          whileHover={{ scale: 1.06, rotate: 3 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3"
        >
          <motion.img
            src="/logo-2.png"
            alt="Trupti.W logo"
            className="w-20 h-16 sm:w-20 sm:h-12 md:w-42 md:h-20 object-contain"
            draggable={false}
            initial={{ rotate: -6, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, duration: 0.6, delay: 0.05 }}
          />
          {/* Visible label can be enabled if you want text next to the logo:
              <span className="text-white text-lg font-semibold tracking-tight">Trupti.W</span>
              For a purely visual logo keep the span visually hidden for screen readers: */}
          <span className="sr-only">Trupti.W</span>
        </motion.a>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center space-x-8 text-lg font-semibold"
        >
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="relative text-black py-2 group"
            >
              <span className="relative z-10">{link.name}</span>
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-white"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button Desktop */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:block"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2.5 bg-white text-purple-700 font-semibold rounded-lg overflow-hidden group transition-all duration-300"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              <a href="/courses">Explore Course</a>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none text-black z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: menuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4"
          >
            <div className="bg-purple-800/95 backdrop-blur-lg rounded-xl p-6 space-y-4 shadow-2xl">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.05 }}
                  className="block text-white hover:text-purple-200 transition-colors text-lg py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="w-full bg-white text-purple-700 font-semibold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors"
              >
                Explore Course
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}