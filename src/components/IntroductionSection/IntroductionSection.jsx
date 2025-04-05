import React from 'react'
import "./introductionSection.css"

// Get CV pdf
const curriculumVitae = require("../../assets/CV/cv.pdf")

const IntroductionSection = () => {
  return (
    <div className='introduction-section-container'>
        <p>
            <h4>&#128075; Hello, I'm</h4>
            <h1>George Secen</h1>
            <h4>A <span>Software Developer</span> Based In Canada&#127809;</h4>
        </p>

        <div>
            <a href={`${curriculumVitae}`} rel="noreferrer" target="_blank">View CV</a>
        </div>
    </div>
  )
}

export default IntroductionSection