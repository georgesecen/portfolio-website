import React from 'react'
import { ExperienceCard } from '../../components'
import "./experiencesSection.css"

/**
 * Experiences section which displays my experiences using ExperienceCard components.
 * @returns {React.JSX.Element} ExperiencesSection React component.
 */
const ExperiencesSection = () => {
  return (
    <div id='experience-section' className='experiences-section' name="section">
        <h1>Experience</h1>
        <div>
            <ExperienceCard 
                title="Computer Science Tutor" 
                description="St.Clair College, Student Services" 
                date="September 2023 - Present" 
                type="Hybrid"
                >
            </ExperienceCard>
            <ExperienceCard 
                title="WinHacks Hackathon" 
                description="University of Windsor" 
                date="Febuary 15 2025 - Febuary 16 2025" 
                type="On Site"
                >
            </ExperienceCard>
            <ExperienceCard 
                title="CiCan Hackathon" 
                description="St.Clair College" 
                date="March 22 2025 - March 23 2025" 
                type="On Site"
                >
            </ExperienceCard>
        </div>
    </div>
  )
}

export default ExperiencesSection