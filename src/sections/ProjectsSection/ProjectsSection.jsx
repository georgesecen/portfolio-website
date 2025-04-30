import React from 'react'
import "./projectsSection.css"
import { ProjectCard3 } from '../../components'

// Project images
import { 
  renovaHome,
  renovaChart,
  moneyLogin,
  moneyStatistics  
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
            <ProjectCard3
                title="Money Tracker App"
                description="A finance dashboard which allows users to track their expenses and earnings also giving valuable insight regarding spending habits and trends."
                images={[moneyLogin, moneyStatistics]}
                languages={["java", "mysql", "html", "css"]}
                githubLink="https://github.com/georgesecen/money-tracker-app"
                >   
            </ProjectCard3>
        </div>
    </div>
  )
}

export default ProjectsSection