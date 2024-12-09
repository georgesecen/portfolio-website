import React from "react"
import { Navbar, DefaultCursor, CustomCursor, ProjectCard, ProjectCard2, BarChart } from "./components"
import CodeLanguageIcon from "./components/CodeLanguageIcon/CodeLanguageIcon"
import "./myersReset.css"

// For project card
// Note: Images should all be same size for animation to look the best
import { MoneyTrack } from "./assets/images"
import { Test } from "./assets/images"

function App() {
  return (
    <div>
      <BarChart
        series={[
          { value: 43, label: <CodeLanguageIcon language={"java"}></CodeLanguageIcon>, color: "blue" },
          { value: 23, label: <CodeLanguageIcon language={"python"}></CodeLanguageIcon>, color: "green" },
          { value: 93, label: <CodeLanguageIcon language={"react"}></CodeLanguageIcon>, color: "purple" },
          { value: 20, label: <CodeLanguageIcon language={"mysql"}></CodeLanguageIcon>, color: "red" },
          { value: 51, label: <CodeLanguageIcon language={"javascript"}></CodeLanguageIcon>, color: "orange" },
        ]}
      ></BarChart>
    </div>
  )
}

export default App
