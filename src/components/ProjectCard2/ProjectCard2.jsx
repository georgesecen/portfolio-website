import React, { useEffect, useRef } from "react"
import "./projectCard2.css"
import CodeLanguageIcon from "../CodeLanguageIcon/CodeLanguageIcon"

// Note: Images should all be same size for animation to look the best
const ProjectCard2 = ({ title, languages, images, link }) => {
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

  // Function used to toggling custom cursor when hovering over project card
  function toggleCustomCursor() {
    const defaultCursor = document.getElementById("default-cursor")
    const customCursor = document.getElementById("custom-cursor")
    defaultCursor.classList.toggle("show")
    customCursor.classList.toggle("show")
  }

  return (
    <a onMouseEnter={toggleCustomCursor} onMouseLeave={toggleCustomCursor} href={link} rel="noreferrer" target="_blank" className="project-card2">
      <div className="image-container">
        {/* Image is kind of a dummy image its just used to fill up the size in card for image changer to cover */}
        <img src={images[0]} alt="" />
        {/* Div will keep changing background image */}
        <div className="image-changer" style={{ backgroundImage: `url(${images[0]}` }} id={id}></div>
      </div>
      <h2>{title}</h2>
      <div className="project-tech2">
        {languages.map((language, index) => {
          return <CodeLanguageIcon key={index} language={language}></CodeLanguageIcon>
        })}
      </div>
    </a>
  )
}

export default ProjectCard2
