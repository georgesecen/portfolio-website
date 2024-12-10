import React from "react"
import "./experienceCard.css"

const ExperienceCard = ({ title, description, date }) => {
  return (
    <div className="experience-card">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <p>{date}</p>
    </div>
  )
}

export default ExperienceCard
