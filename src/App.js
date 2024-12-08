import React from "react"
import { Navbar, DefaultCursor, CustomCursor, ProjectCard, ProjectCard2 } from "./components"
import CodeLanguageIcon from "./components/CodeLanguageIcon/CodeLanguageIcon"
import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack } from "./assets/images"
import { Test } from "./assets/images"

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <DefaultCursor></DefaultCursor>
      <CustomCursor></CustomCursor>
      <div
        onMouseEnter={() => {
          const g = document.getElementById("default-cursor")
          const c = document.getElementById("custom-cursor")
          g.classList.add("show")
          c.classList.add("show")
        }}
        onMouseLeave={() => {
          const g = document.getElementById("default-cursor")
          const c = document.getElementById("custom-cursor")
          g.classList.remove("show")
          c.classList.remove("show")
        }}
      >
        hover over me
      </div>
      <div style={{ display: "flex", gap: "5px" }}>
        <CodeLanguageIcon language={"react"}></CodeLanguageIcon>
        <CodeLanguageIcon language={"angular"}></CodeLanguageIcon>
        <CodeLanguageIcon language={"java"}></CodeLanguageIcon>
        <CodeLanguageIcon language={"javascript"}></CodeLanguageIcon>
        <CodeLanguageIcon language={"typescript"}></CodeLanguageIcon>
        <CodeLanguageIcon language={"python"}></CodeLanguageIcon>
        <CodeLanguageIcon language={"mysql"}></CodeLanguageIcon>
      </div>
      <ProjectCard title={"Money Tracker App"} languages={["java", "mysql"]} image={MoneyTrack} link={"https://www.google.ca/"}></ProjectCard>
      <ProjectCard2 title={"Money Tracker App"} languages={["java", "mysql"]} images={[MoneyTrack, Test]} link={"https://www.google.ca/"}></ProjectCard2>
    </div>
  )
}

export default App
