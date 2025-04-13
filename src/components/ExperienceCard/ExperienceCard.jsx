import React from "react"
import "./experienceCard.css"

/**
 * Experience card which displays basic information regarding a relevant experience.
 * @param {string} title Title of experience. (Job title, Hackathon name etc)
 * @param {string} description Very short description of experience or location if the experience is for a job. Should be max 5 words.
 * @param {string} date Date of experience. (Ex. January 2020 - March 2021)
 * @param {string} type Type of experience. (On Site, Hybrid, Remote)
 * @returns {React.JSX.Element} ExperienceCard React component.
 */
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
