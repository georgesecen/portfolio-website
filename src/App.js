import React from "react"
import { Navbar, DefaultCursor, CustomCursor } from "./components"
import CodeLanguageIcon from "./components/CodeLanguageIcon/CodeLanguageIcon"
import "./myersReset.css"

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
    </div>
  )
}

export default App
