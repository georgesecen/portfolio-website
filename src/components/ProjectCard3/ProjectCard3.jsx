import { React, useEffect, useRef } from 'react'
import CodeLanguageIcon from '../CodeLanguageIcon/CodeLanguageIcon'
import "./projectCard3.css"

const ProjectCard3 = ({ title, description, images, languages }) => {

    // Create random id for image tag as there will be multiple project cards so we need to make sure
    // we are animating the correct project card image
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

        // Change background image to next image in images array
        currentImage.style.backgroundImage = `url(${images[i]})`
        index.current++
      }

      // Change image every 5 seconds only if there are multiple images
      if (images.length > 0) {
        setInterval(changeImage, 5000)
      }
  }, [])

  return (
    <div className='project-card3'>

      <div className='image-container3'>

        {/* Div is what contains actual image which is displayed to the user */}
        <div id={id} style={{backgroundImage: `url(${images[0]}`}}>

          {/* Image is not actually displayed to the user it is just there to fill up the size of the
          image so the parent backgroundImage can cover it completely */}
          <img src={images[0]}/>
        </div>
      </div>

      <h4>{title}</h4>
      <p>{description}</p>

      {/* Displaying technologies used */}
      <div className="project-tech3">
        {languages.map((language, index) => {
          return <CodeLanguageIcon key={index} language={language}></CodeLanguageIcon>
        })}
      </div>
    </div>
  )
}

export default ProjectCard3