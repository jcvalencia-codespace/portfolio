"use client"
import { useState, useEffect } from "react"
import TopBar from "./_components/top-bar"
import HeroSection from "./_components/hero-section"
import AboutSection from "./_components/about-section"
import ExperienceSection from "./_components/experience-section"
import SkillsSection from "./_components/skills-section"
import ProjectsSection from "./_components/projects-section"
import ContactSection from "./_components/contact-section"
import AnimatedBackground from "./_components/animated-background"

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Set up intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0
      }
    )

    // Observe all sections
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <AnimatedBackground />
      <TopBar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main
        className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <section id="hero">
          <HeroSection isActive={activeSection === "hero"} />
        </section>
        <section id="about">
          <AboutSection isActive={activeSection === "about"} />
        </section>
        <section id="experience">
          <ExperienceSection isActive={activeSection === "experience"} />
        </section>
        <section id="skills">
          <SkillsSection isActive={activeSection === "skills"} />
        </section>
        <section id="projects">
          <ProjectsSection isActive={activeSection === "projects"} />
        </section>
        <section id="contact">
          <ContactSection isActive={activeSection === "contact"} />
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-10 text-center p-4 bg-gray-900/80 backdrop-blur-sm border-t border-cyan-500/20">
        <p className="text-sm text-gray-400">© 2025 Jairus Valencia. All rights reserved.</p>
      </footer>
    </div>
  )
}
