"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { FooterSection } from "@/components/footer"

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content:
      'Ato Trupti Warjurkar ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our courses and services.',
  },
  {
    id: "information-collection",
    title: "2. Information We Collect",
    content:
      "We collect information in the following ways:\n\n• Personal Information: Name, email address, phone number, and payment information when you register or purchase courses\n• Account Information: Username, password, profile information, and preferences\n• Course Data: Your progress, quiz scores, assignments, and course completion status\n• Device Information: IP address, browser type, operating system, and device identifiers\n• Usage Data: Pages visited, time spent on pages, links clicked, and navigation patterns\n• Cookies and Tracking: We use cookies and similar technologies to enhance your experience",
  },
  {
    id: "use-of-information",
    title: "3. How We Use Your Information",
    content:
      "We use the information we collect for the following purposes:\n\n• Providing and improving our courses and services\n• Processing payments and managing your account\n• Sending you course updates, announcements, and promotional materials\n• Responding to your inquiries and providing customer support\n• Analyzing usage patterns to improve user experience\n• Complying with legal obligations and preventing fraud\n• Personalizing your learning experience\n• Conducting research and analytics",
  },
  {
    id: "data-security",
    title: "4. Data Security",
    content:
      "We implement comprehensive security measures to protect your personal information, including:\n\n• SSL encryption for all data transmission\n• Secure password storage using industry-standard hashing\n• Regular security audits and vulnerability assessments\n• Limited access to personal information by authorized personnel only\n• Secure payment processing through trusted payment gateways\n• Regular backups and disaster recovery procedures\n\nHowever, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.",
  },
  {
    id: "third-party-sharing",
    title: "5. Third-Party Sharing",
    content:
      "We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:\n\n• Payment processors (Razorpay) for transaction processing\n• Email service providers for course communications\n• Analytics providers to understand usage patterns\n• Legal authorities when required by law\n• Service providers who assist in operating our website and conducting our business\n\nAll third parties are contractually obligated to maintain the confidentiality and security of your information.",
  },
  {
    id: "cookies",
    title: "6. Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to:\n\n• Remember your preferences and login information\n• Track your progress through courses\n• Analyze website traffic and user behavior\n• Deliver personalized content and advertisements\n• Prevent fraud and enhance security\n\nYou can control cookie settings through your browser preferences. However, disabling cookies may affect your ability to use certain features of our website.",
  },
  {
    id: "user-rights",
    title: "7. Your Rights and Choices",
    content:
      "You have the following rights regarding your personal information:\n\n• Right to Access: Request a copy of the personal information we hold about you\n• Right to Correction: Request correction of inaccurate or incomplete information\n• Right to Deletion: Request deletion of your personal information (subject to legal requirements)\n• Right to Opt-Out: Unsubscribe from marketing communications at any time\n• Right to Data Portability: Request your data in a portable format\n\nTo exercise these rights, please contact us using the information provided in the Contact section.",
  },
  {
    id: "children-privacy",
    title: "8. Children's Privacy",
    content:
      "Our website and courses are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected information from a child under 13, we will take steps to delete such information and terminate the child's account. Parents or guardians who believe their child has provided information to us should contact us immediately.",
  },
  {
    id: "external-links",
    title: "9. External Links",
    content:
      "Our website may contain links to external websites and third-party services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites before providing your personal information. Your use of external websites is governed by their respective privacy policies.",
  },
  {
    id: "data-retention",
    title: "10. Data Retention",
    content:
      "We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specifically:\n\n• Account information is retained while your account is active\n• Course completion records are retained for verification purposes\n• Payment information is retained as required by law and for dispute resolution\n• Marketing data is retained until you opt-out\n• We delete personal information when it is no longer necessary, unless retention is required by law",
  },
  {
    id: "international-transfers",
    title: "11. International Data Transfers",
    content:
      "Your personal information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country. By using our website and services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules.",
  },
  {
    id: "policy-changes",
    title: "12. Changes to This Privacy Policy",
    content:
      'We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our website following the posting of revised Privacy Policy means that you accept and agree to the changes.',
  },
  {
    id: "contact",
    title: "13. Contact Us",
    content:
      "If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:\n\nAto Trupti Warjurkar\nEmail: privacy@truptiwarjurkar.com\nPhone: +91 (XXX) XXX-XXXX\n\nData Protection Officer:\nEmail: dpo@truptiwarjurkar.com\n\nLast Updated: October 2025",
  },
]

export default function PrivacyPolicyPage() {
  const [expandedId, setExpandedId] = useState<string | null>("introduction")

  return (
    <div className="overflow-x-hidden bg-white">

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-purple-100 text-lg">Your privacy is important to us. Learn how we protect your data.</p>
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
            This Privacy Policy describes how Ato Trupti Warjurkar collects, uses, and protects your personal
            information. We are committed to ensuring your privacy and providing transparency about our data practices.
            Please read this policy carefully to understand our views and practices regarding your personal data.
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
          className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg"
        >
          <p className="text-sm text-gray-700">
            <strong>GDPR Compliance:</strong> If you are located in the European Union, you have additional rights under
            the General Data Protection Regulation (GDPR). Please contact our Data Protection Officer for more
            information about your rights and how to exercise them.
          </p>
        </motion.div>
      </div>
    </main>
    <FooterSection />
    </div>
  )
}
