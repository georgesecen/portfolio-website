import React from 'react'
import "./projectsSection.css"
import { ProjectCard3 } from '../../components'

// Test images
import { MoneyTrack, Test } from "./../../assets/images"

const ProjectsSection = () => {
  return (
    <div id='projects-section' className='projects-section' name="section">
        <h1>&#128194; Projects</h1>
        <div>
            <ProjectCard3
                title="Money Tracker App"
                description="Cool app using java to keep track of customers expenses."
                images={[MoneyTrack, Test]}
                languages={["python", "javascript", "react"]}
                githubLink="https://google.com"
                >   
            </ProjectCard3>
            <ProjectCard3
                title="Money Tracker App"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ex, impedit ad quae natus tempore, tenetur aliquam voluptate soluta beatae numquam rerum exercitationem esse provident."
                images={[MoneyTrack, Test]}
                languages={["python", "javascript", "react", "angular", "html", "css"]}
                githubLink="https://google.com"
                >   
            </ProjectCard3>
            <ProjectCard3
                title="Money Tracker App"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                images={[MoneyTrack, Test]}
                languages={["python", "javascript", "react"]}
                githubLink="https://google.com"
                >   
            </ProjectCard3>
            <ProjectCard3
                title="Money Tracker App"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ex, impedit ad quae natus tempore, tenetur aliquam voluptate soluta beatae numquam rerum exercitationem esse provident. Optio doloribus voluptas explicabo aspernatur!"
                images={[MoneyTrack, Test]}
                languages={["python", "javascript", "react"]}
                githubLink="https://google.com"
                >   
            </ProjectCard3>
            <ProjectCard3
                title="Money Tracker App"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, ex, impedit ad quae natus tempore, tenetur aliquam voluptate soluta beatae numquam rerum exercitationem esse provident. Optio doloribus voluptas explicabo aspernatur!"
                images={[MoneyTrack, Test]}
                languages={["python", "javascript", "react"]}
                githubLink="https://google.com"
                >   
            </ProjectCard3>

            
        </div>
    </div>
  )
}

export default ProjectsSection