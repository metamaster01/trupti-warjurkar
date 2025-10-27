// "use client";

// import { motion } from "framer-motion";
// import { useState } from "react";

// export function NewsletterSection() {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle newsletter subscription
//     console.log("Subscribed:", email);
//   };

//   return (
//     <section className="relative z-30 px-6 lg:px-12 -mb-24">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-10"
//       >
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
//           {/* Text Content */}
//           <div className="flex-1 text-center lg:text-left">
//             <h3
//               className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
//               style={{ fontFamily: "'Space Grotesk', sans-serif" }}
//             >
//               Subscribe Newsletter
//             </h3>
//             <p
//               className="lg:text-base text-gray-600 hidden sm:block"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Every Tuesday, get practical tips to speak with clarity,
//               confidence, and charisma — straight to your inbox.
//             </p>
//           </div>

//           {/* Email Form */}
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto"
//           >
//             <motion.input
//               whileFocus={{ scale: 1.02 }}
//               type="email"
//               placeholder="Enter your email."
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="px-5 py-3 border-2 border-gray-300 rounded-xl w-full sm:w-80 focus:border-[#945CAD] focus:ring-2 focus:ring-[#945CAD]/20 outline-none transition-all duration-300"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="px-8 py-3 bg-[#945CAD] hover:bg-[#7d4a94] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
//               style={{ fontFamily: "'Poppins', sans-serif" }}
//             >
//               Subscribe
//             </motion.button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { createBrowserClient } from "@/lib/supabase";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const supabase = createBrowserClient();
      const { error } = await supabase.from("newsletter-trupti").insert({ email });
      if (error) throw error;

      setStatus({ type: "ok", msg: "Subscribed! Check your inbox soon." });
      setEmail("");
    } catch (err: any) {
      setStatus({ type: "err", msg: err?.message || "Could not subscribe. Try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative z-30 px-6 lg:px-12 -mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200 p-8 lg:p-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3
              className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Subscribe Newsletter
            </h3>
            <p
              className="lg:text-base text-gray-600 hidden sm:block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Every Tuesday, get practical tips to speak with clarity,
              confidence, and charisma — straight to your inbox.
            </p>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Enter your email."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-5 py-3 border-2 border-gray-300 rounded-xl w-full sm:w-80 focus:border-[#945CAD] focus:ring-2 focus:ring-[#945CAD]/20 outline-none transition-all duration-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={submitting}
              className="px-8 py-3 bg-[#945CAD] hover:bg-[#7d4a94] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {submitting ? "Subscribing..." : "Subscribe"}
            </motion.button>
          </form>
        </div>

        {/* Inline status (no alert boxes) */}
        {status && (
          <p
            className={`mt-4 text-sm ${
              status.type === "ok" ? "text-emerald-600" : "text-rose-600"
            }`}
          >
            {status.msg}
          </p>
        )}
      </motion.div>
    </section>
  );
}

