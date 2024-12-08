import React from "react"
import "./projectCard.css"
import CodeLanguageIcon from "../CodeLanguageIcon/CodeLanguageIcon"
import MoneyImage from "../../assets/images/projects/moneyTrackerApp/login.png"

const ProjectCard = () => {
  function toggleCustomCursor() {
    const defaultCursor = document.getElementById("default-cursor")
    const customCursor = document.getElementById("custom-cursor")
    defaultCursor.classList.toggle("show")
    customCursor.classList.toggle("show")
  }

  return (
    <a onMouseEnter={toggleCustomCursor} onMouseLeave={toggleCustomCursor} href="google.com" target="_blank" className="project-card">
      <img src={MoneyImage} alt="" />
      <div className="project-details">
        <h2>Money Tracker App</h2>
        <div className="project-tech">
          <CodeLanguageIcon language={"java"}></CodeLanguageIcon>
          <CodeLanguageIcon language={"mysql"}></CodeLanguageIcon>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
