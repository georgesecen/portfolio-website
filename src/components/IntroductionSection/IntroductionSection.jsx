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
 * @returns {React.JSX.Element} IntroductionSection react component.
 */
const IntroductionSection = () => {
  return (
    <div className='introduction-section-container'>

        {/* Intro text */}
        <section>
            <h4>&#128075; Hello, I'm</h4>
            <h1>George Secen</h1>
            <h4>A <span>Software Developer</span> Based In Canada&#127809;</h4>
        </section>

        {/* All socials links */}
        <div>
            {/* TODO: Make all buttons look better */}
            <a className='cv-button' href={`${curriculumVitae}`} rel="noreferrer" target="_blank">
                <p>Review CV</p>
                <img src={arrowIcon} />
            </a>

            <a className='socials-button email-button' href={emailLink} rel="noreferrer" target="_blank">
                <img src={emailLogo} />
                <p>Email</p>
            </a>

            <a className='socials-button github-button' href={githubLink} rel="noreferrer" target="_blank">
                <img src={githubLogo} />
                <p>Github</p>
            </a>

            <a className='socials-button linkedin-button' href={linkedinLink} rel="noreferrer" target="_blank">
                <img src={linkedinLogo} />
                <p>Linkedin</p>
            </a>
        </div>
    </div>
  )
}

export default IntroductionSection