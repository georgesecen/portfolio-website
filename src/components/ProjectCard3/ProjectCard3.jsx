import { React, useEffect, useRef } from 'react'
import CodeLanguageIcon from '../CodeLanguageIcon/CodeLanguageIcon'
import "./projectCard3.css"

/**
 * Project card displays all details of project to user and directs user to project repository on Github when
 * project card is clicked.
 * @param {string} title Title of project. 
 * @param {string} description Description of project. 
 * @param {Array<string>} images Project images which will be cycled through on project card. All images should be the same aspect ratio for image switch animation to look the best. 
 * @param {Array<string>} languages Languages used in project. This will display language icons on the project card.
 * @param {string} githubLink Link to project repository on Github.
 * @returns {JSX.Element} ProjectCard3 React component.
 */
const ProjectCard3 = ({ title, description, images, languages, githubLink }) => {

    // Create random id for image tag as there will be multiple project cards so we need to make sure
    // we are animating changing the correct project card images
    const id = Math.floor(Math.random() * 9999)
  
    // Keep track of what index we are on in the images array
    let index = useRef(1) // 1 as default image is images[0]
  
    useEffect(() => {
      // Function changes the image to the next image in the images array
      function changeImage() {
        // Get where index is in array as it may be out of bounds
        const i = index.current % images.length

        // Get element which has projects image as background
        const currentImage = document.getElementById(id)

        // Change image source to next image in array
        currentImage.src = images[i]
        index.current++
      }

      // Change image every 5 seconds only if there are multiple images
      if (images.length > 0) {
        setInterval(changeImage, 5000)
      }
  }, [])

  // Function used to toggle custom Github cursor when hovering over project card
  function toggleCustomCursor() {
    const defaultCursor = document.getElementById("default-cursor")
    const customCursor = document.getElementById("custom-cursor")
    defaultCursor.classList.toggle("show")
    customCursor.classList.toggle("show")
  }

  return (
    <a 
      className='project-card3' 
      href={githubLink}
      rel="noreferrer" 
      target="_blank"
      onMouseEnter={toggleCustomCursor} 
      onMouseLeave={toggleCustomCursor}
      >

      {/* Many containers for image in order to keep image centered, give it border radius, and allow it to have max sizes while
      still maintaining aspect ratio. */}
      <div className='image-container3'>
        <div>
          <img id={id} src={images[0]}/>
        </div>
      </div>

      <h4>{title}</h4>
      <p>{description}</p>

      {/* Displaying languages used in project */}
      <div className="project-tech3">
        {languages.map((language, index) => {
          return <CodeLanguageIcon key={index} language={language}></CodeLanguageIcon>
        })}
      </div>
    </a>
  )
}

export default ProjectCard3