import { React, useEffect } from "react"
import "./bar.css"

// References for tracking when component is scrolled in/out of view
// https://www.npmjs.com/package/react-in-viewport
// https://github.com/roderickhsiao/react-in-viewport#readme

/**
 * 3D Bar used in 3D BarChart component. Bar has a label and value which the bar goes up to in its 3D container.
 * @param {number} value Value of the bar. Value is displayed on faces of the bar. It is the percentage of how far up the sliding faces will go.
 * @param {string|React.ReactNode} label Label for bar. Can be a string, HTML, or React component.
 * @param {string} color Color of bar.
 * @param {boolean} inViewport True if the bar is currently in view, otherwise false. This is used to animate the bar in/out based on if its in/out of view.
 * @param {React.Ref} forwardedRef Reference which is needed on Bar component in order to track if it is in/out of view.
 * @returns {JSX.Element} Bar React component.
 */
const Bar = ({ value, label, color, inViewport, forwardedRef }) => {

  // Create random id for growing bar tags as there will be multiple bars so we need to make sure
  // we are animating the correct bar
  const id = Math.floor(Math.random() * 9999)
  
  // Animate bar based on if it is scrolled in/out of view everytime it is scolled in/out of view
  useEffect(() => {
    // If bar is scrolled in view
    if (inViewport){
      // Animate bar to its value
      animateBar(value)
    }

    // If bar is scrolled out of view (Or not in view on render)
    else{
      // Reset bar to starting position
      animateBar(0)
    }
  }, [inViewport])

  // Set the bar to its specified color
  useEffect(() => {
    // Get all the growing bars that belong to this bar
    const growingBars = document.getElementsByName(id)

    growingBars.forEach((bar) => {
      // Set the border color and percentage color of perecentage text
      bar.getElementsByTagName("span")[0].classList.add(`${color}-percentage-text`)

      // Set the background color of the growing bar
      bar.classList.add(`${color}-bar`)
    })
  }, [])

  // Function animates growing bars to specified percentage
  function animateBar(percentage) {
    // Get all the growing bars that belong to this bar
    const growingBars = document.getElementsByName(id)

    // Change content for each bar and translate y cordinate accordingly
    growingBars.forEach((bar) => {
      // Set the percentage text shown on the growing bar to percentage
      bar.getElementsByTagName("span")[0].innerText = percentage

      // To get the percentage we want we move the growing bar down 100 - percentage
      bar.style.translate = `0 ${100 - percentage}%`
    })
  }

  return (
    <div className="bar-container" ref={forwardedRef}>
      <div className="bar">
        {/* Only left, right, and top face are visible to the user, however bottom face adds box shadow to make shape more 3d */}
        <div className="left-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar" name={id}>
            <span>{value}</span>
          </div>
        </div>
        <div className="right-face">
          {/* The growing bar is the colored slider which translates up and down the rectangle face */}
          <div className="growing-bar" name={id}>
            <span>{value}</span>
          </div>
        </div>
        <div className="top-face"></div>
        <div className="bottom-face"></div>
      </div>
      <div className="label">{label}</div>
    </div>
  )
}

export default Bar
