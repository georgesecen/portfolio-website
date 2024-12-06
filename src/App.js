import React from "react"
import { Navbar, DefaultCursor, CustomCursor } from "./components"
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
    </div>
  )
}

export default App
