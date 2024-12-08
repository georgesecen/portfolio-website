import React from "react"
import "./projectCard.css"
import CodeLanguageIcon from "../CodeLanguageIcon/CodeLanguageIcon"

const ProjectCard = ({ title, languages, image, link }) => {
  // Function used to toggling custom cursor when hovering over project card
  function toggleCustomCursor() {
    const defaultCursor = document.getElementById("default-cursor")
    const customCursor = document.getElementById("custom-cursor")
    defaultCursor.classList.toggle("show")
    customCursor.classList.toggle("show")
  }

  return (
    <a onMouseEnter={toggleCustomCursor} onMouseLeave={toggleCustomCursor} href={link} rel="noreferrer" target="_blank" className="project-card">
      <img src={image} alt="" />
      <div className="project-details">
        <h2>{title}</h2>
        <div className="project-tech">
          {languages.map((language, index) => {
            return <CodeLanguageIcon key={index} language={language}></CodeLanguageIcon>
          })}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
