import React from 'react'
import "./projectsSection.css"
import { ProjectCard3 } from '../../components'

// renova-ecommerce images
import { 
    renovaHome,
    renovaChart
 } from "./../../assets/images"

const ProjectsSection = () => {
  return (
    <div id='projects-section' className='projects-section' name="section">
        <h1>&#128194; Projects</h1>
        <div>
            <ProjectCard3
                title="Renova Ecommerce Website"
                description="A full stack ecommerce website that directly accepts payments via Stripe API, with a dedicated admin/store dashboard for management of products and order fulfillment."
                images={[renovaHome, renovaChart]}
                languages={["react", "javascript", "mysql", "html", "css"]}
                githubLink="https://github.com/georgesecen/renova-ecommerce"
                >   
            </ProjectCard3>
        </div>
    </div>
  )
}

export default ProjectsSection