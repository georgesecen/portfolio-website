import React from 'react'
import { arrowIcon } from '../../assets/images'
import "./introductionSection.css"

// Logos for socials buttons
import { githubLogo, linkedinLogo, emailLogo } from '../../assets/images'

// Get links to CV and socials
const curriculumVitae = require("../../assets/CV/cv.pdf")
const githubLink = "https://github.com/georgesecen"
const linkedinLink = "https://www.linkedin.com/in/george-secen-0084a9351/"
const emailLink = "mailto:george.secen.work@gmail.com"

/**
 * Introduction section displays hello my name is ... text. It also contains links to my socials so
 * users can contact me and view my work. 
 * @returns {React.JSX.Element} IntroductionSection React component.
 */
const IntroductionSection = () => {
  return (
    <div id='introduction-section' className='introduction-section-container' name="section">

        {/* Intro text */}
        <section>
            <h4>&#128075; Hello, I'm</h4>
            <h1>George Secen</h1>
            <h4>A <span>Software Developer</span> Based In Canada&#127809;</h4>
        </section>

        {/* Container holds all social media buttons */}
        <div className='socials-buttons'>
            <a>Linkden</a>
            <a>Github</a>
            <a>Email</a>
        </div>


        {/* View CV button */}
        {/* https://uiverse.io/adamgiebl/soft-gecko-85 */}
        <a className='cv-button' href={`${curriculumVitae}`} rel="noreferrer" target="_blank">
            <span className="text">View CV</span>
            <span className="blob"></span>
            <span className="blob"></span>
            <span className="blob"></span>
            <span className="blob"></span>
        </a>

       
    </div>
  )
}

export default IntroductionSection