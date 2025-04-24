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
      <h1>&#128222; Contact</h1>
      <p>Let's shake hands <span>&#129309;</span></p>

      <a href={`${emailLink}`} rel="noreferrer" target="_blank">george.secen.work@gmail.com</a>
    </div>
  )
}

export default ContactSection