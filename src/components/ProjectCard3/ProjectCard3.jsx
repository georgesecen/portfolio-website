import React from 'react'
import "./projectCard3.css"

const ProjectCard3 = ({ title, description, image }) => {
  return (
    <div className='project-card3'>
        <img src={image}/>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default ProjectCard3