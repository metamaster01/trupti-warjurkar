import ContactSection from "@/components/ContactSection";
import { FooterSection } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function page() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white/85">
      <Navigation />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

