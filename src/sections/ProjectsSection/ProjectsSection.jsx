import React from 'react'
import "./projectsSection.css"
import { ProjectCard3 } from '../../components'

// Project images
import { 
  renovaHome,
  renovaChart,
  moneyLogin,
  moneyStatistics,
  easiestGameHome,
  easiestGameLevel1,
  easiestGameLevel2,
  portfolioIntro,
  portfolioSkills,
  portfolioProjects
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
                title="Portfolio Website (This website)"
                description="A website to display my skill set and projects!"
                images={[portfolioIntro, portfolioSkills, portfolioProjects]}
                languages={["react", "javascript", "html", "css"]}
                githubLink="https://github.com/georgesecen/portfolio-website"
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

            <ProjectCard3
                title="The Easiest Game"
                description="A game inspired by The 'Hardest Game' that provides the main functions you'd expect from a game such as leaderboards, shop to spend in game currrency, and multiple game levels."
                images={[easiestGameHome, easiestGameLevel2, easiestGameLevel1]}
                languages={["java", "html", "css"]}
                githubLink="https://github.com/georgesecen/the-easiest-game"
                >   
            </ProjectCard3>

        </div>
    </div>
  )
}

export default ProjectsSection