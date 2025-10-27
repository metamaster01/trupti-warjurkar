// "use client"

// import { useState } from "react"
// import Image from "next/image"
// import { motion } from "framer-motion"
// import { Check, Play, Users, FileText, Award } from "lucide-react"
// import { getCourseById } from "@/lib/courses-data"
// import RazorpayButton from "@/components/razorpay-button"

// export default function CourseDetailPage({ params }: { params: { id: string } }) {
//   const courseId = Number.parseInt(params.id)
//   const course = getCourseById(courseId)
//   const [isLoading, setIsLoading] = useState(false)

//   if (!course) {
//     return (
//       <main className="min-h-screen bg-white flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Course Not Found</h1>
//           <p className="text-gray-600">The course you're looking for doesn't exist.</p>
//         </div>
//       </main>
//     )
//   }

//   const discountPercentage = Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)

//   return (
//     <main className="min-h-screen bg-white">
//       {/* Hero Section with Curved Top */}
//       <section className="relative pt-20 pb-32 bg-gradient-to-b from-[#945CAD]/5 to-white overflow-hidden">
//         {/* Decorative curved line */}
//         <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#945CAD] via-[#945CAD] to-transparent"></div>

//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           {/* Title */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="mb-8"
//           >
//             <h1
//               className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               {course.title}
//             </h1>
//             <p className="text-lg text-gray-600 max-w-2xl">{course.description}</p>
//           </motion.div>

//           {/* Hero Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl"
//           >
//             <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" priority />
//             {/* Play button overlay */}
//             <div className="absolute inset-0 bg-black/20 flex items-center justify-center hover:bg-black/30 transition-all duration-300 cursor-pointer group">
//               <motion.div
//                 whileHover={{ scale: 1.1 }}
//                 className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all"
//               >
//                 <Play className="w-8 h-8 text-[#945CAD] ml-1" fill="currentColor" />
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-16 lg:py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//             {/* Left Column - Content (70%) */}
//             <div className="lg:col-span-2 space-y-12">
//               {/* Overview */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <h2
//                   className="text-3xl font-bold text-[#945CAD] mb-4"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   Overview
//                 </h2>
//                 <p className="text-gray-700 leading-relaxed text-lg">{course.overview}</p>
//               </motion.div>

//               {/* What You'll Learn */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.1 }}
//               >
//                 <h2
//                   className="text-3xl font-bold text-[#945CAD] mb-6"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   What you'll learn
//                 </h2>
//                 <ul className="space-y-3">
//                   {course.whatYouLearn.map((item, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: index * 0.05 }}
//                       className="flex items-start gap-3"
//                     >
//                       <Check className="w-6 h-6 text-[#945CAD] flex-shrink-0 mt-0.5" />
//                       <span className="text-gray-700 text-lg">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>

//               {/* Who It's For */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: 0.2 }}
//               >
//                 <h2
//                   className="text-3xl font-bold text-[#945CAD] mb-6"
//                   style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//                 >
//                   Who it's for
//                 </h2>
//                 <p className="text-gray-700 mb-4 text-lg">This course is perfect for:</p>
//                 <ul className="space-y-2">
//                   {course.whoIsItFor.map((item, index) => (
//                     <motion.li
//                       key={index}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: index * 0.05 }}
//                       className="flex items-start gap-3"
//                     >
//                       <div className="w-2 h-2 bg-[#945CAD] rounded-full mt-2 flex-shrink-0"></div>
//                       <span className="text-gray-700 text-lg">{item}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </motion.div>
//             </div>

//             {/* Right Column - Purchase Card (30%) */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="lg:col-span-1"
//             >
//               <div className="sticky top-24 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl border border-gray-200 p-8 space-y-6">
//                 {/* Price Section */}
//                 <div className="space-y-2">
//                   <div className="flex items-baseline gap-3">
//                     <span className="text-4xl font-bold text-[#945CAD]">₹{course.price.toLocaleString()}</span>
//                     <span className="text-lg text-gray-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
//                   </div>
//                   <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
//                     {discountPercentage}% OFF
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <div className="space-y-3 pt-6 border-t border-gray-200">
//                   {[
//                     { icon: Play, label: "Live Classes" },
//                     { icon: Users, label: "1:1 Sessions" },
//                     { icon: FileText, label: "Assignments" },
//                     { icon: Award, label: "Certificate" },
//                   ].map((feature, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, x: -10 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.4, delay: index * 0.05 }}
//                       className="flex items-center gap-3"
//                     >
//                       <feature.icon className="w-5 h-5 text-[#945CAD]" />
//                       <span className="text-gray-700 font-medium">{feature.label}</span>
//                     </motion.div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="pt-6 border-t border-gray-200"
//                 >
//                   <RazorpayButton
//                     courseId={course.id}
//                     courseTitle={course.title}
//                     price={course.price}
//                     isLoading={isLoading}
//                     setIsLoading={setIsLoading}
//                   />
//                 </motion.div>

//                 {/* Trust Badge */}
//                 <div className="text-center text-sm text-gray-600 pt-4">
//                   <p>✓ Secure payment with Razorpay</p>
//                   <p>✓ 30-day money-back guarantee</p>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }


// import { coursesData } from "@/lib/courses-data"
// import CourseDetailPageClient from "./CourseDetailClient"

// export function generateStaticParams() {
//   return coursesData.map((course) => ({
//     id: course.id.toString(),
//   }))
// }

// export default function page({ params }: { params: { id: string } }) {
//   return <CourseDetailPageClient params={params} />
// }

// app/courses/[id]/page.tsx  (server component)
// app/courses/[id]/page.tsx
import { coursesData } from "@/lib/courses-data"
import CourseDetailPageClient from "./CourseDetailClient"
import { Navigation } from "@/components/navigation"
import { FooterSection } from "@/components/footer"

export function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id.toString(),
  }))
}

export default async function Page({ params }: { params: { id: string } | Promise<{ id: string }> }) {
  const resolvedParams = await params // << important
  const id = resolvedParams.id

  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navigation />
      <CourseDetailPageClient id={id} />
      <FooterSection />
    </div>
  )
}
