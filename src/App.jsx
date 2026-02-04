import { useState } from 'react'
import Navbar from './components/Navbar'
import LanguageSwitcher from './components/LanguageSwitcher'
import WelcomeSection from './components/WelcomeSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import TestimonialSection from './components/TestimonialSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <LanguageSwitcher />
      <WelcomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
