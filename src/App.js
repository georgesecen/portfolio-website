import React from "react"
import { Navbar, DefaultCursor, CustomCursor, ProjectCard, ProjectCard2, BarChart, ExperienceCard } from "./components"
import CodeLanguageIcon from "./components/CodeLanguageIcon/CodeLanguageIcon"
import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack } from "./assets/images"
import { Test } from "./assets/images"

function App() {
  return (
    <div>
      <ExperienceCard title={"Test title"} description={"Short description/subtitle"} date={"January 2020 - October 2024"}></ExperienceCard>
      <ExperienceCard title={"Test title 2"} description={"Short description/subtitle"} date={"January 2020 - October 2024"}></ExperienceCard>
    </div>
  )
}

export default App
