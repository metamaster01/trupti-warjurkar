"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { coursesData } from "@/lib/courses-data"
import { Navigation } from "@/components/navigation"
import { FooterSection } from "@/components/footer"

export default function CoursesPage() {
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <section id="courses" className="py-16 lg:py-20 bg-white mt-10">
        {/* Header */}
        <div className="px-6 lg:px-12 max-w-7xl mx-auto mb-12">
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

        <div className="px-6 lg:px-12 max-w-7xl mx-auto">
          <div className={`grid gap-6 lg:gap-8 ${isMobile ? "grid-cols-2" : "grid-cols-3"}`}>
            {coursesData.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  )
}

function CourseCard({ course }: { course: (typeof coursesData)[0] }) {
  return (
    <Link href={`/courses/${course.slug}`} className="block h-full">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100 hover:border-[#945CAD] cursor-pointer">
        {/* Card Content */}
        <div className="p-4 lg:p-6 flex flex-col flex-1">
          {/* Type Badge */}
          <span
            className="inline-block text-[#945CAD] font-semibold mb-2 text-xs lg:text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Courses
          </span>

          {/* Title */}
          <h3
            className="font-bold text-gray-900 mb-2 line-clamp-2 text-base lg:text-xl"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {course.title}
          </h3>

          {/* Description */}
          <p
            className="text-gray-600 mb-4 line-clamp-2 text-xs lg:text-sm"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {course.description}
          </p>

          {/* Image */}
          <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-4">
            <Image
              src={course.image || "/placeholder.svg?height=300&width=400&query=course"}
              alt={course.title}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Button */}
        <div className="relative h-10 lg:h-12 mt-auto">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="absolute bottom-0 right-0 bg-[#945CAD] hover:bg-[#7d4a94] text-white rounded-tl-2xl font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg px-3 lg:px-6 py-2 lg:py-3 text-xs lg:text-base h-full"
            style={{ fontFamily: "'Poppins', sans-serif" }}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <span>Enroll Now</span>
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
          </motion.button>
        </div>
      </div>
    </Link>
  )
}
