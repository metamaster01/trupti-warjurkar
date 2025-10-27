import AboutHeroSection from "@/components/AboutHeroSection"
import AboutScrollSections from "@/components/AboutScrollSection"
import { AchievementSection } from "@/components/achievement-section"
import ContactForm from "@/components/contact"
import { FooterSection } from "@/components/footer"
import { GallerySection } from "@/components/gallery"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white/85">
        <Navigation />
        <AboutHeroSection />
        <AboutScrollSections />
        <AchievementSection />
        <ContactForm />
        <GallerySection />
        <FooterSection />
    </div>
  )
}