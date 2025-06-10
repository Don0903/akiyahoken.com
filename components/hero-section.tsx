import AvatarFlipper from "@/components/avatar-flipper"
import JobTitleSlider from "@/components/job-title-slider"
import AnimatedSection from "@/components/animated-section"

export default function HeroSection() {
  return (
    <AnimatedSection id="hero" className="min-h-screen flex items-center justify-center px-4 snap-start">
      <div className="max-w-4xl mx-auto text-center">
        <AvatarFlipper />
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          I&apos;m <span className="text-primary">Akiya</span>
        </h1>
        <JobTitleSlider />
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
          Welcome to my portfolio! I&apos;m a UX/UI developer with a background in Machine Learning, Cognitive science, and Human-Computer Interaction - with a passion for creating beautiful, functional, and user-centered digital experiences.
        </p>
      </div>
    </AnimatedSection>
  )
}
