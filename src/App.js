import React from "react"
import { 
  Navbar, 
  DefaultCursor, 
  CustomCursor, 
  ProjectCard, 
  ProjectCard2, 
  ProjectCard3,
  BarChart, 
  ExperienceCard, 
 } from "./components"

import { SkillsSection, ExperiencesSection, IntroductionSection, ProjectsSection } from "./sections"

import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack, Test, iPhoneImage } from "./assets/images"

function App() {
  return (
    <div>
      <DefaultCursor />
      <CustomCursor />
      <Navbar />
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperiencesSection />
    </div>
  )
}

export default App
