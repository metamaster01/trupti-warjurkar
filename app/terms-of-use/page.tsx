"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { FooterSection } from "@/components/footer"
import { Navigation } from "@/components/navigation"

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using this website and courses offered by Ato Trupti Warjurkar, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
  },
  {
    id: "use-license",
    title: "2. Use License",
    content:
      'Permission is granted to temporarily download one copy of the materials (information or software) on Ato Trupti Warjurkar\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or "mirror" the materials on any other server\n• Violate any applicable laws or regulations\n• Harass or cause distress or inconvenience to any person\n• Obscure or alter any legal notices or proprietary notices',
  },
  {
    id: "disclaimer",
    title: "3. Disclaimer",
    content:
      "The materials on Ato Trupti Warjurkar's website are provided on an 'as is' basis. Ato Trupti Warjurkar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
  },
  {
    id: "limitations",
    title: "4. Limitations",
    content:
      "In no event shall Ato Trupti Warjurkar or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ato Trupti Warjurkar's website, even if Ato Trupti Warjurkar or an authorized representative has been notified orally or in writing of the possibility of such damage.",
  },
  {
    id: "accuracy",
    title: "5. Accuracy of Materials",
    content:
      "The materials appearing on Ato Trupti Warjurkar's website could include technical, typographical, or photographic errors. Ato Trupti Warjurkar does not warrant that any of the materials on its website are accurate, complete, or current. Ato Trupti Warjurkar may make changes to the materials contained on its website at any time without notice.",
  },
  {
    id: "links",
    title: "6. Links",
    content:
      "Ato Trupti Warjurkar has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ato Trupti Warjurkar of the site. Use of any such linked website is at the user's own risk.",
  },
  {
    id: "modifications",
    title: "7. Modifications",
    content:
      "Ato Trupti Warjurkar may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
  },
  {
    id: "governing-law",
    title: "8. Governing Law",
    content:
      "These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property Rights",
    content:
      "All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of Ato Trupti Warjurkar or its content suppliers and is protected by international copyright laws. Unauthorized use of any materials is prohibited and may result in legal action.",
  },
  {
    id: "user-conduct",
    title: "10. User Conduct",
    content:
      "You agree not to use this website for any unlawful purpose or in any way that could damage, disable, or impair the website. You further agree not to:\n\n• Engage in any form of harassment or abuse\n• Transmit obscene or offensive content\n• Disrupt the normal flow of dialogue within our website\n• Attempt to gain unauthorized access to our systems\n• Engage in any commercial activity without permission",
  },
  {
    id: "course-policy",
    title: "11. Course Policy",
    content:
      "All courses offered by Ato Trupti Warjurkar are non-refundable once purchased. Access to course materials is provided for personal use only. Sharing course content with others is strictly prohibited and constitutes a violation of these terms. Unauthorized distribution of course materials may result in legal action.",
  },
  {
    id: "contact",
    title: "12. Contact Information",
    content:
      "If you have any questions about these Terms of Use, please contact us at:\n\nEmail: info@truptiwarjurkar.com\nPhone: +91 (XXX) XXX-XXXX\n\nLast Updated: October 2025",
  },
]

export default function TermsOfUsePage() {
  const [expandedId, setExpandedId] = useState<string | null>("acceptance")

  return (
    <div className="overflow-x-hidden bg-white ">
<Navigation />

    <main className="min-h-screen bg-white mt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 md:py-16"
      >
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-purple-100 text-lg">
            Please read these terms carefully before using our website and courses
          </p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-200"
        >
          <p className="text-gray-700 leading-relaxed">
            These Terms of Use ("Terms") constitute a legal agreement between you and Ato Trupti Warjurkar. By accessing
            and using this website, you acknowledge that you have read, understood, and agree to be bound by all the
            terms and conditions outlined below. If you do not agree with any part of these terms, please discontinue
            use of this website immediately.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setExpandedId(expandedId === section.id ? null : section.id)}
                className="w-full flex items-center justify-between p-6 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800 text-left">{section.title}</h2>
                <motion.div animate={{ rotate: expandedId === section.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: expandedId === section.id ? "auto" : 0, opacity: expandedId === section.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 bg-gray-50 border border-t-0 border-gray-200 rounded-b-lg">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg"
        >
          <p className="text-sm text-gray-700">
            <strong>Important:</strong> These terms may be updated at any time without notice. Your continued use of
            this website following any changes constitutes your acceptance of the new terms. Please review this page
            periodically for updates.
          </p>
        </motion.div>
      </div>
    </main>
    <FooterSection />
    </div>
  )
}
