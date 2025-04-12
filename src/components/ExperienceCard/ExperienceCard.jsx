import React from "react"
import "./experienceCard.css"

const ExperienceCard = ({ title, description, date, type }) => {
  return (
    <div className="experience-card">
      <div className="left-side-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="right-side-details">
        <p>{date}</p>
        <p>{type}</p>
      </div>
    </div>
  )
}

export default ExperienceCard
