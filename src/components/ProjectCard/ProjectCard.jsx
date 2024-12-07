import React from "react"
import "./projectCard.css"
import CodeLanguageIcon from "../CodeLanguageIcon/CodeLanguageIcon"
import MoneyImage from "../../assets/images/projects/moneyTrackerApp/login.png"

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src={MoneyImage} alt="" />
      <div className="project-details">
        <h2>Money Tracker App</h2>
        <div className="project-tech">
          <CodeLanguageIcon language={"java"}></CodeLanguageIcon>
          <CodeLanguageIcon language={"mysql"}></CodeLanguageIcon>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
