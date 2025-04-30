import React from "react"
import { 
  Navbar, 
  MobileNavbar,
  DefaultCursor, 
  CustomCursor, 
 } from "./components"

import { 
  SkillsSection,
  ExperiencesSection,
  IntroductionSection,
  ProjectsSection,
  ContactSection,
  Footer
} from "./sections"

import "./myersReset.css"

function App() {
  return (
    <div>
      <DefaultCursor />
      <CustomCursor />
      <Navbar />
      <MobileNavbar />
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperiencesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
