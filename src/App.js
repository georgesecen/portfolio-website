import React from "react"
import { Navbar, DefaultCursor, CustomCursor, ProjectCard, ProjectCard2, Bar } from "./components"
import CodeLanguageIcon from "./components/CodeLanguageIcon/CodeLanguageIcon"
import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack } from "./assets/images"
import { Test } from "./assets/images"

function App() {
  return (
    <div>
      <Bar label={"test text"} value={50} color={"blue"}></Bar>
      <Bar label={"test text"} value={35} color={"green"}></Bar>
      <Bar label={"test text"} value={20} color={"purple"}></Bar>
      <Bar label={"test text"} value={20} color={"yellow"}></Bar>
      <Bar label={"test text"} value={20} color={"red"}></Bar>
      <Bar label={"test text"} value={20} color={"orange"}></Bar>
    </div>
  )
}

export default App
