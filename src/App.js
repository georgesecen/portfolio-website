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
  IntroductionSection
 } from "./components"

import { SkillsSection, ExperiencesSection } from "./sections"

import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack, Test, iPhoneImage } from "./assets/images"

function App() {
  return (
    <div>
      <ExperiencesSection />
    </div>
  )
}

export default App
