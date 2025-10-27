// "use client";

// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import Button from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Mail, Phone, Instagram, Youtube, Linkedin } from "lucide-react";
// import { motion } from "framer-motion";

// export default function ContactForm() {
//   return (
//     <motion.div
//       className="min-h-screen bg-white flex flex-col items-center py-10"
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//     >
//       {/* Header */}
//       <div className="w-full max-w-6xl px-6 text-left mb-12">
//         <h1 className="text-4xl font-bold text-[#945CAD] mb-1">
//           Contact
//         </h1>

//         {/* Animated Line */}
//         <motion.div
//           className="h-1 bg-[#945CAD] mb-4 rounded-full"
//           initial={{ width: 0 }}
//           animate={{ width: "80px" }}
//           transition={{ duration: 0.6, ease: "easeInOut" }}
//         ></motion.div>

//         <p className="text-lg text-gray-700 font-medium">
//           Contact Form
//         </p>
//       </div>

//       {/* Main Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
//         {/* Left Form */}
//         <Card className="p-8 shadow-lg rounded-2xl border-0">
//           <CardContent className="p-0">
//             <h2 className="text-2xl font-bold text-black mb-2">Contact Me</h2>
//             <p className="text-gray-500 mb-6">
//               We’d love to hear from you. Please fill out this form.
//             </p>

//             {/* First & Last Name */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//               <div className="flex flex-col">
//                 <label htmlFor="firstName" className="text-sm font-medium text-[#945CAD] mb-1">
//                   First Name
//                 </label>
//                 <Input
//                   id="firstName"
//                   placeholder="First name"
//                   className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
//                 />
//               </div>

//               <div className="flex flex-col">
//                 <label htmlFor="lastName" className="text-sm font-medium text-[#945CAD] mb-1">
//                   Last Name
//                 </label>
//                 <Input
//                   id="lastName"
//                   placeholder="Last name"
//                   className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex flex-col mb-4">
//               <label htmlFor="email" className="text-sm font-medium text-[#945CAD] mb-1">
//                 Email
//               </label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="you@company.com"
//                 className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
//               />
//             </div>

//             {/* Phone */}
//             <div className="flex flex-col mb-4">
//               <label htmlFor="phone" className="text-sm font-medium text-[#945CAD] mb-1">
//                 Phone
//               </label>
//               <Input
//                 id="phone"
//                 type="tel"
//                 placeholder="+91(555) 000-000"
//                 className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
//               />
//             </div>

//             {/* Message */}
//             <div className="flex flex-col mb-4">
//               <label htmlFor="message" className="text-sm font-medium text-[#945CAD] mb-1">
//                 Message
//               </label>
//               <Textarea
//                 id="message"
//                 placeholder="Leave us a message..."
//                 className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
//               />
//             </div>

//             {/* Checkbox */}
//             <div className="flex items-center space-x-2 mb-6">
//               <Checkbox id="policy" className="border-gray-400 text-[#945CAD]" />
//               <label htmlFor="policy" className="text-gray-600 text-sm cursor-pointer">
//                 You agree to our friendly privacy policy.
//               </label>
//             </div>

//             {/* Button */}
//             <Button className="w-full bg-[#945CAD] hover:bg-[#7b479d] text-white rounded-xl py-3 text-md font-semibold">
//               Send Message
//             </Button>
//           </CardContent>
//         </Card>

//         {/* Right Section */}
//         <Card className="p-8 shadow-lg rounded-2xl border-0">
//           <CardContent className="p-0">
//             <h2 className="text-2xl font-bold text-black mb-2">
//               We’d love to hear from you
//             </h2>
//             <p className="text-gray-500 mb-8">
//               Need something cleared up? Here are our most frequently asked questions.
//             </p>

//             {/* Email */}
//             <div className="flex items-center gap-3 mb-5">
//               <div className="bg-[#945CAD]/10 p-3 rounded-xl">
//                 <Mail className="text-[#945CAD]" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Email</p>
//                 <p className="text-[#945CAD] font-medium">trupti.speaks@gmail.com</p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-3 mb-8">
//               <div className="bg-[#945CAD]/10 p-3 rounded-xl">
//                 <Phone className="text-[#945CAD]" />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Phone</p>
//                 <p className="text-[#945CAD] font-medium">+91 93701 25066</p>
//               </div>
//             </div>

//            {/* Social Links */}
// <div className="flex flex-wrap gap-3">
//   <a
//     href="https://www.instagram.com/trupti_warjurkar/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Button
//       variant="outline"
//       className="border-[#945CAD] text-[#945CAD] rounded-full px-4 py-2 flex items-center"
//     >
//       <Instagram className="mr-2 h-4 w-4" />
//       <span>Instagram</span>
//     </Button>
//   </a>

//   <a
//     href="https://www.youtube.com/@TruptiWarjurkar"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Button
//       variant="outline"
//       className="border-[#945CAD] text-[#945CAD] rounded-full px-4 py-2 flex items-center"
//     >
//       <Youtube className="mr-2 h-4 w-4" />
//       <span>Youtube</span>
//     </Button>
//   </a>

//   <a
//     href="https://www.linkedin.com/in/trupti-warjurkar-393917a4/"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Button
//       variant="outline"
//       className="border-[#945CAD] text-[#945CAD] rounded-full px-4 py-2 flex items-center"
//     >
//       <Linkedin className="mr-2 h-4 w-4" />
//       <span>Linkedin</span>
//     </Button>
//   </a>
// </div>

//           </CardContent>
//         </Card>
//       </div>
//     </motion.div>
//   );
// }


"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Instagram, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { createBrowserClient } from "@/lib/supabase";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      first_name: (data.get("firstName") as string)?.trim() || null,
      last_name: (data.get("lastName") as string)?.trim() || null,
      email: (data.get("email") as string)?.trim() || null,
      phone: (data.get("phone") as string)?.trim() || null,
      message: (data.get("message") as string)?.trim() || null,
    };

    try {
      const supabase = createBrowserClient();
      const { error } = await supabase.from("contact-trupti").insert(payload);
      if (error) throw error;

      setStatus({ type: "ok", msg: "Thanks! Your message has been sent." });
      form.reset();
    } catch (err: any) {
      setStatus({
        type: "err",
        msg: err?.message || "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <motion.div
      className="min-h-screen bg-white flex flex-col items-center py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Header */}
      <div className="w-full max-w-6xl px-6 text-left mb-12">
        <h1 className="text-4xl font-bold text-[#945CAD] mb-1">Contact</h1>
        <motion.div
          className="h-1 bg-[#945CAD] mb-4 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
        <p className="text-lg text-gray-700 font-medium">Contact Form</p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-6">
        {/* Left Form */}
        <Card className="p-8 shadow-lg rounded-2xl border-0">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold text-black mb-2">Contact Me</h2>
            <p className="text-gray-500 mb-6">
              We’d love to hear from you. Please fill out this form.
            </p>

            {/* FORM (no design change) */}
            <form onSubmit={onSubmit}>
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium text-[#945CAD] mb-1">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium text-[#945CAD] mb-1">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-sm font-medium text-[#945CAD] mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col mb-4">
                <label htmlFor="phone" className="text-sm font-medium text-[#945CAD] mb-1">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91(555) 000-000"
                  className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-sm font-medium text-[#945CAD] mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Leave us a message..."
                  className="rounded-lg border-gray-300 focus:ring-[#945CAD] focus:border-[#945CAD] placeholder:text-[#945CAD]"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2 mb-6">
                <Checkbox id="policy" className="border-gray-400 text-[#945CAD]" />
                <label htmlFor="policy" className="text-gray-600 text-sm cursor-pointer">
                  You agree to our friendly privacy policy.
                </label>
              </div>

              {/* Button */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#945CAD] hover:bg-[#7b479d] text-white rounded-xl py-3 text-md font-semibold"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>

              {/* Inline status (no alert boxes) */}
              {status && (
                <p
                  className={`mt-3 text-sm ${
                    status.type === "ok" ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {status.msg}
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Right Section (unchanged) */}
        <Card className="p-8 shadow-lg rounded-2xl border-0">
          <CardContent className="p-0">
            <h2 className="text-2xl font-bold text-black mb-2">We’d love to hear from you</h2>
            <p className="text-gray-500 mb-8">
              Need something cleared up? Here are our most frequently asked questions.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#945CAD]/10 p-3 rounded-xl">
                <Mail className="text-[#945CAD]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-[#945CAD] font-medium">trupti.speaks@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-[#945CAD]/10 p-3 rounded-xl">
                <Phone className="text-[#945CAD]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-[#945CAD] font-medium">+91 93701 25066</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <a href="https://www.instagram.com/trupti_warjurkar/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#945CAD] text-[#945CAD] rounded-full px-4 py-2 flex items-center">
                  <Instagram className="mr-2 h-4 w-4" />
                  <span>Instagram</span>
                </Button>
              </a>

              <a href="https://www.youtube.com/@TruptiWarjurkar" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#945CAD] text-[#945CAD] rounded-full px-4 py-2 flex items-center">
                  <Youtube className="mr-2 h-4 w-4" />
                  <span>Youtube</span>
                </Button>
              </a>

              <a href="https://www.linkedin.com/in/trupti-warjurkar-393917a4/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-[#945CAD] text-[#945CAD] rounded-full px-4 py-2 flex items-center">
                  <Linkedin className="mr-2 h-4 w-4" />
                  <span>Linkedin</span>
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
