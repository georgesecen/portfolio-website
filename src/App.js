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
import CodeLanguageIcon from "./components/CodeLanguageIcon/CodeLanguageIcon"
import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack, Test, iPhoneImage } from "./assets/images"

function App() {
  return (
    <div>
      <ProjectCard3
        title="Cool Test App" 
        description="skdjfoisjdfois jdfois jdfoi oidsjfois djfoisj dfois jdfoij  jsodi ois doif jsodi jfoisjd fois jdoifjsoidj foisjd foisj dfoi jsodijf jisdoif jsodif j"
        images={[MoneyTrack, Test]}
        languages={["javascript", "python", "react", "mysql"]}
        >
      </ProjectCard3>
      <ProjectCard3
        title="Cool Test App" 
        description="skdjfoisjdfois jdfois jdfoi jsodi ois doif jsodi jfoisjd fois jdoifjsoidj foisjd foisj dfoi jsodijf jisdoif jsodif j"
        images={[iPhoneImage, MoneyTrack]}
        languages={["javascript", "python", "react", "mysql"]}
        >
      </ProjectCard3>
    </div>
  )
}

export default App
