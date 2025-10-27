import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection }  from "@/components/aboutus"
// import KeynotesWorkshops from "@/components/keynotes"
import  { TestimonialsSection } from "@/components/testimonial"
import SpeakingReel from "@/components/speakingreel"
import ContactForm from "@/components/contact"
import { GallerySection } from "@/components/gallery"
import { BubbleBackground } from "@/components/ui/BubbleBackground"
import { CoursesSection } from "@/components/keynotes"
import { AchievementSection } from "@/components/achievement-section"
// import { NewsletterSection } from "@/components/newsletter-section"
import { FooterSection } from "@/components/footer"
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white/85" >|

      <BubbleBackground interactive={true}>
        <Navigation />
        <HeroSection />
      </BubbleBackground>
      <AboutSection />
      <CoursesSection/>
      <AchievementSection />
      <TestimonialsSection/>
      <SpeakingReel/>
      <ContactForm/>
      <GallerySection/>
      {/* <NewsletterSection /> */}
      <FooterSection />
    </div>
  )
}
