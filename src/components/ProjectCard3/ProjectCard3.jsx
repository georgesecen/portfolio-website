import React from 'react'
import "./projectCard3.css"

const ProjectCard3 = ({ title, description, image }) => {
  return (
    <div className='project-card3'>

      {/* Containers around images so image will maintain aspect ratio but can have rounded corners */}
      <div className='image-container3'>
          <div>
            <img src={image}/>
          </div>
      </div>

      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard3