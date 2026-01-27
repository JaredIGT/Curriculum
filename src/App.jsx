import { useState } from 'react'
import Navbar from './components/Navbar'
import WelcomeSection from './components/WelcomeSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
