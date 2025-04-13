import React from 'react'
import { ExperienceCard } from '../../components'
import "./experiencesSection.css"

const ExperiencesSection = () => {
  return (
    <div className='experiences-section'>
        <div>
            <ExperienceCard 
                title="Computer Science Tutor" 
                description="St.Clair College" 
                date="January 1970 - December 2050" 
                type="On Site"
                >
            </ExperienceCard>
            <ExperienceCard 
                title="Computer Science Tutor" 
                description="St.Clair College" 
                date="January 1970 - December 2050" 
                type="On Site"
                >
            </ExperienceCard>
            <ExperienceCard 
                title="Computer Science Tutor" 
                description="St.Clair College" 
                date="January 1970 - December 2050" 
                type="On Site"
                >
            </ExperienceCard>
        </div>
    </div>
  )
}

export default ExperiencesSection