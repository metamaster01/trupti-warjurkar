"use client";

import { FooterSection } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function BlogPage() {
  return (
    <div className="overflow-x-hidden min-h-screen bg-white">


        <Navigation />
    <section className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <p
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-[#945CAD]"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Coming Soon
        </p>
      </div>
    </section>
      <FooterSection />
    </div>
  );
}
