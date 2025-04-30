import React from 'react'
import "./contactSection.css"

// Get links to CV and socials
const curriculumVitae = require("../../assets/CV/cv.pdf")
const githubLink = "https://github.com/georgesecen"
const linkedinLink = "https://www.linkedin.com/in/george-secen-0084a9351/"
const emailLink = "mailto:george.secen.work@gmail.com"

const ContactSection = () => {
  return (
    <div id='contact-section' className='contact-section' name="section">
      <h2>Let's shake hands <span>&#129309;</span></h2>

      <a href={`${emailLink}`} rel="noreferrer" target="_blank">george.secen.work@gmail.com</a>

      <p>Are you interested in a long term relationship? <a href={`${curriculumVitae}`} download="George Secen Resume">Download my Resume</a></p>

      <div>
        <a href={`${githubLink}`} rel="noreferrer" target="_blank">Github</a>
        <a href={`${linkedinLink}`} rel="noreferrer" target="_blank">Linkedin</a>
      </div>
    </div>
  )
}

export default ContactSection